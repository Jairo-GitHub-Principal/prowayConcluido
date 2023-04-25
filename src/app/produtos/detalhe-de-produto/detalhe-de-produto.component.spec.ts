import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheDeProdutoComponent } from './detalhe-de-produto.component';

describe('DetalheDeProdutoComponent', () => {
  let component: DetalheDeProdutoComponent;
  let fixture: ComponentFixture<DetalheDeProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheDeProdutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalheDeProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
