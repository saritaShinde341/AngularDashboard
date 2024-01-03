import { Component, Input, OnInit } from '@angular/core';

import { Users } from 'src/app/modal/data.model';

@Component({
  selector: 'app-user-registrations',
  templateUrl: './user-registrations.component.html',
  styleUrls: ['./user-registrations.component.scss']
})
export class UserRegistrationsComponent implements OnInit {
  @Input() usersData: Users[];
  constructor() { }

  ngOnInit(): void {
  }

}
