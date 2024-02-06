import { Chain } from 'viem/_types/types/chain';
import { ChainInfo } from './types/chain';
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
export declare function getChainsID(testnetOnly?: boolean, ignoreTestnet?: boolean, ignore?: number[]): number[];
/**
 * Get viem chain object of all supported chains
 * @param testnetOnly Indicate whether to only return testnet chains
 * @param ignoreTestnet Indicate whether to ignore testnet chains
 * @param ignore - Optionally specify an ID to omit in the result
 */
export declare function getChains(testnetOnly?: boolean, ignoreTestnet?: boolean, ignore?: number[]): Chain[];
/**
 * Get a chain by its chain ID
 * @param id - The chain ID
 */
export declare function getChain(id: number | string): ChainInfo | undefined;
/**
 * Get a chain by its query name
 * @param name - The query name
 */
export declare function getChainByName(name: string): ChainInfo | undefined;
/**
 * Get the name of all supported chains
 * @returns
 */
export declare function getChainNames(): string[];
/**
 * Get chain ID by its name
 * @param name
 */
export declare function getChainID(name: string): number;
/**
 * Check if a chain is supported
 * @param chain The chain name
 * @returns
 */
export declare function isValidChain(chain: string): boolean;
export default Chains;
