import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges {
  @Input() item!: Item;
  @Output() emitindoItemParaEditar = new EventEmitter();
  @Output() emitindoItemParaDeletar = new EventEmitter();


  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    console.log('OnChanges');
  }

  editarItem() {
    this.emitindoItemParaEditar.emit(this.item);
  }


  checarItem() {
    if(this.item.comprado === true){
      this.item.comprado = false;
    }else{
      this.item.comprado = true;
    }
  }

  alterarClasseDoNomeDoItem() {
    // alterando classe para marcar item como comprado
  return (this.item.comprado? 'line-through' : '');
  }

  deletarItem() {
    this.emitindoItemParaDeletar.emit(this.item.id)
  }
}
