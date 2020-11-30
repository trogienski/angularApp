import { TestBed } from '@angular/core/testing';

import { PokeServService } from './poke-serv.service';

describe('PokeServService', () => {
  let service: PokeServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
