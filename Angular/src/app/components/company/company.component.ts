import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { CompanyModel } from '../../models/company-model'
import { ViewCompaniesComponent} from "../../components/view-companies/view-companies.component"

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  id: number;
  company: CompanyModel;

  constructor(private route: ActivatedRoute,private router: Router,
    private companyService: CompanyService) { }

  ngOnInit() {

    this.company = new CompanyModel();

    this.id = this.route.snapshot.params['id'];
    
    this.companyService.getCompany(this.id)
      .subscribe(data => {
        console.log(data)
        this.company = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['view-companies']);
  }
}

