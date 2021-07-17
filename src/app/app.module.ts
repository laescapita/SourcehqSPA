import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './Officer/recipes.component';
import { RecipeListComponent } from './Officer/officer-list/recipe-list.component';
import { RecipeItemComponent } from './Officer/officer-list/officer-item/recipe-item.component';
import { OfficerCreateComponentForm } from './Officer/officer-detail/officer-create-form.component';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeDetailComponent } from './Officer/officer-detail/recipe-detail.component';

import { DropdownDirective } from './shared/dropdown.directive';

import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { CanDeactivateGuard } from './can-deactivate-guard.service';

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeDetailComponent,
    OfficerCreateComponentForm,
    DropdownDirective
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
