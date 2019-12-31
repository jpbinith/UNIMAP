import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteFooterComponent } from './components/layout/site-footer/site-footer.component';
import { SiteHeaderComponent } from './components/layout/site-header/site-header.component';
import { SiteLayoutComponent } from './components/layout/site-layout/site-layout.component';
import { AppHeaderComponent } from './components/layout/app-header/app-header.component';
import { AppLayoutComponent } from './components/layout/app-layout/app-layout.component';
import { StartComponent } from './components/start/start.component';
import { HomepageComponent } from './components/homepage/homepage.component';


@NgModule({
  declarations: [
    AppComponent,
    SiteFooterComponent,
    SiteHeaderComponent,
    SiteLayoutComponent,
    AppHeaderComponent,
    AppLayoutComponent,
    StartComponent,
    HomepageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
