import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginalInitPageComponent } from './original-init-page.component';

describe('OriginalInitPageComponent', () => {
  let component: OriginalInitPageComponent;
  let fixture: ComponentFixture<OriginalInitPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OriginalInitPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginalInitPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
