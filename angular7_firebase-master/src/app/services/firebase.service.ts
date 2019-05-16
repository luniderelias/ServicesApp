import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object

import * as firebase from 'firebase';




@Injectable({
  providedIn: 'root'
})
export class FirebaseService {


  listings: AngularFireList<any[]>;
  listing: AngularFireObject<any>;

  restaurants: AngularFireList<any[]>;
  restaurant: AngularFireObject<any>;

  categories: AngularFireList<any[]>;
  category_details: AngularFireObject<any>;

  items: AngularFireList<any[]>;
  item_details: AngularFireObject<any>;

  orders: AngularFireList<any[]>;
  dashboardOrders: AngularFireList<any[]>;
  order_details: AngularFireObject<any>;

  allTableOrders: AngularFireList<any[]>;
  allTableOrdersDetails: AngularFireObject<any>;

  cities: AngularFireList<any[]>;
  cityDetail: AngularFireObject<any>;

  districts: AngularFireList<any[]>;
  districtDetail: AngularFireObject<any>;

  streets: AngularFireList<any[]>;
  streetDetail: AngularFireObject<any>;

  buildings: AngularFireList<any[]>;
  buildingDetail: AngularFireObject<any>;


  extraItemList: AngularFireList<any[]>;
  extraItemDetail: AngularFireObject<any>;


  chooseCategories: AngularFireList<any[]>;
  category_choose_details: AngularFireObject<any>;


  itemChoose: AngularFireList<any[]>;
  item_choose_details: AngularFireObject<any>;

  extraChooseItemList: AngularFireList<any[]>;
  extraChooseItemDetail: AngularFireObject<any>;

  notifications: AngularFireList<any[]>;
  notification_details: AngularFireObject<any>;
  eraseNotificationsPath: any;

  dashboard: AngularFireObject<any>;






  users: any;
  folder: any;
  itemFolder: any;
  restaurantFolder: any;
  categoryFolder: any;
  orderList: any;
  itemExtraList: any;
  itemChooseExtraList: any;
  userDetail: any;
  allTableOrdersList: any;
  //allTableOrders: any;
  paypal: any;
  stripe: any;
  tax: any;

  productId: any;

  constructor(private af: AngularFireDatabase) {

    this.listings = this.af.list('/listings') as AngularFireList<Listing[]>;
    this.restaurants = this.af.list('/restaurants') as AngularFireList<Listing[]>;
    this.categories = this.af.list('/category') as AngularFireList<Category[]>;
    this.items = this.af.list('/items') as AngularFireList<Item[]>;
    this.orders = this.af.list('/orders', (ref) => {
      return ref.orderByChild('timeStamp').limitToLast(100);
    }
  );
    this.dashboardOrders = this.af.list('/orders', (ref) => {
        return ref.limitToLast(10).orderByChild('timeStamp');
      }
    );
    this.notifications = this.af.list('/notifications/' + localStorage.getItem('current_user_role')) as AngularFireList<Notification[]>;
    this.eraseNotificationsPath = firebase.database().ref('/notifications/' + localStorage.getItem('current_user_role'));
    this.orderList = firebase.database().ref('/orders');
    this.itemExtraList = firebase.database().ref('/items');
    this.userDetail = firebase.database().ref('/users');
    this.allTableOrders = this.af.list('/AllTableOrders') as AngularFireList<TableOrder[]>;
    this.allTableOrdersList = firebase.database().ref('/AllTableOrders');
    this.paypal = firebase.database().ref('/paypal');
    this.stripe = firebase.database().ref('/stripe');
    this.cities = this.af.list('/city') as AngularFireList<City[]>;
    this.districts = this.af.list('/districts') as AngularFireList<District[]>;
    this.streets = this.af.list('/streets') as AngularFireList<Street[]>;
    this.buildings = this.af.list('/apartments') as AngularFireList<Building[]>;

    this.users = firebase.database().ref('/users');


    this.chooseCategories = this.af.list('/categoryChoose') as AngularFireList<Category[]>;
    this.itemChoose = this.af.list('/itemChoose') as AngularFireList<Item[]>;
    this.itemChooseExtraList = firebase.database().ref('/itemChoose');

    this.tax = firebase.database().ref('/tax');


    this.folder = 'listingimages';
    this.itemFolder = 'itemimages';
    this.restaurantFolder = 'restaurantimages';
    this.categoryFolder = 'categoryimages';

  }

