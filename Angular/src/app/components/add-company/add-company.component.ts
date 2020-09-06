import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyModel } from '../../models/company-model'
import { CompanyService } from '../../services/company.service';


@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent{

  company: CompanyModel;
 
  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private companyService: CompanyService) {
    this.company = new CompanyModel();
  }

  ngOnInit(){}
 
  onSubmit() {
    this.companyService.save(this.company).subscribe(result => this.gotoCompanyList());
  }
 
  gotoCompanyList() {
    this.router.navigate(['/view-companies']);
  }

}
