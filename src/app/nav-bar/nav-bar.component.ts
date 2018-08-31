import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  profileImgSrc = 'assets/konnor_profile_4.jpg';

  constructor() { }

  ngOnInit() { }

  onTabChange = (tab: string) => {
    switch (tab) {
      case 'About': this.profileImgSrc = 'assets/konnor_profile_4.jpg'; break;
      case 'Animations': this.profileImgSrc = 'assets/cardboard_homestar.png'; break;
      case 'Drawings': this.profileImgSrc = 'assets/konnor_profile_pencil.jpg'; break;
      case 'Games': this.profileImgSrc = 'assets/foxtato_square.jpg'; break;
      default: this.profileImgSrc = null;
    }
  }
}
