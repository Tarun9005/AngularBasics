import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  clickvalue=false;
  weburl;

  about=[{developername:'Tarun',content:'Front end Dev!'}];
 
  OnBtnClicked(serverData: {linkName:string,clickedInfo:boolean}){
    this.clickvalue=serverData.clickedInfo;
    this.weburl=serverData.linkName;
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
