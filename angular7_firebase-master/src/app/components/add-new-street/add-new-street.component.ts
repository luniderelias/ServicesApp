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
  selector: 'app-add-new-street',
  templateUrl: './add-new-street.component.html',
  styleUrls: ['./add-new-street.component.css']
})
export class AddNewStreetComponent implements OnInit {
	
	available:any;
	category:any;
	description:any;
	image:any;
	name:any;
	price:any;
	stock:any;
	categories : any;
	percent: any;
	sandbox: any;
	production: any;
	cityName: any;
	streetName: any;

   constructor(
    private firebaseService:FirebaseService,
	private router:Router
  
  ) { }

  ngOnInit() {
  }
  
     addStreetName(){
	 
	 
			 let streetName= {
			  name: this.streetName
		  }

		  
		    this.firebaseService.addNewStreet(streetName);
			this.router.navigate(['add']);

  
  
  
  } 

}
