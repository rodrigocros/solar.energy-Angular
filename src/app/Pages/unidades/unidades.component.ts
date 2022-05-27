import { Component, OnInit } from '@angular/core';
import { IunidadeConsumidora } from 'src/app/models/IunidadeConsumidora';
import { ServUnidadeService } from 'src/app/services/serv-unidade.service';

@Component({
  selector: 'pag-unidades',
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.css']
})
export class UnidadesComponent implements OnInit {
  unidadeList:IunidadeConsumidora[]=[]

  constructor(private unidadeService:ServUnidadeService) { }

  ngOnInit(): void {
    this.buscarUnidades()
  }

  buscarUnidades(){
    this.unidadeService.bancoUnidade().subscribe((resposta:IunidadeConsumidora[])=>{
      this.unidadeList= resposta
    })
  }
  removerUnidadeBanco(item:IunidadeConsumidora){
    this.unidadeService.removerItemUnidade(item).subscribe((resposta:IunidadeConsumidora)=>{
      this.unidadeService.removerItemEnergia(item).subscribe((resposta:IunidadeConsumidora)=>{
      })
    })
    
    this.buscarUnidades()
  }

  buscarUnidade(unidade:IunidadeConsumidora){
    this.unidadeService.mostrarUnidadeAserEditada(unidade);
  }
}



// import { Component, OnInit } from '@angular/core';
// import { IunidadeConsumidora } from 'src/app/models/IunidadeConsumidora';
// import { ServUnidadeService } from 'src/app/services/serv-unidade.service';

// @Component({
//   selector: 'pag-unidades',
//   templateUrl: './unidades.component.html',
//   styleUrls: ['./unidades.component.css']
// })
// export class UnidadesComponent implements OnInit {
//   unidadesList:IunidadeConsumidora[]=[]

//   constructor(private unidadeService:ServUnidadeService) { }

//   ngOnInit(): void {
//     this.buscarUnidades()
//     console.log(this.unidadesList)
//   }

//   buscarUnidades(){
//     this.unidadeService.bancoUnidade()
//     return this.unidadesList = this.unidadeService.buscarBancoUnidadeList()
//   }

//   editarrUnidade(unidade:IunidadeConsumidora){
//     this.unidadeService.editarUnidade(unidade);
//   }

//   removerDaLista(unidade:IunidadeConsumidora){
//     this.unidadeService.removerUnidade(unidade)
//   }
// }
