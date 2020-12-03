import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestionLivrePage } from './gestion-livre.page';

describe('GestionLivrePage', () => {
  let component: GestionLivrePage;
  let fixture: ComponentFixture<GestionLivrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionLivrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionLivrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
