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

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-city-configuration',
  templateUrl: './city-configuration.component.html',
  styleUrls: ['./city-configuration.component.css']
})
export class CityConfigurationComponent implements OnInit {

	cities : any;
	
	restaurants : any;
	restaurant2: any;
	
	id: any;
	
	restaurant:any;
	imageUrl:any;
	categories: any;
	
	order_id:any;
	order_details:any;
	status:any;
	checked:any;
	
	private RestaurantInterface: RestaurantInterface[];  
	private CategoryInterface: CategoryInterface[];  
	private OrderInterface: OrderInterface[];  
	private CityInterface: CityInterface[];  
	
  
  
	cat_id:any;
	category_details:any;

	user_details: any;

    constructor(private firebaseService:FirebaseService, private authService: AuthService , 
  private router: Router, private route: ActivatedRoute) { 
  
  
  }

  ngOnInit() {
	  
		this.firebaseService.getCities().snapshotChanges().subscribe(cities => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.cities = [];
      
	  cities.forEach(item => {
		  
		  console.log(item);
		  
	
		 let a = item.payload.toJSON(); 
        a['$key'] = item.key;
		
		console.log(a);
		
        this.cities.push(a as CityInterface);
		
		
        
      })
    });
	  
  }
  
  deleteCity(citykey){
	   this.firebaseService.deleteCity(citykey);
  }

}
