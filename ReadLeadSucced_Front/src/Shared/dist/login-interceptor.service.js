"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginInterceptor = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var LoginInterceptor = /** @class */ (function () {
    function LoginInterceptor(router) {
        this.router = router;
    }
    LoginInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        // Gestion des messages d'erreur HTTP
        return next.handle(req).pipe(operators_1.catchError(function (err) {
            if (err.status === 0) {
                var message = 'Impossible de communiquer avec le serveur. Merci de contacter un administrateur.';
                return rxjs_1.throwError(message);
            }
            else {
                if (err.status === 401) {
                    // Dans le cas ou l'utilisateur n'est pas authoriser à appeler l'API il sera automatiquement déconnecté
                    localStorage.setItem('token', null);
                    localStorage.setItem('id', null);
                    _this.router.navigate(['auth/connexion']);
                }
                else {
                    var message = 'Erreur de tout type. Majoritairement 500';
                    return rxjs_1.throwError(message);
                }
                var error = err.error.message || err.statusText;
                return rxjs_1.throwError(error);
            }
        }));
    };
    LoginInterceptor = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], LoginInterceptor);
    return LoginInterceptor;
}());
exports.LoginInterceptor = LoginInterceptor;
