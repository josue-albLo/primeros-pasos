import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = ['Superman', 'Batman', 'Spiderman', 'Ironman'];
  public lastElement?: string = 'No se ha borrado nada aún.';
  public isDeleted: boolean = false;

  removeLastHero(): void {
    this.isDeleted = true;
    this.lastElement = this.heroNames.pop();
  }

}
