import { Chain, arbitrum, arbitrumSepolia, bsc, hardhat, mainnet, optimism, polygon, sepolia } from 'viem/chains';
import AssetRegistryABI from './abi/AssetRegistry.json';
import BadgeManagerABI from './abi/BadgeManager.json';
import CoreABI from './abi/Core.json';
import DisputeManagerABI from './abi/DisputeManager.json';
import EnergonABI from './abi/Energon.json';
import MarketCoreABI from './abi/MarketCore.json';
import MediatorManagerABI from './abi/MediatorManager.json';
import MinerRegistryABI from './abi/MinerRegistry.json';
import NftABI from './abi/NFT.json';
import NativeTokenABI from './abi/Token.json';
import WETHABI from './abi/WETH.json';
import IconBSC from './icons/BSC';
import IconArbitrum from './icons/IconArbitrum';
import IconEthereum from './icons/IconEthereum';
import IconOptimism from './icons/IconOptimism';
import IconPolygon from './icons/IconPolygon';
import { ChainInfo } from './types/chain';
import TokenInfo from './types/token';

/**
 * Mapping of supported chains' information
 */
const Chains: ChainInfo[] = [
	{
		disabled: true,
		displayName: 'Ethereum',
		queryName: 'ethereum',
		chainId: mainnet.id,
		chain: mainnet,
		symbol: 'ETH',
		apiUrl:
			process.env.ETHEREUM_API_URL ?? process.env.NEXT_PUBLIC_ETHEREUM_API_URL ?? import.meta.env.VITE_ETHEREUM_API_URL,
		rpcUrl:
			process.env.ETHEREUM_RPC_URL ?? process.env.NEXT_PUBLIC_ETHEREUM_RPC_URL ?? import.meta.env.VITE_ETHEREUM_RPC_URL,
		blockExplorer: 'https://etherscan.io',
		logoPath: IconEthereum as any,
		wrappedTokenInfo: new TokenInfo({
			address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
			name: 'WETH',
			symbol: 'WETH',
			abi: WETHABI,
			decimals: 18,
			logoURI:
				'https://assets-cdn.trustwallet.com/blockchains/optimism/assets/0x4200000000000000000000000000000000000006/logo.png',
		}),
		contracts: {
			core: {
				address:
					process.env.ETHEREUM_CORE_ADDRESS ??
					process.env.NEXT_PUBLIC_ETHEREUM_CORE_ADDRESS ??
					import.meta.env.VITE_ETHEREUM_CORE_ADDRESS,
				abi: CoreABI,
			},
			token: {
				address:
					process.env.ETHEREUM_TOKEN_ADDRESS ??
					process.env.NEXT_PUBLIC_ETHEREUM_TOKEN_ADDRESS ??
					import.meta.env.VITE_ETHEREUM_TOKEN_ADDRESS,
				abi: NativeTokenABI,
			},
			badgeManager: {
				address:
					process.env.ETHEREUM_BADGE_MGR_ADDRESS ??
					process.env.NEXT_PUBLIC_ETHEREUM_BADGE_MGR_ADDRESS ??
					import.meta.env.VITE_ETHEREUM_BADGE_MGR_ADDRESS,
				abi: BadgeManagerABI,
			},
			marketCore: {
				address:
					process.env.ETHEREUM_MARKET_CORE_ADDRESS ??
					process.env.NEXT_PUBLIC_ETHEREUM_MARKET_CORE_ADDRESS ??
					import.meta.env.VITE_ETHEREUM_MARKET_CORE_ADDRESS,
				abi: MarketCoreABI,
			},
			disputeManager: {
				address:
					process.env.ETHEREUM_DISPUTE_MGR_ADDRESS ??
					process.env.NEXT_PUBLIC_ETHEREUM_DISPUTE_MGR_ADDRESS ??
					import.meta.env.VITE_ETHEREUM_DISPUTE_MGR_ADDRESS,
				abi: DisputeManagerABI,
			},
			mediatorManager: {
				address:
					process.env.ETHEREUM_MEDIATOR_MGR_ADDRESS ??
					process.env.NEXT_PUBLIC_ETHEREUM_MEDIATOR_MGR_ADDRESS ??
					import.meta.env.VITE_ETHEREUM_MEDIATOR_MGR_ADDRESS,
				abi: MediatorManagerABI,
			},
			energon: {
				address:
					process.env.ETHEREUM_ENERGON_ADDRESS ??
					process.env.NEXT_PUBLIC_ETHEREUM_ENERGON_ADDRESS ??
					import.meta.env.VITE_ETHEREUM_ENERGON_ADDRESS ??
					'0x7787D10F8F277bC509fb79c68BFC508d69dd41dC',
				abi: EnergonABI,
			},
			nft: {
				address:
					process.env.ETHEREUM_NFT_ADDRESS ??
					process.env.NEXT_PUBLIC_ETHEREUM_NFT_ADDRESS ??
					import.meta.env.VITE_ETHEREUM_NFT_ADDRESS ??
					'0x07b7cdd77e18ac2b0f0a0b529f2ea86200c9ebda',
				abi: NftABI,
			},
			assetRegistry: {
				address:
					process.env.ETHEREUM_ASSET_REG_ADDRESS ??
					process.env.NEXT_PUBLIC_ETHEREUM_ASSET_REG_ADDRESS ??
					import.meta.env.VITE_ETHEREUM_ASSET_REG_ADDRESS,
				abi: AssetRegistryABI,
			},
			minerRegistry: {
				address:
					process.env.ETHEREUM_MINER_REG_ADDRESS ??
					process.env.NEXT_PUBLIC_ETHEREUM_MINER_REG_ADDRESS ??
					import.meta.env.VITE_ETHEREUM_MINER_REG_ADDRESS ??
					'',
				abi: MinerRegistryABI,
			},
		},
	},
	{
		disabled: true,
		displayName: 'Polygon',
		queryName: 'polygon',
		chainId: polygon.id,
		chain: polygon,
		symbol: 'MATIC',
		apiUrl:
			process.env.POLYGON_API_URL ?? process.env.NEXT_PUBLIC_POLYGON_API_URL ?? import.meta.env.VITE_POLYGON_API_URL,
		rpcUrl:
			process.env.POLYGON_RPC_URL ?? process.env.NEXT_PUBLIC_POLYGON_RPC_URL ?? import.meta.env.VITE_POLYGON_RPC_URL,
		blockExplorer: 'https://polygonscan.com',
		logoPath: IconPolygon as any,
		wrappedTokenInfo: new TokenInfo({
			address:
				process.env.POLYGON_WRAPPED_TOKEN_ADDRESS ??
				process.env.NEXT_PUBLIC_POLYGON_WRAPPED_TOKEN_ADDRESS ??
				import.meta.env.VITE_POLYGON_WRAPPED_TOKEN_ADDRESS,
			name: 'WMATIC',
			symbol: 'WMATIC',
			abi: WETHABI,
			decimals: 18,
			logoURI:
				'https://assets-cdn.trustwallet.com/blockchains/polygon/assets/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270/logo.png',
		}),
	},
	{
		disabled: true,
		displayName: 'Optimism',
		queryName: 'optimism',
		chainId: optimism.id,
		chain: optimism,
		symbol: 'ETH',
		apiUrl:
			process.env.OPTIMISM_API_URL ?? process.env.NEXT_PUBLIC_OPTIMISM_API_URL ?? import.meta.env.VITE_OPTIMISM_API_URL,
		rpcUrl:
			process.env.OPTIMISM_RPC_URL ?? process.env.NEXT_PUBLIC_OPTIMISM_RPC_URL ?? import.meta.env.VITE_OPTIMISM_RPC_URL,
		blockExplorer: 'https://optimistic.etherscan.io',
		logoPath: IconOptimism as any,
		wrappedTokenInfo: new TokenInfo({
			address:
				process.env.OPTIMISM_WRAPPED_TOKEN_ADDRESS ??
				process.env.NEXT_PUBLIC_OPTIMISM_WRAPPED_TOKEN_ADDRESS ??
				import.meta.env.VITE_OPTIMISM_WRAPPED_TOKEN_ADDRESS,
			name: 'WETH',
			symbol: 'WETH',
			decimals: 18,
			abi: WETHABI,
			logoURI:
				'https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
		}),
	},
	{
		disabled: true,
		displayName: 'Binance Chain',
		altDisplayName: 'BSC',
		queryName: 'binance',
		chainId: bsc.id,
		chain: bsc,
		symbol: 'BNB',
		apiUrl:
			process.env.BINANCE_API_URL ?? process.env.NEXT_PUBLIC_BINANCE_API_URL ?? import.meta.env.VITE_BINANCE_API_URL,
		rpcUrl:
			process.env.BINANCE_RPC_URL ?? process.env.NEXT_PUBLIC_BINANCE_RPC_URL ?? import.meta.env.VITE_BINANCE_RPC_URL,
		blockExplorer: 'https://bscscan.com',
		logoPath: IconBSC as any,
		wrappedTokenInfo: new TokenInfo({
			address:
				process.env.BINANCE_WRAPPED_TOKEN_ADDRESS ??
				process.env.NEXT_PUBLIC_BINANCE_WRAPPED_TOKEN_ADDRESS ??
				import.meta.env.VITE_BINANCE_WRAPPED_TOKEN_ADDRESS,
			name: 'WBNB',
			symbol: 'WBNB',
			decimals: 18,
			abi: WETHABI,
			logoURI:
				'https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png',
		}),
	},
	{
		displayName: 'Arbitrum',
		queryName: 'arbitrum',
		chainId: arbitrum.id,
		chain: arbitrum,
		symbol: 'ETH',
		apiUrl:
			process.env.ARBITRUM_API_URL ?? process.env.NEXT_PUBLIC_ARBITRUM_API_URL ?? import.meta.env.VITE_ARBITRUM_API_URL,
		rpcUrl:
			process.env.ARBITRUM_RPC_URL ?? process.env.NEXT_PUBLIC_ARBITRUM_RPC_URL ?? import.meta.env.VITE_ARBITRUM_RPC_URL,
		blockExplorer: 'https://arbiscan.io',
		logoPath: IconArbitrum as any,
		wrappedTokenInfo: new TokenInfo({
			address:
				process.env.ARBITRUM_WRAPPED_TOKEN_ADDRESS ??
				process.env.NEXT_PUBLIC_ARBITRUM_WRAPPED_TOKEN_ADDRESS ??
				import.meta.env.VITE_ARBITRUM_WRAPPED_TOKEN_ADDRESS ??
				'0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
			name: 'WETH',
			symbol: 'WETH',
			decimals: 18,
			abi: WETHABI,
			logoURI:
				'https://assets-cdn.trustwallet.com/blockchains/optimism/assets/0x4200000000000000000000000000000000000006/logo.png',
		}),
		contracts: {
			core: {
				address:
					process.env.ARBITRUM_CORE_ADDRESS ??
					process.env.NEXT_PUBLIC_ARBITRUM_CORE_ADDRESS ??
					import.meta.env.VITE_ARBITRUM_CORE_ADDRESS ??
					'0x3e50344B05e0f66351c21B5D3b9cAAF194cFC556',
				abi: CoreABI,
			},
			token: {
				address:
					process.env.ARBITRUM_TOKEN_ADDRESS ??
					process.env.NEXT_PUBLIC_ARBITRUM_TOKEN_ADDRESS ??
					import.meta.env.VITE_ARBITRUM_TOKEN_ADDRESS ??
					'0x5e5e85370808363Ee3D59e8a778ee15cf8A1E15a',
				abi: NativeTokenABI,
			},
			badgeManager: {
				address:
					process.env.ARBITRUM_BADGE_MGR_ADDRESS ??
					process.env.NEXT_PUBLIC_ARBITRUM_BADGE_MGR_ADDRESS ??
					import.meta.env.VITE_ARBITRUM_BADGE_MGR_ADDRESS ??
					'0x99eCb581130fD43B420C6e12fEeB3A267f6BA03f',
				abi: BadgeManagerABI,
			},
			marketCore: {
				address:
					process.env.ARBITRUM_MARKET_CORE_ADDRESS ??
					process.env.NEXT_PUBLIC_ARBITRUM_MARKET_CORE_ADDRESS ??
					import.meta.env.VITE_ARBITRUM_MARKET_CORE_ADDRESS ??
					'0x640E94953cf32529705ce509748469C07300ca03',
				abi: MarketCoreABI,
			},
			disputeManager: {
				address:
					process.env.ARBITRUM_DISPUTE_MGR_ADDRESS ??
					process.env.NEXT_PUBLIC_ARBITRUM_DISPUTE_MGR_ADDRESS ??
					import.meta.env.VITE_ARBITRUM_DISPUTE_MGR_ADDRESS ??
					'0x1d045BFBC22e4c9Bf6c3955020CC7F93adfe3674',
				abi: DisputeManagerABI,
			},
			mediatorManager: {
				address:
					process.env.ARBITRUM_MEDIATOR_MGR_ADDRESS ??
					process.env.NEXT_PUBLIC_ARBITRUM_MEDIATOR_MGR_ADDRESS ??
					import.meta.env.VITE_ARBITRUM_MEDIATOR_MGR_ADDRESS ??
					'0x1ebb49A430B5E0B60A885e54bCb27b3658afae55',
				abi: MediatorManagerABI,
			},
			energon: {
				address:
					process.env.ARBITRUM_ENERGON_ADDRESS ??
					process.env.NEXT_PUBLIC_ARBITRUM_ENERGON_ADDRESS ??
					import.meta.env.VITE_ARBITRUM_ENERGON_ADDRESS ??
					'0x0000000000000000000000000000000000000000',
				abi: EnergonABI,
			},
			nft: {
				address:
					process.env.ARBITRUM_NFT_ADDRESS ??
					process.env.NEXT_PUBLIC_ARBITRUM_NFT_ADDRESS ??
					import.meta.env.VITE_ARBITRUM_NFT_ADDRESS ??
					'0x0000000000000000000000000000000000000000',
				abi: NftABI,
			},
			assetRegistry: {
				address:
					process.env.ARBITRUM_ASSET_REG_ADDRESS ??
					process.env.NEXT_PUBLIC_ARBITRUM_ASSET_REG_ADDRESS ??
					import.meta.env.VITE_ARBITRUM_ASSET_REG_ADDRESS ??
					'0x1D1099f0616D8615375a11848442D9959404C8c1',
				abi: AssetRegistryABI,
			},
			minerRegistry: {
				address:
					process.env.ARBITRUM_MINER_REG_ADDRESS ??
					process.env.NEXT_PUBLIC_ARBITRUM_MINER_REG_ADDRESS ??
					import.meta.env.VITE_ARBITRUM_MINER_REG_ADDRESS ??
					'0x4fDEE423445866c9e626F5BAA116F8a080A21aC0',
				abi: MinerRegistryABI,
			},
		},
	},
	{
		displayName: 'Arbitrum Sepolia',
		queryName: 'arbitrum-sepolia',
		testnet: true,
		disabled: true,
		chainId: arbitrumSepolia.id,
		chain: arbitrumSepolia,
		symbol: 'ETH',
		apiUrl:
			process.env.ARBITRUM_SEPOLIA_API_URL ??
			process.env.NEXT_PUBLIC_ARBITRUM_SEPOLIA_API_URL ??
			import.meta.env.VITE_ARBITRUM_SEPOLIA_API_URL,
		rpcUrl:
			process.env.ARBITRUM_SEPOLIA_RPC_URL ??
			process.env.NEXT_PUBLIC_ARBITRUM_SEPOLIA_RPC_URL ??
			import.meta.env.VITE_ARBITRUM_SEPOLIA_RPC_URL,
		blockExplorer: 'https://sepolia.arbiscan.io',
		logoPath: IconEthereum as any,
		wrappedTokenInfo: new TokenInfo({
			address:
				process.env.ARBITRUM_SEPOLIA_WRAPPED_TOKEN_ADDRESS ??
				process.env.NEXT_PUBLIC_ARBITRUM_SEPOLIA_WRAPPED_TOKEN_ADDRESS ??
				import.meta.env.VITE_ARBITRUM_SEPOLIA_WRAPPED_TOKEN_ADDRESS ??
				'0x980B62Da83eFf3D4576C647993b0c1D7faf17c73',
			name: 'WETH',
			symbol: 'WETH',
			decimals: 18,
			abi: WETHABI,
			logoURI:
				'https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
		}),
		contracts: {
			core: {
				address:
					process.env.ARBITRUM_SEPOLIA_CORE_ADDRESS ??
					process.env.NEXT_PUBLIC_ARBITRUM_SEPOLIA_CORE_ADDRESS ??
					import.meta.env.VITE_ARBITRUM_SEPOLIA_CORE_ADDRESS ??
					'0xc79b36216F29C799aef1ea11F6E9bFEed097019D',
				abi: CoreABI,
			},
			token: {
				address:
					process.env.ARBITRUM_SEPOLIA_TOKEN_ADDRESS ??
					process.env.NEXT_PUBLIC_ARBITRUM_SEPOLIA_TOKEN_ADDRESS ??
					import.meta.env.VITE_ARBITRUM_SEPOLIA_TOKEN_ADDRESS ??
					'0x3A56baecFa7b4A967B8aDF35a0494e22Dd807A86',
				abi: NativeTokenABI,
			},
			badgeManager: {
				address:
					process.env.ARBITRUM_SEPOLIA_BADGE_MGR_ADDRESS ??
					process.env.NEXT_PUBLIC_ARBITRUM_SEPOLIA_BADGE_MGR_ADDRESS ??
					import.meta.env.VITE_ARBITRUM_SEPOLIA_BADGE_MGR_ADDRESS ??
					'0x9d7beF02CfFEb507D67C3706ABE6e280A845f82a',
				abi: BadgeManagerABI,
			},
			marketCore: {
				address:
					process.env.ARBITRUM_SEPOLIA_MARKET_CORE_ADDRESS ??
					process.env.NEXT_PUBLIC_ARBITRUM_SEPOLIA_MARKET_CORE_ADDRESS ??
					import.meta.env.VITE_ARBITRUM_SEPOLIA_MARKET_CORE_ADDRESS ??
					'0x7561bEC4a302568f4bf6027327bdd59aEc104412',
				abi: MarketCoreABI,
			},
			disputeManager: {
				address:
					process.env.ARBITRUM_SEPOLIA_DISPUTE_MGR_ADDRESS ??
					process.env.NEXT_PUBLIC_ARBITRUM_SEPOLIA_DISPUTE_MGR_ADDRESS ??
					import.meta.env.VITE_ARBITRUM_SEPOLIA_DISPUTE_MGR_ADDRESS ??
					'0xd168EeF9d683a1CBac60De600B8254F71429c844',
				abi: DisputeManagerABI,
			},
			mediatorManager: {
				address:
					process.env.ARBITRUM_SEPOLIA_MEDIATOR_MGR_ADDRESS ??
					process.env.NEXT_PUBLIC_ARBITRUM_SEPOLIA_MEDIATOR_MGR_ADDRESS ??
					import.meta.env.VITE_ARBITRUM_SEPOLIA_MEDIATOR_MGR_ADDRESS ??
					'0x24C1A0B6bD76E9D6b4D3Ec43dac3F6B4626d43d7',
				abi: MediatorManagerABI,
			},
			energon: {
				address:
					process.env.ARBITRUM_SEPOLIA_ENERGON_ADDRESS ??
					process.env.NEXT_PUBLIC_ARBITRUM_SEPOLIA_ENERGON_ADDRESS ??
					import.meta.env.VITE_ARBITRUM_SEPOLIA_ENERGON_ADDRESS,
				abi: EnergonABI,
			},
			nft: {
				address:
					process.env.ARBITRUM_SEPOLIA_NFT_ADDRESS ??
					process.env.NEXT_PUBLIC_ARBITRUM_SEPOLIA_NFT_ADDRESS ??
					import.meta.env.VITE_ARBITRUM_SEPOLIA_NFT_ADDRESS ??
					'0x77e8489eED7D6718fFcBe3dEA0F776f00fcf513e',
				abi: NftABI,
			},
			assetRegistry: {
				address:
					process.env.ARBITRUM_SEPOLIA_ASSET_REG_ADDRESS ??
					process.env.NEXT_PUBLIC_ARBITRUM_SEPOLIA_ASSET_REG_ADDRESS ??
					import.meta.env.VITE_ARBITRUM_SEPOLIA_ASSET_REG_ADDRESS ??
					'0xdFa0520fafd554aA6d768B065f982D5a01365a4C',
				abi: AssetRegistryABI,
			},
			minerRegistry: {
				address:
					process.env.ARBITRUM_SEPOLIA_MINER_REG_ADDRESS ??
					process.env.NEXT_PUBLIC_ARBITRUM_SEPOLIA_MINER_REG_ADDRESS ??
					import.meta.env.VITE_ARBITRUM_SEPOLIA_MINER_REG_ADDRESS ??
					'',
				abi: MinerRegistryABI,
			},
		},
	},
	{
		displayName: 'Sepolia',
		queryName: 'sepolia',
		testnet: true,
		chainId: sepolia.id,
		chain: sepolia,
		symbol: 'ETH',
		apiUrl:
			process.env.SEPOLIA_API_URL ?? process.env.NEXT_PUBLIC_SEPOLIA_API_URL ?? import.meta.env.VITE_SEPOLIA_API_URL,
		rpcUrl:
			process.env.SEPOLIA_RPC_URL ?? process.env.NEXT_PUBLIC_SEPOLIA_RPC_URL ?? import.meta.env.VITE_SEPOLIA_RPC_URL,
		blockExplorer: 'https://sepolia.etherscan.io',
		logoPath: IconEthereum as any,
		wrappedTokenInfo: new TokenInfo({
			address:
				process.env.SEPOLIA_WRAPPED_TOKEN_ADDRESS ??
				process.env.NEXT_PUBLIC_SEPOLIA_WRAPPED_TOKEN_ADDRESS ??
				import.meta.env.VITE_SEPOLIA_WRAPPED_TOKEN_ADDRESS ??
				'0x4263541D13298963498ff1f83d992812Ef3d2E73',
			name: 'WETH',
			symbol: 'WETH',
			decimals: 18,
			abi: WETHABI,
			logoURI:
				'https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
		}),
		contracts: {
			core: {
				address:
					process.env.SEPOLIA_CORE_ADDRESS ??
					process.env.NEXT_PUBLIC_SEPOLIA_CORE_ADDRESS ??
					import.meta.env.VITE_SEPOLIA_CORE_ADDRESS ??
					'0xAACA1a3B9756D3CAba6fFef058245dfE7037A537',
				abi: CoreABI,
			},
			token: {
				address:
					process.env.SEPOLIA_TOKEN_ADDRESS ??
					process.env.NEXT_PUBLIC_SEPOLIA_TOKEN_ADDRESS ??
					import.meta.env.VITE_SEPOLIA_TOKEN_ADDRESS ??
					'0xB556b3a796f5f104Bbaab840567844734e0490a0',
				abi: NativeTokenABI,
			},
			badgeManager: {
				address:
					process.env.SEPOLIA_BADGE_MGR_ADDRESS ??
					process.env.NEXT_PUBLIC_SEPOLIA_BADGE_MGR_ADDRESS ??
					import.meta.env.VITE_SEPOLIA_BADGE_MGR_ADDRESS ??
					'0x8cf4a9D2fB4da5453ED98963C5B53AD691cA05CD',
				abi: BadgeManagerABI,
			},
			marketCore: {
				address:
					process.env.SEPOLIA_MARKET_CORE_ADDRESS ??
					process.env.NEXT_PUBLIC_SEPOLIA_MARKET_CORE_ADDRESS ??
					import.meta.env.VITE_SEPOLIA_MARKET_CORE_ADDRESS ??
					'0x6A803C1CEEB34aF59Ef278a235A6A4cbd21d2022',
				abi: MarketCoreABI,
			},
			disputeManager: {
				address:
					process.env.SEPOLIA_DISPUTE_MGR_ADDRESS ??
					process.env.NEXT_PUBLIC_SEPOLIA_DISPUTE_MGR_ADDRESS ??
					import.meta.env.VITE_SEPOLIA_DISPUTE_MGR_ADDRESS ??
					'0x34DaFfAee3F646D58d538c578482FC607CEAB7F5',
				abi: DisputeManagerABI,
			},
			mediatorManager: {
				address:
					process.env.SEPOLIA_MEDIATOR_MGR_ADDRESS ??
					process.env.NEXT_PUBLIC_SEPOLIA_MEDIATOR_MGR_ADDRESS ??
					import.meta.env.VITE_SEPOLIA_MEDIATOR_MGR_ADDRESS ??
					'0x7774E1E2809695bb3Bd85F22809c6c94373112c9',
				abi: MediatorManagerABI,
			},
			energon: {
				address:
					process.env.SEPOLIA_ENERGON_ADDRESS ??
					process.env.NEXT_PUBLIC_SEPOLIA_ENERGON_ADDRESS ??
					import.meta.env.VITE_SEPOLIA_ENERGON_ADDRESS,
				abi: EnergonABI,
			},
			nft: {
				address:
					process.env.SEPOLIA_NFT_ADDRESS ??
					process.env.NEXT_PUBLIC_SEPOLIA_NFT_ADDRESS ??
					import.meta.env.VITE_SEPOLIA_NFT_ADDRESS ??
					'0xF6E0Fdd5fA9CEd3F075BCC63B454D42C35b43d24',
				abi: NftABI,
			},
			assetRegistry: {
				address:
					process.env.SEPOLIA_ASSET_REG_ADDRESS ??
					process.env.NEXT_PUBLIC_SEPOLIA_ASSET_REG_ADDRESS ??
					import.meta.env.VITE_SEPOLIA_ASSET_REG_ADDRESS ??
					'0x4B4eC83FAC2ce42a395b895336d7a952f7FE01c0',
				abi: AssetRegistryABI,
			},
			minerRegistry: {
				address:
					process.env.SEPOLIA_MINER_REG_ADDRESS ??
					process.env.NEXT_PUBLIC_SEPOLIA_MINER_REG_ADDRESS ??
					import.meta.env.VITE_SEPOLIA_MINER_REG_ADDRESS ??
					'',
				abi: MinerRegistryABI,
			},
		},
	},
	{
		displayName: 'Hardhat',
		queryName: 'localhost',
		testnet: true,
		chainId: hardhat.id,
		chain: hardhat,
		symbol: 'ETH',
		apiUrl:
			process.env.LOCALHOST_API_URL ??
			process.env.NEXT_PUBLIC_LOCALHOST_API_URL ??
			import.meta.env.VITE_LOCALHOST_API_URL,
		rpcUrl:
			process.env.LOCALHOST_RPC_URL ??
			process.env.NEXT_PUBLIC_LOCALHOST_RPC_URL ??
			import.meta.env.VITE_LOCALHOST_RPC_URL,
		blockExplorer: 'https://etherscan.io',
		logoPath: IconEthereum as any,
		wrappedTokenInfo: new TokenInfo({
			address:
				process.env.LOCALHOST_WRAPPED_TOKEN_ADDRESS ??
				process.env.NEXT_PUBLIC_LOCALHOST_WRAPPED_TOKEN_ADDRESS ??
				import.meta.env.VITE_LOCALHOST_WRAPPED_TOKEN_ADDRESS,
			name: 'WETH',
			symbol: 'WETH',
			decimals: 18,
			abi: WETHABI,
			logoURI:
				'https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
		}),
		contracts: {
			core: {
				address:
					process.env.LOCALHOST_CORE_ADDRESS ??
					process.env.NEXT_PUBLIC_LOCALHOST_CORE_ADDRESS ??
					import.meta.env.VITE_LOCALHOST_CORE_ADDRESS,
				abi: CoreABI,
			},
			token: {
				address:
					process.env.LOCALHOST_TOKEN_ADDRESS ??
					process.env.NEXT_PUBLIC_LOCALHOST_TOKEN_ADDRESS ??
					import.meta.env.VITE_LOCALHOST_TOKEN_ADDRESS,
				abi: NativeTokenABI,
			},
			badgeManager: {
				address:
					process.env.LOCALHOST_BADGE_MGR_ADDRESS ??
					process.env.NEXT_PUBLIC_LOCALHOST_BADGE_MGR_ADDRESS ??
					import.meta.env.VITE_LOCALHOST_BADGE_MGR_ADDRESS,
				abi: BadgeManagerABI,
			},
			marketCore: {
				address:
					process.env.LOCALHOST_MARKET_CORE_ADDRESS ??
					process.env.NEXT_PUBLIC_LOCALHOST_MARKET_CORE_ADDRESS ??
					import.meta.env.VITE_LOCALHOST_MARKET_CORE_ADDRESS,
				abi: MarketCoreABI,
			},
			disputeManager: {
				address:
					process.env.LOCALHOST_DISPUTE_MGR_ADDRESS ??
					process.env.NEXT_PUBLIC_LOCALHOST_DISPUTE_MGR_ADDRESS ??
					import.meta.env.VITE_LOCALHOST_DISPUTE_MGR_ADDRESS,
				abi: DisputeManagerABI,
			},
			mediatorManager: {
				address:
					process.env.LOCALHOST_MEDIATOR_MGR_ADDRESS ??
					process.env.NEXT_PUBLIC_LOCALHOST_MEDIATOR_MGR_ADDRESS ??
					import.meta.env.VITE_LOCALHOST_MEDIATOR_MGR_ADDRESS,
				abi: MediatorManagerABI,
			},
			energon: {
				address:
					process.env.LOCALHOST_ENERGON_ADDRESS ??
					process.env.NEXT_PUBLIC_LOCALHOST_ENERGON_ADDRESS ??
					import.meta.env.VITE_LOCALHOST_ENERGON_ADDRESS,
				abi: EnergonABI,
			},
			nft: {
				address:
					process.env.LOCALHOST_NFT_ADDRESS ??
					process.env.NEXT_PUBLIC_LOCALHOST_NFT_ADDRESS ??
					import.meta.env.VITE_LOCALHOST_NFT_ADDRESS,
				abi: NftABI,
			},
			assetRegistry: {
				address:
					process.env.LOCALHOST_ASSET_REG_ADDRESS ??
					process.env.NEXT_PUBLIC_LOCALHOST_ASSET_REG_ADDRESS ??
					import.meta.env.VITE_LOCALHOST_ASSET_REG_ADDRESS,
				abi: AssetRegistryABI,
			},
			minerRegistry: {
				address:
					process.env.LOCALHOST_MINER_REG_ADDRESS ??
					process.env.NEXT_PUBLIC_LOCALHOST_MINER_REG_ADDRESS ??
					import.meta.env.VITE_LOCALHOST_MINER_REG_ADDRESS,
				abi: MinerRegistryABI,
			},
		},
	},
];

