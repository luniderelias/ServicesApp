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
  selector: 'app-edit-building',
  templateUrl: './edit-building.component.html',
  styleUrls: ['./edit-building.component.css']
})
export class EditBuildingComponent implements OnInit {
	
	id: any;
	name : any;
	category: any;
	description: any;
	available: any;
	price: any;
	stock:any;
	image:any;
	buildingName: any;
	restaurant: any;
	streetName: any;
	

  constructor(private dataApi: DataApiService,
  private firebaseService:FirebaseService,
  private router:Router, private route: ActivatedRoute,
  private authService: AuthService) { 
  }

  ngOnInit() {
	   	this.id = this.route.snapshot.params['id'];
		  this.firebaseService.getBuildingDetails(this.id).snapshotChanges().subscribe(restaurant => {
					this.restaurant = [];
						 let res = restaurant.payload.toJSON(); 
						 res['$key'] = restaurant.key;
						this.restaurant = res as CityInterface;
						  this.buildingName = this.restaurant.name;
		});
	  
  }
  
  onBuildingEditSubmit() {
	   let building = {
		  name : this.buildingName,
		  
	  }
	  this.firebaseService.updateBuilding(this.id, building);
	  this.router.navigate(['/add-building']);
  }

}
