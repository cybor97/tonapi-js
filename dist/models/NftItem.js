"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@tonkeeper.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NftItemToJSON = exports.NftItemFromJSONTyped = exports.NftItemFromJSON = exports.instanceOfNftItem = exports.NftItemApprovedByEnum = void 0;
const runtime_1 = require("../runtime");
const AccountAddress_1 = require("./AccountAddress");
const ImagePreview_1 = require("./ImagePreview");
const NftItemCollection_1 = require("./NftItemCollection");
const Sale_1 = require("./Sale");
/**
 * @export
 */
exports.NftItemApprovedByEnum = {
    Getgems: 'getgems',
    Tonkeeper: 'tonkeeper',
    TonDiamonds: 'ton.diamonds'
};
/**
 * Check if a given object implements the NftItem interface.
 */
function instanceOfNftItem(value) {
    let isInstance = true;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "index" in value;
    isInstance = isInstance && "verified" in value;
    isInstance = isInstance && "metadata" in value;
    isInstance = isInstance && "approvedBy" in value;
    return isInstance;
}
exports.instanceOfNftItem = instanceOfNftItem;
function NftItemFromJSON(json) {
    return NftItemFromJSONTyped(json, false);
}
exports.NftItemFromJSON = NftItemFromJSON;
function NftItemFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'address': json['address'],
        'index': json['index'],
        'owner': !(0, runtime_1.exists)(json, 'owner') ? undefined : (0, AccountAddress_1.AccountAddressFromJSON)(json['owner']),
        'collection': !(0, runtime_1.exists)(json, 'collection') ? undefined : (0, NftItemCollection_1.NftItemCollectionFromJSON)(json['collection']),
        'verified': json['verified'],
        'metadata': json['metadata'],
        'sale': !(0, runtime_1.exists)(json, 'sale') ? undefined : (0, Sale_1.SaleFromJSON)(json['sale']),
        'previews': !(0, runtime_1.exists)(json, 'previews') ? undefined : (json['previews'].map(ImagePreview_1.ImagePreviewFromJSON)),
        'dns': !(0, runtime_1.exists)(json, 'dns') ? undefined : json['dns'],
        'approvedBy': json['approved_by'],
    };
}
exports.NftItemFromJSONTyped = NftItemFromJSONTyped;
function NftItemToJSON(value) {
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
        'collection': (0, NftItemCollection_1.NftItemCollectionToJSON)(value.collection),
        'verified': value.verified,
        'metadata': value.metadata,
        'sale': (0, Sale_1.SaleToJSON)(value.sale),
        'previews': value.previews === undefined ? undefined : (value.previews.map(ImagePreview_1.ImagePreviewToJSON)),
        'dns': value.dns,
        'approved_by': value.approvedBy,
    };
}
exports.NftItemToJSON = NftItemToJSON;
