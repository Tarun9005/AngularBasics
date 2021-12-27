import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { DeveloperinfoComponent } from './developerinfo/developerinfo.component';
import { WebsiteinfobtnComponent } from './websiteinfobtn/websiteinfobtn.component';
import { TrendingcoinComponent } from './trendingcoin/trendingcoin.component';
import { ActivatepartComponent } from './activatepart/activatepart.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule } from '@angular/forms';
import { HttprequestComponent } from './httprequest/httprequest.component';
import {HttpClientModule} from '@angular/common/http';
//import { DeveloperurlComponent } from './developerurl/developerurl.component';

const appRoutes: Routes=[

  {path: 'about', component:AboutComponent},
  {path: 'contact',component:ContactComponent},
  {path: 'trending',component:TrendingcoinComponent},
  {path:'forms',component:FormsComponent},
  {path:'httprequest',component:HttprequestComponent},
  {path:'',component:HomeComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    DeveloperinfoComponent,
    WebsiteinfobtnComponent,
    TrendingcoinComponent,
    FormsComponent,
    ActivatepartComponent,
    HttprequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
