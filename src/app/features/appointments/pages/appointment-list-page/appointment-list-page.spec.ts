import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentListPage } from './appointment-list-page';

describe('AppointmentListPage', () => {
  let component: AppointmentListPage;
  let fixture: ComponentFixture<AppointmentListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentListPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AppointmentListPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
