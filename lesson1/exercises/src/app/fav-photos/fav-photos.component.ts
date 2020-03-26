import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photos';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://i.redd.it/gz46n32em0p41.jpg';
  image3 = 'https://external-preview.redd.it/ZPEvUNrnEIgIx5zfADEIpwsZx4bBIAslfExQC1iNIWI.jpg?auto=webp&s=bbed883eb3c8771f47b101203da38904d0f09b61';

  constructor() { }

  ngOnInit() {
  }

}