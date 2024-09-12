import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalSampleComponent } from './signal-sample.component';

describe('SignalSampleComponent', () => {
  let component: SignalSampleComponent;
  let fixture: ComponentFixture<SignalSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalSampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
