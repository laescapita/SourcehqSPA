import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./auth-guard.service";
import { RecipesComponent } from "./admin/Officer/recipes.component";

const appRoutes: Routes = [
    { 
      path: 'officers', 
    //   canActivate: [AuthGuard],
    //   canActivateChild: [AuthGuard],
      component: RecipesComponent
    }
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule{

}