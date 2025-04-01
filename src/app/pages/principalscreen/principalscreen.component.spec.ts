import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalscreenComponent } from './principalscreen.component';

describe('PrincipalscreenComponent', () => {
  let component: PrincipalscreenComponent;
  let fixture: ComponentFixture<PrincipalscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrincipalscreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
