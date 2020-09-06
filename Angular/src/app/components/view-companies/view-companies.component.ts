import { Component, OnInit } from '@angular/core';
import { CompanyModel } from '../../models/company-model'
import { CompanyList } from '../../models/company-list'
import { CompanyService } from '../../services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-companies',
  templateUrl: './view-companies.component.html',
  styleUrls: ['./view-companies.component.scss']
})

export class ViewCompaniesComponent implements OnInit {
  
  //companies: CompanyModel[];
  ListofCompanies: CompanyModel[];
  Res: any;

  constructor(private companyService: CompanyService, private router: Router) {
 }

 ngOnInit() {
  //  this.companyService.findAll().subscribe(data => {
  //    this.Res = data;
  //    this.ListofCompanies = this.Res.companyList;
  //  });

   this.reloadData();
 }

 reloadData(){
  this.companyService.findAll().subscribe(data => {
    this.Res = data;
    this.ListofCompanies = this.Res.companyList;
  });


 }

 deleteCompany(id: number) {
  this.companyService.deleteCompany(id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
}

companyDetails(id: number){
  this.router.navigate(['company', id]);
}

updateCompany(id: number){
  this.router.navigate(['update-company', id]);
}

AddCompanySector(id: number){
  this.router.navigate(['add-company-sector', id]);
}

DeleteCompanySector(id: number){
  this.router.navigate(['delete-company-sector', id]);
}

AddCompanyBOD(id: number){
  this.router.navigate(['add-company-bod', id]);
}

DeleteCompanyBOD(id: number){
  this.router.navigate(['delete-company-bod', id]);
}


}
