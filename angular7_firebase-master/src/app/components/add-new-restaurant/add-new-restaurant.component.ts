import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { BookInterface } from '../../models/book';
import { NgForm } from '@angular/forms';

import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-restaurant',
  templateUrl: './add-new-restaurant.component.html',
  styleUrls: ['./add-new-restaurant.component.css']
})
export class AddNewRestaurantComponent implements OnInit {

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

  constructor(private dataApi: DataApiService,
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

      //bookForm.resetForm();
      //this.btnClose.nativeElement.click();

      this.router.navigate(['restaurants']);

  }

}
