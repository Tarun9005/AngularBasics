import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-activatepart',
  templateUrl: './activatepart.component.html',
  styleUrls: ['./activatepart.component.css'],
  providers:[TrendingService]
})
export class ActivatepartComponent implements OnInit {
  data=false;
  constructor(private trendService:TrendingService) { 
    
  }

  ngOnInit() {
    
    this.trendService.statusUpdated.subscribe(
      (receivevar:boolean)=>{
        this.data=receivevar;
        console.log(this.data);
      }
    );
  }

}
