import { Injectable } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Injectable()
export class BossService {
  public static numberValidator(control: FormControl): boolean {
    if (parseInt(control.value, 10) === (control.value * 1)) {
      return false;
    }

    return true;
  }

  public static percentValidator(control: FormControl): boolean {
    if (BossService.numberValidator(control)) {
      return true;
    }

    if (parseInt(control.value, 10) < 1 || parseInt(control.value, 10) > 100) {
      return true;
    }

    return false;
  }

  public static hpValidator(control: FormControl, form: NgForm): boolean {
    if (BossService.numberValidator(control)) {
      return true;
    }

    if (parseInt(control.value, 10) > parseInt(form.value.hpMax, 10)) {
      return true;
    }

    return false;
  }

  public static mpValidator(control: FormControl, form: NgForm): boolean {
    if (BossService.numberValidator(control)) {
      return true;
    }

    if (parseInt(control.value, 10) > parseInt(form.value.mpMax, 10)) {
      return true;
    }

    return false;
  }
}
