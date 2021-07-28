import { Component } from "@angular/core";

@Component({
    selector:"app-source-card-content",
    template:`
    <div class="source-card-content">
        <ng-content></ng-content>
    </div>
    `,
    styleUrls:['./source-card.component.scss']
})

export class SourceCardContentComponent {

}