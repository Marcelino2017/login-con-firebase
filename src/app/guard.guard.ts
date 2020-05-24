import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  
  constructor(private auth: AuthService,
              private retur: Router) {}

  canActivate(): boolean {
    
    
    if (this.auth.estaAutenticado()) {
      return true;
    } else {
      this.retur.navigateByUrl('/login');
      return false;
    }
  }

}
