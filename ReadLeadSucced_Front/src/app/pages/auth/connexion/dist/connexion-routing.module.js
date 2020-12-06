"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ConnexionPageRoutingModule = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var connexion_service_1 = require("./../../../webServices/connexion.service");
var http_1 = require("@angular/common/http");
var login_interceptor_service_1 = require("./../../../../Shared/login-interceptor.service");
var connexion_page_1 = require("./connexion.page");
var routes = [
    {
        path: '',
        component: connexion_page_1.ConnexionPage
    }
];
var ConnexionPageRoutingModule = /** @class */ (function () {
    function ConnexionPageRoutingModule() {
    }
    ConnexionPageRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(routes),
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule
            ],
            exports: [router_1.RouterModule],
            providers: [
                { provide: http_1.HTTP_INTERCEPTORS,
                    useClass: login_interceptor_service_1.LoginInterceptor,
                    multi: true
                },
                connexion_service_1.ConnexionService
            ]
        })
    ], ConnexionPageRoutingModule);
    return ConnexionPageRoutingModule;
}());
exports.ConnexionPageRoutingModule = ConnexionPageRoutingModule;
