import { Chain } from 'viem/chains';

declare const Abi: {
    BadgeManager: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    Core: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            components: ({
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            })[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: never[];
        name: string;
        outputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        } | {
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    DisputeManager: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    Energon: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    MarketCore: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            components: ({
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            })[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: ({
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        })[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: ({
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: ({
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            })[];
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    MediatorManager: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    NFT: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    NativeToken: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    WETHAbi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        inputs?: undefined;
        name?: undefined;
        outputs?: undefined;
    })[];
    AssetRegistry: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    ERC20: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    ERC721: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    FeePool: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    LPPool: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    TokenPool: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
};

interface ContractInfo {
    address?: string;
    abi: any;
}
type Contracts = {
    [key in ContractNames]: ContractInfo;
};
type ContractNames = 'core' | 'token' | 'energon' | 'nft' | 'badgeManager' | 'marketCore' | 'disputeManager' | 'mediatorManager' | 'assetRegistry' | 'minerRegistry';
type ContractsParams = {
    [key in ChainNames]?: {
        core: CoreParams;
        marketCore: MarketCoreParams;
        mediatorManager: MediatorManagerParams;
        disputeManager: DisputeManagerParams;
        minerRegistry: MinerRegistryParams;
        others: OthersParams;
        chainlink: ChainLinkParams;
        token: {};
        energon: {};
        nft: {};
        badgeManager: {};
        assetRegistry: {};
    };
};
type CoreParams = {
    minTimeToPay?: number;
    orderGraceDur?: number;
    maxOpenOrders?: number;
    maxOpenDisputes?: number;
    transferToFeePoolInterval?: number;
    nftDiscountBP?: number;
};
type MarketCoreParams = {
    defaultDisputeDelayDur?: number;
};
type MediatorManagerParams = {
    ticketMaxPause?: number;
    baseTicketPrice?: string;
    ticketWindowDur?: number;
    ticketsPerWindow?: number;
    ticketSupply?: number;
    priceSupplyDeltaBP?: number;
    minInactiveWindowBeforeReset?: number;
    soldOutBP?: number;
    ticketMatureDur?: number;
    ticketCancelDur?: number;
    ticketExpireDur?: number;
    ticketPauseDur?: number;
    reqPoolBond?: string;
    poolDraftReward?: string;
    poolWinReward?: string;
    poolNumDraftee?: number;
    poolNoVoteSlashBP?: number;
    poolLoseVoteSlashBP?: number;
    poolEvidenceDur?: number;
    poolPredictDur?: number;
};
type DisputeManagerParams = {
    evidenceDur?: number;
    predictDur?: number;
};
type OthersParams = {
    operatorBond?: string;
    allocatorAddr?: string;
    safe?: string;
};
type MinerRegistryParams = {
    minerBond?: string;
    minerMatureDur?: number;
    minerCancelDur?: number;
};
type ChainLinkParams = {
    chainlinkKeyHash?: string;
    chainlinkCoordinator?: string;
    chainlinkSubId?: number;
};

type contract_ChainLinkParams = ChainLinkParams;
type contract_ContractInfo = ContractInfo;
type contract_ContractNames = ContractNames;
type contract_Contracts = Contracts;
type contract_ContractsParams = ContractsParams;
type contract_CoreParams = CoreParams;
type contract_DisputeManagerParams = DisputeManagerParams;
type contract_MarketCoreParams = MarketCoreParams;
type contract_MediatorManagerParams = MediatorManagerParams;
type contract_MinerRegistryParams = MinerRegistryParams;
type contract_OthersParams = OthersParams;
declare namespace contract {
  export type { contract_ChainLinkParams as ChainLinkParams, contract_ContractInfo as ContractInfo, contract_ContractNames as ContractNames, contract_Contracts as Contracts, contract_ContractsParams as ContractsParams, contract_CoreParams as CoreParams, contract_DisputeManagerParams as DisputeManagerParams, contract_MarketCoreParams as MarketCoreParams, contract_MediatorManagerParams as MediatorManagerParams, contract_MinerRegistryParams as MinerRegistryParams, contract_OthersParams as OthersParams };
}

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

type ChainNames = 'ethereum' | 'polygon' | 'binance' | 'optimism' | 'localhost' | 'sepolia' | 'arbitrum-sepolia' | 'arbitrum' | 'binance';
interface ChainInfo {
    displayName: string;
    altDisplayName?: string;
    queryName: ChainNames;
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

type BadgeManifest = {
    name: string;
    issuer: string;
    issuerAddress: string;
    logoUrl: string;
    shortDescription: string;
    longDescriptions: string[];
    claimPageUrl: string;
};
type ChainBadgeManifest = {
    [key in ChainNames]?: {
        [badge: string]: BadgeManifest;
    };
};
declare const BadgeManifests: ChainBadgeManifest;
/**
 * Parse badge local variables
 * @param badge The badge manifest
 * @param locals The local variables
 * @returns
 */
declare function parseBadgeLocals(badge: BadgeManifest, locals: {
    [key: string]: string;
}): BadgeManifest;

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
declare function getChainNames(): ChainNames[];
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

declare const contractsParams: ContractsParams;
/**
 * Get contracts params for a given network
 */
declare function getContractsParams(network: ChainNames): {
    core: CoreParams;
    marketCore: MarketCoreParams;
    mediatorManager: MediatorManagerParams;
    disputeManager: DisputeManagerParams;
    minerRegistry: MinerRegistryParams;
    others: OthersParams;
    chainlink: ChainLinkParams;
    token: {};
    energon: {};
    nft: {};
    badgeManager: {};
    assetRegistry: {};
} | undefined;

type MediatorPool = {
    name: string;
    description: string;
    id: number;
    reqBond: string;
    draftReward: string;
    winReward: string;
    noVoteSlashBP: number;
    loseVoteSlashBP: number;
    numDraftees: number;
};
type KnownMediatorPools = {
    [key in ChainNames]?: MediatorPool[];
};
declare const MediatorPools: KnownMediatorPools;

type PaymentMethods = {
    [key in ChainNames]?: {
        badge: string;
        name: string;
        shortName?: string;
        logoUrl: string;
        region: string;
    }[];
};
declare const paymentMethods: PaymentMethods;

type TokenListNames = ChainNames | 'synthetic';
declare const TokenLists: Record<TokenListNames, TokenList.TokenData>;
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

export { Abi, type BadgeManifest, BadgeManifests, type ChainBadgeManifest, type ChainInfo, type ChainNames, type ContractInfo, type ContractNames, contract as ContractParamTypes, type Contracts, type KnownMediatorPools, type MediatorPool, MediatorPools, type PaymentMethods, TokenLists, contractsParams, Chains as default, findTokenInLocalhost, findTokenInSynthetic, getChain, getChainByName, getChainID, getChainNames, getChains, getChainsID, getContractsParams, getTokenInfo, isValidChain, parseBadgeLocals, paymentMethods };
