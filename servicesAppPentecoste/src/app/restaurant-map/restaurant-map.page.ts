import { Component, OnInit } from '@angular/core';
import { Platform, Events , LoadingController} from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Values } from '../../providers/values';
import { ServiceProvider } from '../../providers/service';
import * as firebase from 'firebase';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
import { Stripe } from '@ionic-native/stripe/ngx';
import { Router } from '@angular/router';

import { ActivatedRoute } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';



declare var google;
declare var map;
declare var infoWindow;

@Component({
  selector: 'app-restaurant-map',
  templateUrl: './restaurant-map.page.html',
  styleUrls: ['./restaurant-map.page.scss'],
})
export class RestaurantMapPage implements OnInit {
	
	map : any;
	image: any;
	dataInfo: any;
	userList: any;
	distanceRestaurant: any;
	
	dataInfoLat : any;
	dataInfoLong : any;
	dataInfoImg : any;
	dataInfoId : any;
	dataInfoTitle : any;

  constructor(
  public geo:Geolocation,public platform: Platform, 
  public service : ServiceProvider,
  private router: Router,
		private route: ActivatedRoute) { 
		
	  let that = this;
	  let map : any;
	  let infoWindow : any;
	  let beachMarker: any;
	  let image: any;
	  
	  
	  this.route.params.subscribe(params => {
			
								console.log(params.lat);
								console.log(params.long);
								
								this.dataInfoLat = params.lat;
								this.dataInfoLong = params.long;
								this.dataInfoImg = params.img;
								this.dataInfoId = params.id;
								this.dataInfoTitle = params.title;
								
								console.log(this.dataInfoLat);
																
						});
	  
	 // this.dataInfo = navParams.data.data;
	  
	  let options = {
		  frequency: 3000,
		  enableHighAccuracy: true
		};
	  
	  
	   this.geo.getCurrentPosition(options).then(resp =>{
			
			var uids = firebase.auth().currentUser.uid;

			firebase.database().ref('/users').child(uids).update({
					lat: resp.coords.latitude,
					lng: resp.coords.longitude,
				});
					
			
		

		}).catch(() =>{
			console.log("Error to get location");
		});
	  
	  
	  that.platform.ready().then(() => {
		  
		  var options = {
		  timeout: 5000
	  };
		  
		
	  });
	  
	  //this.start();

	  setTimeout(function(){
		  that.googleMap();
	  },2000);
  
  }
  
  start(){
    
  }
 
  stop(){
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }
  
