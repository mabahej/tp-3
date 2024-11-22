import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinoWordComponent } from './mino-word.component';

describe('MinoWordComponent', () => {
  let component: MinoWordComponent;
  let fixture: ComponentFixture<MinoWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinoWordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MinoWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
