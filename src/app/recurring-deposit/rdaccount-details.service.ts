import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch'; 
import 'rxjs/add/operator/toPromise';
import {Raccount} from './raccount';
import {Http,Response,Headers,URLSearchParams} from '@angular/http';

@Injectable()
export class RDAccountService{
    constructor(private http:Http){}
    saveRDtoDB(rdaccount:Raccount) : Observable<any>{
        return this.http.post("http://localhost:8081/saveRDAccountToDB",rdaccount).map((res:Response)=>res.status);
    }
}