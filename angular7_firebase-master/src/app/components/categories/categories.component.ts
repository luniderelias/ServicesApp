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
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  restaurants: any;
  restaurant2: any;
  private books: BookInterface[];
  private RestaurantInterface: RestaurantInterface[]
  public isAdmin: any = null;
  public userUid: string = null;
  categories: any;

  constructor(private firebaseService: FirebaseService, private authService: AuthService , private router: Router) { 
    this.isAdmin = localStorage.getItem('current_user_role') === 'admin';
  }

  ngOnInit() {
	 this.firebaseService.getCategories().snapshotChanges().subscribe(category => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.categories = [];
      category.forEach(item => {
		  
		  console.log(item);
		  
	
		 let a = item.payload.toJSON(); 
        a['$key'] = item.key;
		
		console.log(a);
		
        this.categories.push(a as RestaurantInterface);
		
		
        
      })
    })
	
	  
  }

 
 
  onRestaurantDelete(id){
	  
	  this.firebaseService.deleteRestaurant(id);
		
	  this.router.navigate(['/restaurants']);
  }
  
  goToRestaurantDetails(restaurant) {
	  console.log(restaurant);
	  
	  this.router.navigate(['/restaurants']);
  }

}
