import { Component, OnInit } from '@angular/core';
import { Officer } from '../shared/models/officer.model';
import { OfficerService } from '../shared/services/officer.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [OfficerService]
})
export class RecipesComponent implements OnInit {
  selectedOfficer: Officer;

  constructor(private officerService: OfficerService) { }

  ngOnInit(): void {
    console.log(this.selectedOfficer);
    this.officerService.officerSelected
    .subscribe((officer) =>{
      this.selectedOfficer = officer
    });
  }

}
