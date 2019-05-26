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
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
	
	userList: any;

  constructor(
  public geo:Geolocation, public platform: Platform,
  public service : ServiceProvider, public values: Values) {

	  let that = this;
	  let map : any;
	  let infoWindow : any;
	  let beachMarker: any;
	  let image: any;
	  
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

		});
	  
	  
	  that.platform.ready().then(() => {
		  
		  var options = {
		  timeout: 5000
	  };
		  
		
	  });
	  
	  //this.start();

	  setTimeout(function(){
		  that.googleMap();
	  },2000)


	  
	  
	 
	  
  }
  
  start(){
    //this.locationTracker.startTracking();
  }
 
  stop(){
    //this.locationTracker.stopTracking();
  }

  ngOnInit() {
  }
  
  googleMap(){
	  let map : any;
	  let infoWindow : any;
	  let beachMarker: any;
	  let image: any;
	  
	  
	
	  
	 // let markers : any;
	 
	 
	  
	var uid = firebase.auth().currentUser.uid;
	  
	  this.service.getRestaurantUserProfile(uid).on('value', snapshot =>{
			this.userList = snapshot.val();
			
    });
	  
		map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: this.userList.lat, lng: this.userList.lng},
          zoom: 6
        });

        image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
          beachMarker = new google.maps.Marker({
          position: {lat: this.userList.lat, lng: this.userList.lng},
          map: map,
          icon: image
        });
		
		var posUser = {
              lat: this.userList.lat,
              lng: this.userList.lng
            };
			
			
			infoWindow = new google.maps.InfoWindow;
				
					infoWindow.setPosition(posUser);
					infoWindow.setContent('Essa é sua localização');
					infoWindow.open(map);
					map.setCenter(posUser);
					
					
						 // Additional Markers //
         var markers = [];
		 var distance = [];
        // infoWindow = new google.maps.InfoWindow();
        var createMarker = function (info){
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(info.lat, info.long),
                map: map,
                animation: google.maps.Animation.DROP,
                title: info.title
            });
            marker.content = '<div class="infoWindowContent">' + info.info + '</div>';
            google.maps.event.addListener(marker, 'click', function(){
                infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                infoWindow.open(map, marker);
            });
            markers.push(marker);
        }
		
		
		this.service.getRestaurantsList()
		   .on('value', function (snapshot) {
			
			
			snapshot.forEach(function(childSnapshot) {
								createMarker(childSnapshot.val());
							 distance.push(calcDistance(childSnapshot.val().lat,childSnapshot.val().long,childSnapshot.key) + " kilometers away");
				});
			
			
		
		});
		
		
		function calcDistance(destination,destination1,res_id){
			 
			  var userLists: any;
		
			firebase.auth().onAuthStateChanged(function(user) {
					  if (user) {
						uid=user.uid;
						
						
					  //this.service.getRestaurantUserProfile(uid).on('value', snapshot =>{
						  firebase.database().ref('/users').child(uid).on('value', snapshot =>{

					var cord = snapshot.val();
					
						var p1 = new google.maps.LatLng(destination, destination1);
						
						
						var p2 = new google.maps.LatLng(cord.lat, cord.lng);

						var distanceBetween= (google.maps.geometry.spherical.computeDistanceBetween(p1, p2))/1000;
						
						firebase.database().ref('/cord').child(uid).child(res_id).update({    // set
						 item_dis : distanceBetween.toFixed(2) + "km distante"
					  });
						
						return distanceBetween;
					});	
					}
				});
		  }
		  
	
			
		
  }
  
  
  handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Erro: O serviço de geolocalização falhou.' :
                              'Erro: Seu dispositivo não suporta geolocalização.');
        infoWindow.open(map);
      }
	  
	  

}
