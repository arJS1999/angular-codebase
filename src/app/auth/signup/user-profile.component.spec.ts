import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserSignupComponent } from './user-profile.component';
import { PostService } from 'src/app/service/Api/post.service';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialComponentModule } from 'src/app/material-component/material-component.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('UserProfileComponent', () => {
  let component: UserSignupComponent;
  let fixture: ComponentFixture<UserSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserSignupComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        MaterialComponentModule,
        BrowserAnimationsModule
      ],
      providers: [PostService],
    }).compileComponents();

    fixture = TestBed.createComponent(UserSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should not be submitted', (): void => {
    expect(component.submitted).toBeFalsy();
  });

  it('form should be submitted', (): void => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  });

  it('form email should be invalid', (): void => {
    component.userProfileForm.controls.name.setValue('abdul');
    component.userProfileForm.controls.password.setValue('abdul123');
    component.userProfileForm.controls.email.setValue('abdul');
    component.userProfileForm.controls.image.setValue('1682522321126.jpg');
    expect(component.userProfileForm.invalid).toBeTruthy();
  });

  it('form password should be invalid', (): void => {
    component.userProfileForm.controls.name.setValue('abdul');
    component.userProfileForm.controls.password.setValue('abd');
    component.userProfileForm.controls.email.setValue('abdul@gmail.com');
    component.userProfileForm.controls.image.setValue('1682522321126.jpg');
    expect(component.userProfileForm.invalid).toBeTruthy();
  });

  it('form name should be invalid', (): void => {
    component.userProfileForm.controls.name.setValue('1234');
    component.userProfileForm.controls.password.setValue('abdul123');
    component.userProfileForm.controls.email.setValue('abdul@gmail.com');
    component.userProfileForm.controls.image.setValue('1682522321126.jpg');
    expect(component.userProfileForm.invalid).toBeTruthy();
  });

  it('form should be invalid', (): void => {
    component.userProfileForm.controls.name.setValue('');
    component.userProfileForm.controls.email.setValue('');
    component.userProfileForm.controls.password.setValue('');
    component.userProfileForm.controls.image.setValue('');
    expect(component.userProfileForm.invalid).toBeTruthy();
  });

  it('form should be valid', (): void => {
    component.userProfileForm.controls.name.setValue('abdul');
    component.userProfileForm.controls.password.setValue('abdul123');
    component.userProfileForm.controls.email.setValue('abdul@gmail.com');
    component.userProfileForm.controls.image.setValue('1682522321126.jpg');
    expect(component.userProfileForm.invalid).toBeFalsy();
  });
});
