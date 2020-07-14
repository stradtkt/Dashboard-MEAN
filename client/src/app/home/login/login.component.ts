import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
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
  getEmailErrorMessage() {
    if(this.email.hasError('required')) {
      return 'You must enter a value for this field';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
