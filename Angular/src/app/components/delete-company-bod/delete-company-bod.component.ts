import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { CompanyModel } from '../../models/company-model'
import { Sector } from '../../models/sector'
import { SectorService } from '../../services/sector.service';
import { CompanyBod } from '../../models/company-bod'

@Component({
  selector: 'app-delete-company-bod',
  templateUrl: './delete-company-bod.component.html',
  styleUrls: ['./delete-company-bod.component.scss']
})
export class DeleteCompanyBodComponent implements OnInit {

  id: number;
  company: CompanyModel;
  sector: Sector;
  //companies: CompanyModel[];
  ListofSectors: Sector[];
  Res: any;
  companyBod: CompanyBod;


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
  
       // this.reloadData();
    }
  
    // reloadData(){
    //   this.sectorService.findAll().subscribe(data => {
    //     this.Res = data;
    //     this.ListofSectors = this.Res.sectorlist;
    //   });
    
    //  }

    DeleteCompanyBOD() {
      // console.log(this.sector.name);
      // console.log(this.sector.id);
      console.log(this.companyBod);
      this.companyService.DeleteCompanyBOD(this.id, this.companyBod)
        .subscribe(data => {
          console.log(data);
          this.company = new CompanyModel();
          this.gotoList();
        }, error => console.log(error));
    }
  
    onSubmit() {
      this.DeleteCompanyBOD();    
    }
  
    gotoList() {
      this.router.navigate(['/view-companies']);
    }
}
