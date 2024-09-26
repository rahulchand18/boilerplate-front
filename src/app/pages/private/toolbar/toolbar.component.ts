import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
    constructor(private authService: AuthService) {}

    logout() {
        this.authService.logout();
        this.authService.navigateToLogin();
    }
}
