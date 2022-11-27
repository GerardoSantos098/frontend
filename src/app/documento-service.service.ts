import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentoServiceService {

  private basePath = 'server';

  constructor(private http: HttpClient){
  }

  public buscarPalabra(palabra: string): Observable<any> {
    return this.http.get<any>(`${this.basePath}/consulta`,{
      params: {
        palabra: palabra,
      },
      headers: this.getToken()
    });
  }

  getToken(): HttpHeaders{
    const user = JSON.parse(localStorage.getItem('currentUser') as string);
    const cabeceras = new HttpHeaders({
    });
    return cabeceras;
  }
}
