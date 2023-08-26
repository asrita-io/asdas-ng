import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdTextboxComponent } from './ad-textbox.component';

describe('AdTextboxComponent', () => {
  let component: AdTextboxComponent;
  let fixture: ComponentFixture<AdTextboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdTextboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
