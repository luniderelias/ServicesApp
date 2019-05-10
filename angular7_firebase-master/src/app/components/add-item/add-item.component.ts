import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { BookInterface } from '../../models/book';
import { NgForm } from '@angular/forms';

import {FirebaseService} from '../../services/firebase.service';
import {Router} from '@angular/router';

import { CategoryInterface } from '../../models/category'; 

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
	
	available:any;
	category:any;
	description:any;
	image:any;
	name:any;
	price:any;
	stock:any;
	categories : any;
	percent: any;
	
	category_details: any;
	
	categoryList: any;
	
	
	
	 private CategoryInterface: CategoryInterface[];  
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
	   
	  this.firebaseService.getCategories().snapshotChanges().subscribe(categories => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.categoryList = [];
      categories.forEach(item => {
		  
		  console.log(item);
		  
	
		 let a = item.payload.toJSON(); 
        a['$key'] = item.key;
		
		console.log(a);
		
        this.categoryList.push(a as CategoryInterface);
		
		
        
      })
    });
	   
  }

    onItemAddSubmit(){
		
		
		
	      
		  this.firebaseService.getCategoryDetails(this.categories).snapshotChanges().subscribe(category => {
					this.category_details = [];
				
						
					
						 let res = category.payload.toJSON(); 
						 
						 if(category.key != null || category.key != 'null'){
						 res['$key'] = category.key;
						 }
						
						console.log(category);
						
						this.category_details = res as CategoryInterface;
				
						
						console.log(this.category_details);
						
							let item= {
							  available: this.available,
							  category: this.category,
							  description: this.description,
							  name: this.name,
							  price: this.price,
							  stock: this.stock,
							  categories: this.categories,
							  percent: this.percent,
							  restaurant_image: this.category_details.restaurant_image,
							  restaurant_name: this.category_details.restaurant_name,
							  restaurant_lat: this.category_details.restaurant_lat,
							  restaurant_long: this.category_details.restaurant_long,
							  res_id: this.category_details.res_id,
							  user_id: this.category_details.user_id,
							  real_price : this.price,
							  
							  
						  }
					  
					  
								this.firebaseService.addItem(item);
								this.router.navigate(['items']);
						
						
						
				
		});
		
	  
	  
  }
  
  


}
