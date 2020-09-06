import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Sector } from '../../models/sector'
import { SectorService } from '../../services/sector.service';
import { ViewSectorsComponent} from "../../components/view-sectors/view-sectors.component"


@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.scss']
})
export class SectorComponent implements OnInit {

  id: number;
  sector: Sector;

  constructor(private route: ActivatedRoute,private router: Router,
    private sectorService: SectorService) { }

  ngOnInit() {
    this.sector = new Sector();

    this.id = this.route.snapshot.params['id'];
    
    this.sectorService.getSector(this.id)
      .subscribe(data => {
        console.log(data)
        this.sector = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['view-sectors']);
  }
}