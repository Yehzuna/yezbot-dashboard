import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BossFormComponent } from './boss-form.component';

describe('BossFormComponent', () => {
  let component: BossFormComponent;
  let fixture: ComponentFixture<BossFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BossFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BossFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
