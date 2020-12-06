"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var commande_web_service_service_1 = require("./commande-web-service.service");
describe('CommandeWebServiceService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(commande_web_service_service_1.CommandeWebServiceService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
