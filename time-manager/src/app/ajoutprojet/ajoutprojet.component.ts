import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray} from '@angular/forms';
import { tap, first } from 'rxjs/operators';
import { MatSelectChange } from '@angular/material';
@Component({
  selector: 'app-ajoutprojet',
  templateUrl: './ajoutprojet.component.html',
  styleUrls: ['./ajoutprojet.component.css']
})
export class AjoutprojetComponent implements OnInit {
  minDate = new Date();
  employe = ["janvier","fevrier","mars","avril","mai","juin","juilet","aout","septembre","octobre","novembre","decembre"];
  changeRatio(event: MatSelectChange) {
    console.log(event.value);
  }
  myForm : FormGroup;
  //sous_categ : FormGroup;
  loading = false;
  success = false;
  constructor(private fb : FormBuilder) { }
  //name = new FormControl('');
  onSubmit(){
    //console.log(this.name)
  }
  ngOnInit() {
    
    this.myForm=this.fb.group({
      name:'',
      date_debut:'',
      date_fin:'',
      financement:'',
      employe:'',
      sous_categorie:this.fb.array([])
    })
    
    this.myForm.valueChanges.subscribe(console.log);
  }
  get sous_categform(){
   return this.myForm.get('sous_categorie') as FormArray
  }

  addsous_categ(){
    const sous_categ=this.fb.group({
      sous_categ_input:[]
    })
    this.sous_categform.push(sous_categ)
  }
  deletesous_categ(i){
    this.sous_categform.removeAt(i)
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
    this.loading=false;
    this.myForm.reset();
  }

}
