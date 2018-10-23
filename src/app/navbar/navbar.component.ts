import { Component, OnInit } from '@angular/core';
import { List } from '../list';
import { BddService } from '../bdd.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    list: List[];

  constructor(private bdd: BddService) { }


  getList() {
    const getUrl = this.bdd.getList();
    getUrl.subscribe((data: any) => {
    this.list = data;
    console.log('list obtained from json-server');
    console.log('list');
  }, (error) => {
    this.bdd.handleError(error);
});
}


  ngOnInit() {
    this.getList();
  }

}
