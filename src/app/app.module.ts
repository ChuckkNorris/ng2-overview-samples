import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HoverColorDirective } from './directives/hover-color.directive';
import { ListComponent } from './components/list/list.component';
import { ConvertEuroPipe } from './pipes/convert-euro.pipe';
import { ConvertMoneyPipe } from './pipes/convert-money.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HoverColorDirective,
    ListComponent,
    ConvertEuroPipe,
    ConvertMoneyPipe,
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
