import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';
 
@Directive({
    selector: '[appDropdown]'
})
 
export class DropdownDirective {
    private isOpen = false;
    constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
 
    @HostListener('click') toggleMenu() {
        const dropdown = this.elementRef.nativeElement.nextElementSibling;
 
        if (!this.isOpen) {
            this.renderer.addClass(dropdown, 'navbar-open');
        } else {
            this.renderer.removeClass(dropdown, 'navbar-open');
        }
 
        document.addEventListener('click', (event) => {
            if (event.target !== this.elementRef.nativeElement) {
                this.isOpen = false;
                this.renderer.removeClass(dropdown, 'navbar-open');
            }
        });
 
        this.isOpen = !this.isOpen;
    }
}