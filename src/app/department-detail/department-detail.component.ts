import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
  <h3>You've selected department with id = {{departmentId}}</h3>
  
  <p>
    <button (click)="showOverview()">Overview</button>
    <button (click)="showContact()">Contact</button>
  </p>

  <router-outlet></router-outlet>

  <p>
    <button (click)="goPrevious()">Previous </button>
    <button (click)="goNext()">Next</button><br>
  </p>
  <br><button (click)="goToDepartments()">Back</button><br>
  `,
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId;
  constructor(private route: ActivatedRoute, private router: Router) { }//injecting the imported components

  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));//"id" is the parameter in the URL
    // this.departmentId = id;
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id = parseInt(params.get('id'));//"id" is the parameter in the URL
      this.departmentId = id;
    });
  }
  goToDepartments(){
    let selectedId = this.departmentId ? this.departmentId : null; //this is a null check
    this.router.navigate(['/department-list', {id: selectedId}]);//this is the link parameters array, it takes the path and an object with key value pairs which are the optional route parameters that we want to send.
    // this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route})//'../' means go back one step in the path
  }
  goPrevious(){
    let previousId = this.departmentId-1;
    this.router.navigate(['/department-detail', previousId]);
  }
  goNext(){
    let nextId = this.departmentId+1;
    this.router.navigate(['/department-detail', nextId]);
  }
  showOverview(){
    this.router.navigate(['overview'], {relativeTo: this.route});
  }
  showContact(){
    this.router.navigate(['contact'], {relativeTo: this.route});
  }
}
