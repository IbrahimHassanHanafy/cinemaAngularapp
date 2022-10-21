import { Injectable } from '@angular/core';
import { Register } from 'src/app/classes/register';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginRegister=false; //disabled home component if not register or admin
  profileRegister=false; //disabled profile component if not register
  registerData={
    userName:'',
    fullName:{
      firstName:'',
      lastName:'',
    },
    password:'',
    email:'',
    phone:''
  };
  constructor() { }
  data(profileData:any){
   
    this.registerData=profileData
    localStorage.setItem('registerdata',JSON.stringify(this.registerData))
  }
}
