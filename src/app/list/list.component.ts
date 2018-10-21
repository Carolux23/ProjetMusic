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

  list: Playlist[] = [];
  playList: Music[] = [
    {
      "id": 12,
      "titre": "Immersion",
      "interprete": "Vulpey",
      "lien_audio": "Immersion-Vulpey.mp3",
      "lien_img": "img12.jpg",
      "genre": "pop"
    },
    {
      "id": 11,
      "titre": "TheWarWithin",
      "interprete": "TheARTISANSBeats",
      "lien_audio": "TheWarWithin-TheARTISANSBeats.mp3",
      "lien_img": "img11.jpg",
      "genre": "pop"
    },
    {
      "id": 8,
      "titre": "ElectricHopes",
      "interprete": "PsyDen",
      "lien_audio": "ElectricHopes-PsyDen.mp3",
      "lien_img": "img8.jpg",
      "genre": "pop"
    },
    {
      "id": 9,
      "titre": "ERUTUF",
      "interprete": "SaMZIng",
      "lien_audio": "ERUTUF-SaMZIng.mp3",
      "lien_img": "img9.jpg",
      "genre": "pop"
    },
    {
      "id": 10,
      "titre": "Asteroids",
      "interprete": "SyunNakano",
      "lien_audio": "Asteroids-SyunNakano.mp3",
      "lien_img": "img10.jpg",
      "genre": "pop"
    }
  ];

  constructor(private bdd: BddService) { }

  // Method initializing database lists of playLists
  getList() {
    const getUrl = this.bdd.getList();
    getUrl.subscribe((data: any) => {
    for (var i:number=0; i<data.length; i++) {
      this.list.push(data[i]);
      this.playList.push(data[i]);
    }
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
