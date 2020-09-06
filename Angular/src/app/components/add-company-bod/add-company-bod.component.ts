import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { CompanyModel } from '../../models/company-model'
import { CompanyBod } from '../../models/company-bod'
import { Sector } from '../../models/sector'
import { SectorService } from '../../services/sector.service';

@Component({
  selector: 'app-add-company-bod',
  templateUrl: './add-company-bod.component.html',
  styleUrls: ['./add-company-bod.component.scss']
})
export class AddCompanyBodComponent implements OnInit {

  id: number;
  company: CompanyModel;
  companyBod: CompanyBod;
  sector: Sector;
  //companies: CompanyModel[];
  ListofSectors: Sector[];
  Res: any;
  

  constructor(private route: ActivatedRoute,private router: Router,
    private companyService: CompanyService, private sectorService: SectorService) { }

    ngOnInit(){
      this.company = new CompanyModel();
  
      this.id = this.route.snapshot.params['id'];
      
      this.companyService.getCompany(this.id)
        .subscribe(data => {
          //console.log(data)
          this.company = data;
          this.companyBod = this.company.boardOfDirectors;
        }, error => console.log(error));
  
        this.reloadData();
    }
  
    reloadData(){
      this.sectorService.findAll().subscribe(data => {
        this.Res = data;
        this.ListofSectors = this.Res.sectorlist;
      });
    
     }
  
     AddCompanyBOD() {
      //console.log(this.company);
      //console.log(this.company.sector);
      //console.log(this.sector);
      this.companyService.AddCompanyBOD(this.id, this.companyBod)
        .subscribe(data => {
          console.log(data);
          this.company = new CompanyModel();
          this.gotoList();
        }, error => console.log(error));
    }
  
    onSubmit() {
      this.AddCompanyBOD();    
    }
  
    gotoList() {
      this.router.navigate(['/view-companies']);
    }  

}
