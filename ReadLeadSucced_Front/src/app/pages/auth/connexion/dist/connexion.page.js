"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ConnexionPage = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var operators_1 = require("rxjs/operators");
var ConnexionPage = /** @class */ (function () {
    function ConnexionPage(formBuilder, route, router, ConnexionService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.ConnexionService = ConnexionService;
        this.infos = {
            result: null,
            id: null
        };
        this.loading = false;
        this.submitted = false;
        this.error = '';
        if (this.ConnexionService.userValue) {
            this.router.navigate(['/']);
        }
        this.form = this.formBuilder.group({
            identifiant: ['', forms_1.Validators.required],
            motDePasse: ['', forms_1.Validators.required]
        });
    }
    ConnexionPage.prototype.ngOnInit = function () {
        this.form.controls['identifiant'];
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(ConnexionPage.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.form.controls; },
        enumerable: false,
        configurable: true
    });
    ConnexionPage.prototype.login = function () {
        var _this = this;
        this.submitted = true;
        var identifiants = {
            username: this.form.value.identifiant,
            password: this.form.get("motDePasse").value
        };
        var identifiantsString = JSON.stringify(identifiants);
        this.loading = true;
        this.ConnexionService.authenticate(identifiantsString)
            .pipe(operators_1.first())
            .subscribe({
            next: function (log) {
                var newObj = log;
                if (log != undefined) {
                    localStorage.setItem('token', newObj.result.token);
                    localStorage.setItem('id', newObj.result.idClient);
                    _this.router.navigate(['livres']);
                }
            },
            error: function (error) {
                _this.error = error;
                _this.loading = false;
            }
        });
    };
    ConnexionPage = __decorate([
        core_1.Component({
            selector: 'app-connexion',
            templateUrl: './connexion.page.html',
            styleUrls: ['./connexion.page.scss', './../../../app.component.scss']
        })
    ], ConnexionPage);
    return ConnexionPage;
}());
exports.ConnexionPage = ConnexionPage;
