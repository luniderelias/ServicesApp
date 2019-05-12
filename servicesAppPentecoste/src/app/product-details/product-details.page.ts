import { Component, OnInit } from '@angular/core';
import { Events, ToastController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
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

				console.log(snapshot.val());


				this.params.data = [];


				this.params.data.extraOptions = [];

				this.currentExtraItemQuantity = 0;

				console.log(this.service.cart.line_items);


				this.service.getItemExtraOptionsDetail(this.product_id).on('value', (snapshot) => {

					console.log(snapshot.val());

					this.extraOptions = [];





					snapshot.forEach(snap => {


						for (let item in this.service.cart.line_items) {

							if (this.product_id == this.service.cart.line_items[item].product_id) {
								for (let extras in this.service.cart.line_items[item].extra) {

									if (snap.key == this.service.cart.line_items[item].extra[extras].id) {


										this.currentExtraItemQuantity = this.service.cart.line_items[item].extra[extras].quantity;
										console.log(this.service.cart.line_items[item].extra[extras].quantity);
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

					console.log(this.extraOptions);


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
				console.log(this.params.data);
			});
		});


	}


	addToCart(name, price, image, extra) {


		var itemAdded = false;
		for (let item in this.service.cart.line_items) {
			if (this.product_id == this.service.cart.line_items[item].product_id) {

				this.extraPrice = 0;

				this.cartsItem = [];


				this.service.proqty[this.product_id] += 1;

				console.log(this.service.proqty[this.product_id]);
				this.cartsItem.name = name;
				this.cartsItem.image = image;
				this.cartsItem.price = price;
				this.cartsItem.product_id = this.product_id;
				this.cartsItem.restaurantId = this.id;
				this.cartsItem.restaurantName = this.title;
				this.cartsItem.owner_id = this.owner_id;

				this.cartsItem.quantity = this.service.cart.line_items[item].quantity;

				this.cartsItem.extra = [];

				this.service.cart.line_items[item] = [];


				for (var i = 0; i <= extra.length - 1; i++) {



					if (this.product_id == extra[i].product_id) {


						this.cartsItem.extra[i] = extra[i];

						console.log(this.cartsItem.extra);

					}

				}



				this.service.cart.line_items[item].image = this.cartsItem.image;

				this.service.cart.line_items[item].name = this.cartsItem.name;

				this.service.cart.line_items[item].product_id = this.cartsItem.product_id;



				this.service.cart.line_items[item].price = this.cartsItem.price;

				this.service.cart.line_items[item].quantity = this.cartsItem.quantity;

				this.service.cart.line_items[item].restaurantId = this.cartsItem.restaurantId;
				this.service.cart.line_items[item].restaurantName = this.cartsItem.restaurantName;
				this.service.cart.line_items[item].owner_id = this.cartsItem.owner_id;

				this.service.cart.line_items[item].extra = extra;

				console.log(this.service.cart.line_items[item].extra);

				if (this.service.cart.line_items[item].extra) {

					for (var i = 0; i <= this.service.cart.line_items[item].extra.length - 1; i++) {




						if (this.product_id == this.service.cart.line_items[item].extra[i].product_id) {


							console.log(extra[i].selected);

							if (extra[i].selected == true) {
								this.service.cart.line_items[item].extra[i].quantity += 1;
							}
							else {
								this.service.cart.line_items[item].extra[i].quantity += 0;
							}


							console.log(this.service.total);



						}

					}
				}



				this.service.cart.line_items[item].quantity += 1;



				console.log(this.service.cart.line_items[item].quantity);
				this.service.proqty[this.product_id] += 1;
				console.log(this.service.proqty[this.product_id]);


				this.service.total += parseFloat(this.service.cart.line_items[item].price);

				console.log(this.extraPrice);

				console.log(this.service.cart.extraOptions);

				if (this.service.cart.extraOptions) {

					for (var i = 0; i <= this.service.cart.extraOptions.length - 1; i++) {




						if (this.product_id == this.service.cart.extraOptions[i].product_id) {

							this.service.total += parseFloat(this.service.cart.extraOptions[i].value);

							//	this.cartsItem.extra[i] = extra[i];

							console.log(this.service.total);



						}

					}
				}



				console.log(this.service.cart.extraOptions);
				console.log(this.service.total);
				this.values.qty += 1;

				console.log(this.values.qty);
				var itemAdded = true;
				console.log(this.service.cart.line_items);

				console.log(this.service.cart);
			}
		}

		if (!itemAdded) {
			console.log(itemAdded);

			this.extraPrice = 0;



			this.cartItem = [];





			this.cartItem.product_id = this.product_id;
			console.log(this.cartItem.product_id);

			this.cartItem.quantity = 1;
			this.service.proqty[this.product_id] = 1;

			console.log(this.service.proqty[this.product_id]);
			this.cartItem.name = name;
			this.cartItem.image = image;
			this.cartItem.price = price;

			this.cartItem.restaurantId = this.id;
			this.cartItem.restaurantName = this.title;
			this.cartItem.restaurantName = this.owner_id;

			console.log(this.cartItem.restaurantId);

			this.cartItem.extra = [];

			console.log(extra.length);



			for (var i = 0; i <= this.service.cart.extraOptions.length - 1; i++) {



				if (this.product_id == this.service.cart.extraOptions[i].product_id) {


					//	this.cartItem.extra[i] = this.service.cart.extraOptions[i];

					console.log(this.cartItem.extra);

					this.service.total += parseFloat(this.service.cart.extraOptions[i].value);



					//	this.cartsItem.extra[i] = extra[i];

					console.log(this.service.total);

					//this.service.removeExtraProductCart(this.id,this.service.cart.extraOptions[i]);

					//this.service.updateExtraProductToCart(this.id,this.service.cart.extraOptions[i]);


				}

			}


			for (var i = 0; i <= extra.length - 1; i++) {



				if (this.product_id == extra[i].product_id) {


					if (extra[i].selected == true) {
						extra[i].quantity = 1;
					}
					else {
						extra[i].quantity = 0;
					}


					this.cartItem.extra[i] = extra[i];



					console.log(this.cartItem.extra);


				}

			}


			this.service.total += parseFloat(price);
			this.service.total += parseFloat(this.extraPrice);
			console.log(this.service.total);
			this.values.qty += 1;
			console.log(this.values.qty);



			this.service.cart.line_items.push(this.cartItem);

			console.log(this.cartItem);


			//  this.service.addProductToCart(this.cartItem);



			console.log(this.service.cart.line_items);
			console.log(this.service.cart.extraOptions);

			console.log(this.service.cart);
		}

		this.cartItem = {};

	}

	getFavoriteItem() {
		this.service.getFavoriteItem(this.product_id).on('value', (snapshot) => {
			//this.params.data.items = snapshot.val();

			if (snapshot.val() == null) {
				this.favorite = false;
				console.log(this.favorite);
			}
			else {
				console.log(snapshot.val());

				this.favorite = true;


			}



		});


	}

	addToFavourite(data) {
		console.log(data);
		this.service.addToFavorite(data, this.product_id);

		this.favorite = true;
	}

	removeFavourite() {
		console.log("product detail remove");
		this.service.removeFavourite(this.product_id);

		this.favorite = false;
	}

	ngOnInit() {
	}


	checkOptions(extraOption) {
		console.log(extraOption.selected);





		if (extraOption.selected && this.service.cart.extraOptions.length != 0) {

			for (var i = 0; i <= this.service.cart.extraOptions.length - 1; i++) {


				if (this.service.cart.extraOptions[i].id == extraOption.id) {


					this.service.cart.extraOptions.splice(i, 1);
					extraOption.product_id = this.product_id;


					this.service.cart.extraOptions.push(extraOption);




					//this.service.addExtraProductToCart(this.service.cart.extraOptions[i]);




					console.log(this.service.cart.extraOptions);

					break;
				}

				else {
					extraOption.product_id = this.product_id;

					this.service.cart.extraOptions.push(extraOption);

					for (var i = 0; i <= this.service.cart.extraOptions.length - 1; i++) {



						if (this.product_id == this.service.cart.extraOptions[i].product_id) {


							//this.service.addExtraProductToCart(this.service.cart.extraOptions[i]);


						}

					}

					console.log(this.service.cart.extraOptions);

					break;

				}


			}
		}

		else if (!extraOption.selected && this.service.cart.extraOptions.length != 0) {
			for (var i = 0; i <= this.service.cart.extraOptions.length - 1; i++) {
				if (this.service.cart.extraOptions[i].id == extraOption.id) {

					//this.service.removeExtraProductToCart(this.service.cart.extraOptions[i]);
					this.service.cart.extraOptions.splice(i, 1);

					//

					console.log(this.service.cart.extraOptions);
					break;

				}

			}

		}


		else {




			extraOption.product_id = this.product_id;
			//extraOption.quantity = 1;
			this.service.cart.extraOptions.push(extraOption);
			console.log(this.service.cart.extraOptions);



			//this.service.updateExtraProductToCart(this.id,this.service.cart.extraOptions[i]);

			for (var i = 0; i <= this.service.cart.extraOptions.length - 1; i++) {



				if (this.product_id == this.service.cart.extraOptions[i].product_id) {


					//this.service.addExtraProductToCart(this.service.cart.extraOptions[i]);


				}

			}




		}




	}

}
