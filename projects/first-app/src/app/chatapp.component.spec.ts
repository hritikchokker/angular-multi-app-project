import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ChatAppComponent } from './chatapp.component';

describe('ChatAppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ChatAppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ChatAppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'first-app'`, () => {
    const fixture = TestBed.createComponent(ChatAppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('first-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ChatAppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('first-app app is running!');
  });
});
