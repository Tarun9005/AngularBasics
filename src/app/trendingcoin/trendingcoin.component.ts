import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-trendingcoin',
  templateUrl: './trendingcoin.component.html',
  styleUrls: ['./trendingcoin.component.css'],
  providers:[TrendingService]
})
export class TrendingcoinComponent implements OnInit {
  trends:{name:string,price:string}[]=[];

  constructor(private trendService:TrendingService) { }

  ngOnInit() {
this.trends=this.trendService.trending;
  }
  onDataService(){
    this.trendService.statusChange("TESTDATA");
  }
  onEmitEvent(){
    console.log("clicked!");
   this.trendService.statusUpdated.emit(true);
  }
  

}
