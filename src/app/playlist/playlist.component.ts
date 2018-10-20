import { Component, OnInit } from '@angular/core';
import { Music } from '../music';
import { BddService } from '../bdd.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  content: Music[];
  playListNo: number;

  constructor(private bdd: BddService) { }

  getPlayList() {
    console.log('looking for that playList');
    const getUrl = this.bdd.getPlayList();
    getUrl.subscribe((data: any) => {
    this.content = data;
    console.log('playlists obtained from json-server');
  }, (error) => {
    this.bdd.handleError(error);
});
  }

  ngOnInit() {
    this. getPlayList();

  }

}
