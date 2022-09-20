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
exports.NftItemReprToJSON = exports.NftItemReprFromJSONTyped = exports.NftItemReprFromJSON = void 0;
const runtime_1 = require("../runtime");
const AccountAddress_1 = require("./AccountAddress");
const ImagePreview_1 = require("./ImagePreview");
const NftItemReprCollection_1 = require("./NftItemReprCollection");
const Sale_1 = require("./Sale");
function NftItemReprFromJSON(json) {
    return NftItemReprFromJSONTyped(json, false);
}
exports.NftItemReprFromJSON = NftItemReprFromJSON;
function NftItemReprFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'address': json['address'],
        'index': json['index'],
        'owner': !(0, runtime_1.exists)(json, 'owner') ? undefined : (0, AccountAddress_1.AccountAddressFromJSON)(json['owner']),
        'collectionAddress': !(0, runtime_1.exists)(json, 'collection_address') ? undefined : json['collection_address'],
        'collection': !(0, runtime_1.exists)(json, 'collection') ? undefined : (0, NftItemReprCollection_1.NftItemReprCollectionFromJSON)(json['collection']),
        'verified': json['verified'],
        'metadata': !(0, runtime_1.exists)(json, 'metadata') ? undefined : json['metadata'],
        'sale': !(0, runtime_1.exists)(json, 'sale') ? undefined : (0, Sale_1.SaleFromJSON)(json['sale']),
        'previews': !(0, runtime_1.exists)(json, 'previews') ? undefined : (json['previews'].map(ImagePreview_1.ImagePreviewFromJSON)),
        'dns': !(0, runtime_1.exists)(json, 'dns') ? undefined : json['dns'],
    };
}
exports.NftItemReprFromJSONTyped = NftItemReprFromJSONTyped;
function NftItemReprToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'address': value.address,
        'index': value.index,
        'owner': (0, AccountAddress_1.AccountAddressToJSON)(value.owner),
        'collection_address': value.collectionAddress,
        'collection': (0, NftItemReprCollection_1.NftItemReprCollectionToJSON)(value.collection),
        'verified': value.verified,
        'metadata': value.metadata,
        'sale': (0, Sale_1.SaleToJSON)(value.sale),
        'previews': value.previews === undefined ? undefined : (value.previews.map(ImagePreview_1.ImagePreviewToJSON)),
        'dns': value.dns,
    };
}
exports.NftItemReprToJSON = NftItemReprToJSON;
