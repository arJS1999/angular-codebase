import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSkillSelectComponent } from './user-skill-select.component';

describe('UserSkillSelectComponent', () => {
  let component: UserSkillSelectComponent;
  let fixture: ComponentFixture<UserSkillSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSkillSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSkillSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
