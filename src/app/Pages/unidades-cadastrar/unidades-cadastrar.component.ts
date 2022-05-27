import { Component, OnInit } from '@angular/core';
import { IunidadeConsumidora } from 'src/app/models/IunidadeConsumidora';
import { ServUnidadeService } from 'src/app/services/serv-unidade.service';

@Component({
  selector: 'pag-unidades-cadastrar',
  templateUrl: './unidades-cadastrar.component.html',
  styleUrls: ['./unidades-cadastrar.component.css']
})
export class UnidadesCadastrarComponent implements OnInit {
  unidadesCadastradas:IunidadeConsumidora[]=[]

  unidadeCadastrada:IunidadeConsumidora={
    id: 0,
    apelido: "",
    local: "",
    marca: "",
    modelo: "",
    ativo: false
  }

  constructor(private cadastrarUnidade:ServUnidadeService) { }

  ngOnInit(): void {
  }

  cadastrarNoBanco(){
    this.unidadeCadastrada.id = Math.floor(Math.random() * 100)
    this.cadastrarUnidade.addUnidade(this.unidadeCadastrada).subscribe((resposta:IunidadeConsumidora)=>{
    this.unidadeCadastrada = resposta
    })
  }

  

}
