import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-select-multiple',
  templateUrl: './select-multiple.component.html',
  styleUrls: ['./select-multiple.component.scss']
})
export class SelectMultipleComponent implements OnInit {
  @Input() label: string;
  @Input() options: string[];
  isOpen = false;
  selectedOptions: string[] = [];
  constructor() {
    // https://www.bizstream.com/blog/november-2017/angular-click-elsewhere-directive
  }

  ngOnInit() { }

  onDropdownClick() {
    this.isOpen = !this.isOpen;
  }

  onOptionClick(option: string) {
    if (this.selectedOptions.includes(option)) {
      this.selectedOptions = this.selectedOptions.filter(existingOption => existingOption !== option);
    } else {
      this.selectedOptions.push(option);
    }
  }

  onClearClick() {
    this.selectedOptions = [];
  }
}