import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  @ViewChild('users') users;
  @ViewChild('roles') roles;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let pathname = window.location.pathname.split("/")[2];
    if (pathname == 'users') {
      this.roles.nativeElement.className = "nav-item";
      this.users.nativeElement.className = "nav-item active";
    }

    if (pathname == "roles") {
      this.users.nativeElement.className = "nav-item";
      this.roles.nativeElement.className = "nav-item active";
    }
  }

  changeNavActive(navSelection) {
    if (navSelection == 'users') {
      this.roles.nativeElement.className = "nav-item";
      this.users.nativeElement.className = "nav-item active";
    }

    if (navSelection == 'roles') {
      this.users.nativeElement.className = "nav-item";
      this.roles.nativeElement.className = "nav-item active";
    }
  }
}