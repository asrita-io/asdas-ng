import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdRadioButtonComponent } from './ad-radio-button.component';

describe('AdRadioButtonComponent', () => {
  let component: AdRadioButtonComponent;
  let fixture: ComponentFixture<AdRadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdRadioButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
