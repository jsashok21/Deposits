import {Component,OnInit,TemplateRef,Input} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {Accounts} from '../accounts';
@Component({
    selector: 'popup-tile',
    templateUrl: './popup.html'
})
export class PopupComponent{
    @Input() selectedAccount:Accounts;
    constructor(private modalService:BsModalService){}
    modalRef: BsModalRef;
	confirm(): void {
		console.log("1");
	}
	decline(): void {
		this.modalRef.hide();
	}
}