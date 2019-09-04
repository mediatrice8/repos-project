import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepositoryComponent } from './app-comp/repository/repository.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { ReposeComponent } from './repose/repose.component';
import { SearchUserComponent } from './search-user/search-user.component';
import {FormsModule} from '@angular/forms';
import {SearchServiceService} from './search-service.service';
import { UpperCasePipe } from './upper-case.pipe';




@NgModule({
  declarations: [
    AppComponent,
    RepositoryComponent,
    SearchFormComponent,
    ReposeComponent,
    SearchUserComponent,
    UpperCasePipe, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SearchServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
