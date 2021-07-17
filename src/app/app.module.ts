import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './admin/Officer/recipes.component';
import { RecipeListComponent } from './admin/Officer/officer-list/recipe-list.component';
import { RecipeItemComponent } from './admin/Officer/officer-list/officer-item/recipe-item.component';
import { OfficerCreateComponentForm } from './admin/Officer/officer-detail/officer-create-form.component';

import { RecipeDetailComponent } from './admin/Officer/officer-detail/recipe-detail.component';

import { DropdownDirective } from './shared/dropdown.directive';

import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { HomeComponent } from 'src/app/pages/home/home.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    OfficerCreateComponentForm,
    DropdownDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AuthGuard, AuthService, CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
