import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LivrePage } from './livre.page';

describe('LivrePage', () => {
  let component: LivrePage;
  let fixture: ComponentFixture<LivrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LivrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
