import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlAdditionComponent } from './al-addition.component';

describe('AlAdditionComponent', () => {
  let component: AlAdditionComponent;
  let fixture: ComponentFixture<AlAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlAdditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
