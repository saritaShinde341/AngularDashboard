import { Component, Input, OnInit } from '@angular/core';

import { Cards } from 'src/app/modal/data.model';

@Component({
  selector: 'app-top-card',
  templateUrl: './top-card.component.html',
  styleUrls: ['./top-card.component.scss']
})
export class TopCardComponent implements OnInit {
  @Input() cardsData: Cards[];
  constructor() { }

  ngOnInit(): void {
    console.log("cardsData: ", this.cardsData);
  }

}
