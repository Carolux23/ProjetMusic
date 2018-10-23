import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Music } from '../music';
import { BddService } from '../bdd.service';
import { Playlist } from '../playlist';


@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
 
  genreTable: Music[] = [];
  list: Playlist[] = [];

  constructor(private router: Router,   private bdd: BddService) { }

  displayGenre(myGenre:string) {
    const getUrl = this.bdd.getBib();
    this.genreTable = [];
    getUrl.subscribe((data: any) => {
      console.log(data[2].genre);
      for (var i:number=0; i<data.length; i++) {
        if (data[i].genre === myGenre) {
          this.genreTable.push(data[i]);
          console.log('chopé');
        }
      }
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

  // Add music to playlist
  addTo(playlist: Playlist, music: Music) {
      this.bdd. addTitleTo(playlist, music).subscribe((data: any) => {
        console.log('adding title to playlist ' + playlist.name);
      }, (error) =>{
        this.bdd.handleError(error);
      });
  }


  // Got to top quickly function (appearing when scrolling)
  @HostListener("window:scroll", [])
  onWindowScroll() {this.scrollFunction()};

  scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("myBtn").style.display = "block";
      } else {
          document.getElementById("myBtn").style.display = "none";
      }
  }

// When the user clicks on the button, scroll to the top of the document
  topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  ngOnInit() {
    this.getList();
  }

}
