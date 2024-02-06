import { ChainNames } from './types/chain';
import { ContractsParams } from './types/contract';
export declare const contractsParams: ContractsParams;
/**
 * Get contracts params for a given network
 */
export declare function getContractsParams(network: ChainNames): {
    core: import("./types/contract").CoreParams;
    marketCore: import("./types/contract").MarketCoreParams;
    mediatorManager: import("./types/contract").MediatorManagerParams;
    disputeManager: import("./types/contract").disputeManagerParams;
    others: import("./types/contract").OthersParams;
    token: {};
    energon: {};
    nft: {};
    badgeManager: {};
    assetRegistry: {};
} | undefined;
