import {Directive,ElementRef,HostListener,Input} from '@angular/core';

@Directive({
    selector:'[inputHiglightColor]'
})
export class HighlightColorDirective{
    constructor(private el:ElementRef){
        
    }
    @Input('inputHiglightColor') highlightColor : string;
    @Input() defaultColor : string;
    @HostListener('mouseleave') onmouseeleave(){        
        this.highlight(null);
    }
    @HostListener('mouseenter') onmouseenter(){
         this.highlight(this.highlightColor || this.defaultColor || 'red');
    }
    highlight(color:string){
        this.el.nativeElement.style.backgroundColor = color;
    }
}