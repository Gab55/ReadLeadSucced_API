"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var libraire_web_service_service_1 = require("./libraire-web-service.service");
describe('LibraireWebServiceService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(libraire_web_service_service_1.LibraireWebServiceService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
