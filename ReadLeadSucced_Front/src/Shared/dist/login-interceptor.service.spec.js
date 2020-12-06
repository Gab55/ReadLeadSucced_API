"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var login_interceptor_service_1 = require("./login-interceptor.service");
describe('LoginInterceptorService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(login_interceptor_service_1.LoginInterceptor);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
