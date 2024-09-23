import { Component } from '@angular/core';
import { QUOTES } from './data';
import { Quote } from './quote';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  isOn = false;
  QUOTES: Quote[] = []

  clicked() {
    this.isOn = !this.isOn;
  }

   message() {
    return `The light is ${this.isOn ? 'On' : 'Off'}`;
  }

  Quotes(): Quote[]{
  return this.QUOTES = QUOTES;
  }

 swap(a: any, b: any) {
    let t = 
    b = a
    a = b
    return [a, b]
  }
}

