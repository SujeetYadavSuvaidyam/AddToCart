import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowapidataComponent } from './showapidata.component';

describe('ShowapidataComponent', () => {
  let component: ShowapidataComponent;
  let fixture: ComponentFixture<ShowapidataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowapidataComponent]
    });
    fixture = TestBed.createComponent(ShowapidataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display different content when the condition is false', () => {
    component.Toggle = false;
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('div')?.textContent).toContain('Content to be displayed if the condition is false');
  });
});
