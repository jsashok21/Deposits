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
var account_details_service_1 = require("./account-details.service");
var AccountDetailsComponent = (function () {
    function AccountDetailsComponent(accountService) {
        this.accountService = accountService;
        this.name = 'Angular';
    }
    ;
    AccountDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accountService.getDepositAccountsFromDB().subscribe(function (accounts) { return _this.accounts = accounts; });
    };
    return AccountDetailsComponent;
}());
AccountDetailsComponent = __decorate([
    core_1.Component({
        selector: 'account-details',
        template: "\n  <h1>Hello {{name}}</h1>\n  <ul>\n\t<li *ngFor=\"let account of accounts\"><span>{{account.iddeposits}}</span><span>{{account.bankName}}</span></li>\n  </ul>\n  ",
        providers: [account_details_service_1.AccountDetailsService]
    }),
    __metadata("design:paramtypes", [account_details_service_1.AccountDetailsService])
], AccountDetailsComponent);
exports.AccountDetailsComponent = AccountDetailsComponent;
//# sourceMappingURL=account-details.component.js.map