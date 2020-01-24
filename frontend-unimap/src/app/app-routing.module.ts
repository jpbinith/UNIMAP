import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './components/start/start.component';
import { HomepageComponent } from './components/homepage/homepage.component';


const routes: Routes = [
  
    {path: '' , component: StartComponent},
    {path: 'homepage' , component:HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
