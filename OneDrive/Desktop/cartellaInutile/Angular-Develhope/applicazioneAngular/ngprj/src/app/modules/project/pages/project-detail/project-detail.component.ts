import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Project } from '@app/models/Project';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'ngprj-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
})
export class ProjectDetailComponent implements OnInit {
  //project!: Partial<Project>;
  /* @Input() */ project$!: Observable<Project>;
  constructor /*  private projectService: ProjectService */ /* private activatedRoute: ActivatedRoute */(
    private projectService: ProjectService,
    private activatedRoute: ActivatedRoute
  ) {
    /*  this.project = {
      id: 1,
      name: 'Prova',
    }; */
  }

  ngOnInit(): void {
    // console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    //const id = this.activatedRoute.snapshot.paramMap.get('id');
    //this.projectService.get(+id!).subscribe((data) => console.log(data));
    /* this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      console.log(params.get('id'));
    }); */
    /* this.activatedRoute.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.projectService.get(+params.get('id')!)
        )
      )
      .subscribe((data) => console.log(data)); */
    this.project$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.projectService.get(+params.get('id')!)
      )
    );
  }
}
