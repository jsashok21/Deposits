 import {Component,OnInit,TemplateRef,ViewChild} from '@angular/core';
 import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
 import {AccountDetailsService} from './account-details.service';
 import {Accounts} from './accounts';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {Router} from '@angular/router';
 @Component({
    selector: 'add-account',
    templateUrl: './add-account.html',
    providers:[AccountDetailsService]
 })
 export class AddAccountComponent{
     @ViewChild('addedSuccessfullyModaltemplate') addModal : TemplateRef<any>;
    //myForm: FormGroup;
    account : Accounts;
    bankName : String;
    
    constructor(public fb: FormBuilder,private accountService : AccountDetailsService,private modalService: BsModalService,public router:Router){};
    //ngOnInit():void{
        /*this.myForm = this.fb.group({
            accNum: ['', Validators.required],
            bankName: ['', Validators.required],
            principalAmt: ['', Validators.required],
            startDate: ['', Validators.required],
            noOfMonths: ['', Validators.required],
            roi: ['', Validators.required],
            endDate: ['', Validators.required],
            maturityAmt: ['', Validators.required],
            repayAccount: ['', Validators.required],
            accountHolder: ['', Validators.required]
        });*/
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
   // };
    get accNum(){return this.myForm.get('accNum');};
    addAccount(account:Accounts):void{
        this.accountService.addAccountToDB(account).subscribe((status:Number) => {
            if(status == 200){
                this.openModal(this.addModal);
            }
    });
}
    modalRef: BsModalRef;		
	openModal(template: TemplateRef<any>) {
		this.modalRef = this.modalService.show(template,{class: 'modal-sm'});
	}
	confirm(): void {		
		this.myForm.reset();	
        this.modalRef.hide();
	}
	decline(): void {
		this.modalRef.hide();
        this.router.navigate(['/edit-details',{editSuccess:true,skipLocationChange: true}]);
	}
 }