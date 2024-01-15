
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CambioService {
  private readonly apiUrl = 'https://ptesa-env-more.eastus.cloudapp.azure.com/k2o/dev/api/api';

  constructor(private http: HttpClient) {}

  authenticate(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Token/Autenticar`, credentials);
  }

  changePassword(data: any, token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`${this.apiUrl}/Usuario/CambiarClave`, data, { headers });
  }
}
