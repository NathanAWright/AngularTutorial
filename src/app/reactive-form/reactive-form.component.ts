import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { PasswordValidator } from '../shared/password.validator';
import { RegistrationService } from '../registration.service';
// import { forbiddenNameValidator } from '../shared/user-name.validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  registrationForm: FormGroup;
  /*registrationForm = new FormGroup({
    userName: new FormControl('Joey', [Validators.required, Validators.minLength(3)/*, forbiddenNameValidator(/admin/)*///]),//since we passed this string, this will be the default value
   /* password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      postalCode: new FormControl('')
    })
  });*/ //will represent the reactive form
  
  constructor(private fb: FormBuilder, private _registrationService: RegistrationService) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      userName: ['Joey', Validators.required],
      email: [''],
      subscribe: [false],
      password: [''],
      confirmPassword: [''],
      address: this.fb.group({
        city: [''],
        state: [''],
        postalCode: ['']
      }),
      alternateEmails: this.fb.array([])//can be initialised with any number of controls, however we have started with none.
    }, {validator: PasswordValidator});

    this.registrationForm.get('subscribe').valueChanges.subscribe( checkedValue =>{
      const email = this.registrationForm.get('email');
      if (checkedValue){
        email.setValidators(Validators.required); 
      }else{
        email.clearValidators();
      }
      email.updateValueAndValidity();//verifies the update to the new status
    })

  }

  get email(){
    return this.registrationForm.get('email');
  }

  get alternateEmails(){
    return this.registrationForm.get('alternateEmails') as FormArray;
  }
  
  addAlternateEmail(){
    this.alternateEmails.push(this.fb.control(''))
  }

  loadApiData(){
    this.registrationForm.setValue({
      userName: 'Jon',
      password: '1234',
      confirmPassword: '1234',
      address: {
        city: 'City',
        state: 'State',
        postalCode: '123456'
      }
    });//takes the data to assign to the fields in the format that the form group instance was created. (above)
  }

  onSubmit(){
    console.log(this.registrationForm.value)
    this._registrationService.register(this.registrationForm.value).subscribe(
      response => console.log('Success!'),
      error => console.error('Error!', error)
    );
  }
}
