import { Component } from '@angular/core';
import { TestService } from './test.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'third-project';

  // I need TestService....dependency injection
  constructor(private svc: TestService, private http: HttpClient){
    this.svc.printToConsole("Got the Service");
  }

  ngOnInit(){ 
    //get back an observable
    // let observable = this.http.get("https://api.github.com/users/hemme82");
    // observable.subscribe((response) => console.log(response));
  }

  //private svc: is the the same as
  //private svc: TestService   (member variable)....then in constructor 
  //this.svc = svc;
  
}
