import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDebounceInputModule } from 'projects/input/src/public-api';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxDebounceInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
