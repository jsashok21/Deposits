import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {PopupModule} from './popup-module/popup.module';
import {RecurringDepositModule} from './recurring-deposit/recurring-deposit.module';
import {SharedModule} from './shared-module/shared.module';

import { AppComponent }  from './app.component';
import {AccountDetailsComponent} from './account-details.component';
import {DashboardComponent} from './dashboard.component';
import {EditDetailsComponent} from './edit-details.component';
import {EditAccountDetailComponent} from './edit-account.component';
import {AddAccountComponent} from './add-account.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {KeysPipe} from './accounts.pipe';
import { ModalModule } from 'ngx-bootstrap';
import {OrderBy} from './orderBy.pipe';
import {Accounts} from './accounts';

@NgModule({
  imports:      [ BrowserModule,ReactiveFormsModule,PopupModule,RecurringDepositModule,SharedModule,ModalModule.forRoot(),RouterModule.forRoot([
  {
	  path:'account-details',
	  component:AccountDetailsComponent
  },{
	  path:'dashboard',
	  component: DashboardComponent
  },
  {
	  path:'edit-details',
	  component: EditDetailsComponent
  },
  {
	  path: 'details/:iddeposits',
	  component: EditAccountDetailComponent
  },
  {
	  path: 'add-account',
	  component: AddAccountComponent
  },
  {
	  path:'',
	  redirectTo: '/dashboard',
	  pathMatch: 'full'
  }
  ]),FormsModule,HttpModule ],
  declarations: [ AppComponent,AccountDetailsComponent,DashboardComponent,EditDetailsComponent,EditAccountDetailComponent,AddAccountComponent,KeysPipe,OrderBy],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
