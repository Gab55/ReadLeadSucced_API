"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ConnexionPageModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var angular_1 = require("@ionic/angular");
var login_interceptor_service_1 = require("./../../../../Shared/login-interceptor.service");
var connexion_routing_module_1 = require("./connexion-routing.module");
var connexion_page_1 = require("./connexion.page");
var ConnexionPageModule = /** @class */ (function () {
    function ConnexionPageModule() {
    }
    ConnexionPageModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                connexion_routing_module_1.ConnexionPageRoutingModule
            ],
            providers: [
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: login_interceptor_service_1.LoginInterceptor,
                    multi: true
                }
            ],
            declarations: [connexion_page_1.ConnexionPage]
        })
    ], ConnexionPageModule);
    return ConnexionPageModule;
}());
exports.ConnexionPageModule = ConnexionPageModule;
