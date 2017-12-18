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
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var account_details_service_1 = require("./account-details.service");
require("rxjs/add/operator/toPromise");
var EditAccountDetailComponent = (function () {
    function EditAccountDetailComponent(route, location, accountsService) {
        this.route = route;
        this.location = location;
        this.accountsService = accountsService;
    }
    ;
    EditAccountDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.accountsService.getDepositAccountsByIdFromDB(+params['iddeposits']); }).subscribe(function (accounts) { return _this.accounts = accounts[0]; });
    };
    EditAccountDetailComponent.prototype.saveDetails = function () {
        this.accountsService.saveDetailsInDB(this.accounts).subscribe();
    };
    return EditAccountDetailComponent;
}());
EditAccountDetailComponent = __decorate([
    core_1.Component({
        selector: 'edit-account-detail',
        templateUrl: './edit-detail.html',
        providers: [account_details_service_1.AccountDetailsService]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        common_1.Location,
        account_details_service_1.AccountDetailsService])
], EditAccountDetailComponent);
exports.EditAccountDetailComponent = EditAccountDetailComponent;
//# sourceMappingURL=edit-account.component.js.map