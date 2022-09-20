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
 * @interface JettonMetadata
 */
export interface JettonMetadata {
    /**
     *
     * @type {string}
     * @memberof JettonMetadata
     */
    address: string;
    /**
     *
     * @type {string}
     * @memberof JettonMetadata
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof JettonMetadata
     */
    symbol: string;
    /**
     *
     * @type {number}
     * @memberof JettonMetadata
     */
    decimals: number;
    /**
     *
     * @type {string}
     * @memberof JettonMetadata
     */
    image?: string;
    /**
     *
     * @type {string}
     * @memberof JettonMetadata
     */
    description?: string;
}
export declare function JettonMetadataFromJSON(json: any): JettonMetadata;
export declare function JettonMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): JettonMetadata;
export declare function JettonMetadataToJSON(value?: JettonMetadata | null): any;
