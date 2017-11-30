import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindResourceComponent } from './find-resource.component';

describe('FindResourceComponent', () => {
  let component: FindResourceComponent;
  let fixture: ComponentFixture<FindResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
