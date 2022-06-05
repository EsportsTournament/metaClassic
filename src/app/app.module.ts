import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/shared/register/register.component';
import { MatchesComponent } from './components/home/tournaments/matches/matches.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenubarComponent } from './components/home/menubar/menubar.component';
import { HeaderComponent } from './components/home/header/header.component';
import { TournamentsComponent } from './components/home/tournaments/tournaments.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { ProfileComponent } from './components/home/menubar/profile/profile.component';
import { AboutUsComponent } from './components/home/menubar/about-us/about-us.component';
import { CreateTournamentComponent } from './components/home/menubar/create-tournament/create-tournament.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    MatchesComponent,
    MenubarComponent,
    HeaderComponent,
    TournamentsComponent,
    ProfileComponent,
    AboutUsComponent,
    CreateTournamentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
