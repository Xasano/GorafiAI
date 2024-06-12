import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateArticlesComponent } from './generate-articles.component';

describe('GenerateArticlesComponent', () => {
  let component: GenerateArticlesComponent;
  let fixture: ComponentFixture<GenerateArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateArticlesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenerateArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
