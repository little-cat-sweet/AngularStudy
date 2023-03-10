import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {HelloComponent} from './hello/hello.component';
import {TestPipe} from './pipe/test.pipe';
import {HomeComponent} from './home/home.component';
import {TitleComponent} from './title/title.component';

import {TitleService} from './serves/title.service';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    TestPipe,
    HomeComponent,
    TitleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TitleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
