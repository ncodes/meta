import { Chain } from 'viem/_types/types/chain';

interface ContractInfo {
    address?: string;
    abi: any;
}
declare type Contracts = {
    [key in ContractNames]: ContractInfo;
};
declare type ContractNames = "core" | "token" | "energon" | "nft" | "badgeManager" | "marketCore" | "disputeManager" | "mediatorManager";

/**
 * TokenInfo describes an ERC20-like token EVM chain
 */
declare class TokenInfo {
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
declare namespace TokenList {
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
    export {  };
}

declare type ChainNames = "ethereum" | "polygon" | "binance" | "optimism" | "localhost" | "sepolia";
interface ChainInfo {
    displayName: string;
    altDisplayName?: string;
    queryName: string;
    chainId: number;
    chain: Chain;
    disabled?: boolean;
    testnet?: boolean;
    symbol: string;
    apiUrl?: string;
    rpcUrl?: string;
    blockExplorer: string;
    logoPath: any;
    wrappedTokenInfo: TokenInfo;
    contracts?: Contracts;
}

/**
 * Mapping of supported chains' information
 */
declare const Chains: ChainInfo[];
/**
 * Get IDs of all supported chains
 * @param testnetOnly Indicate whether to only return testnet chains
 * @param ignoreTestnet Indicate whether to ignore testnet chains
 * @param ignore - Optionally specify an ID to omit in the result
 */
declare function getChainsID(testnetOnly?: boolean, ignoreTestnet?: boolean, ignore?: number[]): number[];
/**
 * Get viem chain object of all supported chains
 * @param testnetOnly Indicate whether to only return testnet chains
 * @param ignoreTestnet Indicate whether to ignore testnet chains
 * @param ignore - Optionally specify an ID to omit in the result
 */
declare function getChains(testnetOnly?: boolean, ignoreTestnet?: boolean, ignore?: number[]): Chain[];
/**
 * Get a chain by its chain ID
 * @param id - The chain ID
 */
declare function getChain(id: number | string): ChainInfo | undefined;
/**
 * Get a chain by its query name
 * @param name - The query name
 */
declare function getChainByName(name: string): ChainInfo | undefined;
/**
 * Get the name of all supported chains
 * @returns
 */
declare function getChainNames(): string[];
/**
 * Get chain ID by its name
 * @param name
 */
declare function getChainID(name: string): number;
/**
 * Check if a chain is supported
 * @param chain The chain name
 * @returns
 */
declare function isValidChain(chain: string): boolean;

declare type PaymentMethods = {
    [key in ChainNames]?: {
        badge: string;
        name: string;
        shortName?: string;
        logoUrl: string;
        region: string;
    }[];
};
declare const paymentMethods: PaymentMethods;

declare type TokenListNames = ChainNames | "synthetic";
declare const TokenLists: {
    [key in TokenListNames]: TokenList.TokenData;
};
/**
 * Get token info
 * @param network The network name
 * @param address The token address
 */
declare function getTokenInfo(network: ChainNames, address: string): TokenList.Token | undefined;
/**
 * Find a given asset in the local token list
 * @param address The target address
 */
declare function findTokenInLocalhost(address: string): TokenList.Token | undefined;
/**
 * Find a given asset in the synthetic token list
 * @param address The target address
 */
declare function findTokenInSynthetic(address: string): TokenList.Token | undefined;

export { type ChainInfo, type ChainNames, type ContractInfo, type ContractNames, type Contracts, type PaymentMethods, TokenLists, Chains as default, findTokenInLocalhost, findTokenInSynthetic, getChain, getChainByName, getChainID, getChainNames, getChains, getChainsID, getTokenInfo, isValidChain, paymentMethods };
