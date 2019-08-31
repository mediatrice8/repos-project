import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepositoryComponent } from './app-comp/repository/repository.component';
import { SearchFormComponent } from './search-form/search-form.component';
import {FormsModule} from '@angular/forms';
import { ReposeComponent } from './repose/repose.component';

@NgModule({
  declarations: [
    AppComponent,
    RepositoryComponent,
    SearchFormComponent,
    ReposeComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