/**
 * Get IDs of all supported chains
 * @param testnetOnly Indicate whether to only return testnet chains
 * @param ignoreTestnet Indicate whether to ignore testnet chains
 * @param ignore - Optionally specify an ID to omit in the result
 */
export function getChainsID(testnetOnly = false, ignoreTestnet = false, ignore: number[] = []) {
	let supported = Chains;

	if (testnetOnly) {
		supported = supported.filter((s) => s.testnet);
	}

	return supported
		.filter((s) => !s.disabled && !ignore.includes(s.chainId) && (!ignoreTestnet || !s.testnet))
		.map((s) => s.chainId);
}

/**
 * Get viem chain object of all supported chains
 * @param testnetOnly Indicate whether to only return testnet chains
 * @param ignoreTestnet Indicate whether to ignore testnet chains
 * @param ignore - Optionally specify an ID to omit in the result
 */
export function getChains(testnetOnly = false, ignoreTestnet = false, ignore: number[] = []): Chain[] {
	let supported = Chains;

	if (testnetOnly) {
		supported = supported.filter((s) => s.testnet);
	}

	return supported
		.filter((s) => !s.disabled && !ignore.includes(s.chainId) && (!ignoreTestnet || !s.testnet))
		.map((s) => s.chain);
}

/**
 * Get a chain by its chain ID
 * @param id - The chain ID
 */
export function getChain(id: number | string) {
	if (!id) return;
	if (typeof id === 'string') return getChainByName(id);
	return Chains.find((s) => s.chainId === id);
}

/**
 * Get a chain by its query name
 * @param name - The query name
 */
export function getChainByName(name: string) {
	return Chains.find((s) => s.queryName === name);
}

/**
 * Get the name of all supported chains
 * @returns
 */
export function getChainNames() {
	return Chains.map((chain) => {
		return chain.queryName;
	});
}

/**
 * Get chain ID by its name
 * @param name
 */
export function getChainID(name: string): number {
	const chain = getChainByName(name);
	if (!chain) throw new Error(`Chain ${name} is not supported`);
	return chain.chainId;
}

/**
 * Check if a chain is supported
 * @param chain The chain name
 * @returns
 */
export function isValidChain(chain: string) {
	return getChainByName(chain) !== undefined;
}

export default Chains;
