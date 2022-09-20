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
 * @interface CurrentTime200Response
 */
export interface CurrentTime200Response {
    /**
     *
     * @type {number}
     * @memberof CurrentTime200Response
     */
    time: number;
}
export declare function CurrentTime200ResponseFromJSON(json: any): CurrentTime200Response;
export declare function CurrentTime200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CurrentTime200Response;
export declare function CurrentTime200ResponseToJSON(value?: CurrentTime200Response | null): any;
