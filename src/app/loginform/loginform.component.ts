import { LoginForm } from './loginform.model';
import { AppState } from './../app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { LoginAction } from '../state/Actions/loginActions';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  angForm: FormGroup;
  submitted = false;
  name: any;
  email: any;
  pwd: any;
  constructor(private store: Store<AppState>, private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      email: ['', [Validators.required, Validators.email]],
      pwd: ['', Validators.required, Validators.minLength(6) ]
   });
  }
  get f() { return this.angForm.controls; }
  
  onSubmit(){
    let loginObj = new LoginForm();

    loginObj.name = this.name.value; // we are accessing the formControl value here 
    loginObj.email = this.email.value;
    loginObj.pwd = this.pwd.value;

    this.store.dispatch(new LoginAction(this.angForm.value))
  }
  loginValidate(){
    this.submitted = true;
        // stop here if form is invalid
        if (this.angForm.invalid) {
            return;
        }
  }
  ngOnInit() {
  }

}
