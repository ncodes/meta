import { Chain } from 'viem';
import { Contracts } from './contract';
import TokenInfo from './token';
export type ChainNames = 'ethereum' | 'polygon' | 'binance' | 'optimism' | 'localhost' | 'sepolia';
export interface ChainInfo {
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
