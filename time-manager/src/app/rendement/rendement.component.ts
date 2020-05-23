import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { MatOption, MatSelectChange } from '@angular/material';

@Component({
  selector: 'app-rendement',
  templateUrl: './rendement.component.html',
  styleUrls: ['./rendement.component.css']
})
export class RendementComponent implements OnInit {

  
  months = ["projet1","test1","test2","test3","p5","timem","tmanager"];
  changeRatio(event: MatSelectChange) {
    console.log(event.value);
  }
  constructor() { }
  donetaskspermonth = [];
  tasksperproject = [];
  sous_categperproject = [];
  Color()
  {
    var color = "rgba(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ","
    +
    Math.floor(Math.random() * 255) + ", 0.4)";
    return color;
  }

  ngOnInit() {
    //line
    this.donetaskspermonth = new Chart('donetaskspermonth', {
      type: 'line',
      data: {
        labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          label: 'Prévue',
          data: [10, 20, 30, 40, 3, 6, 4, 115, 100, 15, 40, 65],
          type: 'line',
          fill: false,
          lineTension: 0.2,
          borderColor: "#69f0ae",
          borderWidth: 3,
          order: 1
      }, {
          label: 'Réelle',
          data: [5, 10, 20, 10, 10, 20, 30, 40, 3, 6, 4, 15],
          type: 'line',
          fill: false,
          lineTension: 0.2,
          borderColor: "#b300ff",
          borderWidth: 3,
          order: 2
      }],
      },
      options: {
        title: {
          text: "Comparaison de la fin prévue et la fin réelle de chaque tâche du projet",
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    //endline

    //pie
    this.sous_categperproject = new Chart('sous_categperproject', {
      type: 'pie',
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
         text:"Tâches par Sous-catégorie",
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
    //pieend

  }
}
