import { ChainNames } from './chain';

export interface ContractInfo {
	address?: string;
	abi: any;
}

export type Contracts = Partial<{
	[key in ContractNames]: ContractInfo;
}>;

export type ContractNames =
	| 'core'
	| 'token'
	| 'energon'
	| 'nft'
	| 'badgeManager'
	| 'marketCore'
	| 'disputeManager'
	| 'mediatorManager'
	| 'assetRegistry'
	| 'minerRegistry'
	| 'providerRegistry'
	| 'router'
	| 'payRouter'
	| 'marketManager'
	| 'uniswapV2Router'
	| 'uniswapV2Router2'
	| 'uniswapV3Router'
	| 'uniswapV3Router02'
	| 'uniswapV3UniversalRouter';

export type ContractsParams = {
	[key in ChainNames]?: {
		core: CoreParams;
		marketCore: MarketCoreParams;
		mediatorManager: MediatorManagerParams;
		disputeManager: DisputeManagerParams;
		minerRegistry: MinerRegistryParams;
		others: OthersParams;
		chainlink: ChainLinkParams;
		payRouter: PayRouterParams;
		marketManager: {};
		token: {};
		energon: {};
		nft: {};
		badgeManager: {};
		assetRegistry: {};
	};
};

export type CoreParams = {
	minTimeToPay?: number;
	orderGraceDur?: number;
	maxOpenOrders?: number;
	maxOpenDisputes?: number;
	transferToFeePoolInterval?: number;
};

export type PayRouterParams = {
	payRouterProtocolFeeBp?: number;
};

export type MarketCoreParams = {
	defaultDisputeDelayDur?: number;
};

export type MediatorManagerParams = {
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

export type DisputeManagerParams = {
	evidenceDur?: number;
	predictDur?: number;
};

export type OthersParams = {
	operatorBond?: string;
	allocatorAddr?: string;
	safe?: string;
	nativeAssetAddr?: string;
};

export type MinerRegistryParams = {
	minerBond?: string;
	minerMatureDur?: number;
	minerCancelDur?: number;
	draftReward?: string;
	undraftReward?: string;
	executeReward?: string;
	cancelReward?: string;
};

export type ChainLinkParams = {
	chainlinkKeyHash?: string;
	chainlinkCoordinator?: string;
	chainlinkSubId?: number;
};
