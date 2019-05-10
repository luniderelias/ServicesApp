import { Component, OnInit } from '@angular/core';
import { Events, ToastController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ServiceProvider } from '../../providers/service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

	id: any;
	productsList: any;
	categoryList: any;
	params:any = {};
	items: any;
	restaurantName: any;
	owner_id: any;
	cat_id: any;
	
	loading: any;
	title: any;
	
  constructor(
		public loadingCtrl: LoadingController, 
		private route: ActivatedRoute,
		public events: Events,
		public toastCtrl: ToastController, 
		private storage: Storage,
		public socialSharing: SocialSharing,
		public service: ServiceProvider
  ) { 
  
		
		
		this.route.params.subscribe(params => {
			
			console.log(params);
			
			this.id = params.id;
			this.title = params.title;
			this.owner_id = params.owner_id;
			this.cat_id = params.cat_id;
			
			
			this.service.getItemLists(this.cat_id).on('value', snapshot =>{
					this.productsList = [];
					

					snapshot.forEach( snap =>{
						this.productsList.push({
					  
						id: snap.key,
						price: snap.val().price,
						favorite: false,
						title: snap.val().name,
						image: snap.val().image_firebase_url
						});
					});
					
					console.log(this.productsList);
				});
			
			/**
			this.service.getRestaurantCategoryLists(this.id).on('value', snapshot =>{
					
					
					
						this.categoryList = [];

						
						this.loading.dismiss().then(() => {	
							snapshot.forEach( snap =>{
								this.categoryList.push({
							  
								id: snap.key,
								category: snap.val().cat_id,
								title: snap.val().cat_name,
								subtitle: snap.val().cat_name,
								ionBadge: snap.val().cat_name,
								image: snap.val().firebase_url
								});
							});
							
							console.log(this.categoryList);

							});

							
					
					
					
					
				});
				
				*/
				
				
				
		});
  
  }

  ngOnInit() {
	  
	  console.log("Products Page");
  }
  
  async presentLoading() {
		this.loading = await this.loadingCtrl.create({
			message: 'waiting',
			duration: 2000
		});
		return await this.loading.present();
	}

}