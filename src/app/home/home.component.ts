import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
btnload=false;  
random;
max=8;
access=false;
  

  constructor() {
    setTimeout(()=>{
      this.btnload=true;
    },2000);
   }

  ngOnInit(): void {
  }
  findRandom() {
    this.random = Math.floor(Math.random() * this.max) //Finds number between 0 - max
    console.log(this.random);
    if(this.random==5 || this.random==7){
      this.access=true;}
    
    
  }
  getColor(){
    return this.random==5 || this.random==7 ? 'green':'red'; 
  }

}
