import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IunidadeConsumidora } from 'src/app/models/IunidadeConsumidora';
import { ServUnidadeService } from 'src/app/services/serv-unidade.service';

@Component({
  selector: 'pag-editar-unidade',
  templateUrl: './editar-unidade.component.html',
  styleUrls: ['./editar-unidade.component.css']
})
export class EditarUnidadeComponent implements OnInit {
  constructor(private unidadeService:ServUnidadeService, private http: HttpClient) { }

  unidadeEditada:IunidadeConsumidora={
    id: 0,
    apelido: "",
    local: "",
    marca: "",
    modelo: "",
    ativo: false
  }

  ngOnInit(): void {
    this.buscarItemEdit()
  }

  
  editarUnidadeBanco(item:IunidadeConsumidora){
    this.unidadeService.editarUnidade(item).subscribe((resposta:IunidadeConsumidora)=>{})

  }

  buscarItemEdit(){
    let unidade = this.unidadeService.buscarItemAserEditado()
    this.unidadeEditada = unidade
  }

  
  // salvarUnidadeEdit(){
  //   this.unidadeService.salvarUnidadeEditada(this.unidadeEditada)
  // }



}
