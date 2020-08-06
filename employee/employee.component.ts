import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  template: `
  <h2>List of Employees</h2>
  <ul>
  <li *ngFor="let i of list">{{i}}</li>
</ul>
  `,
  styles: [
  ]
})
export class EmployeeComponent implements OnInit {
  list=["Advisor","Principal","Head Of the department","Professor"]

  constructor() { }

  ngOnInit(): void {
  }

}
