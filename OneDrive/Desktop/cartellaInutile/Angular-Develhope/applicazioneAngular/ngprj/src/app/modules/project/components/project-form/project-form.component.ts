import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Project } from '@app/models/Project';
@Component({
  selector: 'ngprj-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css'],
})
export class ProjectFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<Project>();
  @Output() test = new EventEmitter<string>();
  constructor() {
    setTimeout(() => {
      console.log('scatta il setTimeout');
      this.test.emit('ciao sono una stringa del child');
    }, 3000);
  }

  ngOnInit(): void {}

  submit(f: NgForm) {
    this.submitted.emit({ ...f.value });
    //console.log(f.value);
  }
}
