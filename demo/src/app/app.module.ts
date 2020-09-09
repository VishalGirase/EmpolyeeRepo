import { Routes, RouterModule , ActivatedRoute, Router, Route} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ShowdetailsComponent } from './showdetails/showdetails.component';
import { DetaillistComponent } from './detaillist/detaillist.component';
import { HttpClientModule } from '@angular/common/http';
import { EditDetailsComponent } from './edit-details/edit-details.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowdetailsComponent,
    DetaillistComponent,
    EditDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
