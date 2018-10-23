import { Injectable } from '@angular/core';
import { BiblioComponent } from './biblio/biblio.component';
import { Music } from './music';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  musicL:Music;
  
  private music= new Subject<any>();
  musicChanged=this.music.asObservable();
  

  setMusic(m){
    this.musicL=m;
    this.music.next();
  }
}
