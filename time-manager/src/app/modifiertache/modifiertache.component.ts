import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, FormArray} from '@angular/forms';
import { tap, first } from 'rxjs/operators';
import { MatSelectChange } from '@angular/material';
import {login , register , getAllDocs , getDocById, editDocById, editDocById} from '../../api/api'
@Component({
  selector: 'app-modifiertache',
  templateUrl: './modifiertache.component.html',
  styleUrls: ['./modifiertache.component.css']
})
export class ModifiertacheComponent implements OnInit {
  minDate = new Date();
  sous_categ = ["janvier","fevrier","mars","avril","mai","juin","juilet","aout","septembre","octobre","novembre","decembre"];
  projet = ["janvier","fevrier","mars","avril","mai","juin","juilet","aout","septembre","octobre","novembre","decembre"];
  
  myForm : FormGroup;
  loading = false;
  success = false;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb : FormBuilder) { }
  @ViewChild('myinput') input: ElementRef;

  returnid() {
     return this.input.nativeElement.getAttribute('id');
  }
  ngOnInit() {
    this.myForm=this.fb.group({
      id:'',
      name:'',
      date_debut:'',
      date_fin:'',
      projet:'',
      sous_categ:'',
      verrou:''
    })
    console.log(this.returnid()+"test");
    this.myForm.valueChanges.subscribe(console.log);
  }
  async submitHandler(){
    this.loading=true;
    const formValue = this.myForm.value;
    this.myForm.value.id=this.returnid()
    try {
      console.log("test "+JSON.stringify(this.myForm.value)+" test")
      this.success=true;
      await editDocById(formValue.email , formValue.password).then(data=>{return})
    } catch (error) {
      console.error(error)
      this.myForm.reset();
    }
    //this.myForm.reset();
    this.loading=false;
  }

}
