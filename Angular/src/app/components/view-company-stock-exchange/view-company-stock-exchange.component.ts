import { StockExchange } from '../../models/stock-exchange'
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { CompanyModel } from '../../models/company-model'
import { CompanyBod } from '../../models/company-bod'
import { Sector } from '../../models/sector'
import { SectorService } from '../../services/sector.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-view-company-stock-exchange',
  templateUrl: './view-company-stock-exchange.component.html',
  styleUrls: ['./view-company-stock-exchange.component.scss']
})
export class ViewCompanyStockExchangeComponent implements OnInit {

  id: number;
  company: CompanyModel;
  companyBod: CompanyBod;
  sector: Sector;
  //companies: CompanyModel[];
  ListofSectors: Sector[];
  Res: any;
  ListofSe: StockExchange[];
  Res1: any;
  isAdmin: boolean;

 
   constructor(private route: ActivatedRoute,private router: Router,
    private companyService: CompanyService, private sectorService: SectorService, private authenticationService: AuthenticationService) {
      this.isAdmin = this.authenticationService.isAdminValue;
  }
 
  ngOnInit() {
 
    this.company = new CompanyModel();
  
    this.id = this.route.snapshot.params['id'];
    
    this.companyService.getCompany(this.id)
      .subscribe(data => {
        //console.log(data)
        this.company = data;
      }, error => console.log(error));

      this.reloadData();
  }

  reloadData(){
    this.companyService.findAll1(this.id).subscribe(data => {
      //this.Res1 = data;
      //console.log(data);
      this.Res1 = data;
      this.ListofSe = this.Res1.stockExchangeList;  
      //console.log(this.Res1);
    });  
 }

 AddCompanyStockExchange(id: number){
  this.router.navigate(['add-company-stock-exchange', id]);
}

DeleteCompanyStockExchange(id: number){
  this.router.navigate(['delete-company-stock-exchange', id]);
}

}
