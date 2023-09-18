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
exports.PoolInfoToJSON = exports.PoolInfoFromJSONTyped = exports.PoolInfoFromJSON = exports.instanceOfPoolInfo = void 0;
const runtime_1 = require("../runtime");
const PoolImplementationType_1 = require("./PoolImplementationType");
/**
 * Check if a given object implements the PoolInfo interface.
 */
function instanceOfPoolInfo(value) {
    let isInstance = true;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "totalAmount" in value;
    isInstance = isInstance && "implementation" in value;
    isInstance = isInstance && "apy" in value;
    isInstance = isInstance && "minStake" in value;
    isInstance = isInstance && "cycleStart" in value;
    isInstance = isInstance && "cycleEnd" in value;
    isInstance = isInstance && "verified" in value;
    isInstance = isInstance && "currentNominators" in value;
    isInstance = isInstance && "maxNominators" in value;
    isInstance = isInstance && "nominatorsStake" in value;
    isInstance = isInstance && "validatorStake" in value;
    return isInstance;
}
exports.instanceOfPoolInfo = instanceOfPoolInfo;
function PoolInfoFromJSON(json) {
    return PoolInfoFromJSONTyped(json, false);
}
exports.PoolInfoFromJSON = PoolInfoFromJSON;
function PoolInfoFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'address': json['address'],
        'name': json['name'],
        'totalAmount': json['total_amount'],
        'implementation': (0, PoolImplementationType_1.PoolImplementationTypeFromJSON)(json['implementation']),
        'apy': json['apy'],
        'minStake': json['min_stake'],
        'cycleStart': json['cycle_start'],
        'cycleEnd': json['cycle_end'],
        'verified': json['verified'],
        'currentNominators': json['current_nominators'],
        'maxNominators': json['max_nominators'],
        'liquidJettonMaster': !(0, runtime_1.exists)(json, 'liquid_jetton_master') ? undefined : json['liquid_jetton_master'],
        'nominatorsStake': json['nominators_stake'],
        'validatorStake': json['validator_stake'],
    };
}
exports.PoolInfoFromJSONTyped = PoolInfoFromJSONTyped;
function PoolInfoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'address': value.address,
        'name': value.name,
        'total_amount': value.totalAmount,
        'implementation': (0, PoolImplementationType_1.PoolImplementationTypeToJSON)(value.implementation),
        'apy': value.apy,
        'min_stake': value.minStake,
        'cycle_start': value.cycleStart,
        'cycle_end': value.cycleEnd,
        'verified': value.verified,
        'current_nominators': value.currentNominators,
        'max_nominators': value.maxNominators,
        'liquid_jetton_master': value.liquidJettonMaster,
        'nominators_stake': value.nominatorsStake,
        'validator_stake': value.validatorStake,
    };
}
exports.PoolInfoToJSON = PoolInfoToJSON;
