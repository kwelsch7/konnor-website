import { Component, OnInit, Input } from '@angular/core';
import { IconLink } from '../models';

@Component({
  selector: 'app-social-media-list',
  templateUrl: './social-media-list.component.html',
  styleUrls: ['./social-media-list.component.scss']
})
export class SocialMediaListComponent implements OnInit {
  @Input() inline?: boolean;
  socialMediaLinks: IconLink[] = [
    {
      faIcon: 'fab fa-linkedin',
      href: 'https://www.linkedin.com/in/konnor-welsch-812448114',
      linkText: 'LinkedIn',
    },
    {
      faIcon: 'fab fa-github',
      href: 'https://github.com/kwelsch7',
      linkText: 'GitHub',
    },
    {
      faIcon: 'fab fa-codepen',
      href: 'https://codepen.io/kwelsch',
      linkText: 'CodePen',
    },
  ];

  constructor() { }

  ngOnInit() { }

}
