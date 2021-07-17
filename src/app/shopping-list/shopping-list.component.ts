import { Component, OnInit } from '@angular/core';
import { Project } from '../shared/models/project.model';
import { ProjectService } from '../shared/services/project.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ProjectService]
})
export class ShoppingListComponent implements OnInit {
  projects: Project[];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
    this.projectService.projectChanged
    .subscribe((projects: Project[]) => {
      this.projects = projects;
    })
  }

}
