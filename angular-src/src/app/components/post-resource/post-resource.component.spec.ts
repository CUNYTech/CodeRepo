import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostResourceComponent } from './post-resource.component';

describe('PostResourceComponent', () => {
  let component: PostResourceComponent;
  let fixture: ComponentFixture<PostResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
