import { Routes, RouterModule } from '@angular/router';
import { MinoWordComponent } from './components/mino-word/mino-word.component';
import { ColorChangerComponent } from './components/color-changer/color-changer.component';
import { BusinessCardComponent } from './components/business-card/business-card.component';
import { Ex2Component } from './components/ex2/ex2.component';
import { CvComponent } from './components/cv/cv.component';

export const routes: Routes = [
  { path: '', redirectTo: '/mino-word', pathMatch: 'full' }, // Default route
  { path: 'mino-word', component: MinoWordComponent },
  { path: 'color-changer', component: ColorChangerComponent },
  { path: 'business-card', component: BusinessCardComponent },
  { path: 'ex2', component: Ex2Component },
  { path: 'cv', component: CvComponent },
];

export const AppRoutingModule = RouterModule.forRoot(routes);
