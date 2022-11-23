import { Component, OnInit } from '@angular/core';
import { clientes } from 'src/app/models/clientes';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  constructor() { 
  }

  public clientes:clientes = {} as clientes

  public lista: clientes[] = [
    {
      id:1, nome:'Joao', descricao:'Em processo', valor:10.50, cpf: 444444444444,telefone: 11953152211, data: new Date()

    }
  ]
  

  ngOnInit(): void {
    //this.listas = this.lista[0]
}

enviar(){
  let id = this.lista.length + 1
  let NovoContato: clientes = {
    id: id,
    nome: this.clientes.nome,
    descricao: this.clientes.descricao,
    valor: this.clientes.valor,
    cpf: this.clientes.cpf,
    telefone: this.clientes.telefone,
    data: new Date()


  } as clientes
  this.lista.push(NovoContato)
}
 

}
