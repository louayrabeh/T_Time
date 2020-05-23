import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, FormArray} from '@angular/forms';
import { tap, first } from 'rxjs/operators';
import { MatSelectChange } from '@angular/material';
import {login , register , getAllDocs , getDocById} from '../../api/api'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm : FormGroup;
  loading = false;
  success = false;
  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    this.myForm=this.fb.group({
      email:'',
      password:'',
      manager:''
    })
    console.log(localStorage.getItem("auth-token"))
    this.myForm.valueChanges.subscribe(console.log);
  }
  async submitHandler(){
    this.loading=true;
    const formValue = this.myForm.value;
    
    try {
      console.log("test"+JSON.stringify(formValue) +"test")
      this.success=true;
      var token = '';
      await login(formValue.email , formValue.password).then(data=>{return})
      //await getDocById('users','5ec88800393039333818d1df').then(data=>console.log(data))
      
      
      const body =  {
        firstName: 'Wael',
        lastName: 'Rabah',
        userName: 'WR',
        password: '98466152',
        email: 'waelrabah@gmail.com',

        
    }
     // await register(body).then(res=>console.log(res))
      
    } catch (error) {
      console.error(error)
    }
    this.loading=false;   
  }
}
