import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcamComponent } from './arcam.component';

describe('ArcamComponent', () => {
  let component: ArcamComponent;
  let fixture: ComponentFixture<ArcamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArcamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArcamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
