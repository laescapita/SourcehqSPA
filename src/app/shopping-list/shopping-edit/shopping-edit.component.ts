import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Project } from 'src/app/shared/models/project.model';
import { ProjectService } from 'src/app/shared/services/project.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('titleInput') titleInputRef: ElementRef;
  @ViewChild('descriptionInput') descriptionInputRef: ElementRef;
  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
  }

  onAddProject(){
    const projectTitle = this.titleInputRef.nativeElement.value;
    const projectDescription = this.descriptionInputRef.nativeElement.value;
    const projectDate = new Date();
    const newProject = new Project(projectTitle, projectDescription, projectDate);
    this.projectService.addProject(newProject);
  }

}
