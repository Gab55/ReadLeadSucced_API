import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestionLivreComponent } from './gestion-livre.component';

describe('GestionLivreComponent', () => {
  let component: GestionLivreComponent;
  let fixture: ComponentFixture<GestionLivreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionLivreComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
