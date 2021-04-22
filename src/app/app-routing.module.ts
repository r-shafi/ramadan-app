import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SurahComponent } from './components/surah/surah.component';

// import components that are going to act as different pages

/*
* Each route in this array is a JavaScript object that contains two properties.
! The first property, path, defines the URL path for the route.
! The second property, component, defines the component Angular should use for the corresponding path.
*/

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'surah', component: SurahComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
