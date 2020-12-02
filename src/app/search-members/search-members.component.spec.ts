import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMembersComponent } from './search-members.component';

describe('SearchMembersComponent', () => {
  let component: SearchMembersComponent;
  let fixture: ComponentFixture<SearchMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchMembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
