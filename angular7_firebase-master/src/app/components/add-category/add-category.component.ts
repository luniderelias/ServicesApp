import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { BookInterface } from '../../models/book';
import { NgForm } from '@angular/forms';

import {FirebaseService} from '../../services/firebase.service';
import {Router} from '@angular/router';

import { RestaurantInterface } from '../../models/restaurant'; 

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

    cat_id:any;
	cat_name:any;
	res_name:any;
	image?:any;
	restaurants : any;
	
	restaurant: any;
	


  
    private RestaurantInterface: RestaurantInterface[];  
    public isAdmin: any = null;
   

  constructor(private dataApi: DataApiService,
  private firebaseService:FirebaseService,
  private router:Router) { }
  @ViewChild('btnClose') btnClose: ElementRef;
  @Input() userUid: string;
  

  onSaveBook(bookForm: NgForm): void {
    if (bookForm.value.id == null) {
      // New 
      bookForm.value.userUid = this.userUid;
      this.dataApi.addBook(bookForm.value);
    } else {
      // Update
      this.dataApi.updateBook(bookForm.value);
    }
    bookForm.resetForm();
    this.btnClose.nativeElement.click();
  }
  
  
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
    });
	   
  }

   onCategoryAddSubmit(){
	   
	   
	    this.firebaseService.getRestaurantDetails(this.res_name).snapshotChanges().subscribe(restaurant => {
					this.restaurant = [];
					//  restaurant.forEach(item => {
						  
						//  console.log(item);
						  
					
						 let res = restaurant.payload.toJSON(); 
						 res['$key'] = restaurant.key;
						
						console.log(restaurant);
						
						this.restaurant = res as RestaurantInterface;
						//this.restaurant.push(res as RestaurantInterface);
						
						console.log(this.restaurant);
						
						
						let category= {
							  cat_id: this.cat_id,
							  cat_name: this.cat_name,
							  res_name: this.res_name,
							  image: this.image,
							  restaurant_name: this.restaurant.title,
							  restaurant_image: this.restaurant.firebase_url,
							  restaurant_lat: this.restaurant.lat,
							  restaurant_long: this.restaurant.long,
							  res_id: this.restaurant.$key,
							  user_id: this.restaurant.user_id,
							 
						  }
					  
					  
					  this.firebaseService.addCategory(category);
					  this.router.navigate(['categories']);
						
				//	  });
		});
	   
	  
	    
  
  }

}
