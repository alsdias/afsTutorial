import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeDBComponent } from './fake-db.component';

describe('FakeDBComponent', () => {
  let component: FakeDBComponent;
  let fixture: ComponentFixture<FakeDBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakeDBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
