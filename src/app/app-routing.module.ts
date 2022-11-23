import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { SobreComponent } from './paginas/sobre/sobre.component';
import { TabelaComponent } from './paginas/tabela/tabela.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'sobre', component: SobreComponent},
  {path: 'tabela', component: TabelaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
