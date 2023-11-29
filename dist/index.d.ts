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
 * Mapping of supported networks' information
 */
declare const Chains: ChainInfo[];
/**
 * Get IDs of all supported networks
 * @param testnetOnly Indicate whether to only return testnet chains
 * @param ignoreTestnet Indicate whether to ignore testnet chains
 * @param ignore - Optionally specify an ID to omit in the result
 */
declare function getChainsID(testnetOnly?: boolean, ignoreTestnet?: boolean, ignore?: number[]): number[];
/**
 * Get chain object of all supported network
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

export { type ChainInfo, type ContractInfo, type ContractNames, type Contracts, Chains as default, getChain, getChains, getChainsID };
