import { Component, OnInit } from '@angular/core';
import { Events, ToastController, LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ServiceProvider } from '../../providers/service';
import { Values } from '../../providers/values';

@Component({
	selector: 'app-product-details',
	templateUrl: './product-details.page.html',
	styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

	id: any;
	productsList: any;
	categoryList: any;
	params: any = {};
	items: any;
	title: any;
	owner_id: any;
	product_id: any;

	loading: any;
	quantity: any;


	//second


	product: any;
	cartItem: any = {};
	cartsItem: any = {};
	ionState: any = {};

	favoriteItem: any;
	extraOptions: any;
	extraOptionsPrice: any;
	extraPrice: any;
	currentExtraItemQuantity: any;

	restaurantId: any;
	restaurantName: any;
	favorite = false;



	constructor(
		public loadingCtrl: LoadingController,
		private route: ActivatedRoute,
		public events: Events,
		public toastCtrl: ToastController,
		private storage: Storage,
		public socialSharing: SocialSharing,
		public service: ServiceProvider,
		private router: Router,
		public alertCtrl: AlertController,
		public values: Values,
	) {

		this.quantity = "1";

		this.route.params.subscribe(params => {
			console.log(params);
			this.id = params.id;
			this.title = params.title;
			this.owner_id = params.owner_id;
			this.product_id = params.cat_id;
			this.service.getItemDetail(this.product_id).on('value', (snapshot) => {

				this.params.data = [];
				this.params.data.extraOptions = [];
				this.currentExtraItemQuantity = 0;

				this.service.getItemExtraOptionsDetail(this.product_id).on('value', (snapshot) => {

					this.extraOptions = [];
					snapshot.forEach(snap => {
						for (let item in this.service.cart.line_items) {
							if (this.product_id == this.service.cart.line_items[item].product_id) {
								for (let extras in this.service.cart.line_items[item].extra) {
									if (snap.key == this.service.cart.line_items[item].extra[extras].id) {
										this.currentExtraItemQuantity = this.service.cart.line_items[item].extra[extras].quantity;
									}
								}
							}
						}
						this.extraOptions.push({

							id: snap.key,
							name: snap.val().name,
							value: snap.val().value,
							product_id: this.product_id,
							quantity: this.currentExtraItemQuantity
						});
					});
				});

				this.params.data.id = snapshot.key;
				this.params.data.available = snapshot.val().available;
				this.params.data.categories = snapshot.val().categories;
				this.params.data.category = snapshot.val().category;
				this.params.data.description = snapshot.val().description;
				this.params.data.image = snapshot.val().image;
				this.params.data.image_firebase_url = snapshot.val().image_firebase_url;
				this.params.data.name = snapshot.val().name;
				this.params.data.percent = snapshot.val().percent;
				this.params.data.price = snapshot.val().price;
				this.params.data.real_price = snapshot.val().price;
				this.params.data.stock = snapshot.val().stock;
				this.params.data.extraOptions = this.extraOptions;
				this.params.data.restaurantId = this.id;
				this.params.data.restaurantName = this.title;
				this.params.data.owner_id = this.owner_id;


				this.getFavoriteItem();
			});
		});
	}

	addToCart(category, stock, name, price, image, extra) {
		var itemAdded = false;
		
		for (let item in this.service.cart.line_items) {
			if (this.product_id === this.service.cart.line_items[item].product_id) {
				if (stock <= 0) {
					this.presentAlert('Ops!', 'Não temos este produto em estoque no momento.');
					return;
				}
				this.extraPrice = 0;

				this.cartsItem = [];

				this.service.proqty[this.product_id] += 1;

				this.cartsItem.name = name;
				this.cartsItem.category = category;
				this.cartsItem.image = image;
				this.cartsItem.price = price;
				this.cartsItem.stock = stock;
				this.cartsItem.product_id = this.product_id;
				this.cartsItem.restaurantId = this.id;
				this.cartsItem.restaurantName = this.title;
				this.cartsItem.owner_id = this.owner_id;

				this.cartsItem.quantity = this.service.cart.line_items[item].quantity;

				this.cartsItem.extra = [];
				this.service.cart.line_items[item] = [];

				for (let ii = 0; ii <= extra.length - 1; ii++) {
					if (this.product_id === extra[ii].product_id) {
						this.cartsItem.extra[ii] = extra[ii];
					}
				}
				this.service.cart.line_items[item].image = this.cartsItem.image;

				this.service.cart.line_items[item].name = this.cartsItem.name;
				
				this.service.cart.line_items[item].stock = this.cartsItem.stock;

				this.service.cart.line_items[item].product_id = this.cartsItem.product_id;

				this.service.cart.line_items[item].price = this.cartsItem.price;

				this.service.cart.line_items[item].quantity = this.cartsItem.quantity;

				this.service.cart.line_items[item].category = this.cartsItem.category.

				this.service.cart.line_items[item].restaurantId = this.cartsItem.restaurantId;
				this.service.cart.line_items[item].restaurantName = this.cartsItem.restaurantName;
				this.service.cart.line_items[item].owner_id = this.cartsItem.owner_id;

				this.service.cart.line_items[item].extra = extra;

				if (this.service.cart.line_items[item].extra) {

					for (let ii = 0; ii <= this.service.cart.line_items[item].extra.length - 1; ii++) {
						if (this.product_id === this.service.cart.line_items[item].extra[ii].product_id) {
							if (extra[ii].selected === true) {
								this.service.cart.line_items[item].extra[ii].quantity += 1;
							} else {
								this.service.cart.line_items[item].extra[ii].quantity += 0;
							}
						}
					}
				}
				this.service.cart.line_items[item].quantity += 1;
				this.service.proqty[this.product_id] += 1;
				this.service.total += parseFloat(this.service.cart.line_items[item].price);

				if (this.service.cart.extraOptions) {
					for (let ii = 0; ii <= this.service.cart.extraOptions.length - 1; ii++) {
						if (this.product_id === this.service.cart.extraOptions[ii].product_id) {
							this.service.total += parseFloat(this.service.cart.extraOptions[ii].value);
						}
					}
				}
				this.values.qty += 1;

				var itemAdded = true;
			}
		}

		if (!itemAdded) {
			this.extraPrice = 0;

			this.cartItem = [];

			this.cartItem.product_id = this.product_id;

			this.cartItem.quantity = 1;
			this.service.proqty[this.product_id] = 1;

			this.cartItem.name = name;
			this.cartItem.image = image;
			this.cartItem.price = price;
			this.cartItem.stock = stock;

			this.cartItem.restaurantId = this.id;
			this.cartItem.restaurantName = this.title;
			this.cartItem.restaurantName = this.owner_id;
			this.cartItem.category = category;

			this.cartItem.extra = [];
			for (let ii = 0; ii <= this.service.cart.extraOptions.length - 1; ii++) {
				if (this.product_id === this.service.cart.extraOptions[ii].product_id) {
					this.service.total += parseFloat(this.service.cart.extraOptions[ii].value);
				}
			}
			for (let ii = 0; ii <= extra.length - 1; ii++) {
				if (this.product_id === extra[ii].product_id) {
					if (extra[ii].selected === true) {
						extra[ii].quantity = 1;
					} else {
						extra[ii].quantity = 0;
					}
					this.cartItem.extra[ii] = extra[ii];
				}
			}
			this.service.total += parseFloat(price);
			this.service.total += parseFloat(this.extraPrice);
			this.values.qty += 1;
			this.service.cart.line_items.push(this.cartItem);
		}
		this.cartItem = {};
		this.router.navigate(['/cart']);
	}

	getFavoriteItem() {
		this.service.getFavoriteItem(this.product_id).on('value', (snapshot) => {
			if (snapshot.val() == null) {
				this.favorite = false;
				console.log(this.favorite);
			} else {
				this.favorite = true;
			}
		});
	}

	addToFavourite(data) {
		this.service.addToFavorite(data, this.product_id);
		this.favorite = true;
	}

	removeFavourite() {
		this.service.removeFavourite(this.product_id);
		this.favorite = false;
	}

	ngOnInit() {
	}

	checkOptions(extraOption) {
		if (extraOption.selected && this.service.cart.extraOptions.length !== 0) {
			for (let ii = 0; ii <= this.service.cart.extraOptions.length - 1; ii++) {
				if (this.service.cart.extraOptions[ii].id === extraOption.id) {
					this.service.cart.extraOptions.splice(ii, 1);
					extraOption.product_id = this.product_id;
					this.service.cart.extraOptions.push(extraOption);
					break;
				} else {
					extraOption.product_id = this.product_id;
					this.service.cart.extraOptions.push(extraOption);
					for (let jj = 0; jj <= this.service.cart.extraOptions.length - 1; jj++) {
						if (this.product_id === this.service.cart.extraOptions[jj].product_id) {
						}
					}
					break;
				}
			}
		} else if (!extraOption.selected && this.service.cart.extraOptions.length !== 0) {
			for (let ii = 0; ii <= this.service.cart.extraOptions.length - 1; ii++) {
				if (this.service.cart.extraOptions[ii].id === extraOption.id) {
					this.service.cart.extraOptions.splice(ii, 1);
					break;
				}
			}
		} else {
			extraOption.product_id = this.product_id;
			this.service.cart.extraOptions.push(extraOption);

			for (let ii = 0; ii <= this.service.cart.extraOptions.length - 1; ii++) {

				if (this.product_id === this.service.cart.extraOptions[ii].product_id) {
				}
			}
		}
	}

	async presentAlert(title, msg) {
		const alert = await this.alertCtrl.create({
			header: title,
			message: msg,
			buttons: ['OK']
		});
		await alert.present();
	}
	

	async presentConfirmAlert(category, stock, name, price, image, extra) {
		const alert = await this.alertCtrl.create({
			message: 'Deseja Adicionar esse Produto ao Carrinho?',
			buttons: [{
				text: 'Sim',
				handler: () => {
					this.addToCart(category, stock, name, price, image, extra);
				}
			}]
		});
		await alert.present();
	}
}
