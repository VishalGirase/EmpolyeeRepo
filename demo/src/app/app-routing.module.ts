import { EditDetailsComponent } from './edit-details/edit-details.component';
import { DetaillistComponent } from './detaillist/detaillist.component';
import { AppComponent } from './app.component';
import { ShowdetailsComponent } from './showdetails/showdetails.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule , ActivatedRoute, Router, Route} from '@angular/router';

const routes: Routes = [
  {path: '', component : ShowdetailsComponent},
  {path: 'getEdit/:id', component : EditDetailsComponent},
  {path: 'backToShowDetails', component : ShowdetailsComponent},
  {path: 'vish', component : DetaillistComponent},
  {path: 'get', component : DetaillistComponent}
  // {path: '', component : AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
