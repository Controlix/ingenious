import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css'
  ]
})
export class LoginComponent implements OnInit {

  ingId: number;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    if (this.ingId != null) {
      this.userService.setCurrentUser(this.ingId);
      if (this.userService.getCurrentUser() != null) {
        this.router.navigate(['overview']);
      }
    }
  }

}
