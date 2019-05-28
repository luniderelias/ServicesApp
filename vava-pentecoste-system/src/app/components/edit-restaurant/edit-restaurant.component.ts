import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { NgForm } from '@angular/forms';

import { FirebaseService } from '../../services/firebase.service';

import { RestaurantInterface } from '../../models/restaurant';

import { ActivatedRoute } from '@angular/router';

import { Router } from '@angular/router';


import * as alertFunctions from './../shared/data/sweet-alerts';

import { AuthService } from '../../services/auth.service';

import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Component({
	selector: 'app-edit-restaurant',
	templateUrl: './edit-restaurant.component.html',
	styleUrls: ['./edit-restaurant.component.css']
})
export class EditRestaurantComponent implements OnInit {

	loading: boolean;
	address?: string;
	description?: string;
	image?: string;
	info?: string;
	lat?: string;
	long?: string;
	mark?: string;
	option = '0';
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
	restaurantFolder: any;
	percent: number;


	constructor(private dataApi: DataApiService,
		private firebaseService: FirebaseService,
		private router: Router, private route: ActivatedRoute,
		private authService: AuthService, private storage: AngularFireStorage) {


		this.restaurantFolder = 'restaurantimages';
	}

	showQuestion() {
		alertFunctions.showQuestion('', 'Deseja Confirmar essa Ação?').then(res => {
			if (res.dismiss) { return; }
			this.loading = true;
			this.onEditRestaurant();
		});
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
			this.dataApi.updateBook(bookForm.value);
		}
		bookForm.resetForm();
	}


	ngOnInit() {
		this.id = this.route.snapshot.params['id'];
		this.firebaseService.getRestaurantDetails(this.id).snapshotChanges().subscribe(restaurant => {
			this.restaurant = [];
			let res = restaurant.payload.toJSON();
			res['$key'] = restaurant.key;
			this.restaurant = res as RestaurantInterface;


			this.title = this.restaurant.title;
			this.address = this.restaurant.address;
			this.description = this.restaurant.description;
			this.info = this.restaurant.info;
			this.lat = this.restaurant.lat;
			this.long = this.restaurant.long;
			this.mark = this.restaurant.mark;
			this.option = this.restaurant.option;
			this.outlet = this.restaurant.outlet;
			this.phonenumber = this.restaurant.phonenumber;
			this.firebase_url = this.restaurant.firebase_url;
		});
	}

	onAddRestaurant() {
		const restaurant = {
			address: this.address,
			description: this.description,
			image: this.image,
			info: this.info,
			lat: this.lat,
			long: this.long,
			mark: this.mark,
			option: this.option,
			outlet: this.outlet,
			phonenumber: this.phonenumber,
			title: this.title,
		}
		this.firebaseService.addRestaurant(restaurant);
	}


	onEditRestaurant() {
		if (!this.inputImageUser.nativeElement.value || this.inputImageUser.nativeElement.value === undefined) {
			const restaurant = {
				address: this.address,
				description: this.description,
				info: this.info,
				lat: this.lat,
				long: this.long,
				mark: this.mark,
				option: this.option,
				outlet: this.outlet,
				phonenumber: this.phonenumber,
				title: this.title,
				image: this.firebase_url,
			}
			this.firebaseService.updateRestaurant(this.id, restaurant).then(res => {
				alertFunctions.showSuccess('Sucesso!', 'Loja Salva');
				this.loading = false;
				this.router.navigate(['/lojas/detalhes/' + this.id]);
			  }, error => {
				alertFunctions.showError('Erro!', 'Falha ao Salvar Loja!');
				this.loading = false;
			  });
		}

		if (this.inputImageUser.nativeElement.value) {
			const restaurant = {
				address: this.address,
				description: this.description,
				info: this.info,
				lat: this.lat,
				long: this.long,
				mark: this.mark,
				option: this.option,
				outlet: this.outlet,
				phonenumber: this.phonenumber,
				title: this.title,
				image: this.inputImageUser.nativeElement.value,
				firebase_url: this.inputImageUser.nativeElement.value,
			}

			this.firebaseService.updateRestaurantWithImage(this.id, restaurant).then(res => {
				alertFunctions.showSuccess('Sucesso!', 'Loja Salva');
				this.loading = false;
				this.router.navigate(['/lojas/detalhes/' + this.id]);
			  }, error => {
				alertFunctions.showError('Erro!', 'Falha ao Salvar Loja!');
				this.loading = false;
			  });
		}





	}

	onChange($event) {
		this.image = $event; // <--- File Object for future use.
	}


	onUpload(e) {
		const id = Math.random().toString(36).substring(2);
		const file = e.target.files[0];
		const filePath = `/${this.restaurantFolder}/${file.name}`;

		const ref = this.storage.ref(filePath);
		const task = this.storage.upload(filePath, file);
		task.percentageChanges().subscribe(
			(percent: number) => {
				this.percent = percent;
			});
		task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();

	}

}
