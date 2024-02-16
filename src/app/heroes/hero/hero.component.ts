import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'Ironman';
  public age: number = 45;
  public showBtnChangeHero: boolean = true;
  public showBtnChangeAge: boolean = true;

  get capitalizedName(): string{
    return this.name.toUpperCase();
  }

  getDescription(): string{
    return `${this.name} - ${this.age} years old`;
  }

  public changeHero(): string{
    this.showBtnChangeHero = false;
    return this.name = 'Spiderman';
  }

  public changeAge(): number{
    this.showBtnChangeAge = false;
    return this.age = 25;
  }

}
