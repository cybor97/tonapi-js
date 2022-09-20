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
/**
 *
 * @export
 * @interface Subscription
 */
export interface Subscription {
    /**
     *
     * @type {string}
     * @memberof Subscription
     */
    address: string;
    /**
     *
     * @type {string}
     * @memberof Subscription
     */
    walletAddress: string;
    /**
     *
     * @type {string}
     * @memberof Subscription
     */
    beneficiaryAddress: string;
    /**
     *
     * @type {number}
     * @memberof Subscription
     */
    amount: number;
    /**
     *
     * @type {number}
     * @memberof Subscription
     */
    period: number;
    /**
     *
     * @type {number}
     * @memberof Subscription
     */
    startTime: number;
    /**
     *
     * @type {number}
     * @memberof Subscription
     */
    timeout: number;
    /**
     *
     * @type {number}
     * @memberof Subscription
     */
    lastPaymentTime: number;
    /**
     *
     * @type {number}
     * @memberof Subscription
     */
    lastRequestTime: number;
    /**
     *
     * @type {number}
     * @memberof Subscription
     */
    subscriptionId: number;
    /**
     *
     * @type {number}
     * @memberof Subscription
     */
    failedAttempts: number;
}
export declare function SubscriptionFromJSON(json: any): Subscription;
export declare function SubscriptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Subscription;
export declare function SubscriptionToJSON(value?: Subscription | null): any;
