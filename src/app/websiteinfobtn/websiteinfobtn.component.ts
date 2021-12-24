import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-websiteinfobtn',
  templateUrl: './websiteinfobtn.component.html',
  styleUrls: ['./websiteinfobtn.component.css']
})
export class WebsiteinfobtnComponent implements OnInit {
  link;
  clicked=false;

@Output() websiteDisplayed=new EventEmitter<{linkName:string,clickedInfo:boolean}>();


  WebsiteInfo(){
    this.link="https:tarun9005.netlify.app";
    this.clicked=true;
    
    this.websiteDisplayed.emit({
      linkName:this.link,
      clickedInfo:this.clicked
    })
  
  }


  constructor() { }

  ngOnInit(): void {
  }

}
