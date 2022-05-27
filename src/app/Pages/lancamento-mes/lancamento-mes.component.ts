import { Component, OnInit } from '@angular/core';
import { IEnergiaGerada, IunidadeConsumidora } from 'src/app/models/IunidadeConsumidora';
import { ServUnidadeService } from 'src/app/services/serv-unidade.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'pag-lancamento-mes',
  templateUrl: './lancamento-mes.component.html',
  styleUrls: ['./lancamento-mes.component.css']
})
export class LancamentoMesComponent implements OnInit {
  unidadesList:IunidadeConsumidora[]=[]

  constructor(private http: HttpClient,private unidadeService:ServUnidadeService) { }

  geracaoMensal:IEnergiaGerada={
    id: 0,
    mesAno: '',
    totalKw: 0
  }
  
  zerarItens(){
    this.geracaoMensal = {
      id: 0,
      mesAno: '',
      totalKw: 0
    }
  }

  cadastrarMes(){
    this.http.post<IEnergiaGerada>('http://localhost:3000/energiaGerada',this.geracaoMensal).subscribe()
    this.zerarItens()
  }

  ngOnInit(): void {
    this.buscarUnidades()
    
  }

  buscarUnidades(){
    this.unidadeService.bancoUnidade().subscribe((resposta:IunidadeConsumidora[])=>{
      this.unidadesList= resposta
    })
  }
}
