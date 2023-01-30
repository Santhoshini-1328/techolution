import { Component } from '@angular/core';

@Component({
  selector: 'santhoshini-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
})
export class LibraryComponent {
  headersData  = [
    "Name",
    "Section",
     "Phone number"
  ];
  rowsData = [{
    name: 'Santhoshini',
    age: '26',
    phoneNumber: '87654321'
  },
  {
    name: 'avinash',
    age: '96',
    phoneNumber: '87654sd321'
  },
  {
    name: 'rojanakam',
    age: '66',
    phoneNumber: '85677654321'
  },
  {
    name: 'sindhu',
    age: '76',
    phoneNumber: '789787654321'
  },
  {
    name: 'sunny',
    age: '96',
    phoneNumber: '12387654321'
  }
];
 
}
