import {Injectable} from '@angular/core';
import {Accounts} from './accounts';
import {Http,Response,Headers,URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch'; 
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AccountDetailsService{
	/* accounts:Accounts[];
	selectedAccount:Accounts; */
	getAccounts(id:number) : Promise<Accounts>{
		let params = new URLSearchParams();
		params.set('param1',id.toString());
		return this.http.get("http://localhost:8081/getAccountById",{search:params}).toPromise().then(function(response:Response){			
			console.log(response.json());
			return response.json();
		}).catch(this.handleError);
	}
	getAccount(id: number):Promise<Accounts>{
		return this.getAccounts(id).then((res:Accounts) =>helFun(res));
		function helFun(res:Accounts){
			return res;
		}
	}
	constructor(private http:Http){};
	
	getAccountsUsingWebService() : Observable<Accounts[]>{
		return this.http.get("http://localhost:8081/getAccounts").map((response:Response) => response.json()).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	
	getAccountUsingWebService(id: number):Observable<Accounts>{
		return this.http.get("http://localhost:8081/getAccounts").map((response:Response)=> response.json().find((accounts:Accounts) => accounts.iddeposits === id)).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	saveDetailsUsingWebService(account:Accounts):Observable<Accounts[]>{
		return this.http.post("http://localhost:8081/editAccount",account).map((response:Response)=> response.json());
	}
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}

	getDepositAccountsFromDB() : Observable<Accounts[]>{
		return this.http.get("http://localhost:8081/getAccountsFomDB").map((response:Response) => response.json()).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	addAccountToDB(account:Accounts):Observable<any>{
		return this.http.post("http://localhost:8081/saveAccountToDB",account).map((res:Response)=>res.status);
	}
	getDepositAccountsByIdFromDB(id:number):Observable<Accounts>{
		let params = new URLSearchParams();
		params.set("param1",id.toString());
		return this.http.get("http://localhost:8081/getAccountByIdFromDB",{search:params}).map((res:Response)=>res.json()).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	saveDetailsInDB(account:Accounts):Observable<any>{
		return this.http.post("http://localhost:8081/saveEditedAccountInDB",account);
	}

	deleteAccount(account:Accounts):Observable<Accounts[]>{
		let params = new URLSearchParams();
		params.set('param1',account.accNum.toString());
		return this.http.delete("http://localhost:8081/deleteAccountInDB",{search:params}).map((res:Response)=>res.json());
	}
}
