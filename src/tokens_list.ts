import _ from 'lodash';
import { isAddressEqual } from 'viem';
import arbitrumSepolia from './tokenlist/arbitrum-sepolia.json';
import arbitrum from './tokenlist/arbitrum.json';
import binance from './tokenlist/binance.json';
import ethereum from './tokenlist/ethereum.json';
import localhost from './tokenlist/localhost.json';
import optimism from './tokenlist/optimism.json';
import polygon from './tokenlist/polygon.json';
import sepolia from './tokenlist/sepolia.json';
import synthetic from './tokenlist/synthetic.json';
import { ChainNames } from './types/chain';
import { TokenList } from './types/token';

type TokenListNames = ChainNames | 'synthetic';
export const TokenLists: Record<TokenListNames, TokenList.TokenData> = {
	ethereum,
	polygon,
	binance,
	optimism,
	synthetic,
	localhost,
	sepolia,
	'arbitrum-sepolia': arbitrumSepolia,
	arbitrum,
};

/**
 * Get token info
 * @param network The network name
 * @param address The token address
 */
export function getTokenInfo(network: ChainNames, address: string): TokenList.Token | undefined {
	const netList = TokenLists[network];
	if (!netList) return;
	return _.find(netList.tokens, (x) => isAddressEqual(x.address as `0x${string}`, address as `0x${string}`));
}

/**
 * Find a given asset in the local token list
 * @param address The target address
 */
export function findTokenInLocalhost(address: string): TokenList.Token | undefined {
	return TokenLists.localhost.tokens.find((token) => {
		const match = isAddressEqual(token.address as `0x${string}`, address as `0x${string}`);
		if (!match) return;
		token.isSynthetic = token.isSynthetic || token.type == 'SYNTHETIC';
		return token;
	});
}

/**
 * Find a given asset in the synthetic token list
 * @param address The target address
 */
export function findTokenInSynthetic(address: string): TokenList.Token | undefined {
	return TokenLists.synthetic.tokens.find((token) => {
		const match = isAddressEqual(token.address as `0x${string}`, address as `0x${string}`);
		if (!match) return;
		token.isSynthetic = token.isSynthetic || token.type == 'SYNTHETIC';
		return token;
	});
}
