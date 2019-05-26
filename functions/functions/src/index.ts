const functions = require('firebase-functions');
const admin = require('firebase-admin');
const app = admin.initializeApp();

exports.onOrderStatusChange = functions.database.ref('/orders/{order_id}')
.onWrite(async (change: any, context: any) => {
  const order: any = change.after.val();
  if (change.before.val().status !== null) {
    const order_id = context.params.order_id;
    const status = order.status;
    if(status !== 'Pendente'){
    sendNotificationToUser(
      admin.database().ref(`/devices/` + order.uid).once('value'),
      getStatusChangePayload(order_id, getStatusString(status))).catch(res => {
        // teste
       });
    }
  }

  if(order.status === 'Finalizado') {
    saveTotalFinishedSales(order);
    saveTotalFinishedOrders();
  }

  if(order.status === 'Cancelado Pela Loja') {
    retrieveStock(order);
  }
  return true;
});

function getStatusChangePayload(order_id: any, status: string){
  return {
    'notification': {
      'title': 'Pedido Atualizado',
      'body': 'Seu pedido ' + status,
    },
    'data': {
      'order_id': order_id
    },
  };
}

function getStatusString(status:string){
  switch(status){
    case 'Pendente':
      return 'está aguardando confirmação';
    case 'Em Andamento':
      return 'foi confirmado';
    case 'Saiu para Entrega':
      return 'saiu para entrega';
    case 'Finalizado':
        return 'foi finalizado';
    case 'Cancelado Pela Loja':
        return 'foi cancelado pela loja, entre em contato para mais informações';
    default:
      return 'está aguardando confirmação';
  }
}

exports.onNewOrderReceived = functions.database.ref('/orders/{order_id}')
.onWrite(async (change: any, context: any) => {
  const order: any = change.after.val();
  if (change.before.val() === null) {
    const order_id = context.params.order_id;
    dealWithNotifications(getNewOrderPayload(order, order_id)).catch(res => {
      // teste
     });
     
    saveStock(order);

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

function getNewOrderPayload(order: any, order_id: any){
  return {
    'notification': {
      'title': 'Novo Pedido',
      'body': 'Novo Pedido de ' + order.customerDetails.displayName + ' │  Valor R$' + formatMoney(order.total) + ' │ Entregar em: ' + order.addresses.street + ', ' + order.addresses.number
      + ' │ Telefone: '+ order.addresses.phone + getPaymentTypeText(order),
    },
    'data': {
      'order_id': order_id
    },
  };
}

function getPaymentTypeText(order:any){
  switch(order.payments.PaymentType){
    case 'cash':
      return ' │ Pagamento: À vista, troco para : R$' + formatMoney(order.payments.PaymentChange);
    case 'credit':
      return ' │ Pagamento: Cartão Crédito';
    case 'debit':
      return ' │ Pagamento: Cartão Débito';
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
      const totalSales = snap.val() + order.total;
      admin.database()
      .ref(`/dashboard`).update({'totalSales': totalSales});
  });
}

function saveTotalOrders(){
  admin.database().ref(`/dashboard/totalOrders`).once('value').then(function (snap:any) {
    const totalOrders = snap.val() + 1;
    admin.database()
    .ref(`/dashboard`).update({'totalOrders':totalOrders});
  });
}

function saveDailyRevenue(order:any){
  admin.database().ref(`/dashboard/dailyRevenue`).once('value').then(function (snap:any) {
    const currentTime = order.timeStamp;
    const dailyRevenue = snap.val();
    const currentDay = Math.floor(currentTime/86400000);
    const lastDay = Math.floor(dailyRevenue.labels[dailyRevenue.labels.length - 1]/86400000);
    if(currentDay > lastDay){
      dailyRevenue.labels.push(currentTime);
      dailyRevenue.series.push(order.total);
      admin.database()
        .ref(`/dashboard`).update({'dailyRevenue':dailyRevenue});
    }else {
      dailyRevenue.labels[dailyRevenue.series.length - 1] = currentTime;
      dailyRevenue.series[dailyRevenue.series.length - 1] += order.total;
      admin.database()
        .ref(`/dashboard`).update({'dailyRevenue':dailyRevenue});
    }
  });
}

function saveDailyOrders(order:any){
  admin.database().ref(`/dashboard/dailyOrders`).once('value').then(function (snap:any) {
    const currentTime = order.timeStamp;
    const dailyOrders = snap.val();
    const currentDay = Math.floor(currentTime/86400000);
    const lastDay = Math.floor(dailyOrders.labels[dailyOrders.labels.length - 1]/86400000);
    if(currentDay > lastDay){
      dailyOrders.labels.push(currentTime);
      dailyOrders.series.push(1);
      admin.database()
        .ref(`/dashboard`).update({'dailyOrders':dailyOrders});
    }else {
      dailyOrders.labels[dailyOrders.series.length - 1] = currentTime;
      dailyOrders.series[dailyOrders.series.length - 1] += 1;
      admin.database()
        .ref(`/dashboard`).update({'dailyOrders':dailyOrders});
    }
  });
}

  
function saveTotalFinishedSales(order:any){
admin.database().ref(`/dashboard/finishedSales`).once('value').then(function (snap:any) {
    const finishedSales = snap.val() + order.total;
    admin.database()
    .ref(`/dashboard`).update({'finishedSales': finishedSales});
});
}

function saveTotalFinishedOrders(){
  admin.database().ref(`/dashboard/finishedOrders`).once('value').then(function (snap:any) {
    const finishedOrders = snap.val() + 1;
    admin.database()
    .ref(`/dashboard`).update({'finishedOrders':finishedOrders});
  });
}

function saveStock(order:any){
  order.items.forEach((item:any) => {
    admin.database().ref(`/items`).child(item.product_id).once('value').then(function (snap:any) {
    let stockLeft = snap.val().stock - item.quantity;
    if(stockLeft <= 0){
      stockLeft = 0;
      saveNotification('/notifications/admin', getNoStockPayload(item));
      sendNotificationToUser(admin.database().ref(`/fcmTokens/admin`).once('value'),getNoStockPayload(item)).catch(res => {
        //return;
      });
    } else if(stockLeft < 5){
      saveNotification('/notifications/admin', getLowStockPayload(item, stockLeft));
      sendNotificationToUser(admin.database().ref(`/fcmTokens/admin`).once('value'),getLowStockPayload(item, stockLeft)).catch(res => {
        //return;
      });
    }
    admin.database().ref(`/items`).child(item.product_id).update({'stock': stockLeft});
    });
  });
}

function retrieveStock(order:any){
  order.items.forEach((item:any) => {
    admin.database().ref(`/items`).child(item.product_id).once('value').then(function (snap:any) {
      const newStock = snap.val().stock + item.quantity;
      admin.database().ref(`/items`).child(item.product_id).update({'stock': newStock});
    });
  });
}

function getLowStockPayload(item:any, stockLeft:any){
  return {
    'notification': {
      'title': 'Produto com estoque baixo',
      'body': 'Restam apenas ' + stockLeft + ' un. do Produto ' + item.cod + ', ' + item.name,
    },
    'data': {
      'product_id': item.product_id
    },
  };
}

function getNoStockPayload(item:any){
  return {
    'notification': {
      'title': 'Produto Esgotado!',
      'body': 'O Estoque do Produto ' + item.cod + ', ' + item.name + ' acabou.',
    },
    'data': {
      'product_id': item.product_id
    },
  };
}

function formatMoney(n:any) {
  return n.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, '$1.');
}





