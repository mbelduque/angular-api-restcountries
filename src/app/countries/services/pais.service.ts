import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {Pais} from "../interfaces/pais.interface";

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private ENDPOINT_URL: string = 'https://restcountries.com/v3.1';

  constructor(private httpClient: HttpClient) {
  }

  buscarPais(country: string): Observable<Pais[]> {
    const url = `${this.ENDPOINT_URL}/name/${country}`;
    return this.httpClient.get<Pais[]>(url);
  }

}
