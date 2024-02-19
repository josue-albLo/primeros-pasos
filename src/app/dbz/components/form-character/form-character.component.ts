
import { Character } from '../../interfaces/character.interface';
import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'dbz-add-character',
  templateUrl: './form-character.component.html',
  styleUrls: ['./form-character.component.css']
})
export class FormCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id: '',
    name: '',
    power: 0
  }

  emitCharacter(): void{
    console.log(this.character);

    if(this.character.name.trim().length === 0 ||
    this.character.power === 0){
      return;
    }

    this.onNewCharacter.emit(this.character);

    this.character = {
      id: '',
      name: '',
      power: 0
    };
  }


}
