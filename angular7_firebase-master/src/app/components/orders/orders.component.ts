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

import { OrderInterface } from '../../models/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
	
	orders : any;

  constructor(private firebaseService:FirebaseService, private authService: AuthService , private router: Router) { }

  ngOnInit() {
	  
	  this.firebaseService.getOrders().snapshotChanges().subscribe(orders => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.orders = [];
      
	  orders.forEach(item => {
		  
		  console.log(item);
		  
	
		 let a = item.payload.toJSON(); 
        a['$key'] = item.key;
		
		console.log(a);
		
        this.orders.push(a as OrderInterface);
		
		
        
      })
    });
	
	console.log(this.orders);
	  
  }

}
