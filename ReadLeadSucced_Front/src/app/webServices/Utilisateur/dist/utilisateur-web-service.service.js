"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UtilisateurWebServiceService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var environment_1 = require("src/environments/environment");
var api_service_1 = require("src/Shared/api.service");
var UtilisateurWebServiceService = /** @class */ (function (_super) {
    __extends(UtilisateurWebServiceService, _super);
    function UtilisateurWebServiceService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.clientUrl = environment_1.environment.appUrl + 'api/Clients';
        return _this;
    }
    // GET POUR PRENDRE LES INFOS
    UtilisateurWebServiceService.prototype.getClient = function () {
        return this.get(this.clientUrl, [])
            .pipe(operators_1.retry(1), operators_1.catchError(this.errorHandler));
    };
    UtilisateurWebServiceService.prototype.getClientID = function (clientId) {
        return this.getById(this.clientUrl, clientId.toString())
            .pipe(operators_1.retry(1), operators_1.catchError(this.errorHandler));
    };
    // POST  --> AJOUT
    UtilisateurWebServiceService.prototype.saveClient = function (client) {
        return this.post(this.clientUrl, JSON.stringify(client))
            .pipe(operators_1.retry(1), operators_1.catchError(this.errorHandler));
    };
    // GESTION DES ERREURS
    UtilisateurWebServiceService.prototype.errorHandler = function (error) {
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
        }
        console.log(errorMessage);
        return rxjs_1.throwError(errorMessage);
    };
    UtilisateurWebServiceService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UtilisateurWebServiceService);
    return UtilisateurWebServiceService;
}(api_service_1.ApiService));
exports.UtilisateurWebServiceService = UtilisateurWebServiceService;
