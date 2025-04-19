import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamSelectionComponent } from './stream-selection.component';

describe('StreamSelectionComponent', () => {
  let component: StreamSelectionComponent;
  let fixture: ComponentFixture<StreamSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StreamSelectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreamSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
