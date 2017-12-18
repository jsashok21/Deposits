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
var router_1 = require("@angular/router");
var EditDetailsComponent = (function () {
    function EditDetailsComponent(router, editService) {
        this.router = router;
        this.editService = editService;
    }
    ;
    EditDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editService.getDepositAccountsFromDB().subscribe(function (accounts) { return _this.accounts = accounts; });
        //$('#edit-table').DataTable();
    };
    EditDetailsComponent.prototype.setSelectedAccount = function (account) {
        this.selectedAccount = account;
    };
    EditDetailsComponent.prototype.loadSelectedAccount = function () {
        this.router.navigate(['/details', this.selectedAccount.iddeposits]);
    };
    return EditDetailsComponent;
}());
EditDetailsComponent = __decorate([
    core_1.Component({
        selector: 'edit-details',
        templateUrl: './edit-details.html',
        providers: [account_details_service_1.AccountDetailsService]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        account_details_service_1.AccountDetailsService])
], EditDetailsComponent);
exports.EditDetailsComponent = EditDetailsComponent;
//# sourceMappingURL=edit-details.component.js.map