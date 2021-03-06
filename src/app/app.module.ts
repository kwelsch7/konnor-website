import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { TabRibbonComponent } from './tab-ribbon/tab-ribbon.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { TabListComponent } from './tab-list/tab-list.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { AnimationsPageComponent } from './animations-page/animations-page.component';
import { DrawingsPageComponent } from './drawings-page/drawings-page.component';
import { GamesPageComponent } from './games-page/games-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryFiltersComponent } from './gallery-filters/gallery-filters.component';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import { FooterComponent } from './footer/footer.component';
import { SocialMediaListComponent } from './social-media-list/social-media-list.component';
import { IconLinkComponent } from './icon-link/icon-link.component';
import { SelectMultipleComponent } from './select-multiple/select-multiple.component';
import { ClickOutsideDirective } from './click-outside.directive';
import { ModalComponent } from './modal/modal.component';
import { PongAnimationComponent } from './pong-animation/pong-animation.component';
import { AnimationGalleryComponent } from './animation-gallery/animation-gallery.component';
import { SketchpadGameComponent } from './sketchpad-game/sketchpad-game.component';

const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutPageComponent, pathMatch: 'full' },
  { path: 'animations', component: AnimationsPageComponent, pathMatch: 'full' },
  { path: 'drawings', component: DrawingsPageComponent, pathMatch: 'full' },
  { path: 'games', component: GamesPageComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TabRibbonComponent,
    BreadcrumbComponent,
    TabListComponent,
    AboutPageComponent,
    AnimationsPageComponent,
    DrawingsPageComponent,
    GamesPageComponent,
    NavBarComponent,
    GalleryComponent,
    GalleryFiltersComponent,
    GalleryItemComponent,
    FooterComponent,
    SocialMediaListComponent,
    IconLinkComponent,
    SelectMultipleComponent,
    ClickOutsideDirective,
    ModalComponent,
    PongAnimationComponent,
    AnimationGalleryComponent,
    SketchpadGameComponent
  ],
  imports: [
    BrowserModule,
    NgbModalModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
