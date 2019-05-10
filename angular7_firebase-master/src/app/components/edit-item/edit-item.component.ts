import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { BookInterface } from '../../models/book';
import { NgForm } from '@angular/forms';

import {FirebaseService} from '../../services/firebase.service';

import { RestaurantInterface } from '../../models/restaurant'; 
import { CategoryInterface } from '../../models/category'; 
import { ItemInterface } from '../../models/item'; 

import { ActivatedRoute, Params } from '@angular/router';

import {Router} from '@angular/router';


import { AuthService } from '../../services/auth.service';

import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
	
	id: any;
	name : any;
	category: any;
	description: any;
	available: any;
	price: any;
	stock:any;
	image:any;
	image_firebase_url: any;
	
	imageUrl:any;

	itemFolder: any;
	
	item: any;
	
  constructor(private dataApi: DataApiService,
  private firebaseService:FirebaseService,
  private router:Router, private route: ActivatedRoute,
  private authService: AuthService, private storage: AngularFireStorage) { 
  
  
	this.itemFolder = 'itemimages';
  }
  
   @Input() userUid: string;
  
  @ViewChild('imageUser') inputImageUser: ElementRef;
  
  uploadPercent: Observable<number>;
  urlImage: Observable<string>;

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
    //this.btnClose.nativeElement.click();
  }

  ngOnInit() {
	   
	   console.log("Here is Edit Restaurant Page");
	   
	   
	   	this.id = this.route.snapshot.params['id'];
		
	
	  
		  this.firebaseService.getItemDetails(this.id).snapshotChanges().subscribe(item => {
					this.item = [];
					//  restaurant.forEach(item => {
						  
						//  console.log(item);
						  
					
						 let res = item.payload.toJSON(); 
						 res['$key'] = item.key;
						
						console.log(item);
						
						this.item = res as ItemInterface;
						//this.restaurant.push(res as RestaurantInterface);
						
						console.log(this.item);
						
						//this.cat_id = this.category.cat_id;
						//this.cat_name = this.category.cat_name;
						//this.res_name = this.category.res_name;
						//this.image = this.category.image;
						//this.firebase_url = this.category.firebase_url;
						
						this.name = this.item.name;
						this.category = this.item.category;
						this.description = this.item.description;
						this.available = this.item.available;
						this.price = this.item.price;
						this.stock = this.item.stock;
						this.image_firebase_url = this.item.image_firebase_url;
						
						
						  //this.title = this.restaurant.title;
						  //this.address = this.restaurant.address;
						  //this.description = this.restaurant.description;
						  //this.image = this.restaurant.image;
						  //this.info = this.restaurant.info;
						  //this.lat = this.restaurant.lat;
						  //this.long = this.restaurant.long;
						  //this.mark = this.restaurant.mark;
						  //this.option = this.restaurant.option;
						  //this.outlet = this.restaurant.outlet;
						  //this.phonenumber = this.restaurant.phonenumber;
						  //this.firebase_url = this.restaurant.firebase_url;
						  //this.image = this.restaurant.firebase_url;
						  
						  console.log(this.id);
						
						
						
				//	  });
		});
	   
  }

  
  
  onItemEditSubmit(){
	  
	  console.log(this.image);
	  
	if(!this.inputImageUser.nativeElement.value || this.inputImageUser.nativeElement.value == undefined){
		console.log("inside");
		
		let item= {
					name : this.name,
					category : this.category,
					description : this.description,
					available : this.available,
					price : this.price,
					stock : this.stock,
					image: this.image_firebase_url,
					image_firebase_url: this.image_firebase_url,
		  
				}
	  
	   this.firebaseService.updateItem(this.id,item);
	  
	  this.router.navigate(['/items']);
	}
	
	if(this.inputImageUser.nativeElement.value){
		
		console.log("white");
		
	
		  
		  let item = {
		  name : this.name,
		  category : this.category,
		  description : this.description,
		  available : this.available,
		  price : this.price,
		  stock : this.stock,
		  image: this.inputImageUser.nativeElement.value,
		  image_firebase_url: this.inputImageUser.nativeElement.value,
		}
		
		
		
	  this.firebaseService.updateItemWithImage(this.id,item);
	  
	  this.router.navigate(['/items']);
		
	}
	  
	   
	  
	 
	  
  }
  
  onChange($event){
	  //let file = $event.target.files[0]; // <--- File Object for future use.
     console.log($event);
	 this.image = $event; // <--- File Object for future use.
  }
  
  
   onUpload(e) {
    // console.log('subir', e.target.files[0]);
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    //const filePath = `uploads/profile`;
	const filePath = `/${this.itemFolder}/${file.name}`;
	
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();
	
	alert("Please wait for uploading images");
	
	console.log(ref.getDownloadURL());
	
	console.log(this.urlImage);
  }

}
