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
import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider } from '@abacritt/angularx-social-login';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    MatchesComponent,
    MenubarComponent,
    HeaderComponent,
    TournamentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '866040500810-nibv1hvva18cqnj8iuao8besp620ko71.apps.googleusercontent.com'
            )
          },
        ],
        onError: (err) => {
          console.error('err from module:- ',err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
