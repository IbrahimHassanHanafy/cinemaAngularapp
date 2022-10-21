import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  admin = {
    name: 'admin',
    password: 'abc12345',
  };
  register={
    name:JSON.parse(localStorage['registerdata']).userName,
    password:JSON.parse(localStorage['registerdata']).password
  }
  constructor(private route: Router,private s:AuthService) {}

  ngOnInit(): void {}
  
  goToHome(login:any) {

   if(login.value.userName==this.admin.name&&login.value.password==this.admin.password){
    this.s.loginRegister=true
    this.route.navigate(['/home']);
  }
  else if(this.register.name==login.value.userName&&
  this.register.password==login.value.password
  ){
    this.s.loginRegister=true;
    this.s.profileRegister=true
    this.route.navigate(['/home']);
  }
  }
}
