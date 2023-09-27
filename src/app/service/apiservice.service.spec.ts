import { TestBed } from '@angular/core/testing';

import { ApiserviceService } from './apiservice.service';
import { ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';

describe('ApiserviceService', () => {
  let service: ApiserviceService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]

    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ApiserviceService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should make a GET request', () => {
    // Make the HTTP GET request
    // httpClient.get('ApiUrl').subscribe((response: HttpResponse<any>) => {
    //   expect(response.body).toEqual('ApiUrl');
    // });
    service.getAllProducts().subscribe((ApiUrl) => {
      expect(ApiUrl).toBeTruthy()
    });
    const mockReq = httpTestingController.expectOne('https://fakestoreapi.com/products');
    mockReq.flush(Object.values(ApiserviceService))
  });

});
