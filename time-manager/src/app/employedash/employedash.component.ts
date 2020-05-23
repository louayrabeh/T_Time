import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Calendar, OptionsInput } from '@fullcalendar/core';
//import { Options } from '@fullcalendar/angular';
@Component({
  selector: 'app-employedash',
  templateUrl: './employedash.component.html',
  styleUrls: ['./employedash.component.css']
})
export class EmployedashComponent implements OnInit {
  constructor() {
   }
  calendarPlugins=[dayGridPlugin]
  /*calendarOptions= [{
    editable: true,
    eventLimit: true,
    weekends:false,
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay,listMonth'
    }
    views: {
      timeGrid: {
        eventLimit: 1 // adjust to 6 only for timeGridWeek/timeGridDay
      }
    }
  }];*/
  calendarEvents = [
    { title: 'event 1', start: '2020-05-16', end:'2020-05-20'}, //color:this.Color()
    { title: 'event 2', date: '2020-05-16'},
    { title: 'event 3', date: '2020-05-16'},
    { title: 'event 1', start: '2020-05-16', end:'2020-05-20'},
    { title: 'event 2', date: '2020-05-16'},
    { title: 'event 3', date: '2020-05-16'},
  ];
  
  Color()
  {
    var color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ","
    +
    Math.floor(Math.random() * 255) + ")";
    return color;
  }
  ngOnInit() {
  }
}
