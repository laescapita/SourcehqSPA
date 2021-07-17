import { Component, Input, OnInit } from '@angular/core';
import { Officer } from 'src/app/shared/models/officer.model';
import { OfficerService } from 'src/app/shared/services/officer.service';

@Component({
  selector: 'app-recipe-item',
  template: `
  <div class="row mt-2" (click)="onSelected()">
    <div class="col list-group">
      <a class="list-group-item clearfix">
        <div class="float-left">
          <h4>{{ officer.firstName+" "+officer.lastName }}</h4>
          <p>{{ officer.university }}</p>
        </div>
        <span class="float-right">
          <img 
          [src] = "officer.imagePath"
          alt="" 
          class="img-responsive" 
          style="max-height: 100px;">
        </span>
      </a>
    </div>
  </div>`,
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input('officerElement') officer: Officer;
  constructor(private officerService: OfficerService) { }

  ngOnInit(): void {
  }

  onSelected(){
    this.officerService.officerSelected.emit(this.officer)
  }

}
