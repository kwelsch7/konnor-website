import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tab-list',
  templateUrl: './tab-list.component.html',
  styleUrls: ['./tab-list.component.scss']
})
export class TabListComponent implements OnInit {
  tabs: string[] = [
    'About',
    'Animations',
    'Drawings',
    'Games'
  ];
  @Output() activeTab = new EventEmitter<string>();
  constructor() { }

  ngOnInit() { }

  updateActiveTab(active: string) {
    this.activeTab.emit(active);
  }
}
