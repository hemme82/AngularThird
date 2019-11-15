import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {

  userName: string = "";
  response: any;

  //services are not restricted to the module they are provided in. They are shared by
  //putting them in the providers in app.module.ts.  
  constructor(private http: HttpClient) {

   }


  ngOnInit() {
  }

  search(){
    this.http.get("https://api.github.com/users/" + this.userName)
    .subscribe((response) => {
      this.response = response;
      console.log(this.response);
    })
  }

}
