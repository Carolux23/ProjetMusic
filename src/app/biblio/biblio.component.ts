import { Component, OnInit } from '@angular/core';
import { Music } from '../music';
import { BddService } from '../bdd.service';
import { Playlist } from '../playlist';
import { $ } from 'protractor';

@Component({
  selector: 'app-biblio',
  templateUrl: './biblio.component.html',
  styleUrls: ['./biblio.component.css']
})
export class BiblioComponent implements OnInit {

  musicTable: Music[];
  list: Playlist[];
  display = 'none';

  constructor(private bdd: BddService) { }

  // collapse search bar
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

  addTo(playlist: Playlist, music: Music) {
      this.bdd. addTitleTo(playlist, music).subscribe((data: any) => {
        console.log('adding title to playlist ' + playlist.name);
      }, (error) =>{
        this.bdd.handleError(error);
      });
  }


  ngOnInit() {
    this.getBiblio();
    this.getList();
  }

}