  updateChooseExtraItem(id, extraItem) {
    return firebase.database().ref('/items').child(this.productId).child("extraOptions").child(id).update({
      name: extraItem.name,
      selected: "false",
      value: extraItem.value
    });
  }

  getItemEditExtraDetail(id) {

    console.log(this.productId);

    this.extraItemDetail = this.af.object('/items/' + this.productId + '/extraOptions/' + id) as AngularFireObject<Extra>;
    return this.extraItemDetail;

  }

  getItemExtraDetail(id) {

    this.extraItemList = this.af.list('/items/' + id + '/extraOptions/') as AngularFireList<Extra[]>
    return this.extraItemList;

  }

  setProductId(id) {
    this.productId = id;
  }

  onExtraItemDelete(item_id, extra_id) {
    return this.itemExtraList.child(item_id).child("extraOptions").child(extra_id).remove();
  }

  addExtraItem(id, extraItem) {
    console.log(id);
    console.log(extraItem);

    return firebase.database().ref('/items').child(id).child("extraOptions").push({
      name: extraItem.name,
      selected: "false",
      value: extraItem.price
    });
  }

  addStripeConfiguration(stripe) {
    console.log(stripe);

    this.stripe.set({
      publishable: stripe.publishable,
      secret: stripe.secret
    });
  }

  addPaypalConfiguration(paypal) {
    console.log(paypal);

    this.paypal.set({
      sandbox: paypal.sandbox,
      production: paypal.production
    });
  }

  updateBuilding(id, building) {
    return this.buildings.update(id, building);
  }

  getBuildingDetails(id) {
    this.buildingDetail = this.af.object('/apartments/' + id) as AngularFireObject<Building>
    return this.buildingDetail;

  }

  updateStreet(id, street) {
    return this.streets.update(id, street);
  }

  getStreetDetails(id) {
    this.streetDetail = this.af.object('/streets/' + id) as AngularFireObject<Street>
    return this.streetDetail;
  }

  updateDistrict(id, district) {
    return this.districts.update(id, district);
  }

  getDistrictDetails(id) {
    this.districtDetail = this.af.object('/districts/' + id) as AngularFireObject<District>
    return this.districtDetail;
  }

  updateCity(id, city) {
    return this.cities.update(id, city);
  }

  getCityDetails(id) {
    this.cityDetail = this.af.object('/city/' + id) as AngularFireObject<City>;
    return this.cityDetail;
  }

  addNewBuilding(buildingName) {
    return this.buildings.push(buildingName);
  }

  addNewUser(user) {
    return this.users.push(user.email.split('@')[0]).update(user);
  }

  getUserDetails(id) {
    this.userDetail = this.af.object('/users/' + id) as AngularFireObject<User>;
    return this.userDetail;
  }

  addNewStreet(streetName) {
    return this.streets.push(streetName);
  }

  addNewDistrict(districtName) {
    return this.districts.push(districtName);
  }

  addNewCity(cityName) {
    return this.cities.push(cityName);
  }

  deleteBuilding(buildingKey) {
    return this.buildings.remove(buildingKey);

  }

  getBuildings() {
    return this.buildings;
  }


  deleteStreet(streetKey) {
    return this.streets.remove(streetKey);

  }

  getStreets() {
    return this.streets;
  }

  getDistricts() {
    return this.districts;
  }

  deleteDistrict(districtKey) {
    return this.districts.remove(districtKey);

  }

  getCities() {

    return this.cities;
  }

  deleteCity(cityKey) {
    return this.cities.remove(cityKey);
  }


  updateRestaurantOrderStatus(id, order_details) {

    console.log(id);
    console.log(order_details);
    return firebase.database().ref('/orders').child(id).update({
      status: order_details.status
    });

  }

