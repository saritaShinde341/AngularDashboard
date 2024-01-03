import { Component, Input, OnInit } from '@angular/core';

import { Orders } from 'src/app/modal/data.model';

@Component({
  selector: 'app-recent-orders',
  templateUrl: './recent-orders.component.html',
  styleUrls: ['./recent-orders.component.scss']
})
export class RecentOrdersComponent implements OnInit {
  @Input() ordersData: Orders[];
  constructor() { }

  ngOnInit(): void {
    
  }

  getColor(status: string){
    switch(status){
      case 'Paid':
        return '#31ce75';
      case 'Pending':
        return '#7783a3';
      case 'Failed':
        return '#eb596e';
      default:
        return '#d3d3d3' 
    }
  }

}
