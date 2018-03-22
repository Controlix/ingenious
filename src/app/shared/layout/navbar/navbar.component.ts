import { Component, OnInit } from '@angular/core';
import { User } from '../../../domain/user';
import { UserService } from '../../../services/user.service';
import { MenuItem } from 'primeng/api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [
    './navbar.component.css'
  ]
})
export class NavbarComponent implements OnInit {

  items: MenuItem[] = [];
  currentUser: User;
  displayDialog = false;

  constructor(public userService: UserService, public router: Router) {}

  ngOnInit() {

    this.userService.getCurrentUser().subscribe(
      (user) => {
        this.currentUser = user;
        this.items = [{
          label: this.currentUser.name,
          items: [
            { label: 'Edit Profile', icon: 'fa-cog', routerLink: ['/edit-profile'] },
            { label: 'Logout',  icon: 'fa-sign-out', routerLink: ['/login'] }
          ],
          expanded: false
        }];
      }
    );
  }

  closeCreateGoalDialog($event) {
    this.displayDialog = false;
  }


}
