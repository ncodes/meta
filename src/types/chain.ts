import { Chain } from 'viem/chains';
import { Contracts } from './contract';
import TokenInfo from './token';

export type ChainNames =
	| 'ethereum'
	| 'polygon'
	| 'optimism'
	| 'localhost'
	| 'sepolia'
	| 'arbitrum-sepolia'
	| 'arbitrum'
	| 'binance'
	| 'base'
	| 'blast';

export interface ChainInfo {
	displayName: string; // The primary name of the chain
	altDisplayName?: string; // Used for displaying the chain name in the UI if displayName is too long
	queryName: ChainNames; // Used for identifying the chain on the backend
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
	bondToken: {
		address: string;
		decimals: number;
		symbol: string;
	};
	contracts?: Contracts;
}
