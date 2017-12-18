"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var account_details_service_1 = require("./account-details.service");
var AddAccountComponent = (function () {
    function AddAccountComponent(fb, accountService) {
        this.fb = fb;
        this.accountService = accountService;
    }
    ;
    AddAccountComponent.prototype.ngOnInit = function () {
        this.myForm = this.fb.group({
            accNum: ['', forms_1.Validators.required],
            bankName: ['', forms_1.Validators.required],
            principalAmt: ['', forms_1.Validators.required],
            startDate: ['', forms_1.Validators.required],
            noOfMonths: ['', forms_1.Validators.required],
            roi: ['', forms_1.Validators.required],
            endDate: ['', forms_1.Validators.required],
            maturityAmt: ['', forms_1.Validators.required],
            repayAccount: ['', forms_1.Validators.required],
            accountHolder: ['', forms_1.Validators.required]
        });
    };
    ;
    AddAccountComponent.prototype.addAccount = function (account) {
        this.accountService.addAccountToDB(account).subscribe();
    };
    return AddAccountComponent;
}());
AddAccountComponent = __decorate([
    core_1.Component({
        selector: 'add-account',
        templateUrl: './add-account.html',
        providers: [account_details_service_1.AccountDetailsService]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, account_details_service_1.AccountDetailsService])
], AddAccountComponent);
exports.AddAccountComponent = AddAccountComponent;
//# sourceMappingURL=add-account.component.js.map