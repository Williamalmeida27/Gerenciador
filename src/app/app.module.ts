import { DEFAULT_CURRENCY_CODE, LOCALE_ID} from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import ptBr from '@angular/common/locales/pt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/home/home.component';
import { TabelaComponent } from './paginas/tabela/tabela.component';
import { SobreComponent } from './paginas/sobre/sobre.component';
import { TelefonePipe } from './pipes/telefone.pipe';
import { CpfPipe } from './pipes/cpf.pipe';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TabelaComponent,
    SobreComponent,
    TelefonePipe,
    CpfPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
