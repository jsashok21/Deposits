import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HighlightColorDirective} from './higlight-color.directive';

@NgModule({
    imports: [CommonModule],
    declarations: [HighlightColorDirective],
    exports:[HighlightColorDirective]
})
export class SharedModule{}