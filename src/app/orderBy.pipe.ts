import {Pipe,PipeTransform} from '@angular/core';
import {Accounts} from './accounts';
@Pipe({
    name:'sortByDate'
})
export class OrderBy implements PipeTransform{
    transform(records: Array<any>, args?: any):any{
        if(records != undefined) {
        return records.sort(function(a, b){            
            if(Date.parse(a[args.property]) < Date.parse(b[args.property])){
                return -1 * args.direction;
            }
            else if(Date.parse(a[args.property])> Date.parse(b[args.property])){
                return 1 * args.direction;
            }
            else{
                return 0;
            }
        });
        }return records;
    }
}