"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var panier_web_service_service_1 = require("./panier-web-service.service");
describe('PanierWebServiceService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(panier_web_service_service_1.PanierWebServiceService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
