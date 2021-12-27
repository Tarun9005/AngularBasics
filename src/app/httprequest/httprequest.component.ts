import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs';




@Component({
  selector: 'app-httprequest',
  templateUrl: './httprequest.component.html',
  styleUrls: ['./httprequest.component.css']
})
export class HttprequestComponent implements OnInit {

  loadedPost=[];
  isFetching=false;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    console.log(form.value);
  //Send Http Request
  this.http.post('https://angular-75170-default-rtdb.firebaseio.com/posts.json',form.value).subscribe(responseData=>{
    console.log(responseData);
  });


  }

  getPost(){
    this.getData();
  }
  
//   private getData(){
//     this.http.get('https://angular-75170-default-rtdb.firebaseio.com/posts.json').subscribe(posts=>{
//     console.log(posts);
//   });
// }
private getData(){
  this.isFetching=true;
  this.http.get('https://angular-75170-default-rtdb.firebaseio.com/posts.json').pipe(map(responseData=>{
    const postArray=[];
    for(const key in responseData){
      if(responseData.hasOwnProperty(key)){
        postArray.push({...responseData[key],id:key});
      }
    }
    return postArray;
  }))
  .subscribe(posts=>{
    console.log(posts);
  console.log(posts[0].title);
  this.isFetching=false;
  this.loadedPost=posts;
});
}
}
