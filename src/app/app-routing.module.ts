import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  {path:'',component:FirstComponent},
  {path:'infopage',component:SecondComponent},
  // {path:'claimoffer',}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
