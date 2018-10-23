import { Component, OnInit, HostListener } from '@angular/core';
import { Music } from '../music';
import { BddService } from '../bdd.service';
import { List } from '../list';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-biblio',
  templateUrl: './biblio.component.html',
  styleUrls: ['./biblio.component.css']
})
export class BiblioComponent implements OnInit {

  // variables
  musicTable: Music[];
  list: List[];
  display = 'none';

  constructor(private bdd: BddService, private player: PlayerService) { }

  // expand search bar
  displaySearch() {
    if (this.display === 'none') {
      document.getElementById('inputsearch').style.display = 'unset';
      this.display = 'unset';
    } else if (this.display === 'unset') {
      document.getElementById('inputsearch').style.display = 'none';
      this.display = 'none';
    }
  }

  // This method collects the biblio data base from json-server
  getBiblio() {
    const getUrl = this.bdd.getBib();
    getUrl.subscribe((data: any) => {
      this.musicTable = data;
      console.log('Biblio data obtained from json-server');
    }, (error) => {
      this.bdd.handleError(error);
    });
  }

  // Collects de list of playlist for dynamic "addTo" dropups
  getList() {
    const getUrl = this.bdd.getList();
    getUrl.subscribe((data: any) => {
      this.list = data;
      console.log('list obtained from json-server');
    }, (error) => {
      this.bdd.handleError(error);
    });
  }

  // Add music to playlist
/*
  addTo(playlist: Playlist, music: Music) {
      this.bdd.addTitleTo(music, playlist).subscribe((data: any) => {
        console.log('adding title to playlist ' + playlist.id);
      }, (error) => {
        this.bdd.handleError(error);
      });
  }
*/

  // Got to top quickly function (appearing when scrolling)
  @HostListener('window:scroll', [])
  onWindowScroll() {this.scrollFunction(); }

  scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById('myBtn').style.display = 'block';
      } else {
          document.getElementById('myBtn').style.display = 'none';
      }
  }

// When the user clicks on the button, scroll to the top of the document
  topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

// Send object to player
lire(m: Music) {
  this.player.setMusic(m);
}


  ngOnInit() {
    this.getBiblio();
    this.getList();
  }

}
