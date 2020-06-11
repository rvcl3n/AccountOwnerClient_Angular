import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder ,FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  get f() { return this.loginForm.controls; }

  login() {
    this.authService.login(
      {
        email: this.f.email.value,
        password: this.f.password.value
      }
    )
    .subscribe(success => {
      if (success) {
        this.router.navigate(['/owner/list']);
      }
    });
  }

}