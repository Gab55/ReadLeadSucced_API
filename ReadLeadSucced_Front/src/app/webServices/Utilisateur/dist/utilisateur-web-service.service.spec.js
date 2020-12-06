"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var utilisateur_web_service_service_1 = require("./utilisateur-web-service.service");
describe('UtilisateurWebServiceService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(utilisateur_web_service_service_1.UtilisateurWebServiceService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
