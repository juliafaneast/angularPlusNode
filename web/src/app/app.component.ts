import { Component } from '@angular/core';
import {AppService} from '../service/appService';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private appService: AppService) {};

  getDetail() {
    console.log(event);
    this.appService.getDetail()
      .subscribe((res)=>{
        console.log(" app.component detail:" + JSON.stringify(res));
      });
  }
}
