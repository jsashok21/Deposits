import {Component,OnInit,TemplateRef} from '@angular/core';
import {AccountDetailsService} from './account-details.service'
import {Accounts} from './accounts';
import {Router} from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
@Component({
	selector: 'edit-details',
	templateUrl: './edit-details.html',
	providers:[AccountDetailsService]
})
export class EditDetailsComponent implements OnInit{
	accounts: Array<any>;
	selectedAccount:Accounts;
	column: string = 'endDate';
	isDesc: boolean = false;
	direction: number = 1;
	/*accToBeDeleted : String;*/
	constructor(
	private router : Router,
	private editService : AccountDetailsService,
	private modalService: BsModalService
	){};	
	ngOnInit():void{
		this.loadAcc();
		//$('#edit-table').DataTable();
	}
	loadAcc():void{
		this.editService.getDepositAccountsFromDB().subscribe(accounts=>{
			accounts.forEach(function(account,index){
				var temp = account.startDate.split("-")
				account.startDate =	new Date(temp[0],temp[1]-1,temp[2]);
			});
			accounts.forEach(function(account,index){
				var temp = account.endDate.split("-")
				account.endDate = new Date(temp[0],temp[1]-1,temp[2]);
			});
			this.accounts = accounts;			
		});
	}
	sort(property:string):void{
		this.isDesc = !this.isDesc; //change the direction    
		this.column = property;
		this.direction = this.isDesc ? 1 : -1;
	}
	setSelectedAccount(account:Accounts): void{
		
	}
	loadSelectedAccount(account:Accounts): void{
		this.selectedAccount = account;
		this.router.navigate(['/details', this.selectedAccount.iddeposits]);
	}	

	delSelectedAccount(account:Accounts): void{
		this.selectedAccount = account;
	}
	modalRef: BsModalRef;		
	openModal(template: TemplateRef<any>,account: Accounts) {
		this.selectedAccount = account;
		this.modalRef = this.modalService.show(template,{class: 'modal-sm'});
	}
	confirm(): void {
		this.editService.deleteAccount(this.selectedAccount).subscribe(accounts=>this.loadAcc());
		this.modalRef.hide();	
	}
	decline(): void {
		this.modalRef.hide();
	}
}