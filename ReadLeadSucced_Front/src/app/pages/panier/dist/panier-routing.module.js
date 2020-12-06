"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PanierPageRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_1 = require("@angular/common/http");
var login_interceptor_service_1 = require("./../../../Shared/login-interceptor.service");
var panier_page_1 = require("./panier.page");
var routes = [
    {
        path: '',
        component: panier_page_1.PanierPage
    }
];
var PanierPageRoutingModule = /** @class */ (function () {
    function PanierPageRoutingModule() {
    }
    PanierPageRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule],
            providers: [
                { provide: http_1.HTTP_INTERCEPTORS,
                    useClass: login_interceptor_service_1.LoginInterceptor,
                    multi: true
                },
            ]
        })
    ], PanierPageRoutingModule);
    return PanierPageRoutingModule;
}());
exports.PanierPageRoutingModule = PanierPageRoutingModule;