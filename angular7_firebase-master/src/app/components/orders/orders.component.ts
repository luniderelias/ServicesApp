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

import { OrderInterface } from '../../models/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  temp:any;
  orders: any;
  @ViewChild(DatatableComponent) table: DatatableComponent;

  constructor(private firebaseService: FirebaseService, private authService: AuthService, private router: Router) { }

  ngOnInit() {

    this.firebaseService.getOrders().snapshotChanges().subscribe(orders => {
      this.orders = [];
      this.temp = [];

      orders.forEach(item => {

        console.log(item);


        let a = item.payload.toJSON();
        a['$key'] = item.key;


        this.orders.push(a as OrderInterface);
        this.temp.push(a as OrderInterface);


      });
      
    });

    console.log(this.orders);

  }


  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
      console.log(d)
      return d.customerDetails.displayName.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.orders = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

}
