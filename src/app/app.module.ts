import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HighlightColorDirective } from './directives/highlight-color.directive';
import { HoverColorDirective } from './directives/hover-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightColorDirective,
    HoverColorDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
