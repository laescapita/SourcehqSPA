import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./auth-guard.service";
import { RecipesComponent } from "./Officer/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoutes: Routes = [
    { 
      path: 'officers', 
    //   canActivate: [AuthGuard],
    //   canActivateChild: [AuthGuard],
      component: RecipesComponent
    },
    { 
      path: 'projects', 
      component: ShoppingListComponent
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