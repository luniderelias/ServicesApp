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

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {
	
	restaurants : any;
	restaurant2: any;
	
	id: any;
	
	restaurant:any;
	imageUrl:any;
	categories: any;
	
  
  private RestaurantInterface: RestaurantInterface[];  
  private CategoryInterface: CategoryInterface[];  
  
  
  public isAdmin: any = null;
  public userUid: string = null;

  constructor(private firebaseService:FirebaseService, private authService: AuthService , 
  private router: Router, private route: ActivatedRoute) { }
  
   ngOnInit() {

			this.id = this.route.snapshot.params['id'];
		
			 this.firebaseService.getRestaurantCategories(this.id).snapshotChanges().subscribe(categories =>{
					console.log(categories);
					//this.categories = categories;
			  
					this.categories = [];
					  categories.forEach(item => {
						  
						  console.log(item);
						  
					
						 let cat = item.payload.toJSON(); 
						cat['$key'] = item.key;
						
						console.log(cat);
						
						this.categories.push(cat as CategoryInterface);
						
						
						
					});
			  
		  });
	  
		  this.firebaseService.getRestaurantDetails(this.id).snapshotChanges().subscribe(restaurant => {
					this.restaurant = [];
					//  restaurant.forEach(item => {
						  
						//  console.log(item);
						  
					
						 let res = restaurant.payload.toJSON(); 
						 res['$key'] = restaurant.key;
						
						console.log(restaurant);
						
						this.restaurant = res as RestaurantInterface;
						//this.restaurant.push(res as RestaurantInterface);
						
						console.log(this.restaurant);
						
						
						
				//	  });
		});

	
	
	  
  }


  
  onRestaurantDelete(id){
	  
	  this.firebaseService.deleteRestaurant(id);
		
	  this.router.navigate(['/lojas/listar']);
  }
  


}

