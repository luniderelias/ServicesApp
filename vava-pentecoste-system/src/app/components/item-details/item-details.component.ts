import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

import * as alertFunctions from './../shared/data/sweet-alerts';
import { RestaurantInterface } from '../../models/restaurant';
import { CategoryInterface } from '../../models/category';
import { ItemInterface } from '../../models/item';

import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-item-details',
	templateUrl: './item-details.component.html',
	styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

	loading: boolean;
	restaurants: any;
	restaurant2: any;

	id: any;

	restaurant: any;
	imageUrl: any;
	categories: any;
	item: any;


	private RestaurantInterface: RestaurantInterface[];
	private CategoryInterface: CategoryInterface[];
	private ItemInterface: ItemInterface[];


	public isAdmin: any = null;
	public userUid: string = null;

	constructor(private firebaseService: FirebaseService, private authService: AuthService,
		private router: Router, private route: ActivatedRoute) {
			this.isAdmin = localStorage.getItem('current_user_role') === 'admin' || localStorage.getItem('current_user_role') === 'super_admin';
		}

		showQuestion() {
			alertFunctions.showQuestion('', 'Deseja Confirmar essa Ação?').then(res => {
				if (res.dismiss) { return; }
				this.loading = true;
				this.onItemDelete();
			});
		}

	ngOnInit() {
		this.id = this.route.snapshot.params['id'];
		this.firebaseService.getItemDetails(this.id).snapshotChanges().subscribe(item => {
			this.item = [];
			let res = item.payload.toJSON();
			res['$key'] = item.key;
			this.item = res as ItemInterface;
		});
	}

	onItemDelete() {
		this.firebaseService.deleteItem(this.id).then(res => {
			alertFunctions.showSuccess('Sucesso!', 'Produto Removido');
			this.loading = false;
			this.router.navigate(['/produtos/listar']);
		}, error => {
			this.loading = false;
			alertFunctions.showError('Erro!', 'Falha ao Remover Produto!');
		});
	}

	
	formatMoney(n) {
        if (n) {
		    return n.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, '$1.');
        } else {
            return '';
		}
	}

}
