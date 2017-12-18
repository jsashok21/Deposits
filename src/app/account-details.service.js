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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/toPromise");
var AccountDetailsService = (function () {
    function AccountDetailsService(http) {
        this.http = http;
    }
    /* accounts:Accounts[];
    selectedAccount:Accounts; */
    AccountDetailsService.prototype.getAccounts = function (id) {
        var params = new http_1.URLSearchParams();
        params.set('param1', id.toString());
        return this.http.get("http://localhost:8081/getAccountById", { search: params }).toPromise().then(function (response) {
            console.log(response.json());
            return response.json();
        }).catch(this.handleError);
    };
    AccountDetailsService.prototype.getAccount = function (id) {
        return this.getAccounts(id).then(function (res) { return helFun(res); });
        function helFun(res) {
            return res;
        }
    };
    ;
    AccountDetailsService.prototype.getAccountsUsingWebService = function () {
        return this.http.get("http://localhost:8081/getAccounts").map(function (response) { return response.json(); }).catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    AccountDetailsService.prototype.getAccountUsingWebService = function (id) {
        return this.http.get("http://localhost:8081/getAccounts").map(function (response) { return response.json().find(function (accounts) { return accounts.iddeposits === id; }); }).catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    AccountDetailsService.prototype.saveDetailsUsingWebService = function (account) {
        return this.http.post("http://localhost:8081/editAccount", account).map(function (response) { return response.json(); });
    };
    AccountDetailsService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    AccountDetailsService.prototype.getDepositAccountsFromDB = function () {
        return this.http.get("http://localhost:8081/getAccountsFomDB").map(function (response) { return response.json(); }).catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    AccountDetailsService.prototype.addAccountToDB = function (account) {
        return this.http.post("http://localhost:8081/saveAccountToDB", account);
    };
    AccountDetailsService.prototype.getDepositAccountsByIdFromDB = function (id) {
        var params = new http_1.URLSearchParams();
        params.set("param1", id.toString());
        return this.http.get("http://localhost:8081/getAccountByIdFromDB", { search: params }).map(function (res) { return res.json(); }).catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    AccountDetailsService.prototype.saveDetailsInDB = function (account) {
        return this.http.post("http://localhost:8081/saveEditedAccountInDB", account);
    };
    return AccountDetailsService;
}());
AccountDetailsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AccountDetailsService);
exports.AccountDetailsService = AccountDetailsService;
//# sourceMappingURL=account-details.service.js.map