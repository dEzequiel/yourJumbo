import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// Auth Services
import { AuthenticationService } from '../services/auth.service';
import { AuthfakeauthenticationService } from '../services/authfake.service';
import { environment } from '../../../environments/environment';

/**
 * Guest Guard
 * Allows access only when there is NO active session.
 * If the user is already logged in, redirects to the private dashboard.
 */
@Injectable({ providedIn: 'root' })
export class GuestGuard {

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private authFackservice: AuthfakeauthenticationService
    ) { }

    canActivate() {
        if (environment.defaultauth === 'firebase') {
            if (this.authenticationService.currentUser()) {
                // logged in so redirect to dashboard
                this.router.navigate(['/dashboard']);
                return false;
            }
        } else {
            if (this.authFackservice.currentUserValue || sessionStorage.getItem('currentUser')) {
                // logged in so redirect to dashboard
                this.router.navigate(['/dashboard']);
                return false;
            }
        }
        return true;
    }
}
