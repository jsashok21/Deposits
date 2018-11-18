import { Component } from "@angular/core";

import {Accounts} from '../accounts';
import {FormBuilder,Validators} from '@angular/forms';

import {RDAccountService} from './rdaccount-details.service';
@Component({
    selector: 'recurring-deposits',
    templateUrl: './recurring-deposit-dashboard.html',
    providers:[RDAccountService]
})
export class RecurringDepositDashboardComponent{
    constructor(private fb : FormBuilder,private rdAccountService: RDAccountService){

    }
    account: Accounts;
    color= 'pink';
    recurringDepositForm = this.fb.group({
        accNum: ['Jane',[Validators.required,Validators.minLength(2)]],
        bankName:[''],
        principalAmt:[''],
        startDate:[''],
        noOfMonths:[''],
        roi:[''],
        endDate:[''],
        maturityAmt:[''],
        repayAccount:[''],
        accountHolder:['']
    });

    createRecurringDeposit(){
        console.warn(this.recurringDepositForm.value);
        this.rdAccountService.saveRDtoDB(this.recurringDepositForm.value).subscribe((status:Number)=>{
            if(status == 200){
                console.warn("Saved");
            }
        })
    }
}