"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var livre_web_service_service_1 = require("./livre-web-service.service");
describe('LivreWebServiceService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(livre_web_service_service_1.LivreWebServiceService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
