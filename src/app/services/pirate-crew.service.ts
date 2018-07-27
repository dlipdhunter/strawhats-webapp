import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PirateCrew } from '../models/pirate-crew';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PirateCrewService {

  constructor(private http: HttpClient) { }

  private readonly apiUrl: string = 'https://localhost:5001/api/piratecrews';

  get(id: number): Observable<PirateCrew> {
    return this.http.get<PirateCrew>(`${this.apiUrl}/${id}`);
  }

  getAll(): Observable<PirateCrew[]> {
    return this.http.get<PirateCrew[]>(this.apiUrl);
  }
  
  create(pirateCrew: PirateCrew): Observable<PirateCrew> {
    return this.http.post<PirateCrew>(this.apiUrl, pirateCrew);
  }

  update(pirateCrew: PirateCrew): Observable<PirateCrew> {
    return this.http.put<PirateCrew>(`${this.apiUrl}/${pirateCrew.pirateCrewId}`, pirateCrew);
  }

  remove(id): Observable<PirateCrew> {
    return this.http.delete<PirateCrew>(`${this.apiUrl}/${id}`);
  }
}
