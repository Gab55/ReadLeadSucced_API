import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RechercheCategoriePage } from './recherche-categorie.page';

describe('RechercheCategoriePage', () => {
  let component: RechercheCategoriePage;
  let fixture: ComponentFixture<RechercheCategoriePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheCategoriePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RechercheCategoriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
