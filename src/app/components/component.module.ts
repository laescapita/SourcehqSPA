import { NgModule } from "@angular/core";
import { SourceCardContentComponent } from "./source-card/source-card-content.component";
import { SourceCardHeaderComponent } from "./source-card/source-card-header.component";
import { SourceCardComponent } from "./source-card/source-card.component";

@NgModule({
    declarations:[
        SourceCardComponent,
        SourceCardContentComponent,
        SourceCardHeaderComponent
    ],
    imports:[],
    exports:[
        SourceCardComponent,
        SourceCardContentComponent,
        SourceCardHeaderComponent
    ]
})

export class ComponentModule { }