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
import { TraceMsg } from './TraceMsg';
import { TxAnnotation } from './TxAnnotation';
/**
 *
 * @export
 * @interface TraceTX
 */
export interface TraceTX {
    /**
     *
     * @type {Array<TraceMsg>}
     * @memberof TraceTX
     */
    outMsgs: Array<TraceMsg>;
    /**
     *
     * @type {string}
     * @memberof TraceTX
     */
    hash: string;
    /**
     *
     * @type {number}
     * @memberof TraceTX
     */
    fee: number;
    /**
     *
     * @type {number}
     * @memberof TraceTX
     */
    storageFee: number;
    /**
     *
     * @type {number}
     * @memberof TraceTX
     */
    otherFee: number;
    /**
     *
     * @type {number}
     * @memberof TraceTX
     */
    lt: number;
    /**
     *
     * @type {number}
     * @memberof TraceTX
     */
    utime: number;
    /**
     *
     * @type {string}
     * @memberof TraceTX
     */
    blockId: string;
    /**
     *
     * @type {Array<TxAnnotation>}
     * @memberof TraceTX
     */
    annotations: Array<TxAnnotation>;
}
export declare function TraceTXFromJSON(json: any): TraceTX;
export declare function TraceTXFromJSONTyped(json: any, ignoreDiscriminator: boolean): TraceTX;
export declare function TraceTXToJSON(value?: TraceTX | null): any;
