import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { TabRibbonComponent } from './tab-ribbon/tab-ribbon.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { TabListComponent } from './tab-list/tab-list.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { AnimationsPageComponent } from './animations-page/animations-page.component';
import { DrawingsPageComponent } from './drawings-page/drawings-page.component';
import { GamesPageComponent } from './games-page/games-page.component';

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
    GamesPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
