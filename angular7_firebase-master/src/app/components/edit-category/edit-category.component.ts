import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { NgForm } from '@angular/forms';
import * as alertFunctions from './../shared/data/sweet-alerts';

import { FirebaseService } from '../../services/firebase.service';

import { RestaurantInterface } from '../../models/restaurant';
import { CategoryInterface } from '../../models/category';

import { ActivatedRoute } from '@angular/router';

import { Router } from '@angular/router';


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

	loading: boolean;
	address?: string;
	description?: string;
	image?: string;
	info?: string;
	lat?: string;
	long?: string;
	mark?: string;
	option?: string;
	outlet?: string;
	phonenumber?: string;
	title?: string;


	restaurants: any;
	restaurant2: any;

	id: any;

	restaurant: any;
	imageUrl: any;
	categories: any;
	firebase_url: any;
	categoryFolder: any;
	category: any;


	cat_id: any;
	cat_name: any;
	res_name: any;
	isAdmin: boolean;


	constructor(private dataApi: DataApiService,
		private firebaseService: FirebaseService,
		private router: Router, private route: ActivatedRoute,
		private authService: AuthService, private storage: AngularFireStorage) {

			this.isAdmin = localStorage.getItem('current_user_role') === 'admin' || localStorage.getItem('current_user_role') === 'super_admin';

		this.categoryFolder = 'categoryimages';


		this.id = this.route.snapshot.params['id'];
		this.getRestaurants();
		this.getCategoryDetails();

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
	}

	showQuestion() {
		alertFunctions.showQuestion('', 'Deseja Confirmar essa Ação?').then(res => {
			if (res.dismiss) { return; }
			this.loading = true;
			this.onCategoryEditSubmit();
		});
	}


	getCategoryDetails() {
		this.firebaseService.getCategoryDetails(this.id).snapshotChanges().subscribe(category => {
			this.category = [];


			let res = category.payload.toJSON();
			res['$key'] = category.key;

			this.category = res as CategoryInterface;

			this.cat_id = this.category.cat_id;
			this.cat_name = this.category.cat_name;
			this.res_name = this.category.res_name;
			this.image = this.category.image;
			this.firebase_url = this.category.firebase_url;
		});

	}

	getRestaurants() {
		this.firebaseService.getRestaurants().snapshotChanges().subscribe(restaurants => {
			this.restaurants = [];
			restaurants.forEach(item => {

				console.log(item);


				let a = item.payload.toJSON();
				a['$key'] = item.key;

				console.log(a);

				this.restaurants.push(a as RestaurantInterface);
			});
		});
	}

	onCategoryEditSubmit() {
		if (!this.inputImageUser.nativeElement.value || this.inputImageUser.nativeElement.value === undefined) {

			const category = {
				cat_id: this.cat_id,
				cat_name: this.cat_name,
				image: this.firebase_url,
				firebase_url: this.firebase_url

			}

			this.firebaseService.updateCategory(this.id, category).then(res => {
				alertFunctions.showSuccess('Sucesso!', 'Categoria Salva com Sucesso!');
				this.loading = false;
				this.router.navigate(['/categorias/detalhes/' + this.id]);
			}, error => {
				alertFunctions.showError('Erro!', 'Falha ao Editar Categoria!');
				this.loading = false;
			});
		}

		if (this.inputImageUser.nativeElement.value) {

			const category = {

				cat_id: this.cat_id,
				cat_name: this.cat_name,
				image: this.inputImageUser.nativeElement.value,
				firebase_url: this.inputImageUser.nativeElement.value,

			}

			this.firebaseService.updateCategoryWithImage(this.id, category).then(res => {
				alertFunctions.showSuccess('Sucesso!', 'Categoria Salva com Sucesso!');
				this.loading = false;
				this.router.navigate(['/categorias/detalhes/' + this.id]);
			}, error => {
				alertFunctions.showError('Erro!', 'Falha ao Editar Categoria!');
				this.loading = false;
			});
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
		const filePath = `/${this.categoryFolder}/${file.name}`;

		const ref = this.storage.ref(filePath);
		const task = this.storage.upload(filePath, file);
		this.uploadPercent = task.percentageChanges();
		task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();


		console.log(ref.getDownloadURL());

		console.log(this.urlImage);
	}

}
