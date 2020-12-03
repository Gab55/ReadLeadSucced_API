import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreationLivrePage } from './creation-livre.page';

describe('CreationLivrePage', () => {
  let component: CreationLivrePage;
  let fixture: ComponentFixture<CreationLivrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationLivrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreationLivrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
