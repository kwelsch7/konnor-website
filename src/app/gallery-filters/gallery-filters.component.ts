import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-filters',
  templateUrl: './gallery-filters.component.html',
  styleUrls: ['./gallery-filters.component.scss']
})
export class GalleryFiltersComponent implements OnInit {
  mediumOptions: string[] = [
    'MS Paint', 'Photoshop', 'Illustrator', 'Pencil'
  ];
  sortOptions: string[] = [
    'Newest', 'Oldest', 'Title', 'Title Reverse'
  ];
  tagOptions: string[] = [
    'paint', 'Illustrator', 'Photoshop', 'doodle', 'svg'
  ];
  selectedSort: string;
  filteredAmount: number;
  totalAmount: number;

  constructor() { }

  ngOnInit() { }

}
