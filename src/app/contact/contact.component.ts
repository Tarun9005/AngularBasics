import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
 
})
export class ContactComponent implements OnInit {

  contacts=['9005108872','shekhertarun@gmail.com'];

  constructor() {
    
   }

  ngOnInit() {
   
  }

}
