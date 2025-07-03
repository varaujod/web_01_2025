"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDto = void 0;
class ProductDto {
    name;
    price;
    expirationDate;
    constructor(name, price, expirationDate) {
        this.name = name || '';
        this.price = price || 0;
        this.expirationDate = (expirationDate || '');
    }
}
exports.ProductDto = ProductDto;
