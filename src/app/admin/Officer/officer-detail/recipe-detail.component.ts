import { Component, Input, OnInit } from '@angular/core';
import { Officer } from 'src/app/shared/models/officer.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() officer: Officer;

  constructor() { }

  ngOnInit(): void {
  }

}
