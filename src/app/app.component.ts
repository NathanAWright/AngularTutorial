import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Angular Tutorial';
  public message="";
  public name = "Nathan";//this will be sent to the testComponent (child component)
}
