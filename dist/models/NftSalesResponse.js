"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: contact@fslabs.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NftSalesResponseToJSON = exports.NftSalesResponseFromJSONTyped = exports.NftSalesResponseFromJSON = void 0;
const runtime_1 = require("../runtime");
const NftForSale_1 = require("./NftForSale");
function NftSalesResponseFromJSON(json) {
    return NftSalesResponseFromJSONTyped(json, false);
}
exports.NftSalesResponseFromJSON = NftSalesResponseFromJSON;
function NftSalesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'getgems': !(0, runtime_1.exists)(json, 'getgems') ? undefined : (json['getgems'].map(NftForSale_1.NftForSaleFromJSON)),
        'disintar': !(0, runtime_1.exists)(json, 'disintar') ? undefined : (json['disintar'].map(NftForSale_1.NftForSaleFromJSON)),
        'other': !(0, runtime_1.exists)(json, 'other') ? undefined : (json['other'].map(NftForSale_1.NftForSaleFromJSON)),
    };
}
exports.NftSalesResponseFromJSONTyped = NftSalesResponseFromJSONTyped;
function NftSalesResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'getgems': value.getgems === undefined ? undefined : (value.getgems.map(NftForSale_1.NftForSaleToJSON)),
        'disintar': value.disintar === undefined ? undefined : (value.disintar.map(NftForSale_1.NftForSaleToJSON)),
        'other': value.other === undefined ? undefined : (value.other.map(NftForSale_1.NftForSaleToJSON)),
    };
}
exports.NftSalesResponseToJSON = NftSalesResponseToJSON;
