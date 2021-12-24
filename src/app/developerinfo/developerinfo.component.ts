import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-developerinfo',
  templateUrl: './developerinfo.component.html',
  styleUrls: ['./developerinfo.component.css']
})
export class DeveloperinfoComponent implements OnInit {
 @Input() element:{developername:string,content:string};

  constructor() { }

  ngOnInit(): void {
  }

  

}
