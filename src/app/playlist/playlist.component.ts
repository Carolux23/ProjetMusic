import { Component, OnInit } from '@angular/core';
import { Music } from '../music';
import { BddService } from '../bdd.service';
import { ActivatedRoute } from '@angular/router';
import { Playlist } from '../playlist';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  // Variables
  content: Playlist;
  playListNo: number;

  // Intended to read Argument from the router corresponding to playlist id
  id: number;
  private sub: any;

  constructor(private bdd: BddService, private route: ActivatedRoute) { }


  // To display playlist
  getPlayList(id: number) {
    console.log('looking for that playList');
    const getUrl = this.bdd.getPlayList(id);

    getUrl.subscribe((data: any) => {
    this.content = data;
    console.log('playlists obtained from json-server');
  }, (error) => {
    this.bdd.handleError(error);
});
  }

  // Check bdd service to be fully implemented
  deleteMusic(music: Music) {
    //TODO: implement with changes of classes
    /*
    // This code is indended to delete the music card from the display
    const i: number = this.content.indexOf(music);
    this.content.splice(i, 1);

    // This code delete the same object from the json server
    this.bdd.delTitle(music).subscribe((data: any) => {
      console.log('Delete request successfull');
    },
    (error: any) => {
    this.bdd.handleError(error);
    });*/
    console.log('Trash impossible, method not implemented');
  }

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      let intId: number;
      intId = Number(this.id);
      this. getPlayList(intId);
   });

  }

}
