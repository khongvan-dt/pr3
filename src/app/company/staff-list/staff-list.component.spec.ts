import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffLIstComponent } from './staff-list.component';

describe('StaffLIstComponent', () => {
  let component: StaffLIstComponent;
  let fixture: ComponentFixture<StaffLIstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaffLIstComponent]
    });
    fixture = TestBed.createComponent(StaffLIstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
