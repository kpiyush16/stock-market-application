import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sector } from '../../models/sector'
import { SectorService } from '../../services/sector.service';


@Component({
  selector: 'app-add-sector',
  templateUrl: './add-sector.component.html',
  styleUrls: ['./add-sector.component.scss']
})
export class AddSectorComponent implements OnInit {

  sector: Sector;
 
  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private sectorService: SectorService) {
    this.sector = new Sector();
  }

  ngOnInit(){}
 
  onSubmit() {
    this.sectorService.save(this.sector).subscribe(result => this.gotoSectorList());
  }
 
  gotoSectorList() {
    this.router.navigate(['/view-sectors']);
  }

}
