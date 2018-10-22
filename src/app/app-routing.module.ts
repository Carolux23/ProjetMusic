import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { BiblioComponent } from './biblio/biblio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { GenreComponent } from './genre/genre.component';
import { OnPlayComponent } from './on-play/on-play.component';

const routes: Routes = [
  { path: '', redirectTo: '/biblio', pathMatch: 'full' },
  { path: 'list', component: ListComponent },
  { path: 'biblio', component: BiblioComponent },
  { path: 'genre', component: GenreComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'playlist', component: PlaylistComponent },
  {path : 'onPlay', component: OnPlayComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
