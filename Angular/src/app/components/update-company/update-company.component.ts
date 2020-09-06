import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { CompanyModel } from '../../models/company-model'


@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.scss']
})
export class UpdateCompanyComponent implements OnInit {

  id: number;
  company: CompanyModel;

  constructor(private route: ActivatedRoute,private router: Router,
    private companyService: CompanyService) { }

  ngOnInit(){
    this.company = new CompanyModel();

    this.id = this.route.snapshot.params['id'];
    
    this.companyService.getCompany(this.id)
      .subscribe(data => {
        console.log(data)
        this.company = data;
      }, error => console.log(error));
  }

  updateCompany() {
    this.companyService.updateCompany(this.id, this.company)
      .subscribe(data => {
        console.log(data);
        this.company = new CompanyModel();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateCompany();    
  }

  gotoList() {
    this.router.navigate(['/view-companies']);
  }

}
