import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./auth-guard.service";
import { RecipesComponent } from "./admin/Officer/recipes.component";
import { HomeComponent } from "./pages/home/home.component";

const appRoutes: Routes = [
    { 
      path: 'home', 
    //   canActivate: [AuthGuard],
    //   canActivateChild: [AuthGuard],
      component: HomeComponent
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