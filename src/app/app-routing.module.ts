import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/home/menubar/about-us/about-us.component';
import { CreateTournamentComponent } from './components/home/menubar/create-tournament/create-tournament.component';
import { ProfileComponent } from './components/home/menubar/profile/profile.component';
import { TournamentsComponent } from './components/home/tournaments/tournaments.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'tournament', component: TournamentsComponent},
  { path: 'createTournament', component: CreateTournamentComponent},
  { path: 'aboutUs', component: AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
