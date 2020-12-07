import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreationCategoriePage } from './creation-categorie.page';

describe('CreationCategoriePage', () => {
  let component: CreationCategoriePage;
  let fixture: ComponentFixture<CreationCategoriePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationCategoriePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreationCategoriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
