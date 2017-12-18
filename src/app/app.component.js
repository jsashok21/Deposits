"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.name = "Jane";
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1>Welcome {{name}}\t</h1>\n\t<nav>\n\t<a routerLink=\"/dashboard\" class=\"btn btn-primary btn-sm\">Dashboard</a>\n\t<a routerLink=\"/account-details\" class=\"btn btn-primary btn-sm\">View Accounts</a>\n\t<a routerLink=\"/edit-details\" class=\"btn btn-primary btn-sm\">Edit Account Detail</a>\n\t<a routerLink=\"/add-account\" class=\"btn btn-primary btn-sm\">Add Account</a>\n\t</nav>\n\t<router-outlet></router-outlet>\n\t"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map