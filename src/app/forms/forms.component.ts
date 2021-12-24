import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  defaultUsername="Tarun";
  answer='';
  submitcond=false;
  semail='';
  spassword='';
  susername='';

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    console.log(form.value);
    this.submitcond=true;
    this.semail=form.value.email;
    this.spassword=form.value.password;
    this.susername=form.value.username;

  }

}
