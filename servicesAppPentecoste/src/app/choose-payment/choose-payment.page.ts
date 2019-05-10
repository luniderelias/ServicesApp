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




@Component({
  selector: 'app-choose-payment',
  templateUrl: './choose-payment.page.html',
  styleUrls: ['./choose-payment.page.scss'],
})
export class ChoosePaymentPage implements OnInit {

  	public signupForm;
	zeroPrice: any;
	form: any;
	payment_method: any;
	cod: any;
	
	payment_method_image: any;
	
	

  constructor(public events: Events,
  public service: ServiceProvider, 
  public values:Values, private payPal: PayPal, 
  private stripe: Stripe,
		private router: Router,
		private route: ActivatedRoute) { 
		
		
					this.payment_method_image = "assets/imgs/payment.png";
		
		}

  ngOnInit() {
  }
  
   radioChecked(val){
	  this.cod = val;
	  //console.log(val);
	  
	  console.log(this.cod);
  }

}
