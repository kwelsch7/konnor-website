import { Component, OnInit, Input } from '@angular/core';
import { IconLink } from '../models';

@Component({
  selector: 'app-icon-link',
  templateUrl: './icon-link.component.html',
  styleUrls: ['./icon-link.component.scss']
})
export class IconLinkComponent implements OnInit {
  @Input() linkProps: IconLink;
  constructor() { }

  ngOnInit() { }

}
