import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import {FormsModule} from "@angular/forms";
import { TestPipe } from './pipe/test.pipe';
import { HomeComponent } from './home/home.component';
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    TestPipe,
    HomeComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
