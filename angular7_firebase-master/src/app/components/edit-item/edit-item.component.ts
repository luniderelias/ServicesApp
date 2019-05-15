import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { BookInterface } from '../../models/book';
import { NgForm } from '@angular/forms';

import { FirebaseService } from '../../services/firebase.service';

import { RestaurantInterface } from '../../models/restaurant';
import { CategoryInterface } from '../../models/category';
import { ItemInterface } from '../../models/item';

import { ActivatedRoute, Params } from '@angular/router';

import { Router } from '@angular/router';


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
	name: any;
	categories: any;
	description: any;
	available: any;
	price: any;
	stock: any;
	image: any;
	image_firebase_url: any;
	product_id: any;

	category_details: any;

	categoryList: any;
	imageUrl: any;

	itemFolder: any;

	item: any;
	isAdmin: boolean;

	constructor(private dataApi: DataApiService,
		private firebaseService: FirebaseService,
		private router: Router, private route: ActivatedRoute,
		private authService: AuthService, private storage: AngularFireStorage) {


		this.isAdmin = localStorage.getItem('current_user_role') === 'admin';
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


		this.id = this.route.snapshot.params['id'];

		this.getCategories();
		this.getItemDetails();
	}

	getItemDetails() {
		this.firebaseService.getItemDetails(this.id).snapshotChanges().subscribe(item => {
			this.item = [];

			let res = item.payload.toJSON();
			res['$key'] = item.key;


			this.item = res as ItemInterface;

			console.log(this.item);

			this.name = this.item.name;
			this.categories = this.item.categories;
			this.description = this.item.description;
			this.available = this.item.available;
			this.product_id = this.item.product_id;
			this.price = this.item.price;
			this.stock = this.item.stock;
			this.image_firebase_url = this.item.image_firebase_url;

		});
	}

	getCategories() {

		this.firebaseService.getCategories().snapshotChanges().subscribe(categories => {
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




	onItemEditSubmit() {

		if (!this.inputImageUser.nativeElement.value || this.inputImageUser.nativeElement.value === undefined) {
			console.log("inside");

			let item = {
				name: this.name,
				categories: this.categories,
				description: this.description,
				available: this.available,
				product_id: this.product_id,
				price: this.price,
				stock: this.stock,
				image: this.image_firebase_url,
				image_firebase_url: this.image_firebase_url,

			}

			this.firebaseService.updateItem(this.id, item);

			this.router.navigate(['/produtos/detalhes/' + this.id]);
		}
		if (this.inputImageUser.nativeElement.value) {

			console.log("white");

			let item = {
				name: this.name,
				categories: this.categories,
				description: this.description,
				available: this.available,
				product_id: this.product_id,
				price: this.price,
				stock: this.stock,
				image: this.inputImageUser.nativeElement.value,
				image_firebase_url: this.inputImageUser.nativeElement.value,
			}
			this.firebaseService.updateItemWithImage(this.id, item);

			this.router.navigate(['/produtos/detalhes/' + this.id]);

		}

	}

	onChange($event) {
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
