import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessCardComponent } from './business-card.component';
import { FormsModule } from '@angular/forms';

describe('BusinessCardComponent', () => {
  let component: BusinessCardComponent;
  let fixture: ComponentFixture<BusinessCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessCardComponent , FormsModule ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusinessCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
