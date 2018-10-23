import { Component, OnInit } from '@angular/core';
import { BddService } from '../bdd.service';
import { Playlist } from '../playlist';
import { Music } from '../music';
import { List } from '../list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  // Variables
  list: List[] = [];
  playList: Music[] = [];
  numero1: number = Math.floor(Math.random()* 101) + 1;
  numero2: number = Math.floor(Math.random()* 101) + 1;
  numero3: number = Math.floor(Math.random()* 101) + 1;
  numero4: number = Math.floor(Math.random()* 101) + 1;

  constructor(private bdd: BddService) { }

  // Method initializing database lists of playLists
  getList() {
    const getUrl = this.bdd.getList();
    getUrl.subscribe((data: any) => {
    this.list = data;
    console.log('list obtained from json-server');
    console.log(this.list);
  }, (error) => {
    this.bdd.handleError(error);
});
}



  ngOnInit() {
    this.getList();
  }

}
