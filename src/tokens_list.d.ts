import { ChainNames } from "./types/chain";
import { TokenList } from "./types/token";
type TokenListNames = ChainNames | "synthetic";
export declare const TokenLists: {
    [key in TokenListNames]: TokenList.TokenData;
};
/**
 * Get token info
 * @param network The network name
 * @param address The token address
 */
export declare function getTokenInfo(network: ChainNames, address: string): TokenList.Token | undefined;
/**
 * Find a given asset in the local token list
 * @param address The target address
 */
export declare function findTokenInLocalhost(address: string): TokenList.Token | undefined;
/**
 * Find a given asset in the synthetic token list
 * @param address The target address
 */
export declare function findTokenInSynthetic(address: string): TokenList.Token | undefined;
export {};
