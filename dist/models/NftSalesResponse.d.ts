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
import { NftForSale } from './NftForSale';
/**
 *
 * @export
 * @interface NftSalesResponse
 */
export interface NftSalesResponse {
    /**
     *
     * @type {Array<NftForSale>}
     * @memberof NftSalesResponse
     */
    getgems?: Array<NftForSale>;
    /**
     *
     * @type {Array<NftForSale>}
     * @memberof NftSalesResponse
     */
    disintar?: Array<NftForSale>;
    /**
     *
     * @type {Array<NftForSale>}
     * @memberof NftSalesResponse
     */
    other?: Array<NftForSale>;
}
export declare function NftSalesResponseFromJSON(json: any): NftSalesResponse;
export declare function NftSalesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): NftSalesResponse;
export declare function NftSalesResponseToJSON(value?: NftSalesResponse | null): any;
