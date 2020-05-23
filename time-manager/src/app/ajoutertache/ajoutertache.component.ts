import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, FormArray} from '@angular/forms';
import { tap, first } from 'rxjs/operators';
import { MatSelectChange } from '@angular/material';
@Component({
  selector: 'app-ajoutertache',
  templateUrl: './ajoutertache.component.html',
  styleUrls: ['./ajoutertache.component.css']
})
export class AjoutertacheComponent implements OnInit {
  minDate = new Date();
  sous_categ = ["janvier","fevrier","mars","avril","mai","juin","juilet","aout","septembre","octobre","novembre","decembre"];
  projet = ["janvier","fevrier","mars","avril","mai","juin","juilet","aout","septembre","octobre","novembre","decembre"];
  changeRatio(event: MatSelectChange) {
    console.log(event.value);
  }
  changeRatio1(event: MatSelectChange) {
    console.log(event.value);
  }
  myForm : FormGroup;
  loading = false;
  success = false;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb : FormBuilder) { }

  ngOnInit() {
    
    this.myForm=this.fb.group({
      name:'',
      date_debut:'',
      date_fin:'',
      projet:'',
      sous_categ:'',
      verrou:''
    })
    
    this.myForm.valueChanges.subscribe(console.log);
  }
  get sous_categform(){
   return this.myForm.get('sous_categorie') as FormArray
  }

  
  async submitHandler(){
    this.loading=true;
    const formValue = this.myForm.value;
    
    try {
      console.log("test"+formValue+"test")
      this.success=true;
      
    } catch (error) {
      console.error(error)
    }
    this.myForm.reset();
    this.loading=false;
  }
  

}
