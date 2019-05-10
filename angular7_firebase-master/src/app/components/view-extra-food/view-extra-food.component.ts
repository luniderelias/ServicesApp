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
import { ExtraInterface } from '../../models/extra'; 

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-view-extra-food',
  templateUrl: './view-extra-food.component.html',
  styleUrls: ['./view-extra-food.component.css']
})
export class ViewExtraFoodComponent implements OnInit {

	order_id:any;
	order_details:any;
	user_details: any;
	
	item: any;
	
	id: any;
	
	

	private ExtraInterface: ExtraInterface[];  
	
	
    constructor(private firebaseService:FirebaseService, private authService: AuthService , 
  private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {

			this.id = this.route.snapshot.params['id'];
		
		console.log(this.id);
	  
		  this.firebaseService.getItemExtraDetail(this.id).snapshotChanges().subscribe(restaurant => {
					this.order_details = [];
					  restaurant.forEach(item => {
						  
						//  console.log(item);
						  
						  
						  console.log(item);
					
						 let res = item.payload.toJSON(); 
						 res['$key'] = item.key;
						console.log(res);
						
				//		console.log(item);
						
						//this.order_details = res as ExtraInterface;
						this.order_details.push(res as ExtraInterface);
						
						console.log(this.order_details);
						
						
						
					  });
		});

	
	
	  
  }
  
  
  onExtraItemDelete(id){
	  this.firebaseService.onExtraItemDelete(this.id,id);
  }
  
  onExtraItemEdit(id){
	  
	  this.firebaseService.setProductId(this.id);
	  
	  this.router.navigate(['/edit-extra-food/' + id]);
  }

}
