import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {

  transform(telefone: Number): string {
    let telefoneFormatado = telefone.toString();
    return telefoneFormatado.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  }

}
