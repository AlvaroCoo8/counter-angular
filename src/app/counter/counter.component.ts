import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  standalone: false,
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  public counter: number = 0;

  public increaseBy(value: number): void {
    this.counter += value;
  }

  public reset(value: number): void {
    this.counter = 0;
  }
}
