import { Component } from "@angular/core";

@Component({
    selector:'app-officer-section-content',
    template:`
    <div class="officer-content">
        <ng-content></ng-content>
    </div>
    `
})

export class OfficerSectionContentComponent {

}