import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ['https://www.google.com/', 'https://www.youtube.com/channel/UCBR8-60-B28hp2BmDPdntcQ']

  constructor() { }

  ngOnInit() {
  }

}
