import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/auth/auth.service';
import { MatchService } from 'src/app/core/services/match.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    currentUser: any;
    allSeries: any;
    selected = 'joined';
    tournaments!: any;
    joinClicked = false;
    tournamentId = '';
    selectedTournament = '';
    balance!: number;
    allUsers: any;
    statements: any;
    amount = 0;
    notifications: any = [];

    constructor(
        private authService: AuthService,
        private matchService: MatchService,
        private dialog: MatDialog,
        private snackbar: MatSnackBar,
        private router: Router
    ) {
        this.currentUser = authService.getUserData();
    }
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
}
