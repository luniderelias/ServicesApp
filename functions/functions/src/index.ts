const functions = require('firebase-functions');
const admin = require('firebase-admin');
const app = admin.initializeApp();

exports.onNewOrderReceived = functions.database.ref('/orders/{order_id}')
.onWrite(async (change: any, context: any) => {
  const order: any = change.after.val();
  if (change.before.val() === null) {
    const order_id = context.params.order_id;
    dealWithNotifications(getPayload(order, order_id)).catch(res => {
      // teste
     });
    saveDashboardData(order);
  }
  return true;
});

async function dealWithNotifications(payload:any) {
  saveNotification('/notifications/admin',payload);
  saveNotification('/notifications/store_one',payload);

  sendNotificationToUser(
    admin.database().ref(`/fcmTokens/admin`).once('value'),payload).catch(res => {
      //
    });
  
  
  sendNotificationToUser(
    admin.database().ref(`/fcmTokens/store_one`).once('value'),payload).catch(res => {
      //
    });
}

function getPayload(order: any, order_id: any){
  return {
    'notification': {
      'title': 'Novo Pedido',
      'body': 'Novo Pedido de ' + order.customerDetails.displayName + ' │  Valor R$' + order.total + ' │ Entregar em: ' + order.addresses.street + ', ' + order.addresses.number
      + ' │ Telefone: '+ order.customerDetails.phone + getPaymentTypeText(order),
    },
    'data': {
      'order_id': order_id
    },
  };
}

function getPaymentTypeText(order:any){
  switch(order.payments.PaymentType){
    case 'cash':
      return ' │ Pagamento: À vista, troco para : R$' + order.payments.PaymentChange;
    case 'card':
      return ' │ Pagamento: Cartão';
      default:
      return '';
  }
}

function saveNotification(path:string, payload:any){
  admin.database()
  .ref(path).push(payload);
}

async function sendNotificationToUser(tokensPromise:any,payload:any) {
  let tokensSnapshot;
  let tokens: any;
  const results = await Promise.all([tokensPromise]);
  tokensSnapshot = results[0];

  tokens = tokensSnapshot.val();

const response = await admin.messaging().sendToDevice(tokens, payload);
response.results.forEach((result: any, index: any) => {
  const error = result.error;
  if (error) {
    console.error('Failure sending notification to', tokens[index], error);
  }
});
return true;
}

function saveDashboardData(order:any) {
  saveTotalSales(order);
  saveTotalOrders();
  saveDailyRevenue(order);
  saveDailyOrders(order);
}

function saveTotalSales(order:any){
  admin.database().ref(`/dashboard/totalSales`).once('value').then(function (snap:any) {
      var totalSales = snap.val();
      totalSales += order.total;
      admin.database()
      .ref(`/dashboard`).update({'totalSales': totalSales});
  });
}

function saveTotalOrders(){
  admin.database().ref(`/dashboard/totalOrders`).once('value').then(function (snap:any) {
    var totalOrders = snap.val() + 1;
    admin.database()
    .ref(`/dashboard`).update({'totalOrders':totalOrders});
  });
}

function saveDailyRevenue(order:any){
  admin.database().ref(`/dashboard/dailyRevenue`).once('value').then(function (snap:any) {
    const currentTime = order.timeStamp;
    var dailyRevenue = snap.val();
    const currentDay = Math.floor(currentTime/86400000);
    const lastDay = Math.floor(dailyRevenue.label[dailyRevenue.label.length - 1]/86400000);
    if(currentDay > lastDay){
      dailyRevenue.label.push(currentTime);
      dailyRevenue.series.push(order.total);
      admin.database()
        .ref(`/dashboard`).update({'dailyRevenue':dailyRevenue});
    }else {
      dailyRevenue.label[dailyRevenue.series.length - 1] = currentTime;
      dailyRevenue.series[dailyRevenue.series.length - 1] += order.total;
      admin.database()
        .ref(`/dashboard`).update({'dailyRevenue':dailyRevenue});
    }
  });
}

function saveDailyOrders(order:any){
  admin.database().ref(`/dashboard/dailyOrders`).once('value').then(function (snap:any) {
    const currentTime = order.timeStamp;
    var dailyOrders = snap.val();
    const currentDay = Math.floor(currentTime/86400000);
    const lastDay = Math.floor(dailyOrders.label[dailyOrders.label.length - 1]/86400000);
    if(currentDay > lastDay){
      dailyOrders.label.push(currentTime);
      dailyOrders.series.push(1);
      admin.database()
        .ref(`/dashboard`).update({'dailyOrders':dailyOrders});
    }else {
      dailyOrders.label[dailyOrders.series.length - 1] = currentTime;
      dailyOrders.series[dailyOrders.series.length - 1] += 1;
      admin.database()
        .ref(`/dashboard`).update({'dailyOrders':dailyOrders});
    }
  });
}

