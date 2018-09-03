import { Component, OnInit, Input } from '@angular/core';
import { GalleryItem } from '../models/GalleryItem';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input() galleryList: GalleryItem[];

  constructor() { }

  ngOnInit() { }

}
