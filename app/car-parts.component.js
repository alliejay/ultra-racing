"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var carPartsComponent = (function () {
    function carPartsComponent() {
        this.carParts = [{
                'id': 1,
                'name': "Super Tires",
                'description': 'These tires are the very best',
                'inStock': 5,
                'price': 4.99
            },
            {
                'id': 2,
                'name': "Reinforced Shocks",
                'description': 'Shocks made from kyptonite',
                'inStock': 4,
                'price': 10.99
            },
            {
                'id': 3,
                'name': "Kitty Toys",
                'description': 'Kitty want to drive too',
                'inStock': 0,
                'price': 6.99
            }];
    }
    carPartsComponent.prototype.totalCarParts = function () {
        var sum = 0;
        for (var _i = 0, _a = this.carParts; _i < _a.length; _i++) {
            var carPart = _a[_i];
            sum += carPart.inStock;
        }
        return sum;
    };
    ;
    carPartsComponent = __decorate([
        core_1.Component({
            selector: 'car-parts',
            template: "<ul>\n     <li *ngFor=\"let carPart of carParts\">\n       <h2>{{carPart.name | uppercase}}</h2>\n        <p>{{carPart.description}}</p>\n        <p *ngIf=\"carPart.inStock > 0\">{{carPart.inStock}}</p>\n        <p *ngIf=\"carPart.inStock === 0\">Out of Stock</p>\n        <p>{{carPart.price | currency: 'USD': true}}</p>\n      </li>\n     </ul>"
        }), 
        __metadata('design:paramtypes', [])
    ], carPartsComponent);
    return carPartsComponent;
}());
exports.carPartsComponent = carPartsComponent;
//# sourceMappingURL=car-parts.component.js.map