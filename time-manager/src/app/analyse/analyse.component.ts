import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import * as jsPDF from 'jspdf';
@Component({
  selector: 'app-analyse',
  templateUrl: './analyse.component.html',
  styleUrls: ['./analyse.component.css']
})
export class AnalyseComponent implements OnInit {
  
  constructor() { }
  donetaskspermonth = [];
  tasksperproject = [];
  done_not_done = [];
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
          label: 'Nombre de tâches réalisées par mois',
          data: [9, 7, 3, 5, 2, 10, 15, 16, 19, 3, 1, 9],
          fill: false,
          lineTension: 0.2,
          borderColor: "#69f0ae",
          borderWidth: 2
        }]
      },
      options: {
        title: {
          text: "Courbe des tâches",
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

    //bar
    this.tasksperproject = new Chart('tasksperproject', {
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
         text:"Nombre de tâches par projet",
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
    //endbar

    //pie
    this.done_not_done = new Chart('done_not_done', {
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
         text:"Tâches réalisées par projet",
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
