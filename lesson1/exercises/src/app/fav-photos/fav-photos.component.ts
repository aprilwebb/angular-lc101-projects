import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photos I Love:';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://i.pinimg.com/originals/a1/bf/0a/a1bf0a96a8d25df94e22a1219582f7f7.jpg';
  image3 = 'https://media1.tenor.com/images/41ef34590ba657ae90197568c560ae34/tenor.gif?itemid=8487352';

  constructor() { }

  ngOnInit() {
  }

}
