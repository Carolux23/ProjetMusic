import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  display = 'none';

  constructor() { }

  displaySearch() {
    if (this.display === 'none') {
      document.getElementById('inputsearch').style.display = 'unset';
      this.display = 'unset';
    } else if (this.display === 'unset') {
      document.getElementById('inputsearch').style.display = 'none';
      this.display = 'none';
    }
    console.log('click');
    console.log(this.display);
  }

  ngOnInit() {
  }

}
