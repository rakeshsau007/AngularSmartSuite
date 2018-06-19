import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUploadComponentComponent } from './list-upload-component.component';

describe('ListUploadComponentComponent', () => {
  let component: ListUploadComponentComponent;
  let fixture: ComponentFixture<ListUploadComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUploadComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUploadComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
