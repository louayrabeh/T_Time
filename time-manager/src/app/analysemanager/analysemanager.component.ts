import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import { MatOption, MatSelectChange, MatTableDataSource, MatSort, MatPaginator,  } from '@angular/material';
export interface ProjectElement {
  id: number;
  projet:string;
  finance:number;
}
var ELEMENT_DATA: ProjectElement[] = [
  { id: 1, projet:'test', finance:5000},
  { id: 2, projet:'test1', finance:5000},
  { id: 3, projet:'test', finance:5000},
  { id: 4, projet:'test3', finance:5000},
  { id: 5, projet:'test', finance:5000},
  { id: 5, projet:'test4', finance:5000},
  { id: 7, projet:'test2', finance:5000},
  { id: 8, projet:'test', finance:5000},
  { id: 9, projet:'test0', finance:5000},
  { id: 10, projet:'test', finance:5000},
];
@Component({
  selector: 'app-analysemanager',
  templateUrl: './analysemanager.component.html',
  styleUrls: ['./analysemanager.component.css']
})
export class AnalysemanagerComponent implements OnInit {
  displayedColumns: string[] = ['projet', 'finance'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  months = ["janvier","fevrier","mars","avril","mai","juin","juilet","aout","septembre","octobre","novembre","decembre"];
  changeRatio(event: MatSelectChange) {
    console.log(event.value);
  }
  @ViewChild('content') content: ElementRef;
  public downloadPDF(){
    let doc=new jsPDF('landscape','pt','a4');
    var canvas = <HTMLCanvasElement>document.querySelector('#financeperproject');
    var canvasImg = canvas.toDataURL("image/jpeg", 1.0);
	
    let specialElementHandlers={
      '#editor':function(element, renderer){
        return true;
      }
    };
    let content = this.content.nativeElement;
    /*doc.fromHTML(content.innerHTML, 15, 15, {
      'width':190,
      'elementHandlers': specialElementHandlers
    });*/
    let data = [];
    this.dataSource.filteredData.forEach(obj => {
      let arr = [];
      this.displayedColumns.forEach(col => {
        arr.push(obj[col]);
      });
      data.push(arr);
    }); 
        
    
    doc.setFontSize(20);
	doc.text(25, 25, "Rapport financier"); 
    doc.autoTable({
      styles: { halign: 'center' },
      head: [['Projet de ce mois', 'Financement alloué']],
      body: data,
      headStyles:{fillColor:[105, 240, 174]}
    });
    doc.addPage();
    doc.text(25, 25, 'Analyse graphique pour le financement alloué de chaque projet');
    doc.addImage(canvasImg, 'JPEG', 30, 45, 785, 500 );
    doc.save('test.pdf')
  }

  constructor() { }
  financeperproject = [];
  Color()
  {
    var color = "rgba(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ","
    +
    Math.floor(Math.random() * 255) + ", 0.4)";
    return color;
  }

  ngOnInit() {

    this.financeperproject = new Chart('financeperproject', {
      type: 'bar',
    data: {
     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
     datasets: [{
         label: '# of Votes',
         data: [9,7 , 3, 5, 2, 10],
         backgroundColor: [
             this.Color(),
             this.Color(),
             this.Color(),
             this.Color(),
             this.Color(),
             this.Color()
         ],
         borderWidth: 1
     }]
    }, 
    options: {
     title:{
         text:"Financement par projet",
         display:true
     },
     legend:{
       display:false
     },
     scales: {
         yAxes: [{
             ticks: {
                 beginAtZero:true
             }
         }]
     }
    }
    });
  }
}
