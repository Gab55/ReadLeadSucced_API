"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var livraison_web_service_service_1 = require("./livraison-web-service.service");
describe('LivraisonWebServiceService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(livraison_web_service_service_1.LivraisonWebServiceService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
