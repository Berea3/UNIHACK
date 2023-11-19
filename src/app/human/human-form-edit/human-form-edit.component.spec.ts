import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanFormEditComponent } from './human-form-edit.component';

describe('HumanFormEditComponent', () => {
  let component: HumanFormEditComponent;
  let fixture: ComponentFixture<HumanFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HumanFormEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HumanFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
