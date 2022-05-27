import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions, Color } from 'chart.js';
import {
  IEnergiaGerada,
  IunidadeConsumidora,
} from 'src/app/models/IunidadeConsumidora';
import { ServGeracaoEnergiaService } from 'src/app/services/serv-geracao-energia.service';
import { ServUnidadeService } from 'src/app/services/serv-unidade.service';

@Component({
  selector: 'pag-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  unidadeList: IunidadeConsumidora[] = [];
  energiaList: IEnergiaGerada[] = [];

  totalUnidades: number = 0;
  totalUnidadesAtivas: number = 0;
  totalUnidadesInativas: number = 0;
  totalUnidadesKw: number = 0;

  mostrarGrafico:boolean = false
  
  valoresChart : number[] =[1,2,3,4,5,6,7,8,9,10,11,12]
  

  barChartData = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    datasets: [
      {
        label: 'Total energia gerada em 2022',
        data: [],
        fill: false,
        borderColor: '#2196F3',
        pointBorderColor: 'black',
        tension: 0.4,
      },
    ],
  };
  constructor(
    private unidadeService: ServUnidadeService,
    private http: HttpClient,
    private servGeracaoMes: ServGeracaoEnergiaService
  ) {}

  ngOnInit(): void {
    this.buscarEnergiaMes();
    this.buscarUnidades();
    this.buscarBancoGeracaoMes();
    
  }
  
  buscarUnidades() {
    this.unidadeService
      .bancoUnidade()
      .subscribe((resposta: IunidadeConsumidora[]) => {
        this.unidadeList = resposta;
        this.contabilizarUnidades();
        this.contabilizarUnidadesAtivas();
        this.contabilizarTotalEnergia();
        this.porMes();
        this.barChartData.datasets[0].data = this.valoresChart as any
        this.mostrarGrafico = true
      });
      
  }

  contabilizarUnidades() {
    this.totalUnidades = this.unidadeList.length;
  }
  contabilizarUnidadesAtivas() {
    for (let i = 0; i < this.unidadeList.length; i++) {
      if (this.unidadeList[i].ativo) {
        this.totalUnidadesAtivas++;
      } else {
        this.totalUnidadesInativas++;
      }
    }
  }

  buscarEnergiaMes() {
    this.http
      .get<IEnergiaGerada[]>('http://localhost:3000/energiaGerada')
      .subscribe((resposta: IEnergiaGerada[]) => {
        this.energiaList = resposta;
      });
  }

  contabilizarTotalEnergia() {
    for (let i = 0; i < this.energiaList.length; i++) {
      if (this.energiaList[i].totalKw) {
        this.totalUnidadesKw += this.energiaList[i].totalKw;
      }
    }
  }

  buscarBancoGeracaoMes() {
    this.servGeracaoMes
      .bancoGeracaoJson()
      .subscribe((resposta: IEnergiaGerada[]) => {
        this.energiaList = resposta;
      });
  }

  porMes(){
    console.log(this.energiaList)
    console.log(this.valoresChart)
    for (let i = 0; i < this.energiaList.length; i++) {
      const element = this.energiaList[i].mesAno;
      switch (element) {
        case '2022-01':
          this.valoresChart[0] += +this.energiaList[i].totalKw;
          break;
        case '2022-02':
          this.valoresChart[1] += +this.energiaList[i].totalKw;
          break;
        case '2022-03':
          this.valoresChart[2] += +this.energiaList[i].totalKw;
          break;
        case '2022-04':
          this.valoresChart[3] += +this.energiaList[i].totalKw;
          break;
        case '2022-05':
          this.valoresChart[4] += +this.energiaList[i].totalKw;
          break;
        case '2022-06':
          this.valoresChart[5] += +this.energiaList[i].totalKw;
          break;
        case '2022-07':
          this.valoresChart[6] += +this.energiaList[i].totalKw;
          break;
        case '2022-08':
          this.valoresChart[7] += +this.energiaList[i].totalKw;
          break;
        case '2022-09':
          this.valoresChart[8] += +this.energiaList[i].totalKw;
          break;
        case '2022-10':
          this.valoresChart[9] += +this.energiaList[i].totalKw;
          break;
        case '2022-11':
          this.valoresChart[10] += +this.energiaList[i].totalKw;
          break;
        case '2022-12':
          this.valoresChart[11] += +this.energiaList[i].totalKw;
          break;
        default:
          break;
      }
    }
  }

}

