import { Component, OnInit } from '@angular/core';
import { Sector } from '../../models/sector'
import { SectorService } from '../../services/sector.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-view-sectors',
  templateUrl: './view-sectors.component.html',
  styleUrls: ['./view-sectors.component.scss']
})
export class ViewSectorsComponent implements OnInit {

    //companies: CompanyModel[];
    ListofSectors: Sector[];
    Res: any;
    isAdmin: boolean;

  constructor(private sectorService: SectorService, private router: Router, private authenticationService: AuthenticationService) {
    this.isAdmin = this.authenticationService.isAdminValue;
 }
   
  ngOnInit() {
    //  this.companyService.findAll().subscribe(data => {
    //    this.Res = data;
    //    this.ListofCompanies = this.Res.companyList;
    //  });
  
     this.reloadData();
   }
  
   reloadData(){
    this.sectorService.findAll().subscribe(data => {
      this.Res = data;
      this.ListofSectors = this.Res.sectorlist;
    });
  
   }
  
   deleteSector(id: number) {
    this.sectorService.deleteSector(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  
  sectorDetails(id: number){
    this.router.navigate(['sector', id]);
  }
  
  updateSector(id: number){
    this.router.navigate(['update-sector', id]);
  }
  
  
   }
  