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

import { RestaurantInterface } from '../../models/restaurant';
import { ItemInterface } from '../../models/item';
import { DatatableComponent } from '@swimlane/ngx-datatable/release';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  restaurants: any;
  restaurant2: any;
  temp:any;
  items: any;
  private RestaurantInterface: RestaurantInterface[];
  private ItemInterface: ItemInterface[];
  public isAdmin: any = null;
  public userUid: string = null;
  @ViewChild(DatatableComponent) table: DatatableComponent;

  constructor(private firebaseService: FirebaseService, private authService: AuthService, private router: Router) {

    this.isAdmin = localStorage.getItem('current_user_role') === 'admin' || localStorage.getItem('current_user_role') === 'super_admin';

    this.firebaseService.getItems().snapshotChanges().subscribe(items => {
      this.items = [];
      this.temp = [];
      items.forEach(item => {

        console.log(item);


        let a = item.payload.toJSON();
        a['$key'] = item.key;

        console.log(a);
        

        this.items.push(a as ItemInterface);
        this.temp.push(a as ItemInterface);



      });
    });
   }

  ngOnInit() {}



  onRestaurantDelete(id) {

    this.firebaseService.deleteRestaurant(id);

    this.router.navigate(['/restaurants']);
  }

  goToRestaurantDetails(restaurant) {
    console.log(restaurant);

    this.router.navigate(['/restaurants']);
  }

  
  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
      console.log(d)
      return d.product_id.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.items = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

}
