import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnilistSearchComponent } from './anilist-search.component';

describe('AnilistSearchComponent', () => {
  let component: AnilistSearchComponent;
  let fixture: ComponentFixture<AnilistSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnilistSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnilistSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
