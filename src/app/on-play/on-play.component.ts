import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Music } from '../music';

@Component({
  selector: 'app-on-play',
  templateUrl: './on-play.component.html',
  styleUrls: ['./on-play.component.css']
})

export class OnPlayComponent implements OnInit {
  music : Music;
  constructor(private player:PlayerService) {
    this.player.musicChanged.subscribe(()=>{this.lecture()})
  }

  lecture(){
    this.music=this.player.musicL;
  }
 
  ngOnInit() {
  }

}
