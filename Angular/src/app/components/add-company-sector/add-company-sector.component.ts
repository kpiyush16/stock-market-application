import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { CompanyModel } from '../../models/company-model'
import { Sector } from '../../models/sector'
import { SectorService } from '../../services/sector.service';


@Component({
  selector: 'app-add-company-sector',
  templateUrl: './add-company-sector.component.html',
  styleUrls: ['./add-company-sector.component.scss']
})
export class AddCompanySectorComponent implements OnInit {

  id: number;
  company: CompanyModel;
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
      }, error => console.log(error));

      this.reloadData();
  }

  reloadData(){
    this.sectorService.findAll().subscribe(data => {
      this.Res = data;
      this.ListofSectors = this.Res.sectorlist;
    });
  
   }

  AddCompanySector() {
    //console.log(this.company);
    //console.log(this.company.sector);
    //console.log(this.sector);
    this.companyService.AddCompanySector(this.id, this.sector)
      .subscribe(data => {
        console.log(data);
        this.company = new CompanyModel();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.AddCompanySector();    
  }

  gotoList() {
    this.router.navigate(['/view-companies']);
  }

}
