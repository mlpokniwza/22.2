import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'
import { CategoryMenuComponent } from './home/categorymenu/categorymenu.component';
import { NewbarComponent } from './home/newbar/newbar.component';
import { TopBannerComponent } from './home/topbanner/topbanner.component';
import { SearchBarComponent } from './home/newbar/searchbar/searchbar.component';
import { ToDoListComponent } from './todolist/todolist.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryMenuComponent,
    NewbarComponent,
    TopBannerComponent,
    SearchBarComponent,
    ToDoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
