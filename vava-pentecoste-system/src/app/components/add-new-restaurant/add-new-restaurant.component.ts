import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { NgForm } from '@angular/forms';

import * as alertFunctions from './../shared/data/sweet-alerts';

import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-restaurant',
  templateUrl: './add-new-restaurant.component.html',
  styleUrls: ['./add-new-restaurant.component.css']
})
export class AddNewRestaurantComponent implements OnInit {

  loading: boolean;
  address?: string;
  description?: string;
  image?: string;
  info?: string;
  lat?: string;
  long?: string;
  mark?: string;
  option = '0';
  outlet?: string;
  phonenumber?: string;
  title?: string;
  isAdmin: boolean;

  constructor(private dataApi: DataApiService,
    private firebaseService: FirebaseService,
    private router: Router) {
      this.isAdmin = localStorage.getItem('current_user_role') === 'super_admin';
     }
  @ViewChild('btnClose') btnClose: ElementRef;
  @Input() userUid: string;

  showQuestion() {
		alertFunctions.showQuestion('', 'Deseja Confirmar essa Ação?').then(res => {
			if (res.dismiss) { return; }
			this.loading = true;
			this.onAddRestaurant();
		});
  }
  
  onSaveBook(bookForm: NgForm): void {
    if (bookForm.value.id == null) {
      // New 
      bookForm.value.userUid = this.userUid;
      this.dataApi.addBook(bookForm.value);
    } else {
      // Update
      this.dataApi.updateBook(bookForm.value);
    }
    bookForm.resetForm();
    this.btnClose.nativeElement.click();
  }


  ngOnInit() {
  }

  onAddRestaurant() {
      const restaurant = {
        address: this.address,
        description: this.description,
        image: this.image,
        info: this.info,
        lat: this.lat,
        long: this.long,
        mark: this.mark,
        option: this.option,
        outlet: this.outlet,
        phonenumber: this.phonenumber,
        title: this.title,
        user_id: 'superadmin'
      };
      this.firebaseService.addRestaurant(restaurant).then(res => {
        alertFunctions.showSuccess('Sucesso!', 'Loja Adicionada');
        this.loading = false;
        this.router.navigate(['lojas/listar']);
      }, error => {
        alertFunctions.showError('Erro!', 'Falha ao Adicionar Loja!');
        this.loading = false;
      });


  }

}
