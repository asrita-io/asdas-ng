import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsdesNgComponent } from './asdes-ng.component';

describe('AsdesNgComponent', () => {
  let component: AsdesNgComponent;
  let fixture: ComponentFixture<AsdesNgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsdesNgComponent]
    });
    fixture = TestBed.createComponent(AsdesNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
