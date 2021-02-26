import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators'
import { Cidade } from './cidade.model';

@Injectable({
  providedIn: 'root'
})
export class CidadeServiceService {

  constructor(private http: HttpClient) { }

  saveCidade(cidade: Cidade) {
    return this.http.post("http://localhost:58644/api/cidade?search=", cidade).toPromise()
  }

  getCidade(): Observable<Cidade[]> {
    return this.http
      .get<Cidade[]>("/api/cidade?search=")
      .pipe(map((res: Cidade[]) => {
        console.log(res)
        return res;
      }));
  }
}
