import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { BookInterface } from '../../models/book';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserInterface } from '../../models/user';
import { ViewChild, ElementRef, Input } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';
import { DatatableComponent } from '@swimlane/ngx-datatable/release';

import { RestaurantInterface } from '../../models/restaurant';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  stores: any;
  restaurant2: any;
  rows = [];


  private books: BookInterface[];
  private RestaurantInterface: RestaurantInterface[];
  public isAdmin: any = null;
  public userUid: string = null;
  @ViewChild(DatatableComponent) table: DatatableComponent;

  constructor(private firebaseService: FirebaseService, private authService: AuthService, private router: Router) {
    this.firebaseService.getRestaurants().snapshotChanges().subscribe(stores => {
      this.stores = [];
      stores.forEach(item => {
        console.log(item);


        const a = item.payload.toJSON();
        a['$key'] = item.key;

        console.log(a);

        this.stores.push(a as RestaurantInterface);



      });
    });
  }


  ngOnInit() { }



  onRestaurantDelete(id) {

    this.firebaseService.deleteRestaurant(id);

    this.router.navigate(['/restaurants']);
  }

  goToRestaurantDetails(store) {
    console.log(store);

    this.router.navigate(['/restaurants']);
  }

}

