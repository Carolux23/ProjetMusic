import { Component, OnInit } from '@angular/core';
import { BddService } from '../bdd.service';
import { Playlist } from '../playlist';
import { Music } from '../music';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  // Variables
  list: Playlist[] = [];
  playList: Music[] = [];

  constructor(private bdd: BddService) { }

  // Method initializing database lists of playLists
  getList() {
    const getUrl = this.bdd.getList();
    getUrl.subscribe((data: any) => {
    this.list = data;
    console.log('list obtained from json-server');
  }, (error) => {
    this.bdd.handleError(error);
});
}

  // This method should call for a specific playlist from the database
  getPlayList() {
    console.log('looking for that playList ');
  }

  ngOnInit() {
    this.getList();
  }

}
