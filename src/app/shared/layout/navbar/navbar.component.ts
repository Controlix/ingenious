import { Component, OnInit } from '@angular/core';
import { User } from '../../../domain/user';
import { UserService } from '../../../services/user.service';
import { MenuItem } from 'primeng/api';

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

  constructor(private userService: UserService) {}

  ngOnInit() {

    this.userService.getCurrentUser().subscribe(
      (user) => {
        this.currentUser = user;
        this.items = [{
          label: this.currentUser.name,
          items: [
            { label: 'Edit Profile', icon: 'fa-cog', routerLink: ['/edit-profile'] },
            { label: 'Logout',  icon: 'fa-sign-out', routerLink: ['/logout'] }
          ],
          expanded: false
        }];
      }
    );
  }

  closeCreateGoalDialog($event) {
    console.log('close dialog');
    this.displayDialog = false;
  }


}
