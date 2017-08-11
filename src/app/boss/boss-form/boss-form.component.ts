import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

import { Boss } from '../boss';
import { BossService } from '../boss.service';

@Component({
  selector: 'app-boss-form',
  templateUrl: './boss-form.component.html',
  styleUrls: ['./boss-form.component.scss']
})
export class BossFormComponent implements OnInit {

  public model: Boss;

  constructor() {
    this.model = {
      id: 0,
      channel: 'channel',
      name: '',
      img: '',
      hp: 1000,
      hpMax: 1000,
      mp: 100,
      mpMax: 100,
      absorbs: 0,
      reduce: 0,
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

  numberValidator(control: FormControl): boolean {
    if (parseInt(control.value, 10) !== (control.value * 1)) {
      return true;
    }

    return false;
  }

  percentValidator(control: FormControl): boolean {
    if (parseInt(control.value, 10) !== (control.value * 1)) {
      return true;
    }

    if (parseInt(control.value, 10) < 1 || parseInt(control.value, 10) > 100) {
      return true;
    }

    return false;
  }

  hpValidator(control: FormControl, form: NgForm): boolean {
    if (parseInt(control.value, 10) !== (control.value * 1)) {
      return true;
    }

    if (parseInt(control.value, 10) > parseInt(form.value.hpMax, 10)) {
      return true;
    }

    return false;
  }

  mpValidator(control: FormControl, form: NgForm): boolean {
    if (parseInt(control.value, 10) !== (control.value * 1)) {
      return true;
    }

    if (parseInt(control.value, 10) > parseInt(form.value.mpMax, 10)) {
      return true;
    }

    return false;
  }
}
