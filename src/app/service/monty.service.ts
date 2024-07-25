import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Simulations {
  totalGames: number;
  wins: number;
  losses: number;
}

@Injectable({
  providedIn: 'root'
})

export class MontyService {

  private apiUrl = 'http://localhost:5278/api/Simulation';

    constructor(private http: HttpClient) { }

    simulate(games: number, switchDoor: boolean): Observable<Simulations> {
        const params = new HttpParams()
            .set('games', games.toString())
            .set('switchDoor', switchDoor.toString());

        return this.http.get<Simulations>(`${this.apiUrl}/simulate`, { params });
    }
}
