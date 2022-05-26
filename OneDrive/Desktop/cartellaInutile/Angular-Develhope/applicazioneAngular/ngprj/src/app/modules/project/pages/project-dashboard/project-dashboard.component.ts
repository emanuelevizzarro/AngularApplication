import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from '@app/models/Project';
import { LogService } from '@app/services/log.service';
import { Observable, Subscription } from 'rxjs';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'ngprj-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.css'],
})
export class ProjectDashboardComponent implements OnInit /* , OnDestroy */ {
  //subscription!: Subscription;
  //selectedProject!: Project;

  //projects: Project[] = [];
  projects$!: Observable<Project[]>;
  constructor(private projectService: ProjectService, private router: Router) {
    // setTimeout(() => (this.projects = []), 3000);
    /*     setTimeout(() => (this.projects[0].done = false), 3000);*/
  }

  ngOnInit(): void {
    this.projects$ = this.projectService.getAll();
    //this.subscription = this.projectService.getAll().subscribe((data) => {
    // this.projects = data;
    //});
  }

  selectProject(project: Project) {
    //console.log(project);
    //this.selectedProject = this.projectService.get(project.id);
    /* this.subscription = this.projectService
      .get(project.id)
      .subscribe((data) => {
        this.selectedProject = data;
      }); */
    this.router.navigate(['/projects', 'detail', project.id]);
  }
  submitProjectForm(project: Project) {
    //console.log('form submit', f);
    this.projectService
      .add(project)
      .subscribe((data) => (this.projects$ = this.projectService.getAll()));
    /* this.projects.push({
      ...project,
      id: this.projects.length,
      code: Math.random().toString(36).replace('0.', '').substring(2, 9),
      done: false,
      tasks: [],
    }); */
  }
  testMethod(str: string) {
    console.log('Stringa ricevuta dal parent', str);
  }
  /* ngOnDestroy() {
    this.subscription.unsubscribe();
  } */
}
