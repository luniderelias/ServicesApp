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
	name: any;
	ownerId: any;
	productId: any;
	categoryId: any;
	restaurantName: any;

	loading = false;
	quantity: any;
	product: any;
	cartItem: any = {};
	cartsItem: any = {};
	ionState: any = {};

	favoriteItem: any;
	extraOptions: any;
	extraOptionsPrice: any;
	extraPrice: any;
	currentExtraItemQuantity: any;
	productPrice: any;

	restaurantId: any;
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
		this.loading = true;
		this.quantity = '1';

		this.route.params.subscribe(params => {
			this.id = params.id;
			this.name = params.name;
			this.ownerId = params.owner_id;
			this.categoryId = params.cat_id;
			this.restaurantName = params.res_name;
			this.service.getItemDetail(this.id).on('value', (snapshot) => {

				this.params.data = [];
				this.params.data.extraOptions = [];
				this.currentExtraItemQuantity = 0;

				this.service.getItemExtraOptionsDetail(this.id).on('value', (extraSnapshot) => {

					this.extraOptions = [];
					extraSnapshot.forEach(snap => {
						for (const item in this.service.cart.line_items) {
							if (this.id === this.service.cart.line_items[item].product_id) {
								for (const extras in this.service.cart.line_items[item].extra) {
									if (snap.key === this.service.cart.line_items[item].extra[extras].id) {
										this.currentExtraItemQuantity = this.service.cart.line_items[item].extra[extras].quantity;
									}
								}
							}
						}
						this.extraOptions.push({
							id: snap.key,
							name: snap.val().name,
							value: this.formatMoney(snap.val().value),
							product_id: this.id,
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
				this.productPrice = this.formatMoney(snapshot.val().price);
				this.params.data.stock = snapshot.val().stock;
				this.params.data.cod = snapshot.val().product_id;
				this.params.data.extraOptions = this.extraOptions;
				this.params.data.restaurantId = this.ownerId;
				this.params.data.restaurantName = this.restaurantName;
				this.params.data.owner_id = this.ownerId;


				this.getFavoriteItem();
			});
		});
	}

	addToCart(cod, categories, category, stock, name, price, image, extra) {
		let itemAdded = false;

		for (const item in this.service.cart.line_items) {
			if (this.id === this.service.cart.line_items[item].product_id) {
				if (stock <= 0) {
					this.presentAlert('Ops!', 'Não temos este produto em estoque no momento.');
					return;
				}
				this.extraPrice = 0;

				this.cartsItem = [];

				this.service.proqty[this.id] += 1;

				this.cartsItem.name = name;
				this.cartsItem.category = category;
				this.cartsItem.categories = categories;
				this.cartsItem.image = image;
				this.cartsItem.price = price;
				this.cartsItem.stock = stock;
				this.cartsItem.product_id = this.id;
				this.cartsItem.cod = cod;
				this.cartsItem.restaurantId = this.ownerId;
				this.cartsItem.restaurantName = this.restaurantName;
				this.cartsItem.owner_id = this.ownerId;

				this.cartsItem.quantity = this.service.cart.line_items[item].quantity;

				this.cartsItem.extra = [];
				this.service.cart.line_items[item] = [];

				for (let ii = 0; ii <= extra.length - 1; ii++) {
					if (this.id === extra[ii].product_id) {
						this.cartsItem.extra[ii] = extra[ii];
					}
				}
				this.service.cart.line_items[item].image = this.cartsItem.image;
				this.service.cart.line_items[item].name = this.cartsItem.name;
				this.service.cart.line_items[item].stock = this.cartsItem.stock;
				this.service.cart.line_items[item].product_id = this.cartsItem.product_id;
				this.service.cart.line_items[item].cod = this.cartsItem.cod;
				this.service.cart.line_items[item].price = this.cartsItem.price;
				this.service.cart.line_items[item].quantity = this.cartsItem.quantity;
				this.service.cart.line_items[item].category = this.cartsItem.category;
				this.service.cart.line_items[item].categories = this.cartsItem.categories;
				this.service.cart.line_items[item].restaurantId = this.cartsItem.restaurantId;
				this.service.cart.line_items[item].restaurantName = this.cartsItem.restaurantName;
				this.service.cart.line_items[item].owner_id = this.cartsItem.owner_id;
				this.service.cart.line_items[item].extra = extra;

				if (this.service.cart.line_items[item].extra) {
					for (let ii = 0; ii <= this.service.cart.line_items[item].extra.length - 1; ii++) {
						if (this.id === this.service.cart.line_items[item].extra[ii].product_id) {
							if (extra[ii].selected === true) {
								this.service.cart.line_items[item].extra[ii].quantity += 1;
							} else {
								this.service.cart.line_items[item].extra[ii].quantity += 0;
							}
						}
					}
				}
				this.service.cart.line_items[item].quantity += 1;
				this.service.proqty[this.id] += 1;
				this.service.total += parseFloat(this.service.cart.line_items[item].price);

				if (this.service.cart.extraOptions) {
					for (let ii = 0; ii <= this.service.cart.extraOptions.length - 1; ii++) {
						if (this.id === this.service.cart.extraOptions[ii].product_id) {
							this.service.total += parseFloat(this.service.cart.extraOptions[ii].value);
						}
					}
				}
				this.values.qty += 1;

				itemAdded = true;
			}
		}
		if (!itemAdded) {
			this.extraPrice = 0;

			this.cartItem = [];

			this.cartItem.product_id = this.id;

			this.cartItem.quantity = 1;
			this.service.proqty[this.id] = 1;

			this.cartItem.name = name;
			this.cartItem.image = image;
			this.cartItem.price = price;
			this.cartItem.stock = stock;
			this.cartItem.cod = cod;

			this.cartItem.restaurantId = this.id;
			this.cartItem.restaurantName = this.restaurantName;
			this.cartItem.restaurantId = this.ownerId;
			this.cartItem.category = category;
			this.cartItem.categories = categories;

			this.cartItem.extra = [];
			for (let ii = 0; ii <= this.service.cart.extraOptions.length - 1; ii++) {
				if (this.id === this.service.cart.extraOptions[ii].product_id) {
					this.service.total += parseFloat(this.service.cart.extraOptions[ii].value);
				}
			}
			for (let ii = 0; ii <= extra.length - 1; ii++) {
				if (this.id === extra[ii].product_id) {
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
		try {
			this.service.getFavoriteItem(this.id).on('value', (snapshot) => {
				if (snapshot.val() == null) {
					this.favorite = false;
				} else {
					this.favorite = true;
				}
				this.loading = false;
			});
		} catch (error) {
			this.loading = false;
		}
	}

	addToFavourite(data) {
		this.service.addToFavorite(data, this.id);
		this.favorite = true;
	}

	removeFavourite() {
		this.service.removeFavourite(this.id);
		this.favorite = false;
	}

	ngOnInit() {
	}

	checkOptions(extraOption) {
		if (extraOption.selected && this.service.cart.extraOptions.length !== 0) {
			for (let ii = 0; ii <= this.service.cart.extraOptions.length - 1; ii++) {
				if (this.service.cart.extraOptions[ii].id === extraOption.id) {
					this.service.cart.extraOptions.splice(ii, 1);
					extraOption.product_id = this.id;
					this.service.cart.extraOptions.push(extraOption);
					break;
				} else {
					extraOption.product_id = this.id;
					this.service.cart.extraOptions.push(extraOption);
					for (let jj = 0; jj <= this.service.cart.extraOptions.length - 1; jj++) {
						if (this.id === this.service.cart.extraOptions[jj].product_id) {
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
			extraOption.product_id = this.id;
			this.service.cart.extraOptions.push(extraOption);

			for (let ii = 0; ii <= this.service.cart.extraOptions.length - 1; ii++) {

				if (this.id === this.service.cart.extraOptions[ii].product_id) {
				}
			}
		}
	}


	async presentConfirmAlert(cod, categories, category, stock, name, price, image, extra) {
		if (stock <= 0) {
			this.presentAlert('Ops!', 'Não temos esse produto em estoque.');
		} else {
			const alert = await this.alertCtrl.create({
				message: 'Deseja Adicionar esse Produto ao Carrinho?',
				buttons: [{
					text: 'Sim',
					handler: () => {
						this.addToCart(cod, categories, category, stock, name, price, image, extra);
					}
				}]
			});
			await alert.present();
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

	formatMoney(n) {
		if (n) {
			const num = parseFloat(n);
			return num.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, '$1.');
		} else {
			return;
		}
	}
}