  googleMap(){
	  let map : any;
	  let infoWindow : any;
	  let beachMarker: any;
	  let image: any;
	  
	 // let markers : any;
	 
	 
	  
	var uid = firebase.auth().currentUser.uid;
	  
				  console.log("service");
				  console.log(uid);
	  
	 
	  
	  
	  this.service.getRestaurantUserProfile(uid).on('value', snapshot =>{
			this.userList = snapshot.val();
			
    });
	  
	  
	  
	  var lats = parseFloat(this.dataInfoLat);
	  var longs = parseFloat(this.dataInfoLong);
	  
	  console.log(this.dataInfoLat);
	  console.log(this.dataInfoLong);
		
		map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: lats, lng: longs},
          zoom: 10
        });


        image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
		//var myIcons = new google.maps.MarkerImage("assets/images/icons/" + this.dataInfoImg, null, null, null, new google.maps.Size(30,30));
          beachMarker = new google.maps.Marker({
          position: {lat: lats, lng: longs},
          map: map,
		  //icon: myIcons
		  
        });
		
		var posUser = {
              lat: lats,
              lng: longs
            };
			
			
			infoWindow = new google.maps.InfoWindow;
			
			var userslist = firebase.auth().currentUser;
		
						var uids=userslist.uid;
						
						
			
			  firebase.database().ref('/cord').child(uids).child(this.dataInfoId).child("item_dis").on('value', snapshot =>{

									
					console.log(snapshot.val());
			
					infoWindow.setPosition(posUser);
					infoWindow.setContent('<h2>' + this.dataInfoTitle + '</h2>' + snapshot.val());
					infoWindow.open(map);
					map.setCenter(posUser);	
						
								
										//var myIcon = new google.maps.MarkerImage("assets/images/icons/" + info.images, null, null, null, new google.maps.Size(30,30));
					
					});	
				
					
					
					
						 // Additional Markers //
         var markers = [];
		 var distance = [];
        // infoWindow = new google.maps.InfoWindow();
        var createMarker = function (info,keys){
			
	
					console.log(info);
					  var userLists: any;
		
		var user = firebase.auth().currentUser;
		
	
						uid=user.uid;
						console.log(uid);
						console.log(info.key);
	
						  firebase.database().ref('/cord').child(uid).child(keys).child("item_dis").on('value', snapshot =>{

									
					console.log(snapshot.val());
			
										
						
								
										//var myIcon = new google.maps.MarkerImage("assets/images/icons/" + info.images, null, null, null, new google.maps.Size(30,30));
										var marker = new google.maps.Marker({
											position: new google.maps.LatLng(info.lat, info.long),
											map: map,
											animation: google.maps.Animation.DROP,
											title: info.title,
											//icon: myIcon,
										});
										marker.content = '<div class="infoWindowContent">' + snapshot.val() + '</div>';
										google.maps.event.addListener(marker, 'click', function(){
											infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
											infoWindow.open(map, marker);
										});
										markers.push(marker);
						
					
					});	
			
		
			
        }
		
		
		this.service.getRestaurantsList()
		   .on('value', function (snapshot) {
			
			
			snapshot.forEach(function(childSnapshot) {
					// key will be "fred" the first time and "barney" the second time
				    console.log(childSnapshot.val());
					console.log(childSnapshot.key);
					var key = childSnapshot.key;
					
					var val = childSnapshot.val();
				
					
					///console.log(childSnapshot.key());
	
								
					createMarker(childSnapshot.val(),childSnapshot.key);
			
		
								
								console.log(childSnapshot.val().lat);
								console.log(childSnapshot.val().long);
								//console.log(childSnapshot.val().title);
						
							 distance.push(calcDistance(childSnapshot.val(),childSnapshot.val().lat,childSnapshot.val().long,childSnapshot.key) + " kilometers away");
							 
							 //createMarker(childSnapshot.val(),distanceOfRestaurant);
						
								
				});
			
			
		
		});
		
		
		function calcDistance(resLocation,destination,destination1,res_id){
			 
			  var userLists: any;
		
		
		var user = firebase.auth().currentUser;
		
		
						uid=user.uid;
						
						
					  //this.service.getRestaurantUserProfile(uid).on('value', snapshot =>{
						  firebase.database().ref('/users').child(uid).on('value', snapshot =>{

					var cord = snapshot.val();
					
					console.log(cord.lat);
						console.log(cord.lng);
						
						
						
						
						var p1 = new google.maps.LatLng(destination, destination1);
						
						
						var p2 = new google.maps.LatLng(cord.lat, cord.lng);
					
						console.log("distance is "+google.maps.geometry.spherical.computeDistanceBetween(p1, p2)/1000);

						var distanceBetween= (google.maps.geometry.spherical.computeDistanceBetween(p1, p2))/1000;
						console.log(distanceBetween);
						
						
						
						
						
						firebase.database().ref('/cord').child(uid).child(res_id).update({    // set
						 item_dis : distanceBetween.toFixed(2) + "km distante"
					  });
						
						return distanceBetween;
					});	
			
			
		  }
		  
	
			
	
  }
  
  
  handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Erro: O serviço de Geolocalização falhou.' :
                              'Erro: Seu Dispositivo não suporta Geolocalização.');
        infoWindow.open(map);
      }

  ngOnInit() {
  }

}
