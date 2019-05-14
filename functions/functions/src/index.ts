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

    admin.database()
    .ref(`/notifications/user001`).push(payload);

    const getDeviceTokensPromise = admin.database()
    .ref(`/fcmTokens/user001`).once('value');

    let tokensSnapshot;
      let tokens: any;
      const results = await Promise.all([getDeviceTokensPromise]);
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
  return true;
});
