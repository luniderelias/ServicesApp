import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ViewChild, ElementRef, Input } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';
import { DatatableComponent } from '@swimlane/ngx-datatable/release';


import { OrderInterface } from '../../models/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  temp: any;
  orders: any;
  @ViewChild(DatatableComponent) table: DatatableComponent;

  constructor(private firebaseService: FirebaseService, private authService: AuthService, private router: Router) { }

  ngOnInit() {

    this.firebaseService.getOrders().snapshotChanges().subscribe(orders => {
      this.orders = [];
      this.temp = [];

      orders.forEach(item => {

        console.log(item);


        const a = item.payload.toJSON();
        a['$key'] = item.key;


        this.orders.push(a as OrderInterface);
        this.temp.push(a as OrderInterface);


      });
      console.log(this.orders);
    });
  }


  updateFilter(event,prop) {
    const val = event.target.value.toLowerCase();

    const temp = this.temp.filter(function (d) {
      if(prop === 'name')
        return d.customerDetails.displayName.toLowerCase().indexOf(val) !== -1 || !val;
      if(prop === 'status')
        return d.status.toLowerCase().indexOf(val) !== -1 || !val;
    });

    this.orders = temp;
    this.table.offset = 0;
  }

   customComparator(propA, propB) {
    console.log('Sorting Comparator', propA, propB);

    // Just a simple sort function comparisoins
    if (propA < propB) { return -1; }
    if (propA > propB) { return 1; }
  } 

}
