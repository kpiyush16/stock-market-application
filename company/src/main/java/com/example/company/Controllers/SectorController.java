package com.example.company.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.company.entities.Sector;
import com.example.company.services.SectorService;

@RestController
public class SectorController {

    @Autowired
    private SectorService sectorService;


    @RequestMapping("/sectors")
    public List<Sector> getAllsectors() {
        return sectorService.getAllsectors();
    }

    @RequestMapping("/sectors/{id}")
    public Sector getSector(@PathVariable int id) {
        return sectorService.getSector(id);
    }

    @RequestMapping(method= RequestMethod.POST, value="/sectors")
    public void addSector(@RequestBody Sector sector) {
        sectorService.addSector(sector);
    }

    @RequestMapping(method= RequestMethod.PUT, value="/sectors/{id}")
    public void updateSector(@RequestBody Sector sector, @PathVariable int id) {
        sectorService.updateSector(sector, id);
    }

    @RequestMapping(method=RequestMethod.DELETE, value="/sectors/{id}")
    public void deleteSector(@PathVariable int id) {
        sectorService.deleteSector(id);
    }
}
