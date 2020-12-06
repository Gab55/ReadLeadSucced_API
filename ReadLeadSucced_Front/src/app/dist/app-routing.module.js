"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var routes = [
    {
        path: 'home',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./home/home.module'); }).then(function (m) { return m.HomePageModule; }); }
    },
    {
        path: '',
        redirectTo: 'auth/connexion',
        pathMatch: 'full'
    },
    {
        path: 'admin/recherche-utilisateur',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/admin/recherche-utilisateur/recherche-utilisateur.module'); }).then(function (m) { return m.RechercheUtilisateurPageModule; }); }
    },
    {
        path: 'gestion-livre',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/admin/gestion-livre/gestion-livre.module'); }).then(function (m) { return m.GestionLivrePageModule; }); }
    },
    {
        path: 'auth/connexion',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/auth/connexion/connexion.module'); }).then(function (m) { return m.ConnexionPageModule; }); }
    },
    {
        path: 'creation-utilisateur',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/utilisateur/creation-utilisateur/creation-utilisateur.module'); }).then(function (m) { return m.CreationUtilisateurPageModule; }); }
    },
    {
        path: 'profil-utilisateur',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/utilisateur/profil-utilisateur/profil-utilisateur.module'); }).then(function (m) { return m.ProfilUtilisateurPageModule; }); }
    },
    {
        path: 'panier',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/panier/panier.module'); }).then(function (m) { return m.PanierPageModule; }); }
    },
    {
        path: 'livre',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/livre/livre.module'); }).then(function (m) { return m.LivrePageModule; }); }
    },
    {
        path: 'livres',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/livres/livres.module'); }).then(function (m) { return m.LivresPageModule; }); }
    },
    {
        path: 'admin/recherche-livre',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/admin/recherche-livre/recherche-livre.module'); }).then(function (m) { return m.RechercheLivrePageModule; }); }
    },
    {
        path: 'admin/creation-livre',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/admin/creation-livre/creation-livre.module'); }).then(function (m) { return m.CreationLivrePageModule; }); }
    },
    {
        path: 'commande',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/commande/commande.module'); }).then(function (m) { return m.CommandePageModule; }); }
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes, { preloadingStrategy: router_1.PreloadAllModules })
            ],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
