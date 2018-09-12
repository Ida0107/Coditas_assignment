
import { NgModule, Injectable, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { map } from "rxjs/operators";


@Injectable()


export class AppService { 
    constructor( private http : HttpClient){}

    //gets user information based on string provided by user from github.

    public searchName(data: string): Observable<any> {
        return this.http.get(`api/search/users?q=${data}`).pipe(map((res:Response)=>res));
    }

    //gets repositories of corresponding under

    public getRepos(user): Observable<any>{
        console.log(user);
        return this.http.get(`api/users/${user}/repos`).pipe(map((res:Response)=>res));
    }


}



