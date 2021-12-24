import { EventEmitter } from "@angular/core";

export class TrendingService{
    statusChange(status:string){
        console.log("Data has been passed to the service=="+status);
    }
    trending=[
    {
        name:'Bitcoin',
        price:'$50K'
    },
    {
        name:'Ethereum',
        price:'$40K'
    }
    ];

    statusUpdated=new EventEmitter<boolean>();






}


// If you want to add data to this trending array simply use any function like OnAddTrending(name:String,price:String){} 
//and write the code to push----see the lecture in detail given