import { Component, OnInit } from '@angular/core';
import {passwordValidator} from 'src/app/shared/password.validator';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'; 

@Component({
  selector: 'app-newregister',
  templateUrl: './newregister.component.html',
  styleUrls: ['./newregister.component.css']
})
export class NewregisterComponent implements OnInit {
title:string='Angular App';
regform:FormGroup
  get email()
{
  return this.regform.get('email');
}
  get uname()
{
  return this.regform.get('username');
}
  constructor(private fb:FormBuilder){}
  ngOnInit(){
  this.regform=this.fb.group({
    username:['',[Validators.required,Validators.minLength(5)]],
     email:[''],
     password:[''],
     confirmpassword:[''],
},{validator:passwordValidator});
  }
}
