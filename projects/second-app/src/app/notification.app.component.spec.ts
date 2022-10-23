import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NotificationAppComponent } from './notification.app.component';

describe('NotificationAppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        NotificationAppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(NotificationAppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'second-app'`, () => {
    const fixture = TestBed.createComponent(NotificationAppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('second-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(NotificationAppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('second-app app is running!');
  });
});
