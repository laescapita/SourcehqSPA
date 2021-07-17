import { Component, OnInit } from '@angular/core';
import { Officer } from 'src/app/shared/models/officer.model';
import { OfficerService } from 'src/app/shared/services/officer.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  officers: Officer[];

  constructor(private officerService: OfficerService ) { }

  ngOnInit(): void {
    this.officers = this.officerService.getOfficer();
  }

}
