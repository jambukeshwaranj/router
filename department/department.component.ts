import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department',
  template: `
    <h2>List of Departments</h2>
    <ul>
    <li *ngFor="let i of list">{{i}}</li>
  </ul>
  `,
  styles: [
  ]
})
export class DepartmentComponent implements OnInit {
  list=["computer science","Information technology","Electronics"]

  constructor() { }

  ngOnInit(): void {
  }

}
