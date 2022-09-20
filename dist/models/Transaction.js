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
exports.TransactionToJSON = exports.TransactionFromJSONTyped = exports.TransactionFromJSON = void 0;
const runtime_1 = require("../runtime");
const AccountAddress_1 = require("./AccountAddress");
const Message_1 = require("./Message");
function TransactionFromJSON(json) {
    return TransactionFromJSONTyped(json, false);
}
exports.TransactionFromJSON = TransactionFromJSON;
function TransactionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'hash': json['hash'],
        'fee': json['fee'],
        'storageFee': json['storage_fee'],
        'otherFee': json['other_fee'],
        'lt': json['lt'],
        'utime': json['utime'],
        'account': (0, AccountAddress_1.AccountAddressFromJSON)(json['account']),
        'data': json['data'],
        'inMsg': !(0, runtime_1.exists)(json, 'in_msg') ? undefined : (0, Message_1.MessageFromJSON)(json['in_msg']),
        'outMsgs': (json['out_msgs'].map(Message_1.MessageFromJSON)),
    };
}
exports.TransactionFromJSONTyped = TransactionFromJSONTyped;
function TransactionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'hash': value.hash,
        'fee': value.fee,
        'storage_fee': value.storageFee,
        'other_fee': value.otherFee,
        'lt': value.lt,
        'utime': value.utime,
        'account': (0, AccountAddress_1.AccountAddressToJSON)(value.account),
        'data': value.data,
        'in_msg': (0, Message_1.MessageToJSON)(value.inMsg),
        'out_msgs': (value.outMsgs.map(Message_1.MessageToJSON)),
    };
}
exports.TransactionToJSON = TransactionToJSON;
