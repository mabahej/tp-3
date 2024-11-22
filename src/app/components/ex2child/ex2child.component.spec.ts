import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2childComponent } from './ex2child.component';

describe('Ex2childComponent', () => {
  let component: Ex2childComponent;
  let fixture: ComponentFixture<Ex2childComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex2childComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ex2childComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
