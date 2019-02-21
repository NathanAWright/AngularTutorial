import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
  <h3>
    Department List
  </h3>
  <ul>
    <li *ngFor ="let department of departments" (click)="onSelect(department)" [class.selected]="isSelected(department)">
      <span>{{department.id}}</span>.) {{department.name}}
    </li>
  </ul>
  `,
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  public selectedId;

  departments = [
    {"id": 1, "name":"Angular"},
    {"id": 2, "name":"Node"},
    {"id": 3, "name":"MongoDB"},
    {"id": 4, "name":"Ruby"},
    {"id": 5, "name":"Bootstrap"}
  ]

  constructor(private router: Router, private route: ActivatedRoute) { }//injecting the "Router" import

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id = parseInt(params.get('id'));//"id" is the parameter in the URL
      this.selectedId = id;
    });
  }

  onSelect(department){
    this.router.navigate(['/department-detail', department.id]) //the first parameter is the path we want to navigate to, the second is the route parameter. 
    // this.router.navigate([department.id], {relativeTo: this.route}); //the first parameter is the path we want to append to, the second says that the appending would be relative to the current path. 
  }
  
  isSelected(department){
    return department.id === this.selectedId;
  }
}
