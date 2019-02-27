import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Boat } from '../model/boat';
import { UserService } from './user.service';

const endpoint:string = "https://4870assignment2api.azurewebsites.net/api/boats/";


@Injectable({
  providedIn: 'root'
})
export class BoatService {

  constructor(
    private http: HttpClient,
    private authService: UserService,
    private router: Router
  ) { }

  public getBoats() {
    return this.http.get<any>(endpoint, this.getHttpOptions())
      .pipe(map((response: Response) => response || {}));
  }

  public getBoat(id: number) {
    return this.http.get<any>(endpoint + id, this.getHttpOptions())
      .pipe(map((response: Response) => response || {}));
  }

  public addBoat(boat: Boat) {
    return this.http.post<any>(endpoint, boat, this.getHttpOptions())
      .pipe(map((response: Response) => response || {}));
  }

  public updateBoat(id: number, boat: Boat) {
    return this.http.put<any>(endpoint + id, boat, this.getHttpOptions())
      .pipe(map((response: Response) => response || {}));
  }

  public deleteBoat(id: number) {
    return this.http.delete<any>(endpoint + id, this.getHttpOptions())
      .pipe(map((response: Response) => response || {}));
  }

  private getHttpOptions(): {} {
    return {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('userToken'),
        'Content-Type': 'application/json'
      })
    };
  }
}
