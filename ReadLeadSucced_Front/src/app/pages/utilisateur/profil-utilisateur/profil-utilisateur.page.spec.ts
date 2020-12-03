import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfilUtilisateurPage } from './profil-utilisateur.page';

describe('ProfilUtilisateurPage', () => {
  let component: ProfilUtilisateurPage;
  let fixture: ComponentFixture<ProfilUtilisateurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilUtilisateurPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfilUtilisateurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
