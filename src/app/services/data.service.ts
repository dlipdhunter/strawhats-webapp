import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pirate } from '../models/pirate';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly apiUrl: string = 'https://localhost:5001/api/pirates';

  constructor(private http: HttpClient) { }

  getPirates(): Observable<Pirate[]> {
    return this.http.get<Pirate[]>(`${this.apiUrl}`);
  }

  getPirate(id: number): Observable<Pirate> {
    return this.http.get<Pirate>(`${this.apiUrl}/${id}`);
  }

  createPirate(pirate: Pirate): Observable<Pirate[]> {
    return this.http.post<Pirate[]>(`${this.apiUrl}`, pirate);
  }

  updatePirate(pirate: Pirate): Observable<Pirate> {
    return this.http.put<Pirate>(`${this.apiUrl}/${pirate.id}`, pirate);
  }

  deletePirate(id: number): Observable<Pirate> {
    return this.http.delete<Pirate>(`${this.apiUrl}/${id}`);
  }

}
