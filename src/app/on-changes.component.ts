import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

import { Hero } from './hero';

import { Quote } from './quote';

@Component({
  selector: 'on-changes',
  template: `
  <div class="info">
    <!-- <p>{{hero.name}} can {{power}}</p> -->

    <h3>Change Log</h3>
    <div *ngFor="let chg of changeLog" class="log">{{chg}}</div>
    <div *ngFor="let x of y"><hr>{{x}}<hr></div>
    
  </div>
  `,
})
export class OnChangesComponent implements OnChanges,OnInit {
  @Input() hero!: Hero;
  @Input() power = '';
  @Input() y:Quote[] =[];
  changeLog: string[] = [];
  

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      const chng = changes[propName];
      const cur = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(
        `${propName}: currentValue = ${cur}, previousValue = ${prev}`
      );
    }
  }

  ngOnInit(): void {
    
  }
  reset() {
    this.changeLog = [];
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
