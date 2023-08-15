import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MyService } from '../Services/Data.Service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AngularEditorModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [MyService],
})
export class AppModule {}
