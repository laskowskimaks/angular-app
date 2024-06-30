import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrainiacsTableComponent } from './brainiacs-table.component';

describe('BrainiacsTableComponent', () => {
  let component: BrainiacsTableComponent;
  let fixture: ComponentFixture<BrainiacsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrainiacsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrainiacsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
