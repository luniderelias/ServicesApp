import { Component, OnInit } from '@angular/core';
import { Events, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Values } from '../../providers/values';
import { ServiceProvider } from '../../providers/service';
import * as firebase from 'firebase';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
import { Stripe } from '@ionic-native/stripe/ngx';
import { Router } from '@angular/router';

import { ActivatedRoute } from '@angular/router';

const publishableKey = 'pk_test_sBkfyPHddnLGw7wljFrvZicW';
const stripe_secret_key = 'sk_test_mirrQ5hTnI8Ggpr6nsHiAY93';

@Component({
  selector: 'app-choose-address',
  templateUrl: './choose-address.page.html',
  styleUrls: ['./choose-address.page.scss'],
})
export class ChooseAddressPage implements OnInit {

  public signupForm;
  zeroPrice: any;
  form: any;
  payment_method: any;
  cod: any;
  paymentChange: any;
  finalPrice: any;

  addressList: any = [];

  currentUserAddress: any;
  currentUser: any;

  disableSubmit = false;

  paypalPayments: any;

  getToken: any;
  getError: any;
  getPayments: any;
  setting: any;
  payments: any;

  userProfiles: any;
  smallUserProfiles: any;


  categoryList: any;
  bannerList: any;
  firebasedata: any;
  restaurants: any;
  public categoryId: any;
  orderDetails: any = {};

  paramse: any = {};


  selectedItem: any;
  extraCartItem: any;
  extraOptions: any;
  icons: string[];

  paypalConfigurations: any;

  newOrderDetails: any;
  newOrderAddresses: any;
  newOrderItems: any;

  deliver_method_image: any;
  loading = false;

  constructor(public events: Events,
              public service: ServiceProvider,
              public values: Values,
              private payPal: PayPal,
              private stripe: Stripe,
              private router: Router,
		          public alertCtrl: AlertController,
              private route: ActivatedRoute) {

    this.categoryList = [];
    this.firebasedata = [];
    this.restaurants = [];

    this.deliver_method_image = 'assets/imgs/delivery.jpg';

    this.form = {};

    this.currentUser = firebase.auth().currentUser;

    this.addressList = [];

    this.payments = [];

    this.extraCartItem = [];
    this.extraOptions = [];

    this.route.params.subscribe(params => {
      this.cod = params.cod;
    });

    this.service.getCurrentUserAddresses(this.currentUser.uid).on('value', snapshot => {

      this.addressList = [];

      snapshot.forEach(snap => {
        this.addressList.push({
          id: snap.key,
          city: snap.val().city,
          fare: snap.val().fare,
          district: snap.val().district,
          street: snap.val().street,
          phone: snap.val().phone,
          complement: snap.val().complement,
          number: snap.val().number

        });
      });

    });
  }

  ngOnInit() {
  }

  selectAddress(key, address) {
    this.currentUserAddress = address;
  }

  checkAddressNotNull(item) {
    if (this.currentUserAddress === '' || this.currentUserAddress === undefined) {
      this.presentAlert('', 'Por favor, selecione um endereço de entrega.');
    } else {
      this.checkIfPhone(item);
    }
  }

  placeOrder(item) {
    if (this.values.isLoggedIn) {
      this.currentUser = firebase.auth().currentUser;
      if (this.cod === 'cash' || this.cod === 'debit' || this.cod === 'credit') {
        if (this.cod === 'cash') {
          this.finalPrice = this.formatMoney(this.service.total - (0.1 * this.service.total)
            + this.currentUserAddress.fare);
          this.presentNeedsChange(item);
        } else if (this.cod === 'credit') {
          this.finalPrice = this.formatMoney(this.service.total + this.currentUserAddress.fare);
          this.presentConfirmAlert(item, 'Total a pagar com Frete: R$' + this.finalPrice);
        } else if (this.cod === 'debit') {
          this.finalPrice = this.formatMoney(this.service.total - (0.1 * this.service.total) + this.currentUserAddress.fare);
          this.presentConfirmAlert(item, 'Total a pagar com Frete e Desconto: R$' + (this.finalPrice));
        }
    }
    } else {
      this.presentAlert('Usuário não autenticado!', 'Por favor, faça login e tente novamente!');
    }
  }

  checkIfPhone(item) {
    this.service.getUserProfile(this.currentUser.uid).on('value', snapshot => {
      this.userProfiles = snapshot.val();
      if (this.currentUserAddress !== undefined && this.userProfiles.address !== undefined) {
        this.placeOrder(item);
      } else {
        this.presentAlert('Dados Inválidos!', 'Por favor, efetue novamente seu pedido.');
      }
    });
  }

