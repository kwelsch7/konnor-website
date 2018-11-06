import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select-multiple',
  templateUrl: './select-multiple.component.html',
  styleUrls: ['./select-multiple.component.scss']
})
export class SelectMultipleComponent implements OnInit {
  @Input() label: string;
  @Input() options: string[];
  @Output() outputSelectedOptions = new EventEmitter<string[]>();
  isOpen = false;
  selectedOptions: string[] = [];
  constructor() { }

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
    this.outputSelectedOptions.emit(this.selectedOptions);
  }

  onOptionKeyPress(event: KeyboardEvent, option: string) {
    if (event.key === 'Enter') {
      this.onOptionClick(option);
    }
  }

  onClearClick() {
    this.selectedOptions = [];
    this.outputSelectedOptions.emit(this.selectedOptions);
  }

  onClickOutside() {
    this.isOpen = false;
  }
}
