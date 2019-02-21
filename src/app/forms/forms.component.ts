import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit( ) {
  }
  navigateToTdf(){
    this.router.navigate(['tdf'], {relativeTo: this.route}); 
  }
  navigateToReactive(){
    this.router.navigate(['reactive-form'], {relativeTo: this.route}); 
  }
}
