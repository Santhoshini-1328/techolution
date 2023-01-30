import { Component, Input } from '@angular/core';

@Component({
  selector: 'santhoshini-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() headers = [
    "name",
    "section",
     "phone number"
  ];
  @Input() 
    rows = [{
    name: 'Test Person 2',
    age: '',
    phoneNumber: '87654321'
  }];
}
