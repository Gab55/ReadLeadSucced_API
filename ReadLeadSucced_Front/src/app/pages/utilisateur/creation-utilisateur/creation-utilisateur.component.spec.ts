import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreationUtilisateurComponent } from './creation-utilisateur.component';

describe('CreationUtilisateurComponent', () => {
  let component: CreationUtilisateurComponent;
  let fixture: ComponentFixture<CreationUtilisateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationUtilisateurComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreationUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
