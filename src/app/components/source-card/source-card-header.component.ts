import { Component } from "@angular/core";

@Component({
    selector:"app-source-card-header",
    template:`
    <div class="source-card-header">
        <ng-content></ng-content>
    </div>
    `,
    styleUrls:['./source-card.component.scss']
})

export class SourceCardHeaderComponent {

}