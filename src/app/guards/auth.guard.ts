import {Injectable}  from '@angular/core';
import {Router, CanActivate}  from '@angular/router';
import {AuthService}  from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private authservice:AuthService, private rotuer: Router){

    }
    canActivate(){
        if(this.authservice.isloggedIn)
        {
        return true;
        }
        else 
        {
        this.rotuer.navigate(['/login']);
        return false;
    }   

    }
}