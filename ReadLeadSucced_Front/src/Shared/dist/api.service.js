"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ApiService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var environment_1 = require("./../environments/environment");
var ApiService = /** @class */ (function () {
    function ApiService(httpClient) {
        this.httpClient = httpClient;
        this.apiUrl = environment_1.environment.appUrl;
    }
    ApiService.prototype.post = function (url, body) {
        return this.httpClient.post(url, body, { headers: this.getHeaders() });
    };
    ApiService.prototype.put = function (url, body) {
        return this.httpClient.put(url, body, { headers: this.getHeaders() });
    };
    ApiService.prototype.patch = function (url, body) {
        return this.httpClient.patch(url, body, { headers: this.getHeaders() });
    };
    ApiService.prototype.get = function (url, parameters) {
        var httpParameters;
        if (parameters != null) {
            httpParameters = parameters.reduce(function (params, p) { return params.set(p.key, p.value); }, new http_1.HttpParams());
        }
        return this.httpClient.get(url, { headers: this.getHeaders(), params: httpParameters });
    };
    ApiService.prototype.getById = function (url, value) {
        return this.httpClient.get(url + value, { headers: this.getHeaders() });
    };
    ApiService.prototype.getpdf = function (url, value) {
        return this.httpClient.get(url + value);
    };
    ApiService.prototype.getHeaders = function () {
        var headers = new http_1.HttpHeaders();
        // headers = headers.set('Access-Control-Allow-Origin', window.location.origin);
        headers = headers.set('Content-Type', 'application/json');
        if (localStorage.getItem('token') !== null) {
            headers = headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
        }
        return headers;
    };
    ApiService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