  continueSendingOrder(item) {
    this.loading = true;
    this.payments.PaymentType = this.cod;
    this.payments.PaymentChange = this.paymentChange;
    this.smallUserProfiles = [];
    this.smallUserProfiles.address = this.userProfiles.address;
    this.smallUserProfiles.displayName = this.userProfiles.displayName;
    this.smallUserProfiles.email = this.userProfiles.email;
    this.smallUserProfiles.facebook = this.userProfiles.facebook;
    this.smallUserProfiles.lastName = this.userProfiles.lastName;
    if (this.userProfiles.lat) {
      this.smallUserProfiles.lat = this.userProfiles.lat;
    }

    if (this.userProfiles.lng) {
      this.smallUserProfiles.lng = this.userProfiles.lng;
    }
    this.smallUserProfiles.phone = this.userProfiles.phone;

    if (this.userProfiles.photoURL) {
      this.smallUserProfiles.photoURL = this.userProfiles.photoURL;
    }
    if (this.userProfiles.reverseOrder) {
      this.smallUserProfiles.reverseOrder = this.userProfiles.reverseOrder;
    }
    if (this.userProfiles.timeStamp) {
     this.smallUserProfiles.timeStamp = this.userProfiles.timeStamp;
    }
    if (this.userProfiles.userTimeStamp) {
      this.smallUserProfiles.userTimeStamp = this.userProfiles.userTimeStamp;
    }

    if (this.payments.PaymentType === 'cash') {
      this.service.total -= 0.1 * this.service.total; // Discount
    }

    if (this.payments.PaymentType === 'debit') {
      this.service.total -= 0.1 * this.service.total; // Discount
    }

    this.service.total += this.currentUserAddress.fare; // Fare


    this.service.addOrders(item, this.service.total, this.currentUser.uid, this.payments,
    this.smallUserProfiles, this.currentUserAddress).then(newOrder => {
    // this.nav.setRoot('OrderList');
    this.service.cart.line_items = [];
    this.service.cart.extraOptions = [];
    this.disableSubmit = false;
    this.values.qty = null;
    this.service.proqty = [];
    this.service.total = 0;

    this.service.addIdToOrder(newOrder.key);

    this.addOrderToRestaurant(newOrder.key);
  });
  }

addOrderToRestaurant(id) {

    this.service.getOrderDetail(id).on('value', (snapshot) => {
      this.newOrderDetails = snapshot.val();
      this.newOrderAddresses = snapshot.val().addresses;
      this.newOrderItems = snapshot.val().items;

      this.newOrderItems.forEach(snap => {
        this.service.addNewOrdersToEachRestaurantExtra(id, snap.restaurantId, this.newOrderDetails);

        this.service.categorizedRestaurantOrder(id, snap.restaurantId);

        this.loading = false;
        this.router.navigateByUrl('orders');
      });
    });
  }

  async presentAlert(title, msg) {
		const alert = await this.alertCtrl.create({
			header: title,
			message: msg,
			buttons: ['OK']
		});
		await alert.present();
  }
  
async presentNeedsChange(item) {
		const alert = await this.alertCtrl.create({
      header: 'Necessita de Troco para quanto?',
      subHeader: this.getStoreClosedString(),
      message: 'Total a pagar com Frete e Desconto: R$' + this.finalPrice,
			inputs: [
				{
				  name: 'change',
				  type: 'text',
				  placeholder: 'Insira o valor'
        },
      ],
			buttons: [{
				text: 'Sim',
				handler: (res) => {
          this.paymentChange = res.change;
          this.continueSendingOrder(item);
        }
			}]
		});
		await alert.present();
	}
async presentNeedsPhone(item) {
		const alert = await this.alertCtrl.create({
      header: 'Contato',
			message: 'Por favor, insira um telefone para contato',
			inputs: [
				{
				  name: 'phone',
				  type: 'text',
				  placeholder: '(85) 9 8888-8888'
        },
      ],
			buttons: [{
				text: 'Sim',
				handler: (res) => {
          this.userProfiles.phone = res.phone;
          this.placeOrder(item);
        }
			}]
		});
		await alert.present();
  }
  
  

	async presentConfirmAlert(item, msg) {
		const alert = await this.alertCtrl.create({
      header: 'Deseja confirmar esta ação?',
      subHeader: this.getStoreClosedString(),
      message: msg,
			buttons: [{
				text: 'Sim',
				handler: () => {
          this.paymentChange = 0;
					this.continueSendingOrder(item);
				}
			}]
		});
		await alert.present();
  }
  

  getStoreClosedString() {
    const date = new Date(Date.now());
    switch (date.getDay()) {
      case 0:
      return 'Loja Fechada: seu pedido será processado quando a loja abrir';
      default:
      return date.getHours() >= 18 || date.getHours() <= 7 ? 'Loja Fechada: seu pedido será processado quando a loja abrir' : '';
    }
  }

  
	formatMoney(n) {
    if (n) {
      const num = parseFloat(n);
      return num.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, '$1.');
    } else {
      return;
    }
	}
}
