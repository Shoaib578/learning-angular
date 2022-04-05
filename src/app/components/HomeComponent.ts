import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: '../../views/home.html',
  styleUrls: ['../../app/app.component.css']
})
export class HomeComponent {
  title = 'home';



  constructor(){
    console.log("This is the Home")
  }
 
}
