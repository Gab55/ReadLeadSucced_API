import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LivresComponent } from './livres.component';

describe('LivresComponent', () => {
  let component: LivresComponent;
  let fixture: ComponentFixture<LivresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivresComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LivresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
