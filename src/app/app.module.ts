import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BiblioComponent } from './biblio/biblio.component';
import { ListComponent } from './list/list.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { AppRoutingModule } from './app-routing.module';
import { GenreComponent } from './genre/genre.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BiblioComponent,
    ListComponent,
    PlaylistComponent,
    GenreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
