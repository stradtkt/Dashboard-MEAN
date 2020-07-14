import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  hide = true;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    // this.createRegisterForm();
  }

  // createRegisterForm() {
  //   this.registerForm = this.fb.group({
  //     firstName: ['', Validators.required],
  //     lastName: ['', Validators.required],
  //     email: ['', Validators.required],
  //     password: ['', Validators.required]
  //   });
  // } 

  getFirstNameErrorMessage() {
    if(this.firstName.hasError('required')) {
      return 'You must enter a value for this field';
    }
  }
  getLastNameErrorMessage() {
    if(this.lastName.hasError('required')) {
      return 'You must enter a value for this field';
    }
  }
  getEmailErrorMessage() {
    if(this.email.hasError('required')) {
      return 'You must enter a value for this field';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
