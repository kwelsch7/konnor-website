import { Component, OnInit } from '@angular/core';
import { GalleryItem } from '../models';

@Component({
  selector: 'app-drawings-page',
  templateUrl: './drawings-page.component.html',
  styleUrls: ['./drawings-page.component.css']
})
export class DrawingsPageComponent implements OnInit {
  galleryItems: GalleryItem[] = [
    {
      date: 'Dec 2015',
      description: 'I drew this one by mouse when a friend walked away from their computer. Hence the non-original file.',
      imageLink: 'assets/drawings/jurassic_world.jpg',
      medium: 'MS Paint',
      tags: ['paint', 'Illustrator'],
      title: 'Jurassic World',
    },
    {
      date: 'May 2017',
      description: 'I stayed up pretty late working on this one. A fun change from all the CS classes I was taking.',
      imageLink: 'assets/drawings/svg_portrait.jpg',
      medium: 'Adobe Illustrator',
      tags: ['svg'],
      title: 'SVG Self Portrait',
    },
    {
      date: 'Feb 2009',
      description: 'An exemplary young fellow. Back when I had a working tablet.',
      imageLink: 'assets/drawings/friendly_popsicle.png',
      medium: 'Adobe Photoshop',
      tags: ['doodle', 'Photoshop'],
      title: 'Friendly Popsicle',
    },
  ];

  constructor() { }

  ngOnInit() { }

}
