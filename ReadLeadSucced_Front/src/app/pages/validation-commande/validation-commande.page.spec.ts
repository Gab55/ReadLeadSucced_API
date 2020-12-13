import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ValidationCommandePage } from './validation-commande.page';

describe('ValidationCommandePage', () => {
  let component: ValidationCommandePage;
  let fixture: ComponentFixture<ValidationCommandePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationCommandePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ValidationCommandePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
