import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'process';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  constructor(private http: HttpClient) { }

  // All
  getTournamentById(tournamentId: number) {
    return this.http.get(environment.backendUrl + `tournament/getTournament/${tournamentId}`);
  }

  // All
  getAllUpcomingTournaments() {
    return this.http.get(environment.backendUrl + `tournament/getUpcomingTournaments`);
  }

  // Creator
  getMyTournaments(userId: string) {
    return this.http.post(environment.backendUrl + `tournament/getMyTournaments`, userId);
  }

  // Admin
  getAllTournaments() {
    return this.http.get(environment.backendUrl + `tournament/getAllTournaments`);
  }

  // Creator
  postNewTournament(tournament: any) {
    return this.http.post(environment.backendUrl + `tournament/createNewTournament`, tournament)
  }

  // Creator
  updateMyTournament(tournament: any) {
    return this.http.put(environment.backendUrl + `tournament/updateMyTournament`, tournament)
  }

  // All
  individualRegistration(playerDetails: any) {
    return this.http.post(environment.backendUrl + `tournament/individualRegistration`, playerDetails)
  }

  // All
  teamRegistration(teamDetails: any) {
    return this.http.post(environment.backendUrl + `tournament/teamRegistration`, teamDetails)
  }
  
  // All
  updateIndividualRegistration(playerDetails: any) {
    return this.http.put(environment.backendUrl + `tournament/individualRegistration`, playerDetails)
  }

  // All
  updateTeamRegistration(teamDetails: any) {
    return this.http.put(environment.backendUrl + `tournament/teamRegistration`, teamDetails)
  }

}
