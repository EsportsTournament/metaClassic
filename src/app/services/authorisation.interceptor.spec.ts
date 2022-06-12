import { TestBed } from '@angular/core/testing';

import { AuthorisationInterceptor } from './authorisation.interceptor';

describe('AuthorisationInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthorisationInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthorisationInterceptor = TestBed.inject(AuthorisationInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
