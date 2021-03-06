import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { BookInterface } from '../../models/book';
import { NgForm } from '@angular/forms';
import * as alertFunctions from './../shared/data/sweet-alerts';


import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

import { RestaurantInterface } from '../../models/restaurant';
import { Ng2ImgMaxService } from 'ng2-img-max';

@Component({
	selector: 'app-add-category',
	templateUrl: './add-category.component.html',
	styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

	loading: boolean;
	cat_id: any;
	cat_name: any;
	res_name: any;
	image?: any;
	restaurants: any;

	restaurant: any;




	private RestaurantInterface: RestaurantInterface[];
	public isAdmin: any = null;


	constructor(private dataApi: DataApiService,
		private firebaseService: FirebaseService,
		private router: Router,
		private ng2ImgMax: Ng2ImgMaxService) {
		this.isAdmin = localStorage.getItem('current_user_role') === 'admin' ||
			localStorage.getItem('current_user_role') === 'super_admin';
	}
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
		this.getRestaurants();
	}

	getRestaurants() {
		this.firebaseService.getRestaurants().snapshotChanges().subscribe(restaurants => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
			this.restaurants = [];
			restaurants.forEach(item => {
				let a = item.payload.toJSON();
				a['$key'] = item.key;
				this.restaurants.push(a as RestaurantInterface);
			})
		});
	}

	showQuestion() {
		alertFunctions.showQuestion('', 'Deseja Confirmar essa Ação?').then(res => {
			if (res.dismiss) { return; }
			this.loading = true;
			this.onCategoryAddSubmit();
		});
	}

	onCategoryAddSubmit() {
		return this.firebaseService.getRestaurantDetails(this.res_name).snapshotChanges().subscribe(restaurant => {
			this.restaurant = [];

			let res = restaurant.payload.toJSON();
			res['$key'] = restaurant.key;
			this.restaurant = res as RestaurantInterface;

			const category = {
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

			this.firebaseService.addCategory(category).then(() => {
				alertFunctions.showSuccess('Sucesso!', 'Categoria Cadastrada com Sucesso!');
				this.loading = false;
				this.router.navigate(['categorias/listar']);
			}, error => {
				alertFunctions.showError('Erro', 'Falha ao Cadastrar Categoria');
				this.loading = false;
			});
		}, error => {
			this.loading = false;
			alertFunctions.showError('Erro', 'Falha ao Cadastrar Categoria');
		});
	}


	onImageChange(event) {
		const image = event.target.files[0];
	  
		this.ng2ImgMax.resizeImage(image, 300, 300).subscribe(
		  result => {
			this.image = new File([result], result.name);
		  },
		  error => {
			console.log('😢 Oh no!', error);
		  }
		);
	  }
}
