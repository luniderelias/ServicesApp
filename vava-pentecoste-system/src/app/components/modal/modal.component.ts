import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { NgForm } from '@angular/forms';

import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {


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

  constructor(public dataApi: DataApiService,
    private firebaseService: FirebaseService,
    private router: Router) { }
  @ViewChild('btnClose') btnClose: ElementRef;
  @Input() userUid: string;


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

    let restaurant = {
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
    this.firebaseService.addRestaurant(restaurant);

    this.btnClose.nativeElement.click();
  }

}
