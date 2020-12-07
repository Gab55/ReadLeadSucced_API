import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestionCategoriePage } from './gestion-categorie.page';

describe('GestionCategoriePage', () => {
  let component: GestionCategoriePage;
  let fixture: ComponentFixture<GestionCategoriePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionCategoriePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionCategoriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
