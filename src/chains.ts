import { Chain } from "viem/_types/types/chain";
import {
  arbitrum,
  bsc,
  hardhat,
  mainnet,
  optimism,
  polygon,
  sepolia,
} from "viem/chains";
import BadgeManagerABI from "./abi/BadgeManager.json";
import CoreABI from "./abi/Core.json";
import DisputeManagerABI from "./abi/DisputeManager.json";
import EnergonABI from "./abi/Energon.json";
import MarketCoreABI from "./abi/MarketCore.json";
import MediatorManagerABI from "./abi/MediatorManager.json";
import NftABI from "./abi/NFT.json";
import NativeTokenABI from "./abi/Token.json";
import WETHABI from "./abi/WETH.json";
import IconBSC from "./icons/BSC";
import IconArbitrum from "./icons/IconArbitrum";
import IconEthereum from "./icons/IconEthereum";
import IconOptimism from "./icons/IconOptimism";
import IconPolygon from "./icons/IconPolygon";
import { ChainInfo } from "./types/chain";
import TokenInfo from "./types/token_info";

/**
 * Mapping of supported networks' information
 */
const Chains: ChainInfo[] = [
  {
    disabled: true,
    displayName: "Ethereum",
    queryName: "ethereum",
    chainId: mainnet.id,
    chain: mainnet,
    symbol: "ETH",
    apiUrl:
      process.env.ETHEREUM_API_URI ?? process.env.NEXT_PUBLIC_ETHEREUM_API_URI,
    rpcUrl:
      process.env.ETHEREUM_RPC_URL ?? process.env.NEXT_PUBLIC_ETHEREUM_RPC_URL,
    blockExplorer: "https://etherscan.io",
    logoPath: IconEthereum as any,
    wrappedTokenInfo: new TokenInfo({
      address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      name: "WETH",
      symbol: "WETH",
      abi: WETHABI,
      decimals: 18,
      logoURI:
        "https://assets-cdn.trustwallet.com/blockchains/optimism/assets/0x4200000000000000000000000000000000000006/logo.png",
    }),
    contracts: {
      core: {
        address:
          process.env.ETHEREUM_CORE_ADDRESS ??
          process.env.NEXT_PUBLIC_ETHEREUM_CORE_ADDRESS,
        abi: CoreABI,
      },
      token: {
        address:
          process.env.ETHEREUM_TOKEN_ADDRESS ??
          process.env.NEXT_PUBLIC_ETHEREUM_TOKEN_ADDRESS,
        abi: NativeTokenABI,
      },
      badgeManager: {
        address:
          process.env.ETHEREUM_BADGE_MGR_ADDRESS ??
          process.env.NEXT_PUBLIC_ETHEREUM_BADGE_MGR_ADDRESS,
        abi: BadgeManagerABI,
      },
      marketCore: {
        address:
          process.env.ETHEREUM_MARKET_CORE_ADDRESS ??
          process.env.NEXT_PUBLIC_ETHEREUM_MARKET_CORE_ADDRESS,
        abi: MarketCoreABI,
      },
      disputeManager: {
        address:
          process.env.ETHEREUM_DISPUTE_MGR_ADDRESS ??
          process.env.NEXT_PUBLIC_ETHEREUM_DISPUTE_MGR_ADDRESS,
        abi: DisputeManagerABI,
      },
      mediatorManager: {
        address:
          process.env.ETHEREUM_MEDIATOR_MGR_ADDRESS ??
          process.env.NEXT_PUBLIC_ETHEREUM_MEDIATOR_MGR_ADDRESS,
        abi: MediatorManagerABI,
      },
      energon: {
        address:
          process.env.ETHEREUM_ENERGON_ADDRESS ??
          process.env.NEXT_PUBLIC_ETHEREUM_ENERGON_ADDRESS,
        abi: EnergonABI,
      },
      nft: {
        address:
          process.env.ETHEREUM_NFT_ADDRESS ??
          process.env.NEXT_PUBLIC_ETHEREUM_NFT_ADDRESS,
        abi: NftABI,
      },
    },
  },
  {
    disabled: true,
    displayName: "Polygon",
    queryName: "polygon",
    chainId: polygon.id,
    chain: polygon,
    symbol: "MATIC",
    apiUrl:
      process.env.POLYGON_API_URI ?? process.env.NEXT_PUBLIC_POLYGON_API_URI,
    rpcUrl:
      process.env.POLYGON_RPC_URL ?? process.env.NEXT_PUBLIC_POLYGON_RPC_URL,
    blockExplorer: "https://polygonscan.com",
    logoPath: IconPolygon as any,
    wrappedTokenInfo: new TokenInfo({
      address:
        process.env.POLYGON_WRAPPED_TOKEN_ADDRESS ??
        process.env.NEXT_PUBLIC_POLYGON_WRAPPED_TOKEN_ADDRESS,
      name: "WMATIC",
      symbol: "WMATIC",
      abi: WETHABI,
      decimals: 18,
      logoURI:
        "https://assets-cdn.trustwallet.com/blockchains/polygon/assets/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270/logo.png",
    }),
  },
  {
    disabled: true,
    displayName: "Optimism",
    queryName: "optimism",
    chainId: optimism.id,
    chain: optimism,
    symbol: "ETH",
    apiUrl:
      process.env.OPTIMISM_API_URI ?? process.env.NEXT_PUBLIC_OPTIMISM_API_URI,
    rpcUrl:
      process.env.OPTIMISM_RPC_URL ?? process.env.NEXT_PUBLIC_OPTIMISM_RPC_URL,
    blockExplorer: "https://optimistic.etherscan.io",
    logoPath: IconOptimism as any,
    wrappedTokenInfo: new TokenInfo({
      address:
        process.env.OPTIMISM_WRAPPED_TOKEN_ADDRESS ??
        process.env.NEXT_PUBLIC_OPTIMISM_WRAPPED_TOKEN_ADDRESS,
      name: "WETH",
      symbol: "WETH",
      decimals: 18,
      abi: WETHABI,
      logoURI:
        "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png",
    }),
  },
  {
    disabled: true,
    displayName: "Binance Chain",
    altDisplayName: "BSC",
    queryName: "binance-chain",
    chainId: bsc.id,
    chain: bsc,
    symbol: "BNB",
    apiUrl:
      process.env.BINANCE_API_URI ?? process.env.NEXT_PUBLIC_BINANCE_API_URI,
    rpcUrl:
      process.env.BINANCE_RPC_URL ?? process.env.NEXT_PUBLIC_BINANCE_RPC_URL,
    blockExplorer: "https://bscscan.com",
    logoPath: IconBSC as any,
    wrappedTokenInfo: new TokenInfo({
      address:
        process.env.BINANCE_WRAPPED_TOKEN_ADDRESS ??
        process.env.NEXT_PUBLIC_BINANCE_WRAPPED_TOKEN_ADDRESS,
      name: "WBNB",
      symbol: "WBNB",
      decimals: 18,
      abi: WETHABI,
      logoURI:
        "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png",
    }),
  },
  {
    disabled: true,
    displayName: "Arbitrum",
    queryName: "arbitrum",
    chainId: arbitrum.id,
    chain: arbitrum,
    symbol: "ETH",
    apiUrl:
      process.env.ARBITRUM_API_URI ?? process.env.NEXT_PUBLIC_ARBITRUM_API_URI,
    rpcUrl:
      process.env.ARBITRUM_RPC_URL ?? process.env.NEXT_PUBLIC_ARBITRUM_RPC_URL,
    blockExplorer: "https://arbiscan.io",
    logoPath: IconArbitrum as any,
    wrappedTokenInfo: new TokenInfo({
      address:
        process.env.ARBITRUM_WRAPPED_TOKEN_ADDRESS ??
        process.env.NEXT_PUBLIC_ARBITRUM_WRAPPED_TOKEN_ADDRESS,
      name: "WETH",
      symbol: "WETH",
      decimals: 18,
      abi: WETHABI,
      logoURI:
        "https://assets-cdn.trustwallet.com/blockchains/optimism/assets/0x4200000000000000000000000000000000000006/logo.png",
    }),
  },
  {
    displayName: "Sepolia",
    queryName: "sepolia",
    testnet: true,
    chainId: sepolia.id,
    chain: sepolia,
    symbol: "ETH",
    apiUrl:
      process.env.SEPOLIA_API_URI ?? process.env.NEXT_PUBLIC_SEPOLIA_API_URI,
    rpcUrl:
      process.env.VITE_SEPOLIA_RPC_URL ??
      process.env.NEXT_PUBLIC_VITE_SEPOLIA_RPC_URL,
    blockExplorer: "https://sepolia.etherscan.io",
    logoPath: IconEthereum as any,
    wrappedTokenInfo: new TokenInfo({
      address:
        process.env.VITE_SEPOLIA_WRAPPED_TOKEN_ADDRESS ??
        process.env.NEXT_PUBLIC_VITE_SEPOLIA_WRAPPED_TOKEN_ADDRESS,
      name: "WETH",
      symbol: "WETH",
      decimals: 18,
      abi: WETHABI,
      logoURI:
        "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png",
    }),
    contracts: {
      core: {
        address:
          process.env.SEPOLIA_CORE_ADDRESS ??
          process.env.NEXT_PUBLIC_SEPOLIA_CORE_ADDRESS,
        abi: CoreABI,
      },
      token: {
        address:
          process.env.SEPOLIA_TOKEN_ADDRESS ??
          process.env.NEXT_PUBLIC_SEPOLIA_TOKEN_ADDRESS,
        abi: NativeTokenABI,
      },
      badgeManager: {
        address:
          process.env.SEPOLIA_BADGE_MGR_ADDRESS ??
          process.env.NEXT_PUBLIC_SEPOLIA_BADGE_MGR_ADDRESS,
        abi: BadgeManagerABI,
      },
      marketCore: {
        address:
          process.env.SEPOLIA_MARKET_CORE_ADDRESS ??
          process.env.NEXT_PUBLIC_SEPOLIA_MARKET_CORE_ADDRESS,
        abi: MarketCoreABI,
      },
      disputeManager: {
        address:
          process.env.SEPOLIA_DISPUTE_MGR_ADDRESS ??
          process.env.NEXT_PUBLIC_SEPOLIA_DISPUTE_MGR_ADDRESS,
        abi: DisputeManagerABI,
      },
      mediatorManager: {
        address:
          process.env.SEPOLIA_MEDIATOR_MGR_ADDRESS ??
          process.env.NEXT_PUBLIC_SEPOLIA_MEDIATOR_MGR_ADDRESS,
        abi: MediatorManagerABI,
      },
      energon: {
        address:
          process.env.SEPOLIA_ENERGON_ADDRESS ??
          process.env.NEXT_PUBLIC_SEPOLIA_ENERGON_ADDRESS,
        abi: EnergonABI,
      },
      nft: {
        address:
          process.env.SEPOLIA_NFT_ADDRESS ??
          process.env.NEXT_PUBLIC_SEPOLIA_NFT_ADDRESS,
        abi: NftABI,
      },
    },
  },
  {
    displayName: "Hardhat",
    queryName: "localhost",
    testnet: true,
    chainId: hardhat.id,
    chain: hardhat,
    symbol: "ETH",
    apiUrl:
      process.env.VITE_LOCALHOST_API_URI ??
      process.env.NEXT_PUBLIC_VITE_LOCALHOST_API_URI,
    rpcUrl:
      process.env.VITE_LOCALHOST_RPC_URL ??
      process.env.NEXT_PUBLIC_VITE_LOCALHOST_RPC_URL ??
      "",
    blockExplorer: "https://etherscan.io",
    logoPath: IconEthereum as any,
    wrappedTokenInfo: new TokenInfo({
      address:
        process.env.VITE_LOCALHOST_WRAPPED_TOKEN_ADDRESS ??
        process.env.NEXT_PUBLIC_VITE_LOCALHOST_WRAPPED_TOKEN_ADDRESS,
      name: "WETH",
      symbol: "WETH",
      decimals: 18,
      abi: WETHABI,
      logoURI:
        "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png",
    }),
    contracts: {
      core: {
        address:
          process.env.LOCALHOST_CORE_ADDRESS ??
          process.env.NEXT_PUBLIC_LOCALHOST_CORE_ADDRESS,
        abi: CoreABI,
      },
      token: {
        address:
          process.env.LOCALHOST_TOKEN_ADDRESS ??
          process.env.NEXT_PUBLIC_LOCALHOST_TOKEN_ADDRESS,
        abi: NativeTokenABI,
      },
      badgeManager: {
        address:
          process.env.LOCALHOST_BADGE_MGR_ADDRESS ??
          process.env.NEXT_PUBLIC_LOCALHOST_BADGE_MGR_ADDRESS,
        abi: BadgeManagerABI,
      },
      marketCore: {
        address:
          process.env.LOCALHOST_MARKET_CORE_ADDRESS ??
          process.env.NEXT_PUBLIC_LOCALHOST_MARKET_CORE_ADDRESS,
        abi: MarketCoreABI,
      },
      disputeManager: {
        address:
          process.env.LOCALHOST_DISPUTE_MGR_ADDRESS ??
          process.env.NEXT_PUBLIC_LOCALHOST_DISPUTE_MGR_ADDRESS,
        abi: DisputeManagerABI,
      },
      mediatorManager: {
        address:
          process.env.LOCALHOST_MEDIATOR_MGR_ADDRESS ??
          process.env.NEXT_PUBLIC_LOCALHOST_MEDIATOR_MGR_ADDRESS,
        abi: MediatorManagerABI,
      },
      energon: {
        address:
          process.env.LOCALHOST_ENERGON_ADDRESS ??
          process.env.NEXT_PUBLIC_LOCALHOST_ENERGON_ADDRESS,
        abi: EnergonABI,
      },
      nft: {
        address:
          process.env.LOCALHOST_NFT_ADDRESS ??
          process.env.NEXT_PUBLIC_LOCALHOST_NFT_ADDRESS,
        abi: NftABI,
      },
    },
  },
];

