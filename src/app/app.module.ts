import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppListItemComponent } from './app-list-item/app-list-item.component';
import { AppTopBarComponent } from './app-top-bar/app-top-bar.component';
import { AppInstructionsComponent } from './app-instructions/app-instructions.component';
import { AppMainComponent } from './app-main/app-main.component';
import { AppFooterComponent } from './app-footer/app-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AppListItemComponent,
    AppTopBarComponent,
    AppInstructionsComponent,
    AppMainComponent,
    AppFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
