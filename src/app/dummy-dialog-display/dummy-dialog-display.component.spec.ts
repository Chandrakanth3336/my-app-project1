import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyDialogDisplayComponent } from './dummy-dialog-display.component';

describe('DummyDialogDisplayComponent', () => {
  let component: DummyDialogDisplayComponent;
  let fixture: ComponentFixture<DummyDialogDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyDialogDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DummyDialogDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
