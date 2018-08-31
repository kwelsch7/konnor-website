import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tab-ribbon',
  templateUrl: './tab-ribbon.component.html',
  styleUrls: ['./tab-ribbon.component.css']
})
export class TabRibbonComponent implements OnInit {
  @Input() tabText: string;
  @Output() activeTab = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  switchTabs() {
    this.activeTab.emit(this.tabText);
  }

}
