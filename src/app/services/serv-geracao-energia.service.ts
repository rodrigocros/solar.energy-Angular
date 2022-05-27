import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEnergiaGerada, IunidadeConsumidora } from '../models/IunidadeConsumidora';

@Injectable({
  providedIn: 'root'
})
export class ServGeracaoEnergiaService {

  constructor(private http: HttpClient) { }



  bancoGeracaoJson(): Observable<IEnergiaGerada[]>{
    return this.http.get<IEnergiaGerada[]>('http://localhost:3000/energiaGerada')
  }
  

}


