import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private s:AuthService) { }

  ngOnInit(): void {

  }
  disableHome(){
    return this.s.loginRegister?"/home":"/"
    //go to home when register or login
  }
  disableProfile(){
    return this.s.profileRegister?"/profile":"/"
    //go to profile when register is done
  }

}
