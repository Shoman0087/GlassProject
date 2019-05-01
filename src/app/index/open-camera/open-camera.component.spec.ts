import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenCameraComponent } from './open-camera.component';

describe('OpenCameraComponent', () => {
  let component: OpenCameraComponent;
  let fixture: ComponentFixture<OpenCameraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenCameraComponent ]
    })
    .compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(OpenCameraComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
 
  it(`should have as title 'image-capture'`, () => {
    const fixture = TestBed.createComponent(OpenCameraComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('image-capture');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(OpenCameraComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to image-capture!');
  });
});
