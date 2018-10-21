import { Component, OnInit } from '@angular/core';
import { Music } from '../music';
import { BddService } from '../bdd.service';
import { Playlist } from '../playlist';

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

  // Check bdd service to be fully implemented
  deleteMusic(music: Music) {
    // This code is indended to delete the music card from the display
    const i: number = this.content.indexOf(music);
    this.content.splice(i, 1);

    // This code delete the same object from the json server
    this.bdd.delTitle(music).subscribe((data: any) => {
      console.log('Delete request successfull');
    },
    (error: any) => {
    this.bdd.handleError(error);
    });
  }

  ngOnInit() {
    this. getPlayList();

  }

}
