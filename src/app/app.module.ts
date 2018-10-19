import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BiblioComponent } from './biblio/biblio.component';
import { ListComponent } from './list/list.component';
import { PlaylistComponent } from './playlist/playlist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BiblioComponent,
    ListComponent,
    PlaylistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
