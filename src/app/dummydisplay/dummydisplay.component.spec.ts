import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummydisplayComponent } from './dummydisplay.component';

describe('DummydisplayComponent', () => {
  let component: DummydisplayComponent;
  let fixture: ComponentFixture<DummydisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummydisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DummydisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
