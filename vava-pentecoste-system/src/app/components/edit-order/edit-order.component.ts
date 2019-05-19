import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { BookInterface } from '../../models/book';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserInterface } from '../../models/user';
import { ViewChild, ElementRef, Input } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router} from '@angular/router';

import { RestaurantInterface } from '../../models/restaurant'; 
import { CategoryInterface } from '../../models/category'; 
import { OrderInterface } from '../../models/order'; 

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {
	
	restaurants: any;
	restaurant2: any;
	
	id: any;
	
	restaurant: any;
	imageUrl: any;
	categories: any;
	
	order_id: any;
	order_details: any;
	status: any;
	checked: any;
	
	private RestaurantInterface: RestaurantInterface[];
  private CategoryInterface: CategoryInterface[];
  private OrderInterface: OrderInterface[];
  
  
  cat_id: any;
  category_details: any;

	user_details: any;

  constructor(private firebaseService: FirebaseService, private authService: AuthService ,
  private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
	  
	  	this.id = this.route.snapshot.params['id'];
			
			console.log(this.id);
		
			
			this.firebaseService.getOrderDetail(this.id).on('value', (snapshot) => {
		  this.order_details = snapshot.val();
		  
		  console.log(this.order_details);
		});
	  
  }
  
  
   onStatusOrderSubmit() {
	  
	   let order_details = {
		  status : this.status,
		  checked : ""
		  
	  }
	  
	  this.firebaseService.updateRestaurantOrderStatus(this.id, order_details);
	  
	  this.router.navigate(['/pedidos/detalhes/' + this.id]);
	  
  }

}
