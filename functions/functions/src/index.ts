const functions = require('firebase-functions');
const admin = require('firebase-admin');
const app = admin.initializeApp();

exports.newOrderNotification = functions.database.ref('/orders/{order_id}')
.onWrite(async (change: any, context: any) => {
  const order: any = change.after.val();
  if (change.before.val() === null) {
    const order_id = context.params.order_id;
    const payload = {
      'notification': {
        'title': 'Novo Pedido',
        'body': 'Novo Pedido de ' + order.customerDetails.displayName + ' no valor de R$ ' + order.total + ' para entrega em ' + order.customerDetails.address
        + '│ Telefone: '+ order.customerDetails.phone + '│ Pagamento: ' + order.payments.PaymentType,
      },
      'data': {
        'order_id': order_id
      },
    };

    saveNotification('/notifications/admin',payload);
    saveNotification('/notifications/store_one',payload);


    sendNotificationToUser(
      admin.database().ref(`/fcmTokens/admin`).once('value'),payload);
    
    
    sendNotificationToUser(
      admin.database().ref(`/fcmTokens/store_one`).once('value'),payload);
}
  return true;
});

async function saveNotification(path:string, payload:any){
  admin.database()
  .ref(path).push(payload);
}

async function sendNotificationToUser(tokensPromise:any,payload:any){
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
}

