import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';
import * as alertFunctions from './../shared/data/sweet-alerts';

import { RestaurantInterface } from '../../models/restaurant';
import { CategoryInterface } from '../../models/category';

import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-category-details',
	templateUrl: './category-details.component.html',
	styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {

	loading: boolean;
	restaurants: any;
	restaurant2: any;

	id: any;

	restaurant: any;
	imageUrl: any;
	categories: any;

	isAdmin: boolean;


	private RestaurantInterface: RestaurantInterface[];
	private CategoryInterface: CategoryInterface[];


	cat_id: any;
	category_details: any;

	constructor(private firebaseService: FirebaseService, private authService: AuthService,
		private router: Router, private route: ActivatedRoute) {
			this.isAdmin = localStorage.getItem('current_user_role') === 'admin' || localStorage.getItem('current_user_role') === 'super_admin';
		}

	showQuestion() {
		alertFunctions.showQuestion('', 'Deseja Confirmar essa Ação?').then(res => {
			if (res.dismiss) { return; }
			this.loading = true;
			this.onCategoryDelete();
		});
	}

	ngOnInit() {

		this.id = this.route.snapshot.params['id'];



		this.firebaseService.getCategoryDetails(this.id).snapshotChanges().subscribe(category => {
			this.category_details = [];
			let res = category.payload.toJSON();

			if (category.key != null || category.key !== 'null') {
				res['$key'] = category.key;
			}
			this.category_details = res as CategoryInterface;
		});
	}

	onCategoryDelete() {
		this.firebaseService.deleteCategory(this.id).then(res => {
			alertFunctions.showSuccess('Sucesso!', 'Categoria Removida');
			this.loading = false;
			this.router.navigate(['/categorias/listar']);
		}, error => {
			this.loading = false;
			alertFunctions.showError('Erro!', 'Falha ao Remover Categoria!');
		});
	}

}
