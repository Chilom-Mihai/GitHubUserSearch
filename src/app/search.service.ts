import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './home/home.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private apiUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) { }

  getUser(username: string): Observable<User> {
    const url = `${this.apiUrl}/${username}`;
    return this.http.get<User>(url);
  }

}
