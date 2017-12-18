import {Component} from '@angular/core';

@Component({
	selector:'app-root',
	template:`<h1>Welcome {{name}}	</h1>
	<nav>
	<a routerLink="/dashboard" class="btn btn-primary btn-sm">Dashboard</a>
	<a routerLink="/account-details" class="btn btn-primary btn-sm">View Accounts</a>
	<a routerLink="/edit-details" class="btn btn-primary btn-sm">Edit Account Detail</a>
	<a routerLink="/add-account" class="btn btn-primary btn-sm">Add Account</a>
	</nav>
	<router-outlet></router-outlet>
	`
})
export class AppComponent{
	name = "Jane";
}