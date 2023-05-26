import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeasurementsComponent } from './measurements/measurements.component';
import { AppComponent } from './app.component';
import { ImageSearchComponent } from './image-search/image-search.component';

const routes: Routes = [    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
{ path: 'measurement', component: MeasurementsComponent},
  {path: 'home', component: AppComponent},
  {path: 'image', component: ImageSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
