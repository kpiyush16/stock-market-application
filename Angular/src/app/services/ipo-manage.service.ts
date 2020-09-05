import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ipo } from '../models/ipo';
import { IpoList } from '../models/ipo-list';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class IpoManageService {
  
  // returnList:any;
  // private ipoUrl1:string;
  // private ipoUrl2:string;
  private ipoUrl3:string;

  constructor(private http: HttpClient) { 
    // this.ipoUrl1 = 'http://localhost:8083/ipos';
    // this.ipoUrl2 = 'http://localhost:8083/ipos';
    this.ipoUrl3 = 'https://api.github.com/zen';
    console.log("Service Constructor");
  }

  // findAll() :IpoList{
  //   this.http.get<IpoList>(this.ipoUrl).subscribe(
  //     (data) => {
  //       console.log("Data:");
  //       console.log(data);
  //       this.returnList = data;
  //     }
  //   )
  //   return this.returnList;
  // }


  // findOne(){
  //   console.log("Service findOne");
  //     return this.http.get(this.ipoUrl2);
  //     // console.log("Service findOne 2");
  //     // return this.returnList;
  //   }

  findGit() :Observable<any> {
    return this.http.get<any>(this.ipoUrl3);
  }
}
