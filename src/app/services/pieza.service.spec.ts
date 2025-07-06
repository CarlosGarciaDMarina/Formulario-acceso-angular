import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PiezaService } from './pieza.service';

describe('PiezaService', () => {
  let service: PiezaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PiezaService]
    });
    service = TestBed.inject(PiezaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
