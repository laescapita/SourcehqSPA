import { Component } from "@angular/core";

@Component({
    selector:"app-officer-section",
    template:`
        <div class="row">
            <div class="col">
                <app-officer-section-header>
                Header
                </app-officer-section-header>
            </div>
        </div>
        
        <div class="row">
            <div class="col">
                <app-officer-section-content>
                Content
                </app-officer-section-content>
            </div>
        </div>
    `
})

export class OfficerSectionComponent {

}