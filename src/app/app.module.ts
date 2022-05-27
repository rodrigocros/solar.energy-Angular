import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { SignInComponent } from './Pages/sign-in/sign-in.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { UnidadesComponent } from './Pages/unidades/unidades.component';
import { UnidadesCadastrarComponent } from './Pages/unidades-cadastrar/unidades-cadastrar.component';
import { HomeComponent } from './Pages/home/home.component';
import { LancamentoMesComponent } from './Pages/lancamento-mes/lancamento-mes.component';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EditarUnidadeComponent } from './Pages/editar-unidade/editar-unidade.component';
import { NgChartsModule} from 'ng2-charts';


const ROUTES: Route[]=[
  {
    path:'',
    component: SignInComponent
  },
  {
    path:'unidadesLista',
    component: UnidadesComponent
  }
  ,
  {
    path:'unidadesCadastrar',
    component: UnidadesCadastrarComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'lancamentoMes',
    component: LancamentoMesComponent
  },
  {
    path:'editarUnidade',
    component: EditarUnidadeComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SideBarComponent,
    UnidadesComponent,
    UnidadesCadastrarComponent,
    HomeComponent,
    LancamentoMesComponent,
    EditarUnidadeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    NgChartsModule,
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
