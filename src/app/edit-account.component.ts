import 'rxjs/add/operator/switchMap';
import{Component,OnInit} from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import {Location} from '@angular/common';
import {Accounts} from './accounts';
import {AccountDetailsService} from './account-details.service';
import 'rxjs/add/operator/toPromise';

@Component({
	selector: 'edit-account-detail',
	templateUrl: './edit-detail.html',
	providers: [AccountDetailsService]
})
export class EditAccountDetailComponent implements OnInit{
	accounts:Accounts;
	constructor(
	private route:ActivatedRoute,
	private location:Location,
	private accountsService:AccountDetailsService
	){};
	ngOnInit():void{
		this.route.params
		.switchMap((params:Params) => this.accountsService.getDepositAccountsByIdFromDB(+params['iddeposits'])).subscribe(accounts=>this.accounts=accounts[0]);
	}
	saveDetails():void{
		this.accountsService.saveDetailsInDB(this.accounts).subscribe();
	}
}