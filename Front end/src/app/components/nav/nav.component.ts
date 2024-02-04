import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
})
export class NavComponent implements OnInit {
  @Input() admin: boolean = false;
  @Input() customer: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
