import { Component, OnInit } from '@angular/core';
import { Music } from '../music';

@Component({
  selector: 'app-biblio',
  templateUrl: './biblio.component.html',
  styleUrls: ['./biblio.component.css']
})
export class BiblioComponent implements OnInit {

  musicTable:Music[] = [];

  constructor() { }

  ngOnInit() {
  }

}
