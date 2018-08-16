import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-ribbon',
  templateUrl: './tab-ribbon.component.html',
  styleUrls: ['./tab-ribbon.component.css']
})
export class TabRibbonComponent implements OnInit {
  @Input() tabText: string;
  constructor() { }

  ngOnInit() {
  }

}
