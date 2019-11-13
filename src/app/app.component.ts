import { Component } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'third-project';

  // I need TestService....dependency injection
  constructor(private svc: TestService){
    this.svc.printToConsole("Got the Service");
  }

  //private svc: is the the same as
  //private svc: TestService   (member variable)....then in constructor 
  //this.svc = svc;
  
}
