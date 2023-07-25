import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgParticlesModule } from "ng-particles";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BackgroundComponent } from './components/background/background.component';
import { TopInfoComponent } from './components/top-info/top-info.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { TecnologiesComponent } from './components/tecnologies/tecnologies.component';
import { ProjectsComponent } from './components/projects/projects.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BackgroundComponent,
    TopInfoComponent,
    MainContainerComponent,
    FooterComponent,
    AboutMeComponent,
    TecnologiesComponent,
    ProjectsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
