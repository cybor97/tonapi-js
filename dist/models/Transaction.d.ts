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
import { AccountAddress } from './AccountAddress';
import { Message } from './Message';
/**
 *
 * @export
 * @interface Transaction
 */
export interface Transaction {
    /**
     *
     * @type {string}
     * @memberof Transaction
     */
    hash: string;
    /**
     *
     * @type {number}
     * @memberof Transaction
     */
    fee: number;
    /**
     *
     * @type {number}
     * @memberof Transaction
     */
    storageFee: number;
    /**
     *
     * @type {number}
     * @memberof Transaction
     */
    otherFee: number;
    /**
     *
     * @type {number}
     * @memberof Transaction
     */
    lt: number;
    /**
     *
     * @type {number}
     * @memberof Transaction
     */
    utime: number;
    /**
     *
     * @type {AccountAddress}
     * @memberof Transaction
     */
    account: AccountAddress;
    /**
     *
     * @type {string}
     * @memberof Transaction
     */
    data: string;
    /**
     *
     * @type {Message}
     * @memberof Transaction
     */
    inMsg?: Message;
    /**
     *
     * @type {Array<Message>}
     * @memberof Transaction
     */
    outMsgs: Array<Message>;
}
export declare function TransactionFromJSON(json: any): Transaction;
export declare function TransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Transaction;
export declare function TransactionToJSON(value?: Transaction | null): any;
