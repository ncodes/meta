/**
 * TokenInfo describes an ERC20-like token EVM chain
 */
export default class TokenInfo {
    address?: string;
    name?: string;
    symbol?: string;
    decimals?: number;
    logoURI?: string;
    abi?: any;
    constructor(props: Partial<TokenInfo>);
    /**
     * Checks whether the object is equal to o
     * @param o - The other object
     */
    isEqual(o: TokenInfo): boolean;
}
export declare namespace TokenList {
    export interface TokenData {
        name: string;
        logoURI: string;
        timestamp: string;
        tokens: Token[];
        version: Version;
    }
    export interface Token {
        asset?: string;
        type?: string | "ERC20" | "SYNTHETIC";
        address?: string;
        name?: string;
        symbol?: string;
        decimals?: number;
        logoURI?: string;
        disabled?: boolean;
        price?: number;
        isSynthetic?: boolean;
    }
    interface Version {
        major: number;
        minor: number;
        patch: number;
    }
    export {};
}