/**
 * Get IDs of all supported networks
 * @param testnetOnly Indicate whether to only return testnet chains
 * @param ignoreTestnet Indicate whether to ignore testnet chains
 * @param ignore - Optionally specify an ID to omit in the result
 */
export function getChainsID(
  testnetOnly = false,
  ignoreTestnet = false,
  ignore: number[] = [],
) {
  let supported = Chains;

  if (testnetOnly) {
    supported = supported.filter((s) => s.testnet);
  }

  return supported
    .filter(
      (s) =>
        !s.disabled &&
        !ignore.includes(s.chainId) &&
        (!ignoreTestnet || !s.testnet),
    )
    .map((s) => s.chainId);
}

/**
 * Get chain object of all supported network
 * @param testnetOnly Indicate whether to only return testnet chains
 * @param ignoreTestnet Indicate whether to ignore testnet chains
 * @param ignore - Optionally specify an ID to omit in the result
 */
export function getChains(
  testnetOnly = false,
  ignoreTestnet = false,
  ignore: number[] = [],
): Chain[] {
  let supported = Chains;

  if (testnetOnly) {
    supported = supported.filter((s) => s.testnet);
  }

  return supported
    .filter(
      (s) =>
        !s.disabled &&
        !ignore.includes(s.chainId) &&
        (!ignoreTestnet || !s.testnet),
    )
    .map((s) => s.chain);
}

/**
 * Get a chain by its chain ID
 * @param id - The chain ID
 */
export function getChain(id: number | string) {
  if (!id) return;
  if (typeof id === "string") return getChainByName(id);
  return Chains.find((s) => s.chainId === id);
}

/**
 * Get a chain by its query name
 * @param name - The query name
 */
function getChainByName(name: string) {
  return Chains.find((s) => s.queryName === name);
}

export default Chains;
