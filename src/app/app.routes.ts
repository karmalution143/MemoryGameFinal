import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HardComponent } from './hardgame/game.component';
import { EasyComponent } from './easygame/game.component';
import { AboutComponent } from './about/about.component';

const routeConfig: Routes = [
  { path: '', component: HomeComponent, title: 'home page' },
  { path: 'home', component: HomeComponent, title: 'home page' },
  { path: 'hardgame', component: HardComponent, title: 'game page' },
  { path: 'easygame', component: EasyComponent, title: 'easy page' },
  { path: 'about', component: AboutComponent, title: 'about page' }
];

export default routeConfig;
