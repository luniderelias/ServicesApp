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

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-add-district',
  templateUrl: './add-district.component.html',
  styleUrls: ['./add-district.component.css']
})
export class AddDistrictComponent implements OnInit {

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
	private DistrictInterface: DistrictInterface[];  
	  
  
	cat_id:any;
	category_details:any;

	user_details: any;
	
	districts : any;
	
	   constructor(private firebaseService:FirebaseService, private authService: AuthService , 
  private router: Router, private route: ActivatedRoute) { 
  
  
  }

   ngOnInit() {
	  
		this.firebaseService.getDistricts().snapshotChanges().subscribe(districts => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.districts = [];
      
	  districts.forEach(item => {
		 let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.districts.push(a as DistrictInterface);
      })
    });
	  
  }
  
  deleteDistrict(districtkey){
	   this.firebaseService.deleteDistrict(districtkey);
  }

}
