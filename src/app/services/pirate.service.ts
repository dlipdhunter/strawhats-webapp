import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pirate } from '../models/pirate';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PirateService {

  private readonly apiUrl: string = 'https://localhost:5001/api/pirates';

  constructor(private http: HttpClient) { }

  get(id: number): Observable<Pirate> {
    return this.http.get<Pirate>(`${this.apiUrl}/${id}`);
  }
  
  getAll(): Observable<Pirate[]> {
    return this.http.get<Pirate[]>(`${this.apiUrl}`);
  } 

  create(pirate: Pirate): Observable<Pirate[]> {    
    return this.http.post<Pirate[]>(`${this.apiUrl}`, pirate);
  }

  update(pirate: Pirate): Observable<Pirate> {
    return this.http.put<Pirate>(`${this.apiUrl}/${pirate.pirateID}`, pirate);
  }

  remove(id: number): Observable<Pirate> {
    return this.http.delete<Pirate>(`${this.apiUrl}/${id}`);
  }

}