  getOrderDetail(id) {
    return this.orderList.child(id);
  }



  getOrders() {
    return this.orders;
  }

  getDashboardOrders() {
    return this.dashboardOrders;
  }

  addItem(item) {

    let storageRefItem = firebase.storage().ref();
    for (let selectedItemFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]) {

      //let path = '/${this.folder}/${selectedFile.name}';
      let pathItem = `/${this.itemFolder}/${selectedItemFile.name}`;
      let iRefItem = storageRefItem.child(pathItem);
      return iRefItem.put(selectedItemFile).then((snapshot) => {
        item.image = pathItem;

        let storageRef = firebase.storage().ref();
        let spaceRef = storageRef.child(item.image);

        console.log(item.image);
        return storageRef.child(item.image).getDownloadURL().then((url) => {
          // Set image url
          console.log(url);


          item.image_firebase_url = url;

          return this.items.push(item);

        }).catch((error) => {
          console.log(error);
        });

        //return this.items.push(item);
      });
    }

  }

  updateItemWithImage(id, item) {

    return this.items.update(id, item);

  }

  updateItem(id, item) {

    return this.items.update(id, item);

  }

  deleteItem(id) {

    return this.items.remove(id);

  }

  getItemDetails(id) {

    this.item_details = this.af.object('/items/' + id) as AngularFireObject<Item>
    return this.item_details;
  }

  getItems() {
    return this.items;

  }


  deleteCategory(id) {

    return this.categories.remove(id);

  }

  updateCategoryWithImage(id, category) {


    return this.categories.update(id, category);



  }

  updateCategory(id, category) {
    return this.categories.update(id, category);
  }


  getCategoryDetails(cat_id) {
    this.category_details = this.af.object('/category/' + cat_id) as AngularFireObject<Category>
    return this.category_details;

  }

  addCategory(category) {


    let storageRefItem = firebase.storage().ref();
    for (let selectedItemFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]) {

      
      let pathItem = `/${this.categoryFolder}/${selectedItemFile.name}`;
      let iRefItem = storageRefItem.child(pathItem);
      return iRefItem.put(selectedItemFile).then((snapshot) => {
        category.image = pathItem;

        let storageRef = firebase.storage().ref();
        let spaceRef = storageRef.child(category.image);

        console.log(category.image);
        return storageRef.child(category.image).getDownloadURL().then((url) => {

          console.log(url);


          category.firebase_url = url;

          return this.categories.push(category);

        }).catch((error) => {
          console.log(error);
        });



      });
    }




  }


  getCategories() {
    this.categories = this.af.list('/category') as AngularFireList<Category[]>
    return this.categories;
  }

  updateRestaurant(id, restaurant) {

    return this.restaurants.update(id, restaurant);

  }


  updateRestaurantWithImage(id, restaurant) {


    return this.restaurants.update(id, restaurant);



  }

  getRestaurantDetails(id) {
    this.restaurant = this.af.object('/restaurants/' + id) as AngularFireObject<Restaurant>
    return this.restaurant;
  }

  restaurantCategory: AngularFireList<any>;
  getRestaurantCategories(id) {

    //const uid = this.authService.getUserId();

    this.restaurantCategory = this.af.list('/category/', ref => ref.orderByChild('res_name').equalTo(id)) as AngularFireList<Category>;
    // .subscribe(data => {
    //  console.log(data);
    //});
    return this.restaurantCategory;
  }

  /**
      this.restaurantCategory = this.af.list('/category/',
              {
            query: {
              orderByChild: 'res_name',
              equalTo: id
            }
            }) as AngularFireList<Category>;
        return this.restaurantCategory;
      }
  	
    */

  deleteRestaurant(id) {

    return this.restaurants.remove(id);



  }

  getRestaurants() {

    return this.restaurants;
  }

  addRestaurant(restaurant) {
    let storageRefItem = firebase.storage().ref();
    for (let selectedItemFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]) {

      //let path = '/${this.folder}/${selectedFile.name}';
      let pathItem = `/${this.restaurantFolder}/${selectedItemFile.name}`;
      let iRefItem = storageRefItem.child(pathItem);
      return iRefItem.put(selectedItemFile).then((snapshot) => {
        restaurant.image = pathItem;

        let storageRef = firebase.storage().ref();
        let spaceRef = storageRef.child(restaurant.image);

        console.log(restaurant.image);
        return storageRef.child(restaurant.image).getDownloadURL().then((url) => {
          // Set image url
          console.log(url);


          restaurant.firebase_url = url;

          return this.restaurants.push(restaurant);

        }).catch((error) => {
          console.log(error);
        });



      });
    }


  }


  getNotifications() {
    return this.notifications;
  }

  deleteNotification(id) {
    return this.notifications.remove(id);
  }

  deleteAllNotifications() {
    this.eraseNotificationsPath.set({});
  }

  getNotificationDetails(id) {
    this.notification_details = this.af.object('/notifications/' + id) as AngularFireObject<Notification>;
    return this.restaurant;
  }


  getDashBoardData() {
    this.dashboard = this.af.object('/dashboard') as AngularFireObject<Dashboard>;
    return this.dashboard;
  }

}


