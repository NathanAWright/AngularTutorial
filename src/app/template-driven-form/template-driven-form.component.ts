import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { EnrollmentService } from '../enrollment.service';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {
  
  topics = ['Angular', 'React', 'Vue']  ;
  userModel = new User('Rob', 'rob@test.com', 5556665566, 'default','morning', true);
  topicHasError = true;
  submitted = false;
  errorMsg = '';

  validateTopic(value){
    if (value==='default'){
      this.topicHasError=true;
    }else{
      this.topicHasError=false;
    }
  }

  onSubmit(){
    this._enrollmentService.enroll(this.userModel)
      .subscribe(
        data => console.log('Success!', data),
        error => this.errorMsg = error.statusText
      )
    this.submitted = true;
  }

  constructor(private _enrollmentService: EnrollmentService){}
}
