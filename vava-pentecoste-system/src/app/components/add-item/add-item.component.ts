import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { NgForm } from '@angular/forms';

import * as alertFunctions from './../shared/data/sweet-alerts';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

import { CategoryInterface } from '../../models/category';
import { ImageResult, ResizeOptions } from 'ng2-imageupload';
import { Ng2ImgMaxService } from 'ng2-img-max';

@Component({
	selector: 'app-add-item',
	templateUrl: './add-item.component.html',
	styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

	loading: boolean;
	available = '';
	category = '';
	description: any;
	image: any;
	name: any;
	popularity: any;
	price: any;
	stock: any;
	categories: any;
	percent = '';
	product_id: any;

	category_details: any;

	categoryList: any;
	
	showQuestion() {
		alertFunctions.showQuestion('', 'Deseja Confirmar essa Ação?').then(res => {
			if (res.dismiss) { return; }
			this.loading = true;
			this.onItemAddSubmit();
		});
	}



	private CategoryInterface: CategoryInterface[];
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
				const a = item.payload.toJSON();
				a['$key'] = item.key;
				this.categoryList.push(a as CategoryInterface);
			});
		});

	}

	onItemAddSubmit() {
		this.firebaseService.getCategoryDetails(this.categories).snapshotChanges().subscribe(category => {
			this.category_details = [];

			const res = category.payload.toJSON();

			if (category.key != null || category.key !== 'null') {
				res['$key'] = category.key;
			}
			const categories = this.categories;
			this.category_details = res as CategoryInterface;
			var found = this.categoryList.find(function(element) {
				return element.$key === categories;
			  });

			const item = {
				available: this.available,
				category: found.cat_name,
				description: this.description,
				product_id: this.product_id,
				name: this.name,
				search: this.name.toLowerCase(),
				popularity: this.popularity,
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
				real_price: this.price,
				image: this.image
			}

			this.firebaseService.addItem(item).then(res => {
				alertFunctions.showSuccess('Sucesso!', 'Produto Adicionado');
				this.loading = false;
				this.router.navigate(['produtos/listar']);
			}, error => {
				alertFunctions.showError('Erro!', 'Falha ao Adicionar Produto!');
				this.loading = false;
			});
		});
	}
}
