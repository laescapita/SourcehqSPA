import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
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
import { HomeComponent } from 'src/app/pages/source/home/home.component';
import { OfficerSectionComponent } from 'src/app/pages/source/officer/officer-section.component';
import { OfficerSectionHeaderComponent } from 'src/app/pages/source/officer/officer-section-header.component';
import { LoginComponent } from 'src/app/admin/login/login.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'

import { ComponentModule } from './components/component.module';
import { FilterPipe } from './shared/pipes/filter.pipe';

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
    HomeComponent,
    OfficerSectionComponent,
    OfficerSectionHeaderComponent,
    LoginComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentModule
  ],
  providers: [AuthGuard, AuthService, CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
