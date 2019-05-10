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

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
	
	restaurants : any;
	restaurant2: any;
	
	private books: BookInterface[];
  
  private RestaurantInterface: RestaurantInterface[];  
  public isAdmin: any = null;
  public userUid: string = null;
  
  constructor(private firebaseService:FirebaseService, private authService: AuthService , private router: Router) { }
  
  
  ngOnInit() {



	 this.firebaseService.getRestaurants().snapshotChanges().subscribe(restaurants => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.restaurants = [];
      restaurants.forEach(item => {
		  
		  console.log(item);
		  
	
		 let a = item.payload.toJSON(); 
        a['$key'] = item.key;
		
		console.log(a);
		
        this.restaurants.push(a as RestaurantInterface);
		
		
        
      })
    })
	
	  
  }

 
 
  onRestaurantDelete(id){
	  
	  this.firebaseService.deleteRestaurant(id);
		
	  this.router.navigate(['/restaurants']);
  }
  
  goToRestaurantDetails(restaurant){
	  console.log(restaurant);
	  
	  this.router.navigate(['/restaurants']);
  }

}

