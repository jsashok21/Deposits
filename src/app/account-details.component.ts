import { Component,OnInit } from '@angular/core';
import {AccountDetailsService} from './account-details.service'
import {Accounts} from './accounts';

@Component({
  selector: 'account-details',
  template: `
  <h1>Hello {{name}}</h1>
  <ul>
	<li *ngFor="let account of accounts"><span>{{account.iddeposits}}</span><span>{{account.bankName}}</span></li>
  </ul>
  `,
  providers:[AccountDetailsService]
})
export class AccountDetailsComponent implements OnInit { 
	name = 'Angular';
	accounts : Accounts[];
	constructor(private accountService : AccountDetailsService){};
	ngOnInit():void{
		this.accountService.getDepositAccountsFromDB().subscribe(accounts=>this.accounts=accounts);
	}
}
