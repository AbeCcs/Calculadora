import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionesBasicasComponent } from './funciones-basicas.component';

describe('FuncionesBasicasComponent', () => {
  let component: FuncionesBasicasComponent;
  let fixture: ComponentFixture<FuncionesBasicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuncionesBasicasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FuncionesBasicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
