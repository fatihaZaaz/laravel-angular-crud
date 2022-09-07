import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageLocationsFormComponent } from './storage-locations-form.component';

describe('StorageLocationsFormComponent', () => {
  let component: StorageLocationsFormComponent;
  let fixture: ComponentFixture<StorageLocationsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorageLocationsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorageLocationsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
