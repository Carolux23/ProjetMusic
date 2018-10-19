import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { BiblioComponent } from './biblio/biblio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlaylistComponent } from './playlist/playlist.component';
const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'biblio', component: BiblioComponent },
  { path: 'navbar', component: NavbarComponent},
  {path: 'playlist', component: PlaylistComponent}
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




