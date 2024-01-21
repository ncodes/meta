import { ChainNames } from './chain';

export interface ContractInfo {
	address?: string;
	abi: any;
}

export type Contracts = {
	[key in ContractNames]: ContractInfo;
};

export type ContractNames =
	| 'core'
	| 'token'
	| 'energon'
	| 'nft'
	| 'badgeManager'
	| 'marketCore'
	| 'disputeManager'
	| 'mediatorManager'
	| 'assetRegistry';

export type ContractsParams = {
	[key in ChainNames]?: {
		core: CoreParams;
		marketCore: MarketCoreParams;
		mediatorManager: MediatorManagerParams;
		disputeManager: disputeManagerParams;
		others: OthersParams;
		token: {};
		energon: {};
		nft: {};
		badgeManager: {};
		assetRegistry: {};
	};
};

export type CoreParams = {
	minTimeToPay: number;
	orderGraceDur: number;
	maxOpenOrders: number;
	maxOpenDisputes: number;
	transferToFeePoolInterval: number;
	nftDiscountBP: number;
};

export type MarketCoreParams = {
	defaultDisputeDelayDur: number;
};

export type MediatorManagerParams = {
	baseTicketPrice: string;
	ticketWindowDur: number;
	ticketsPerWindow: number;
	ticketSupply: number;
	priceSupplyDeltaBP: number;
	minInactiveWindowBeforeReset: number;
	soldOutBP: number;
	ticketMatureDur: number;
	ticketCancelDur: number;
	ticketExpireDur: number;
	reqPoolBond: string;
	poolDraftReward: string;
	poolWinReward: string;
	poolNumDraftee: number;
	poolNoVoteSlashBP: number;
	poolLoseVoteSlashBP: number;
};

export type disputeManagerParams = {
	evidenceDur: number;
	predictDur: number;
};

export type OthersParams = {
	operatorBond: string;
	allocatorAddr: string;
};
