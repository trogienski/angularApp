import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:"homepage",component:HomepageComponent},
  {path:"",redirectTo:'/homepage',pathMatch:'full'},
  {path:"search",component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
