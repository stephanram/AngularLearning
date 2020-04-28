import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { LoginService } from '../../services/login.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  errorMessage: any;
  constructor(private loginService: LoginService, private authService: AuthService, private router: Router) {
    this.user = new User('', '');
  }

  ngOnInit(): void {
  }

  // submit form
  login($event) {
    $event.preventDefault();
    this.loginService.validateUser(this.user).subscribe((response: any) => {
      if (response == null) {
        this.errorMessage = 'UserName/Password invalid';
        this.clearData();
      } else {
        this.errorMessage = '';
        this.authService.sendToken(response.email);
        this.router.navigate(['/menu']);
      }
      console.log('Login successful');
    });
  }

  clearData() {
    this.user = new User('', '');
  }

}
