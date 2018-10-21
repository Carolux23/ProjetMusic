import { Component, OnInit } from '@angular/core';
import { Music } from '../music';
import { BddService } from '../bdd.service';
import { Playlist } from '../playlist';

@Component({
  selector: 'app-biblio',
  templateUrl: './biblio.component.html',
  styleUrls: ['./biblio.component.css']
})
export class BiblioComponent implements OnInit {

  musicTable: Music[];
  list: Playlist[];

  constructor(private bdd: BddService) { }

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

    getList() {
      const getUrl = this.bdd.getList();
      getUrl.subscribe((data: any) => {
      this.list = data;
      console.log('list obtained from json-server');
    }, (error) => {
      this.bdd.handleError(error);
  });
  }

  ngOnInit() {
    this.getBiblio();
    this.getList() ;
  }

}
