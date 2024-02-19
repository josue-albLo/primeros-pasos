import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  emitterId = new EventEmitter<string>();

  @Input()
  public characterList: Character[] =[];


  onDeleteCharacter(index: number): void{
    // omitir ID del personaje
    console.log(`Borrando personaje ${index}`);
  }

  onDeleteByCharacter(id?: string): void{

    if(!id) return;

    return this.emitterId.emit(id);
  }
}
