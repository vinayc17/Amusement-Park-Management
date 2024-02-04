import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/Customer';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
})
export class AdminhomeComponent implements OnInit {
  customer: Customer = JSON.parse(localStorage.getItem('customer')!) || {};

  constructor() {}

  ngOnInit(): void {}
}
