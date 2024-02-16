import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  public counter: number = 0;

  increment(value: number):void{
    if(this.counter < 20){
      this.counter+=value;
    }
  }

  resete(): void{
    this.counter = 10;
  }

  decrement(value: number):void{
    if(this.counter > 0){
      this.counter-=value;
    }
  }
}
