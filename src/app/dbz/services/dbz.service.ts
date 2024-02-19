import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characterList: Character[] = [{
    id: uuid(),
    name: 'Goku',
    power: 15000
  }, {
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }, {
    id: uuid(),
    name: 'Krillin',
    power: 5000
  }];

  onNewCharacter(character: Character): void {
    const newCharacter = {
      ...character,
      id: uuid()
    };
    this.characterList.push(newCharacter);
  }

  deleteCharacterById(id: string): void{
    this.characterList = this.characterList.filter(character => character.id !== id);
  }

}
