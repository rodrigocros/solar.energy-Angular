import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IunidadeConsumidora } from '../models/IunidadeConsumidora';

@Injectable({
  providedIn: 'root'
})
export class ServUnidadeService {
  unidadeASerEditada:IunidadeConsumidora={
    id: 0,
    apelido: "",
    local: "",
    marca: "",
    modelo: "",
    ativo: false
  }

  constructor(private http: HttpClient) { }

  
  bancoUnidade(): Observable<IunidadeConsumidora[]>{
    return this.http.get<IunidadeConsumidora[]>(' http://localhost:3000/unidadesSalvas')
  }
  addUnidade(item:IunidadeConsumidora):Observable<IunidadeConsumidora>{
    return this.http.post<IunidadeConsumidora>('http://localhost:3000/unidadesSalvas', item)
  }

  editarUnidade(item:IunidadeConsumidora):Observable<IunidadeConsumidora>{
    return this.http.put<IunidadeConsumidora>(`http://localhost:3000/unidadesSalvas/${item.id}`, item)
  }
  removerItemUnidade(item:IunidadeConsumidora):Observable<IunidadeConsumidora>{
    return this.http.delete<IunidadeConsumidora>(`http://localhost:3000/unidadesSalvas/${item.id}`)
  }

  removerItemEnergia(item:IunidadeConsumidora):Observable<IunidadeConsumidora>{
    return this.http.delete<IunidadeConsumidora>(`http://localhost:3000/energiaGerada/${item.id}`)
  }
  

  mostrarUnidadeAserEditada(unidade:IunidadeConsumidora){
    this.unidadeASerEditada = unidade
  }

  buscarItemAserEditado(){
    return this.unidadeASerEditada
  }

}






// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { IunidadeConsumidora } from '../models/IunidadeConsumidora';

// @Injectable({
//   providedIn: 'root',
// })
// export class ServUnidadeService {
//   unidadeList: IunidadeConsumidora[] = [];

//   unidadeASerEditada: IunidadeConsumidora = {
//     id: 0,
//     apelido: '',
//     local: '',
//     marca: '',
//     modelo: '',
//     ativo: false,
//   };

//   constructor(private http: HttpClient) {}

//   bancoUnidade() {
//     return this.http
//       .get<IunidadeConsumidora[]>('http://localhost:3000/unidadesSalvas')
//       .subscribe((resposta: IunidadeConsumidora[]) => {
//         this.unidadeList = resposta;
//       });
//   }
//   buscarBancoUnidadeList() {
//     return this.unidadeList;
//   }
//   preencherBancoUnidadeList(lista:IunidadeConsumidora[]) {
//     this.unidadeList = lista
//   }

//   addUnidade(item: IunidadeConsumidora): Observable<IunidadeConsumidora> {
//     return this.http.post<IunidadeConsumidora>(
//       'http://localhost:3000/unidadesSalvas',
//       item
//     );
//   }

//   editarUnidadeEscolhida(unidade: IunidadeConsumidora) {
//     for (let i = 0; i < this.unidadeList.length; i++) {
//       if (unidade.id == this.unidadeList[i].id) {
//         this.unidadeList[i] = unidade;
//         console.log(this.unidadeList);
//       }
//     }
//   }
//   removerUnidade(unidade: IunidadeConsumidora) {
//     const itemindex = this.unidadeList.findIndex(
//       (item) => item.id === unidade.id
//     );
//     this.unidadeList.splice(itemindex, 1);
//     console.log(this.unidadeList);
//   }

//   editarUnidade(unidade: IunidadeConsumidora) {
//     this.unidadeASerEditada = unidade;
//   }
//   buscarItemAserEditado() {
//     return this.unidadeASerEditada;
//   }

//   salvarEdit(unidade: IunidadeConsumidora) {
//     console.log(unidade);
//   }
// }
