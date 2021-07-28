import { Component } from "@angular/core";

@Component({
    selector:"app-source-card",
    template:`
    <div class="source-card">
        <ng-content></ng-content>
    </div>
    `,
    styleUrls:['./source-card.component.scss']
})

export class SourceCardComponent {

}