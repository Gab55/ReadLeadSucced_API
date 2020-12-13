import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RechercheCommandePage } from './recherche-commande.page';

describe('RechercheCommandePage', () => {
  let component: RechercheCommandePage;
  let fixture: ComponentFixture<RechercheCommandePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheCommandePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RechercheCommandePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
