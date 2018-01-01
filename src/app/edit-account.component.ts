import 'rxjs/add/operator/switchMap';
import{Component,OnInit} from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {ActivatedRoute,Params} from '@angular/router';
import {Location} from '@angular/common';
import {Accounts} from './accounts';
import {AccountDetailsService} from './account-details.service';
import 'rxjs/add/operator/toPromise';

@Component({
	selector: 'edit-account-detail',
	templateUrl: './add-account.html',
	providers: [AccountDetailsService]
})
export class EditAccountDetailComponent implements OnInit{
	accounts:Accounts;
	updateButton=true;
	constructor(
	private route:ActivatedRoute,
	private location:Location,
	private accountsService:AccountDetailsService
	){};
	ngOnInit(){
		this.route.params
		.switchMap((params:Params) => this.accountsService.getDepositAccountsByIdFromDB(+params['iddeposits'])).subscribe(accounts=>{
		this.myForm.patchValue(accounts[0]);
	});	
}

	myForm = new FormGroup({
		'accNum': new FormControl('',Validators.required),
		'bankName': new FormControl('',Validators.required),
		'principalAmt': new FormControl('',[Validators.required,Validators.min(1)]),
		'startDate': new FormControl('', Validators.required),
		'noOfMonths': new FormControl('', Validators.required),
		'roi': new FormControl('', Validators.required),
		'endDate': new FormControl('', Validators.required),
		'maturityAmt': new FormControl('', Validators.required),
		'repayAccount': new FormControl('', Validators.required),
		'accountHolder': new FormControl('', Validators.required)
	});
	get accNum(){return this.myForm.get('accNum');};
	saveDetails(account):void{
		this.accountsService.saveDetailsInDB(account).subscribe();
	}
}