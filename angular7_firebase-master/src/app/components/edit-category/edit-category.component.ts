import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { BookInterface } from '../../models/book';
import { NgForm } from '@angular/forms';

import {FirebaseService} from '../../services/firebase.service';

import { RestaurantInterface } from '../../models/restaurant'; 
import { CategoryInterface } from '../../models/category'; 

import { ActivatedRoute, Params } from '@angular/router';

import {Router} from '@angular/router';


import { AuthService } from '../../services/auth.service';

import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
	
	
	address?:string;
  description?:string;
  image?:string;
  info?:string;
  lat?:string;
  long?:string;
  mark?:string;
  option?:string;
  outlet?:string;
  phonenumber?:string;
  title?:string;
  
  
  restaurants : any;
	restaurant2: any;
	
	id: any;
  
  restaurant:any;
	imageUrl:any;
	categories: any;
	firebase_url: any;
	categoryFolder: any;
	category: any;
	
	
	cat_id : any;
	cat_name: any;
	res_name: any;
	


  constructor(private dataApi: DataApiService,
  private firebaseService:FirebaseService,
  private router:Router, private route: ActivatedRoute,
  private authService: AuthService, private storage: AngularFireStorage) { 
  
  
	this.categoryFolder = 'categoryimages';
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
		
	
	  
		  this.firebaseService.getCategoryDetails(this.id).snapshotChanges().subscribe(category => {
					this.category = [];
					//  restaurant.forEach(item => {
						  
						//  console.log(item);
						  
					
						 let res = category.payload.toJSON(); 
						 res['$key'] = category.key;
						
						console.log(category);
						
						this.category = res as CategoryInterface;
						//this.restaurant.push(res as RestaurantInterface);
						
						console.log(this.category);
						
						this.cat_id = this.category.cat_id;
						this.cat_name = this.category.cat_name;
						this.res_name = this.category.res_name;
						this.image = this.category.image;
						this.firebase_url = this.category.firebase_url;
						
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

  
  
  onCategoryEditSubmit(){
	  
	  console.log(this.image);
	  
	if(!this.inputImageUser.nativeElement.value || this.inputImageUser.nativeElement.value == undefined){
		console.log("inside");
		
		let category= {
					  cat_id: this.cat_id,
					  cat_name: this.cat_name,
					  image: this.firebase_url,
					  firebase_url: this.firebase_url
		  
				}
	  
	   this.firebaseService.updateCategory(this.id,category);
	  
	  this.router.navigate(['/categories']);
	}
	
	if(this.inputImageUser.nativeElement.value){
		
		console.log("white");
		
		  let category= {
		  
		  cat_id: this.cat_id,
		  cat_name: this.cat_name,
		  image: this.inputImageUser.nativeElement.value,
		  firebase_url: this.inputImageUser.nativeElement.value,
		
		}
		
	  this.firebaseService.updateCategoryWithImage(this.id,category);
	  
	  this.router.navigate(['/categories']);
		
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
	const filePath = `/${this.categoryFolder}/${file.name}`;
	
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();
	
	alert("Please wait for uploading images");
	
	console.log(ref.getDownloadURL());
	
	console.log(this.urlImage);
  }

}
