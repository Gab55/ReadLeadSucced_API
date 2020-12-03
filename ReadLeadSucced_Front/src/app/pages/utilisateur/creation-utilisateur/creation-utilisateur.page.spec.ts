import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreationUtilisateurPage } from './creation-utilisateur.page';

describe('CreationUtilisateurPage', () => {
  let component: CreationUtilisateurPage;
  let fixture: ComponentFixture<CreationUtilisateurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationUtilisateurPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreationUtilisateurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
