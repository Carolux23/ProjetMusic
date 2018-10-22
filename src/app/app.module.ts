import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BiblioComponent } from './biblio/biblio.component';
import { ListComponent } from './list/list.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { AppRoutingModule } from './app-routing.module';
import { GenreComponent } from './genre/genre.component';
import { HttpClientModule } from '@angular/common/http';
import { GenrePipe } from './genre.pipe';
import { SearchPipe } from './search.pipe';
import { FormsModule }   from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BiblioComponent,
    ListComponent,
    PlaylistComponent,
    GenreComponent,
    GenrePipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
