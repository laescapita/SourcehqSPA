import { EventEmitter, Injectable } from "@angular/core";
import { Project } from "../models/project.model";

// @Injectable({

// })

export class ProjectService{
    projectChanged = new EventEmitter<Project[]>();

    private projects: Project[] = [
    {
        title: "Project",
        description: "description",
        date: new Date()
    },
    {
        title: "Project",
        description: "description",
        date: new Date()
    },
    {
        title: "Project",
        description: "description",
        date: new Date()
    },
    ];

    constructor(){}

    getProjects(){
        return this.projects.slice();
    }

    addProject(project: Project){
        this.projects.push(project);
        this.projectChanged.emit(this.projects.slice());
    }

}