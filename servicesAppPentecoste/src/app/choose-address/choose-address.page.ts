import { Component, OnInit } from '@angular/core';
import { Events } from '@ionic/angular';
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
	
	addressList: any = [];
	
	currentUserAddress: any;
	currentUser: any;
	
	//old variables
	
	buttonText:any;
  disableSubmit: boolean = false;
  
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
  
  paramse:any = {};
  
  
  selectedItem: any;
  extraCartItem: any;
  extraOptions: any;
  icons: string[];
  
  paypalConfigurations: any;
  
  newOrderDetails : any;
  newOrderAddresses : any;
  newOrderItems: any;
  
  deliver_method_image: any;
  

  
  //end here

  constructor(public events: Events,
  public service: ServiceProvider, 
  public values:Values, private payPal: PayPal, 
  private stripe: Stripe,
		private router: Router,
		private route: ActivatedRoute) { 
		
			this.categoryList = [];
		    this.firebasedata = [];
		    this.restaurants = [];
		  
		  
		  
			console.log('data');
			
			this.deliver_method_image = "assets/imgs/delivery.jpg";
		  
		  
			this.form = {}; 
			this.buttonText= "Confirmar Pedido";
    
	
			console.log(firebase.auth().currentUser.uid);
	
			console.log(this.service.cart.line_items);
		
		
		this.currentUser = firebase.auth().currentUser;
		
		console.log(this.currentUser.uid);
		
		this.addressList = [];
		
		this.payments = [];
		
		this.extraCartItem = [];
		this.extraOptions = [];
		
		console.log(this.service.cart.line_items);
		
						this.route.params.subscribe(params => {
			
								console.log(params);
								
								this.cod = params.cod;
																
						});
		  
		  this.service.getCurrentUserAddresses(this.currentUser.uid).on('value', snapshot =>{
			
				this.addressList = [];
				
					snapshot.forEach( snap =>{
						this.addressList.push({
					  
						id: snap.key,
						city: snap.val().city,
						district: snap.val().district,
						street: snap.val().street,
						phone: snap.val().phone,
						complement: snap.val().complement,
						number: snap.val().number
						
						});
					});
							
					console.log(this.addressList);
		});
		
		
		}

  ngOnInit() {
  }
  
   selectAddress(key, address) {
        
		
		console.log(key);
		console.log(address);
		
		console.log(this.cod);
		
		console.log(this.service.cart.line_items);
		
        this.currentUserAddress = address;
 
    }

	
	placeOrder(item){
    this.disableSubmit = true;
    this.buttonText = "Confirmando Pedido";
	
	console.log("inside");
      if(this.values.isLoggedIn){
		  
		  console.log("inside2");

	  this.currentUser = firebase.auth().currentUser;
	  
	   this.service.getRestaurantUserProfile(this.currentUser.uid).on('value', snapshot =>{
         this.userProfiles = snapshot.val();
      });
	  
	  
         console.log(this.userProfiles);
		 
          if(this.currentUserAddress == ''|| this.currentUserAddress == undefined){
				alert("Por favor, selecione um endereço de entrega.");
				console.log(this.userProfiles);
				//this.nav.push(AddressPage,this.userProfiles);
               //this.nav.push(AddressPage, this.userProfiles);
				this.disableSubmit = false; 
        }else{
          if( this.cod == "paypal"){
			      console.log(this.paypalConfigurations.sandbox);
			      console.log(this.paypalConfigurations.production);
			  
                this.payPal.init({
                  PayPalEnvironmentProduction: this.paypalConfigurations.production,
                  PayPalEnvironmentSandbox: this.paypalConfigurations.sandbox
				  //PayPalEnvironmentProduction: "Ab7Hh7a_TmrzJq8Qf-R8ziJZdWJvVN-NLKifFEsUR4g5hClO3buRFcrO59NL-2HMEtBmmUVEeKOkqmRC",
				  //PayPalEnvironmentSandbox: "EJ6nvu7uhIJ5GATfG-rNQmucomyVCOd9NOP5jVPv2V_EdOmJUiizFRXfRaBuIDOiZ0LI03z8-1byrK6b"
				  
                }).then(() => {
                // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
                   this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
                  // Only needed if you get an "Internal Service Error" after PayPal login!
                  //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
                })).then(() => {
                 this.disableSubmit = false;
                 let payment = new PayPalPayment(this.service.total.toString(), this.values.currency, 'Sales of Goods', 'sale');
                    this.payPal.renderSinglePaymentUI(payment).then((success) => {

                        this.paypalPayments =success;
                        // Successfully paid

                        // Example sandbox response
                        //
                        // {
                        //   "client": {
                        //     "environment": "sandbox",
                        //     "product_name": "PayPal iOS SDK",
                        //     "paypal_sdk_version": "2.16.0",
                        //     "platform": "iOS"
                        //   },
                        //   "response_type": "payment",
                        //   "response": {
                        //     "id": "PAY-1AB23456CD789012EF34GHIJ",
                        //     "state": "approved",
                        //     "create_time": "2016-10-03T13:33:33Z",
                        //     "intent": "sale"
                        //   }
                        // }
                        this.payments.paymentType = this.cod;
						//this.currentUserAddress = this.form.currentUserAddress;
						
                        this.payments.id = this.paypalPayments.response.id;
                        this.payments.status = this.paypalPayments.response.state;
                        this.disableSubmit = false;
                        //this.customerDetails = this.userProfiles;
						
						this.smallUserProfiles = [];
					  
					  
					  this.smallUserProfiles.address = this.userProfiles.address;
					  this.smallUserProfiles.displayName = this.userProfiles.displayName;
					  this.smallUserProfiles.email = this.userProfiles.email;
					  this.smallUserProfiles.facebook = this.userProfiles.facebook;
					  this.smallUserProfiles.lastName = this.userProfiles.lastName;
					  this.smallUserProfiles.lat = this.userProfiles.lat;
					  this.smallUserProfiles.lng = this.userProfiles.lng;
					  this.smallUserProfiles.phone = this.userProfiles.phone;
					  this.smallUserProfiles.photoURL = this.userProfiles.photoURL;
					  this.smallUserProfiles.reverseOrder = this.userProfiles.reverseOrder;
					  this.smallUserProfiles.timeStamp = this.userProfiles.timeStamp;
					  this.smallUserProfiles.userTimeStamp = this.userProfiles.userTimeStamp;
						
						
                        //this.functions.showAlert('Success',  'Your order has been placed Successfully');
                        this.service.addOrders( item, this.service.total, this.currentUser.uid, this.payments, this.smallUserProfiles,this.currentUserAddress).then(()=>{
                        //  this.nav.setRoot('OrderList');
                           this.service.cart.line_items = [];
						   this.service.cart.extraOptions = [];						  
                           this.values.qty = null;
                           this.service.proqty = [];
                           this.service.total = 0;
						 //  this.nav.setRoot(MyorderPage);
                         });
                      }, (error) => {
                        // Error or render dialog closed without being successful
                        console.log(error);
                      //  this.functions.showAlert('Error', error.message);
                      });

                      }, (error) => {
                      // Error in configuration
                        console.log(error);
                        //this.functions.showAlert('Error1', error.message);
                      });
                       }, (error) => {
                      console.log(error);
                      // Error in initialization, maybe PayPal isn't supported or something else
                    //  this.functions.showAlert('Error2', error);
                      this.disableSubmit = false;
                  });
              }


              else if( this.cod == "stripe"){
                  this.service.getUserProfile(this.currentUser.uid).on('value', snapshot =>{
                        this.userProfiles = snapshot.val();
                  });

                  if(this.currentUserAddress != undefined && this.userProfiles.address != undefined && this.userProfiles.phone != undefined){

                    //this.stripe.setPublishableKey(this.setting.publish_key);

				this.stripe.setPublishableKey(publishableKey);
				
				alert(this.form.stripe_number);
                    let card = {
                     number: this.form.stripe_number,
                     expMonth: this.form.stripe_exp_month,
                     expYear: this.form.stripe_exp_year,
                     cvc: this.form.stripe_code
                    };

                    this.stripe.createCardToken(card)
                      .then((token) =>{
                          console.log(token);
                          this.getToken = token;
						  
						  alert("token:"+token.id);

                          if(this.getToken){
                              alert("this.gettoken:"+this.getToken.id); //this.service.chargeStripe(this.getToken, this.values.currency, this.service.total, this.setting.secret_kay)
					 /***							 this.service.chargeStripe(this.getToken, this.values.currency,Math.round(this.service.total).toFixed(),stripe_secret_key)
                                .then((result) => {
									this.getPayments = result;
									alert("result" + result);
									}, error => {
                                    alert("stripe"+error);
                                }).catch((error) =>{
                          
                          alert('Errorsivw'+ error);
                          
                          console.error(error)}); 
						  
						  */
								

                          }

                            this.payments.paymentType = this.cod;
							console.log(this.getPayments);
					//		alert("getpaymetn"+this.getPayments);
						//	alert("id"+this.getPayments.id);
						//	alert("status:"+this.getPayments.status);
						//	alert("amount:"+this.getPayments.amount);
                        //    this.payments.id = this.getPayments.id;
                        //    this.payments.status = this.getPayments.status;
                        //    this.payments.amount = this.getPayments.amount;
							
						//	this.currentUserAddress = this.form.currentUserAddress;
						
						this.smallUserProfiles = [];
					  
					  
					  this.smallUserProfiles.address = this.userProfiles.address;
					  this.smallUserProfiles.displayName = this.userProfiles.displayName;
					  this.smallUserProfiles.email = this.userProfiles.email;
					  this.smallUserProfiles.facebook = this.userProfiles.facebook;
					  this.smallUserProfiles.lastName = this.userProfiles.lastName;
					  this.smallUserProfiles.lat = this.userProfiles.lat;
					  this.smallUserProfiles.lng = this.userProfiles.lng;
					  this.smallUserProfiles.phone = this.userProfiles.phone;
					  this.smallUserProfiles.photoURL = this.userProfiles.photoURL;
					  this.smallUserProfiles.reverseOrder = this.userProfiles.reverseOrder;
					  this.smallUserProfiles.timeStamp = this.userProfiles.timeStamp;
					  this.smallUserProfiles.userTimeStamp = this.userProfiles.userTimeStamp;
						

                            this.disableSubmit = false;
                        //    this.functions.showAlert('Success',  'Your order has been placed Successfully');
						alert("Sucesso");
                            this.service.addOrders( item, this.service.total, this.currentUser.uid, this.payments, this.smallUserProfiles,this.currentUserAddress).then(()=>{
                             //  this.nav.setRoot('OrderList');
                               this.service.cart.line_items = []; 
							    this.service.cart.extraOptions = [];
                               this.values.qty = null;
                               this.service.proqty = [];
                               this.service.total = 0;
							  // this.nav.setRoot(MyorderPage)
                            });
                      })
                      .catch((error) =>{
                          this.disableSubmit = false;
                        //  this.functions.showAlert('Errors', error);
                          this.disableSubmit = false;
                          console.error(error)})
                      .catch((error) =>{
                        //  this.functions.showAlert('Error1', error);
                          this.disableSubmit = false;
                      }); 
                  }
              }

             else if (this.cod == "cod" || this.cod == "bank" || this.cod == "cart") {

                  this.service.getUserProfile(this.currentUser.uid).on('value', snapshot =>{
                      this.userProfiles = snapshot.val();
                  });
                  
                  if(this.currentUserAddress != undefined && this.userProfiles.address != undefined && this.userProfiles.phone != undefined){
                      this.payments.PaymentType = this.cod;
					  //this.currentUserAddress = this.form.currentUserAddress;
					  console.log(this.form.currentUserAddress);
					  console.log(this.currentUserAddress);
					  
					  
					  this.smallUserProfiles = [];
					  
					  
					  this.smallUserProfiles.address = this.userProfiles.address;
					  this.smallUserProfiles.displayName = this.userProfiles.displayName;
					  this.smallUserProfiles.email = this.userProfiles.email;
					  this.smallUserProfiles.facebook = this.userProfiles.facebook;
					  this.smallUserProfiles.lastName = this.userProfiles.lastName;
					 
					 if(this.userProfiles.lat){
							this.smallUserProfiles.lat = this.userProfiles.lat;
					  }
					  
					  if(this.userProfiles.lng){
							this.smallUserProfiles.lng = this.userProfiles.lng;
					  }
					  this.smallUserProfiles.phone = this.userProfiles.phone;
					  
					if(this.userProfiles.photoURL){
							this.smallUserProfiles.photoURL = this.userProfiles.photoURL;
					}
					if(this.userProfiles.reverseOrder){
							this.smallUserProfiles.reverseOrder = this.userProfiles.reverseOrder;
					}
					if(this.userProfiles.timeStamp){
							this.smallUserProfiles.timeStamp = this.userProfiles.timeStamp;
					}
					if(this.userProfiles.userTimeStamp){
							this.smallUserProfiles.userTimeStamp = this.userProfiles.userTimeStamp;
					}
					  
					  
                     // this.functions.showAlert('Success',  'Your order has been placed Successfully');
					  
					  alert("Pedido Realizado com Sucesso!");
					  /***
                      this.service.addOrders( item, this.service.total, this.currentUser.uid, this.payments, this.smallUserProfiles,this.currentUserAddress).then(()=>{
                        // this.nav.setRoot('OrderList');     
                           this.service.cart.line_items = []; 
						   this.service.cart.extraOptions = [];
                           this.disableSubmit = false;
                           this.values.qty = null;
                           this.service.proqty = []; 
                           this.service.total = 0;
						   this.nav.setRoot(MyorderPage);						   
                      });     
					  */


					this.service.addOrders( item, this.service.total, this.currentUser.uid, this.payments, this.smallUserProfiles,this.currentUserAddress).then( newOrder =>{
                        // this.nav.setRoot('OrderList');     
                           this.service.cart.line_items = []; 
						   this.service.cart.extraOptions = [];
                           this.disableSubmit = false;
                           this.values.qty = null;
                           this.service.proqty = []; 
                           this.service.total = 0;
						   
						   console.log(newOrder);
						   
						   this.service.addIdToOrder(newOrder.key);
						   
						   this.addOrderToRestaurant(newOrder.key);
						   
						   					   
                      }); 	

					  
                  }
              }
          } 
      }  
  

      else{
      //  this.nav.parent.select(2);
          this.disableSubmit = false;
      }
  }
  
  
  addOrderToRestaurant(id){
	  
	  console.log(id);
	  
	  	this.service.getOrderDetail(id).on('value', (snapshot) => {
	
		  
		  this.newOrderDetails = snapshot.val();
		  this.newOrderAddresses = snapshot.val().addresses;
		  this.newOrderItems = snapshot.val().items;
		  
		  
		  
		  console.log(this.newOrderItems);
		  
		  this.newOrderItems.forEach( snap => {
			   console.log(snap);
			  
			   this.service.addNewOrdersToEachRestaurantExtra(id,snap.restaurantId,snap.restaurantName,
			   snap,snap.image,snap.name,snap.price,snap.product_id,snap.quantity,snap.restaurantId,snap.restaurantName,this.newOrderDetails);
			   
			  
			   
			   this.service.categorizedRestaurantOrder(id,snap.restaurantId,snap.owner_id);
			   
			   this.router.navigateByUrl('orders');
			
			
      	 	 
    	  });
		  
		
		});
	  
	  
	  
  }
	
	
}
