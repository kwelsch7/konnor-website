import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GalleryItem } from '../models';

@Component({
  selector: 'app-gallery-filters',
  templateUrl: './gallery-filters.component.html',
  styleUrls: ['./gallery-filters.component.scss']
})
export class GalleryFiltersComponent implements OnInit {
  mediumOptions: string[] = [
    'MS Paint', 'Adobe Photoshop', 'Adobe Illustrator', 'Pencil', 'Pen', 'Whiteboard Marker', 'Paint'
  ].sort();
  sortOptions: string[] = [
    'Newest', 'Oldest', 'Title', 'Title Reverse'
  ].sort();
  tagOptions: string[] = [
    'paint', 'Illustrator', 'Photoshop', 'doodle', 'svg', '- None -'
  ].sort();
  selectedSort: string;
  @Input() originalItems: GalleryItem[];
  @Output() outputFilterItems = new EventEmitter<GalleryItem[]>();
  filteredItems: GalleryItem[];
  mediumFilters: string[] = this.mediumOptions;
  tagFilters: string[] = this.tagOptions;

  constructor() { }

  ngOnInit() { this.filteredItems = this.originalItems; }

  onMediumOptionsUpdate(selectedOptions: string[]) {
    this.mediumFilters = selectedOptions.length ? selectedOptions : this.mediumOptions;
    this.updateFilteredItems();
  }

  onTagOptionsUpdate(selectedOptions: string[]) {
    this.tagFilters = selectedOptions.length ? selectedOptions : this.tagOptions;
    this.updateFilteredItems();
  }

  onSortByUpdate(event: any) {
    this.sortItems(event.target.value);
  }

  sortItems(option: string) {
    this.selectedSort = option;
    switch (option) {
      case 'Newest': this.filteredItems = this.filteredItems.sort((item1, item2) => {
        const date1 = new Date(item1.date);
        const date2 = new Date(item2.date);
        if (date1 < date2) {
          return 1;
        }
        if (date1 > date2) {
          return -1;
        }
        return 0;
      }); break;
      case 'Oldest': this.filteredItems = this.filteredItems.sort((item1, item2) => {
        const date1 = new Date(item1.date);
        const date2 = new Date(item2.date);
        if (date1 > date2) {
          return 1;
        }
        if (date1 < date2) {
          return -1;
        }
        return 0;
      }); break;
      case 'Title': this.filteredItems = this.filteredItems.sort((item1, item2) => {
        if (item1.title > item2.title) {
          return 1;
        }
        if (item1.title < item2.title) {
          return -1;
        }
        return 0;
      }); break;
      case 'Title Reverse': this.filteredItems = this.filteredItems.sort((item1, item2) => {
        if (item1.title < item2.title) {
          return 1;
        }
        if (item1.title > item2.title) {
          return -1;
        }
        return 0;
      }); break;
    }
  }

  private updateFilteredItems() {
    this.filteredItems = this.originalItems.filter(item => (
      this.mediumFilters.includes(item.medium)
        && (item.tags.some(tag => this.tagFilters.includes(tag))
          || (this.tagFilters === this.tagOptions && item.tags.length === 0)
          || (this.tagFilters.includes('- None -') && item.tags.length === 0))
    ));
    this.sortItems(this.selectedSort);
    this.outputFilterItems.emit(this.filteredItems);
  }

}
