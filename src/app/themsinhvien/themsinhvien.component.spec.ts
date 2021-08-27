import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemsinhvienComponent } from './themsinhvien.component';

describe('ThemsinhvienComponent', () => {
  let component: ThemsinhvienComponent;
  let fixture: ComponentFixture<ThemsinhvienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemsinhvienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemsinhvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
