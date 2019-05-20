import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  dropdownOpen = false;

  constructor() { }

  ngOnInit() {
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

}
