import { Cards, Orders, Users } from '../app/modal/data.model';
import { Component, OnInit } from '@angular/core';

import { MainService } from './service/main-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'AngularDashboard';
  data: any;
  newUsers: Users[] = [];
  recentOrders: Orders[] = [];
  topCards: Cards[] = [];
  constructor(public mainService: MainService){

  }

  ngOnInit(): void {
    this.mainService.getDetails().pipe().subscribe((res: any) => {
      if(res){
        this.newUsers = res.new_users;
        this.recentOrders = res.recent_orders;
        this.topCards = res.top_cards;
      }else{
        console.log("Something went wrong");
      }
    })
  }
}
