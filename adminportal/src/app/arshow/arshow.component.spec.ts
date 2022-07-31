import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArshowComponent } from './arshow.component';

describe('ArshowComponent', () => {
  let component: ArshowComponent;
  let fixture: ComponentFixture<ArshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArshowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