interface Listing {
  $key?: string;
  title?: string;
  type?: string;
  image?: string;
  city?: string;
  owner?: string;
  bedrooms?: string;
  path?: any;
}

interface Notification {
  $key?: string;
  notification?: any;
  data?: any;
}

interface Dashboard {
  $key?: string;
  totalSales?: any;
  totalOrdersValue?: any;
  totalOrders?: any;
  dailyRevenue?: any;
  dailyOrders?: any;
  cityRevenue?: any;
  cityOrders?: any;
}

interface Restaurant {
  $key?: string;
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
  firebase_url?: string;
  user_id?: string;
}

interface Category {
  $key?: string;
  cat_id?: string;
  cat_name?: string;
  res_name?: string;
  image?: string;
  firebase_url?: string;
}

interface City {
  $key?: string;
  name?: string;
}

interface District {
  $key?: string;
  name?: string;
}

interface Street {
  $key?: string;
  name?: string;
}

interface Building {
  $key?: string;
  name?: string;
}

interface User {
  $key?: string;
  name?: string;
  address?: string;
  displayName?: string;
  email?: string;
  lat?: string;
  lng?: string;
  phone?: string;
}



interface Item {
  $key?: string;
  available?: string;
  category?: string;
  description?: string;
  image?: string;
  name?: string;
  price?: number;
  stock?: number;
  popularity?: number;
  categories?: string;
  percent?: string;
  image_firebase_url?: string;
  lenght?: string;
}

interface Extra {
  $key?: string;
  name: string;
  selected: string;
  value: string;
}


interface Order {
  $key?: string;
  address_id?: string;
  created?: string;
  item_qty?: string;
  order_date_time?: string;
  payment_id?: string;
  product_firebase?: string;
  product_id?: string;
  product_image?: string;
  product_price?: string;
  product_total_price?: string;
  restaurant_id?: string;
  restaurant_name?: string;
  status?: string;
  user_id?: string;
  user_name?: string;
  restaurant_owner_id?: string;
  checked?: string;
}

interface TableOrder {
  $key?: string;
  restaurant_id?: string;
  restaurant_address?: string;
  restaurant_description?: string;
  restaurant_backgroundImage?: string;
  restaurant_firebase_url?: string;
  restaurant_icon?: string;
  restaurant_iconText?: string;
  restaurant_images?: string;
  restaurant_info?: string;
  restaurant_lat?: string;
  restaurant_long?: string;
  restaurant_mark?: string;
  restaurant_market?: string;
  restaurant_option?: string;
  restaurant_outlet?: string;
  restaurant_phonenumber?: string;
  restaurant_show?: string;
  restaurant_subtitle?: string;
  restaurant_title?: string;
  date?: string;
  person?: string;
  time?: string;
  userId?: string;
  status?: string;
  timeStamp?: string;
  reverseOrder?: string;
}
