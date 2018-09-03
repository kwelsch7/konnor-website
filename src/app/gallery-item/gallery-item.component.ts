import { Component, OnInit, Input } from '@angular/core';
import { GalleryItem } from '../models';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css']
})
export class GalleryItemComponent implements OnInit {
  @Input() galleryItem: GalleryItem;
  constructor() { }

  ngOnInit() { }

}
