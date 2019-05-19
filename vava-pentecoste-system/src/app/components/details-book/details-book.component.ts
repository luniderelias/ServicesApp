import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { BookInterface } from '../../models/book';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details-book',
  templateUrl: './details-book.component.html',
  styleUrls: ['./details-book.component.css']
})
export class DetailsBookComponent implements OnInit {

  constructor(private dataApi: DataApiService, private route: ActivatedRoute) { }
  

  ngOnInit() {
  
  }


}
