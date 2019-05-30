import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ViewChild } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';
import { DatatableComponent } from '@swimlane/ngx-datatable/release';

import * as alertFunctions from './../shared/data/sweet-alerts';

import { OrderInterface } from '../../models/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  temp: any;
  orders: any;
  loading = false;
  userUid: any;
  @ViewChild(DatatableComponent) table: DatatableComponent;

  constructor(private firebaseService: FirebaseService, private authService: AuthService, private router: Router) { }

  showQuestion(row) {
    if (row.status === 'Pendente') {
      alertFunctions.showQuestion('', 'Deseja Receber o Pedido?').then(res => {
        if (res.dismiss) { return; }
        this.router.navigate(['pedidos/detalhes/' + row.$key]);
      });
    } else {
      this.router.navigate(['pedidos/detalhes/' + row.$key]);
    }
  }

  ngOnInit() {

    this.firebaseService.getOrders().snapshotChanges().subscribe(orders => {
      this.orders = [];
      this.temp = [];

      orders.forEach(item => {
        const a = item.payload.toJSON();
        a['$key'] = item.key;
        
        this.orders.push(a as OrderInterface);
        this.temp.push(a as OrderInterface);
      });
    });
  }


  updateFilter(event, prop) {
    const val = event.target.value.toLowerCase();
    const temp = this.temp.filter(function (d) {
      if (prop === 'name')
        return d.customerDetails.displayName.toLowerCase().indexOf(val) !== -1 || !val;
      if (prop === 'status')
        return d.status.toLowerCase().indexOf(val) !== -1 || !val;
    });

    this.orders = temp;
    this.table.offset = 0;
  }

  customComparator(propA, propB) {
    if (propA < propB) { return -1; }
    if (propA > propB) { return 1; }
  }

  
	
	formatMoney(n) {
		if (n) {
			const num = parseFloat(n);
		    return num.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, '$1.');
        } else {
            return '';
        }
	}

}
