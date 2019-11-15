import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/test.service';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {

  //services are not restricted to the module they are provided in. They are shared by
  //putting them in the providers in app.module.ts.  
  constructor(private svc: TestService) {
    this.svc.printToConsole("From inner module/component") 
   }


  ngOnInit() {
  }

}
