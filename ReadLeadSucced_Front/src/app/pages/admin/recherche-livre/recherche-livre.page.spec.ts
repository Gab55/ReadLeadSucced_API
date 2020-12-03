import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RechercheLivrePage } from './recherche-livre.page';

describe('RechercheLivrePage', () => {
  let component: RechercheLivrePage;
  let fixture: ComponentFixture<RechercheLivrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheLivrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RechercheLivrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
