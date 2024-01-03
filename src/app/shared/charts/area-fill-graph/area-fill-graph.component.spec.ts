import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaFillGraphComponent } from './area-fill-graph.component';

describe('AreaFillGraphComponent', () => {
  let component: AreaFillGraphComponent;
  let fixture: ComponentFixture<AreaFillGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaFillGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaFillGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
