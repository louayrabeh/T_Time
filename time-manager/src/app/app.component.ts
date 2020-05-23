import { Component } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'time-manager';
  notConnected() {
    return localStorage.getItem("auth-token") /* && this.currentUser.role === Role.Admin;*/
  }
}