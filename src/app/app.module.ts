import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameFormComponent } from './name-form/name-form.component';
import { FormsModule } from '@angular/forms';
import { GreetingComponent } from './greeting/greeting.component';

@NgModule({
  declarations: [
    AppComponent,
    NameFormComponent,
    GreetingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
