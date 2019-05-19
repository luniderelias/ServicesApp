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
import { CityInterface } from '../../models/city'; 
import { OrderInterface } from '../../models/order'; 
import { DistrictInterface } from '../../models/district'; 
import { BuildingInterface } from '../../models/building'; 
import { StreetInterface } from '../../models/street'; 

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-street',
  templateUrl: './edit-street.component.html',
  styleUrls: ['./edit-street.component.css']
})
export class EditStreetComponent implements OnInit {

  
	id: any;
	name : any;
	category: any;
	description: any;
	available: any;
	price: any;
	stock:any;
	image:any;
	streetName: any;
	restaurant: any;

   constructor(private dataApi: DataApiService,
  private firebaseService:FirebaseService,
  private router:Router, private route: ActivatedRoute,
  private authService: AuthService) { 
  }

  ngOnInit() {
	  
	  console.log("Here is Edit Restaurant Page");
	   
	   
	   	this.id = this.route.snapshot.params['id'];
		
	
	  
		  this.firebaseService.getStreetDetails(this.id).snapshotChanges().subscribe(restaurant => {
					this.restaurant = [];
					//  restaurant.forEach(item => {
						  
						//  console.log(item);
						
						
						  
					
						 let res = restaurant.payload.toJSON(); 
						 res['$key'] = restaurant.key;
						
						//console.log(restaurant);
						
						this.restaurant = res as CityInterface;
						//this.restaurant.push(res as RestaurantInterface);
						
						console.log(this.restaurant);
						
						  this.streetName = this.restaurant.name;
						
						  
						  
						  console.log(this.id);
						  
						  console.log(this.streetName);
						
						
						
				//	  });
		});
	  
  }
  
  
   onStreetEditSubmit(){
	  
	   let street = {
		  name : this.streetName,
		  
	  }
	  
	  this.firebaseService.updateStreet(this.id,street);
	  
	  this.router.navigate(['/add']);
	  
  }

}
