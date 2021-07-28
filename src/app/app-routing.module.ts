import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./auth-guard.service";
import { RecipesComponent } from "./admin/Officer/recipes.component";
import { HomeComponent } from "./pages/source/home/home.component";
import { LoginComponent } from "./admin/login/login.component";

const appRoutes: Routes = [
    { 
      path: 'home', 
    //   canActivate: [AuthGuard],
    //   canActivateChild: [AuthGuard],
      component: HomeComponent
    },
    {
      path:'admin',
      children:[
        {
            path: 'login', 
          //   canActivate: [AuthGuard],
          //   canActivateChild: [AuthGuard],
            component: LoginComponent
        }
      ]
    },
    // {
    //   path:'vexRobotics',
    //   component: 
    // }

  ];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule{

}