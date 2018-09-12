import { Component, OnInit } from '@angular/core';
import {AppService } from '../app.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  faSearch = faSearch;
  data : any = {};
  Users: any = null;
  res: any = {};
  notifyMessage : string = '';
  total: number = null;
  username: string ;
  repos : any = [{}];
  collapse: boolean = false;
  id: number;
  

  constructor( private service : AppService){}

  ngOnInit(){}

//function to search users by name
  private search(){
   
    this.service.searchName(this.data.value).subscribe(
    (response)=>{
      // console.log(response);
      if(response.total_count == 0){
        this.total = 0;
        this.notifyMessage = "No User found"
      }
      else{   
        this.notifyMessage = '';
        console.log(this.notifyMessage.length);
        this.total = response.total_count ;    
        this.Users = (response.items)        
      }
    },
    (error)=>{
      console.log(error)
    });
  }

//function to get the repositories

 private showRepo(user:any){
    this.service.getRepos(user.login).subscribe(
      (response)=>{
        this.collapse = true;
        this.repos = response;
        this.id= user.id;
      },
      (error)=>{
        console.log(error);
      });

  }

//function to collapse repo div
private collapseDiv(){
    this.collapse = false;
  }

}
