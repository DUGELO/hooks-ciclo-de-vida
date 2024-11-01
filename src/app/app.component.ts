import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck, OnDestroy {

  title = 'hooks-ciclo-de-vida';
  listaDeCompra! : Array<Item>;
  itemParaSerEditado!: Item;

  constructor(private listaService: ListaDeCompraService) { }
  
  ngOnInit(): void {
   this.listaDeCompra = this.listaService.getListaDeCompra();
  }



  editarItem(item: Item) {
    this.itemParaSerEditado = item;
  }

  deletarItem(id: number) {
    const index = this.listaDeCompra.findIndex((item) =>
      item.id === id)
      this.listaDeCompra.splice(index, 1);
  }

  limparLista() {
    this.listaDeCompra = [];
    }

  ngDoCheck(): void {
    console.log('DoCheck foi chamado')
      this.listaService.atualizarLocalStorage();
  }

  ngOnDestroy() {
    console.log();
  }
}
