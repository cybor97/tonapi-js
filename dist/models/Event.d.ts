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
import { Action } from './Action';
import { Fee } from './Fee';
/**
 *
 * @export
 * @interface Event
 */
export interface Event {
    /**
     *
     * @type {string}
     * @memberof Event
     */
    eventId: string;
    /**
     *
     * @type {number}
     * @memberof Event
     */
    timestamp: number;
    /**
     *
     * @type {Array<Action>}
     * @memberof Event
     */
    actions: Array<Action>;
    /**
     *
     * @type {Array<Fee>}
     * @memberof Event
     */
    fees: Array<Fee>;
    /**
     * scam
     * @type {boolean}
     * @memberof Event
     */
    isScam: boolean;
    /**
     *
     * @type {number}
     * @memberof Event
     */
    lt: number;
    /**
     * Event is not finished yet. Transactions still happening
     * @type {boolean}
     * @memberof Event
     */
    inProgress: boolean;
}
export declare function EventFromJSON(json: any): Event;
export declare function EventFromJSONTyped(json: any, ignoreDiscriminator: boolean): Event;
export declare function EventToJSON(value?: Event | null): any;
