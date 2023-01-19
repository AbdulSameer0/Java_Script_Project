import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HELLO SQL';
 
  obj =[
    {name : "raja", email : "abdulsameer9685@gmail.com"},
    {name : "arbaj", email : "arbajahmad@gmail.com"},
    {name : "shahbaj", email : "shahbajahmad@gmail.com"},
    {name : "sadab", email : "sadabahmad@gmail.com"},
    {name : "aftab  ", email : "aftabahmad@gmail.com"}
  
  ]
}
