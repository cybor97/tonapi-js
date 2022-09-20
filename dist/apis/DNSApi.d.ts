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
import * as runtime from '../runtime';
import { DnsRecord, DomainInfo, DomainNames } from '../models';
export interface DnsBackResolveRequest {
    account: string;
}
export interface DnsResolveRequest {
    name: string;
}
export interface GetDomainInfoRequest {
    name: string;
}
/**
 * DNSApi - interface
 *
 * @export
 * @interface DNSApiInterface
 */
export interface DNSApiInterface {
    /**
     * DNS back resolve for wallet address
     * @param {string} account address in raw (hex without 0x) or base64url format
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DNSApiInterface
     */
    dnsBackResolveRaw(requestParameters: DnsBackResolveRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<DomainNames>>;
    /**
     * DNS back resolve for wallet address
     */
    dnsBackResolve(requestParameters: DnsBackResolveRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<DomainNames>;
    /**
     * DNS resolve for domain name
     * @param {string} name domain name with .ton
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DNSApiInterface
     */
    dnsResolveRaw(requestParameters: DnsResolveRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<DnsRecord>>;
    /**
     * DNS resolve for domain name
     */
    dnsResolve(requestParameters: DnsResolveRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<DnsRecord>;
    /**
     * domain info
     * @param {string} name domain name with .ton
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DNSApiInterface
     */
    getDomainInfoRaw(requestParameters: GetDomainInfoRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<DomainInfo>>;
    /**
     * domain info
     */
    getDomainInfo(requestParameters: GetDomainInfoRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<DomainInfo>;
}
/**
 *
 */
export declare class DNSApi extends runtime.BaseAPI implements DNSApiInterface {
    /**
     * DNS back resolve for wallet address
     */
    dnsBackResolveRaw(requestParameters: DnsBackResolveRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<DomainNames>>;
    /**
     * DNS back resolve for wallet address
     */
    dnsBackResolve(requestParameters: DnsBackResolveRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<DomainNames>;
    /**
     * DNS resolve for domain name
     */
    dnsResolveRaw(requestParameters: DnsResolveRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<DnsRecord>>;
    /**
     * DNS resolve for domain name
     */
    dnsResolve(requestParameters: DnsResolveRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<DnsRecord>;
    /**
     * domain info
     */
    getDomainInfoRaw(requestParameters: GetDomainInfoRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<DomainInfo>>;
    /**
     * domain info
     */
    getDomainInfo(requestParameters: GetDomainInfoRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<DomainInfo>;
}
