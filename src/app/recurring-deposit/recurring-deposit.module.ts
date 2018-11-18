import {NgModule} from '@angular/core';
import { CommonModule } from "@angular/common";
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { RecurringDepositDashboardComponent } from "./recurring-deposit-dashboard.component";
import { RouterModule } from "@angular/router";
import {SharedModule} from '../shared-module/shared.module';
@NgModule({
    imports: [CommonModule,FormsModule,ReactiveFormsModule,SharedModule,RouterModule.forChild([
    {
        path: 'recurring',
        component: RecurringDepositDashboardComponent
    }
    ])],
    declarations: [RecurringDepositDashboardComponent],
    exports: [RecurringDepositDashboardComponent] 
})
export class RecurringDepositModule{    

}