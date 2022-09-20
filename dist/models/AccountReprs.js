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
exports.AccountReprsToJSON = exports.AccountReprsFromJSONTyped = exports.AccountReprsFromJSON = void 0;
const AccountRepr_1 = require("./AccountRepr");
function AccountReprsFromJSON(json) {
    return AccountReprsFromJSONTyped(json, false);
}
exports.AccountReprsFromJSON = AccountReprsFromJSON;
function AccountReprsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accounts': (json['accounts'].map(AccountRepr_1.AccountReprFromJSON)),
    };
}
exports.AccountReprsFromJSONTyped = AccountReprsFromJSONTyped;
function AccountReprsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'accounts': (value.accounts.map(AccountRepr_1.AccountReprToJSON)),
    };
}
exports.AccountReprsToJSON = AccountReprsToJSON;
