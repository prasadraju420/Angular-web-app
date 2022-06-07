import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  aquaticCreatures = ['shark', 'dolphin', 'octopus'];

  addAquaticCreature(newAquaticCreature: string) {
    this.aquaticCreatures = [...this.aquaticCreatures,newAquaticCreature]
  }
}
