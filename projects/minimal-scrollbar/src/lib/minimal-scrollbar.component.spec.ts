import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimalScrollbarComponent } from './minimal-scrollbar.component';

describe('MinimalScrollbarComponent', () => {
  let component: MinimalScrollbarComponent;
  let fixture: ComponentFixture<MinimalScrollbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinimalScrollbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinimalScrollbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
