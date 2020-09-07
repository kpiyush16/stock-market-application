import { Component, OnInit } from '@angular/core';
import { CompanyModel } from 'src/app/models/company-model';
import { Sector } from 'src/app/models/sector';

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.scss']
})
export class ComparisonComponent implements OnInit {

  currDate:string;
  currTime:string;

  companyList:CompanyModel[];
  sectorList:Sector[];

  showChart:boolean;

  constructor() { 
    setInterval(() => this.date());
    this.showChart = true;
  }

  date(){
    let currentDate = new Date();
    this.currDate = currentDate.toDateString();
    let hours = currentDate.getHours();
    hours = hours>12?hours-12:hours;
    if(hours >= 10 && currentDate.getHours() <= 12){
      this.currTime = currentDate.toLocaleTimeString().substr(0,5) + currentDate.toLocaleTimeString().substr(9,2);
    }
    else{
      this.currTime = currentDate.toLocaleTimeString().substr(0,4) + currentDate.toLocaleTimeString().substr(8,2);
    } 
  }

  ngOnInit(): void {
    // this.showChart = true;
  }

  add(){
    this.showChart = false;
    
  }

}
