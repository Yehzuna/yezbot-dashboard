import { Component, OnInit } from '@angular/core';
import { Boss } from '../boss';

@Component({
  selector: 'app-boss-form',
  templateUrl: './boss-form.component.html',
  styleUrls: ['./boss-form.component.scss']
})
export class BossFormComponent implements OnInit {

  model: Boss;

  constructor() {
      this.model = {
          id: 0,
          name: '',
          img: '',
          hp: 1000,
          hpMax: 1000,
          mp: 100,
          mpMax: 100,
          absorbs: 0,
          shieldCost: 20,
          shieldValue: 30,
          shieldAmount: 3,
          blockCost: 40,
          blockValue: 300,
          buff: true,
          buffValue: 200,
          critical: true,
          criticalValue: 20,
          dodge: true,
          dodgeValue: 20,
          subscriber: true,
          subscriberValue: 10,
      };
  }

  ngOnInit() {
  }

}
