var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43, _44, _45, _46, _47, _48, _49, _50, _51, _52, _53, _54, _55, _56, _57, _58, _59, _60, _61, _62, _63, _64, _65, _66, _67, _68, _69, _70, _71, _72, _73, _74, _75, _76, _77, _78;
import { arbitrum, bsc, hardhat, mainnet, optimism, polygon, sepolia } from 'viem/chains';
import AssetRegistryABI from './abi/AssetRegistry.json';
import BadgeManagerABI from './abi/BadgeManager.json';
import CoreABI from './abi/Core.json';
import DisputeManagerABI from './abi/DisputeManager.json';
import EnergonABI from './abi/Energon.json';
import MarketCoreABI from './abi/MarketCore.json';
import MediatorManagerABI from './abi/MediatorManager.json';
import NftABI from './abi/NFT.json';
import NativeTokenABI from './abi/Token.json';
import WETHABI from './abi/WETH.json';
import IconBSC from './icons/BSC';
import IconArbitrum from './icons/IconArbitrum';
import IconEthereum from './icons/IconEthereum';
import IconOptimism from './icons/IconOptimism';
import IconPolygon from './icons/IconPolygon';
import TokenInfo from './types/token';
/**
 * Mapping of supported chains' information
 */
var Chains = [
    {
        disabled: true,
        displayName: 'Ethereum',
        queryName: 'ethereum',
        chainId: mainnet.id,
        chain: mainnet,
        symbol: 'ETH',
        apiUrl: (_b = (_a = process.env.ETHEREUM_API_URL) !== null && _a !== void 0 ? _a : process.env.NEXT_PUBLIC_ETHEREUM_API_URL) !== null && _b !== void 0 ? _b : import.meta.env.VITE_ETHEREUM_API_URL,
        rpcUrl: (_d = (_c = process.env.ETHEREUM_RPC_URL) !== null && _c !== void 0 ? _c : process.env.NEXT_PUBLIC_ETHEREUM_RPC_URL) !== null && _d !== void 0 ? _d : import.meta.env.VITE_ETHEREUM_RPC_URL,
        blockExplorer: 'https://etherscan.io',
        logoPath: IconEthereum,
        wrappedTokenInfo: new TokenInfo({
            address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            name: 'WETH',
            symbol: 'WETH',
            abi: WETHABI,
            decimals: 18,
            logoURI: 'https://assets-cdn.trustwallet.com/blockchains/optimism/assets/0x4200000000000000000000000000000000000006/logo.png',
        }),
        contracts: {
            core: {
                address: (_f = (_e = process.env.ETHEREUM_CORE_ADDRESS) !== null && _e !== void 0 ? _e : process.env.NEXT_PUBLIC_ETHEREUM_CORE_ADDRESS) !== null && _f !== void 0 ? _f : import.meta.env.VITE_ETHEREUM_CORE_ADDRESS,
                abi: CoreABI,
            },
            token: {
                address: (_h = (_g = process.env.ETHEREUM_TOKEN_ADDRESS) !== null && _g !== void 0 ? _g : process.env.NEXT_PUBLIC_ETHEREUM_TOKEN_ADDRESS) !== null && _h !== void 0 ? _h : import.meta.env.VITE_ETHEREUM_TOKEN_ADDRESS,
                abi: NativeTokenABI,
            },
            badgeManager: {
                address: (_k = (_j = process.env.ETHEREUM_BADGE_MGR_ADDRESS) !== null && _j !== void 0 ? _j : process.env.NEXT_PUBLIC_ETHEREUM_BADGE_MGR_ADDRESS) !== null && _k !== void 0 ? _k : import.meta.env.VITE_ETHEREUM_BADGE_MGR_ADDRESS,
                abi: BadgeManagerABI,
            },
            marketCore: {
                address: (_m = (_l = process.env.ETHEREUM_MARKET_CORE_ADDRESS) !== null && _l !== void 0 ? _l : process.env.NEXT_PUBLIC_ETHEREUM_MARKET_CORE_ADDRESS) !== null && _m !== void 0 ? _m : import.meta.env.VITE_ETHEREUM_MARKET_CORE_ADDRESS,
                abi: MarketCoreABI,
            },
            disputeManager: {
                address: (_p = (_o = process.env.ETHEREUM_DISPUTE_MGR_ADDRESS) !== null && _o !== void 0 ? _o : process.env.NEXT_PUBLIC_ETHEREUM_DISPUTE_MGR_ADDRESS) !== null && _p !== void 0 ? _p : import.meta.env.VITE_ETHEREUM_DISPUTE_MGR_ADDRESS,
                abi: DisputeManagerABI,
            },
            mediatorManager: {
                address: (_r = (_q = process.env.ETHEREUM_MEDIATOR_MGR_ADDRESS) !== null && _q !== void 0 ? _q : process.env.NEXT_PUBLIC_ETHEREUM_MEDIATOR_MGR_ADDRESS) !== null && _r !== void 0 ? _r : import.meta.env.VITE_ETHEREUM_MEDIATOR_MGR_ADDRESS,
                abi: MediatorManagerABI,
            },
            energon: {
                address: (_t = (_s = process.env.ETHEREUM_ENERGON_ADDRESS) !== null && _s !== void 0 ? _s : process.env.NEXT_PUBLIC_ETHEREUM_ENERGON_ADDRESS) !== null && _t !== void 0 ? _t : import.meta.env.VITE_ETHEREUM_ENERGON_ADDRESS,
                abi: EnergonABI,
            },
            nft: {
                address: (_v = (_u = process.env.ETHEREUM_NFT_ADDRESS) !== null && _u !== void 0 ? _u : process.env.NEXT_PUBLIC_ETHEREUM_NFT_ADDRESS) !== null && _v !== void 0 ? _v : import.meta.env.VITE_ETHEREUM_NFT_ADDRESS,
                abi: NftABI,
            },
            assetRegistry: {
                address: (_x = (_w = process.env.ETHEREUM_ASSET_REG_ADDRESS) !== null && _w !== void 0 ? _w : process.env.NEXT_PUBLIC_ETHEREUM_ASSET_REG_ADDRESS) !== null && _x !== void 0 ? _x : import.meta.env.VITE_ETHEREUM_ASSET_REG_ADDRESS,
                abi: AssetRegistryABI,
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
        apiUrl: (_z = (_y = process.env.POLYGON_API_URL) !== null && _y !== void 0 ? _y : process.env.NEXT_PUBLIC_POLYGON_API_URL) !== null && _z !== void 0 ? _z : import.meta.env.VITE_POLYGON_API_URL,
        rpcUrl: (_1 = (_0 = process.env.POLYGON_RPC_URL) !== null && _0 !== void 0 ? _0 : process.env.NEXT_PUBLIC_POLYGON_RPC_URL) !== null && _1 !== void 0 ? _1 : import.meta.env.VITE_POLYGON_RPC_URL,
        blockExplorer: 'https://polygonscan.com',
        logoPath: IconPolygon,
        wrappedTokenInfo: new TokenInfo({
            address: (_3 = (_2 = process.env.POLYGON_WRAPPED_TOKEN_ADDRESS) !== null && _2 !== void 0 ? _2 : process.env.NEXT_PUBLIC_POLYGON_WRAPPED_TOKEN_ADDRESS) !== null && _3 !== void 0 ? _3 : import.meta.env.VITE_POLYGON_WRAPPED_TOKEN_ADDRESS,
            name: 'WMATIC',
            symbol: 'WMATIC',
            abi: WETHABI,
            decimals: 18,
            logoURI: 'https://assets-cdn.trustwallet.com/blockchains/polygon/assets/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270/logo.png',
        }),
    },
    {
        disabled: true,
        displayName: 'Optimism',
        queryName: 'optimism',
        chainId: optimism.id,
        chain: optimism,
        symbol: 'ETH',
        apiUrl: (_5 = (_4 = process.env.OPTIMISM_API_URL) !== null && _4 !== void 0 ? _4 : process.env.NEXT_PUBLIC_OPTIMISM_API_URL) !== null && _5 !== void 0 ? _5 : import.meta.env.VITE_OPTIMISM_API_URL,
        rpcUrl: (_7 = (_6 = process.env.OPTIMISM_RPC_URL) !== null && _6 !== void 0 ? _6 : process.env.NEXT_PUBLIC_OPTIMISM_RPC_URL) !== null && _7 !== void 0 ? _7 : import.meta.env.VITE_OPTIMISM_RPC_URL,
        blockExplorer: 'https://optimistic.etherscan.io',
        logoPath: IconOptimism,
        wrappedTokenInfo: new TokenInfo({
            address: (_9 = (_8 = process.env.OPTIMISM_WRAPPED_TOKEN_ADDRESS) !== null && _8 !== void 0 ? _8 : process.env.NEXT_PUBLIC_OPTIMISM_WRAPPED_TOKEN_ADDRESS) !== null && _9 !== void 0 ? _9 : import.meta.env.VITE_OPTIMISM_WRAPPED_TOKEN_ADDRESS,
            name: 'WETH',
            symbol: 'WETH',
            decimals: 18,
            abi: WETHABI,
            logoURI: 'https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
        }),
    },
    {
        disabled: true,
        displayName: 'Binance Chain',
        altDisplayName: 'BSC',
        queryName: 'binance-chain',
        chainId: bsc.id,
        chain: bsc,
        symbol: 'BNB',
        apiUrl: (_11 = (_10 = process.env.BINANCE_API_URL) !== null && _10 !== void 0 ? _10 : process.env.NEXT_PUBLIC_BINANCE_API_URL) !== null && _11 !== void 0 ? _11 : import.meta.env.VITE_BINANCE_API_URL,
        rpcUrl: (_13 = (_12 = process.env.BINANCE_RPC_URL) !== null && _12 !== void 0 ? _12 : process.env.NEXT_PUBLIC_BINANCE_RPC_URL) !== null && _13 !== void 0 ? _13 : import.meta.env.VITE_BINANCE_RPC_URL,
        blockExplorer: 'https://bscscan.com',
        logoPath: IconBSC,
        wrappedTokenInfo: new TokenInfo({
            address: (_15 = (_14 = process.env.BINANCE_WRAPPED_TOKEN_ADDRESS) !== null && _14 !== void 0 ? _14 : process.env.NEXT_PUBLIC_BINANCE_WRAPPED_TOKEN_ADDRESS) !== null && _15 !== void 0 ? _15 : import.meta.env.VITE_BINANCE_WRAPPED_TOKEN_ADDRESS,
            name: 'WBNB',
            symbol: 'WBNB',
            decimals: 18,
            abi: WETHABI,
            logoURI: 'https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png',
        }),
    },
    {
        disabled: true,
        displayName: 'Arbitrum',
        queryName: 'arbitrum',
        chainId: arbitrum.id,
        chain: arbitrum,
        symbol: 'ETH',
        apiUrl: (_17 = (_16 = process.env.ARBITRUM_API_URL) !== null && _16 !== void 0 ? _16 : process.env.NEXT_PUBLIC_ARBITRUM_API_URL) !== null && _17 !== void 0 ? _17 : import.meta.env.VITE_ARBITRUM_API_URL,
        rpcUrl: (_19 = (_18 = process.env.ARBITRUM_RPC_URL) !== null && _18 !== void 0 ? _18 : process.env.NEXT_PUBLIC_ARBITRUM_RPC_URL) !== null && _19 !== void 0 ? _19 : import.meta.env.VITE_ARBITRUM_RPC_URL,
        blockExplorer: 'https://arbiscan.io',
        logoPath: IconArbitrum,
        wrappedTokenInfo: new TokenInfo({
            address: (_21 = (_20 = process.env.ARBITRUM_WRAPPED_TOKEN_ADDRESS) !== null && _20 !== void 0 ? _20 : process.env.NEXT_PUBLIC_ARBITRUM_WRAPPED_TOKEN_ADDRESS) !== null && _21 !== void 0 ? _21 : import.meta.env.VITE_ARBITRUM_WRAPPED_TOKEN_ADDRESS,
            name: 'WETH',
            symbol: 'WETH',
            decimals: 18,
            abi: WETHABI,
            logoURI: 'https://assets-cdn.trustwallet.com/blockchains/optimism/assets/0x4200000000000000000000000000000000000006/logo.png',
        }),
    },
    {
        displayName: 'Sepolia',
        queryName: 'sepolia',
        testnet: true,
        chainId: sepolia.id,
        chain: sepolia,
        symbol: 'ETH',
        apiUrl: (_23 = (_22 = process.env.SEPOLIA_API_URL) !== null && _22 !== void 0 ? _22 : process.env.NEXT_PUBLIC_SEPOLIA_API_URL) !== null && _23 !== void 0 ? _23 : import.meta.env.VITE_SEPOLIA_API_URL,
        rpcUrl: (_25 = (_24 = process.env.SEPOLIA_RPC_URL) !== null && _24 !== void 0 ? _24 : process.env.NEXT_PUBLIC_SEPOLIA_RPC_URL) !== null && _25 !== void 0 ? _25 : import.meta.env.VITE_SEPOLIA_RPC_URL,
        blockExplorer: 'https://sepolia.etherscan.io',
        logoPath: IconEthereum,
        wrappedTokenInfo: new TokenInfo({
            address: (_28 = (_27 = (_26 = process.env.SEPOLIA_WRAPPED_TOKEN_ADDRESS) !== null && _26 !== void 0 ? _26 : process.env.NEXT_PUBLIC_SEPOLIA_WRAPPED_TOKEN_ADDRESS) !== null && _27 !== void 0 ? _27 : import.meta.env.VITE_SEPOLIA_WRAPPED_TOKEN_ADDRESS) !== null && _28 !== void 0 ? _28 : '0x4263541D13298963498ff1f83d992812Ef3d2E73',
            name: 'WETH',
            symbol: 'WETH',
            decimals: 18,
            abi: WETHABI,
            logoURI: 'https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
        }),
        contracts: {
            core: {
                address: (_31 = (_30 = (_29 = process.env.SEPOLIA_CORE_ADDRESS) !== null && _29 !== void 0 ? _29 : process.env.NEXT_PUBLIC_SEPOLIA_CORE_ADDRESS) !== null && _30 !== void 0 ? _30 : import.meta.env.VITE_SEPOLIA_CORE_ADDRESS) !== null && _31 !== void 0 ? _31 : '0xAACA1a3B9756D3CAba6fFef058245dfE7037A537',
                abi: CoreABI,
            },
            token: {
                address: (_34 = (_33 = (_32 = process.env.SEPOLIA_TOKEN_ADDRESS) !== null && _32 !== void 0 ? _32 : process.env.NEXT_PUBLIC_SEPOLIA_TOKEN_ADDRESS) !== null && _33 !== void 0 ? _33 : import.meta.env.VITE_SEPOLIA_TOKEN_ADDRESS) !== null && _34 !== void 0 ? _34 : '0xB556b3a796f5f104Bbaab840567844734e0490a0',
                abi: NativeTokenABI,
            },
            badgeManager: {
                address: (_37 = (_36 = (_35 = process.env.SEPOLIA_BADGE_MGR_ADDRESS) !== null && _35 !== void 0 ? _35 : process.env.NEXT_PUBLIC_SEPOLIA_BADGE_MGR_ADDRESS) !== null && _36 !== void 0 ? _36 : import.meta.env.VITE_SEPOLIA_BADGE_MGR_ADDRESS) !== null && _37 !== void 0 ? _37 : '0x8cf4a9D2fB4da5453ED98963C5B53AD691cA05CD',
                abi: BadgeManagerABI,
            },
            marketCore: {
                address: (_40 = (_39 = (_38 = process.env.SEPOLIA_MARKET_CORE_ADDRESS) !== null && _38 !== void 0 ? _38 : process.env.NEXT_PUBLIC_SEPOLIA_MARKET_CORE_ADDRESS) !== null && _39 !== void 0 ? _39 : import.meta.env.VITE_SEPOLIA_MARKET_CORE_ADDRESS) !== null && _40 !== void 0 ? _40 : '0x6A803C1CEEB34aF59Ef278a235A6A4cbd21d2022',
                abi: MarketCoreABI,
            },
            disputeManager: {
                address: (_43 = (_42 = (_41 = process.env.SEPOLIA_DISPUTE_MGR_ADDRESS) !== null && _41 !== void 0 ? _41 : process.env.NEXT_PUBLIC_SEPOLIA_DISPUTE_MGR_ADDRESS) !== null && _42 !== void 0 ? _42 : import.meta.env.VITE_SEPOLIA_DISPUTE_MGR_ADDRESS) !== null && _43 !== void 0 ? _43 : '0x34DaFfAee3F646D58d538c578482FC607CEAB7F5',
                abi: DisputeManagerABI,
            },
            mediatorManager: {
                address: (_46 = (_45 = (_44 = process.env.SEPOLIA_MEDIATOR_MGR_ADDRESS) !== null && _44 !== void 0 ? _44 : process.env.NEXT_PUBLIC_SEPOLIA_MEDIATOR_MGR_ADDRESS) !== null && _45 !== void 0 ? _45 : import.meta.env.VITE_SEPOLIA_MEDIATOR_MGR_ADDRESS) !== null && _46 !== void 0 ? _46 : '0x7774E1E2809695bb3Bd85F22809c6c94373112c9',
                abi: MediatorManagerABI,
            },
            energon: {
                address: (_48 = (_47 = process.env.SEPOLIA_ENERGON_ADDRESS) !== null && _47 !== void 0 ? _47 : process.env.NEXT_PUBLIC_SEPOLIA_ENERGON_ADDRESS) !== null && _48 !== void 0 ? _48 : import.meta.env.VITE_SEPOLIA_ENERGON_ADDRESS,
                abi: EnergonABI,
            },
            nft: {
                address: (_51 = (_50 = (_49 = process.env.SEPOLIA_NFT_ADDRESS) !== null && _49 !== void 0 ? _49 : process.env.NEXT_PUBLIC_SEPOLIA_NFT_ADDRESS) !== null && _50 !== void 0 ? _50 : import.meta.env.VITE_SEPOLIA_NFT_ADDRESS) !== null && _51 !== void 0 ? _51 : '0xF6E0Fdd5fA9CEd3F075BCC63B454D42C35b43d24',
                abi: NftABI,
            },
            assetRegistry: {
                address: (_54 = (_53 = (_52 = process.env.SEPOLIA_ASSET_REG_ADDRESS) !== null && _52 !== void 0 ? _52 : process.env.NEXT_PUBLIC_SEPOLIA_ASSET_REG_ADDRESS) !== null && _53 !== void 0 ? _53 : import.meta.env.VITE_SEPOLIA_ASSET_REG_ADDRESS) !== null && _54 !== void 0 ? _54 : '0x4B4eC83FAC2ce42a395b895336d7a952f7FE01c0',
                abi: AssetRegistryABI,
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
        apiUrl: (_56 = (_55 = process.env.LOCALHOST_API_URL) !== null && _55 !== void 0 ? _55 : process.env.NEXT_PUBLIC_LOCALHOST_API_URL) !== null && _56 !== void 0 ? _56 : import.meta.env.VITE_LOCALHOST_API_URL,
        rpcUrl: (_58 = (_57 = process.env.LOCALHOST_RPC_URL) !== null && _57 !== void 0 ? _57 : process.env.NEXT_PUBLIC_LOCALHOST_RPC_URL) !== null && _58 !== void 0 ? _58 : import.meta.env.VITE_LOCALHOST_RPC_URL,
        blockExplorer: 'https://etherscan.io',
        logoPath: IconEthereum,
        wrappedTokenInfo: new TokenInfo({
            address: (_60 = (_59 = process.env.LOCALHOST_WRAPPED_TOKEN_ADDRESS) !== null && _59 !== void 0 ? _59 : process.env.NEXT_PUBLIC_LOCALHOST_WRAPPED_TOKEN_ADDRESS) !== null && _60 !== void 0 ? _60 : import.meta.env.VITE_LOCALHOST_WRAPPED_TOKEN_ADDRESS,
            name: 'WETH',
            symbol: 'WETH',
            decimals: 18,
            abi: WETHABI,
            logoURI: 'https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
        }),
        contracts: {
            core: {
                address: (_62 = (_61 = process.env.LOCALHOST_CORE_ADDRESS) !== null && _61 !== void 0 ? _61 : process.env.NEXT_PUBLIC_LOCALHOST_CORE_ADDRESS) !== null && _62 !== void 0 ? _62 : import.meta.env.VITE_LOCALHOST_CORE_ADDRESS,
                abi: CoreABI,
            },
            token: {
                address: (_64 = (_63 = process.env.LOCALHOST_TOKEN_ADDRESS) !== null && _63 !== void 0 ? _63 : process.env.NEXT_PUBLIC_LOCALHOST_TOKEN_ADDRESS) !== null && _64 !== void 0 ? _64 : import.meta.env.VITE_LOCALHOST_TOKEN_ADDRESS,
                abi: NativeTokenABI,
            },
            badgeManager: {
                address: (_66 = (_65 = process.env.LOCALHOST_BADGE_MGR_ADDRESS) !== null && _65 !== void 0 ? _65 : process.env.NEXT_PUBLIC_LOCALHOST_BADGE_MGR_ADDRESS) !== null && _66 !== void 0 ? _66 : import.meta.env.VITE_LOCALHOST_BADGE_MGR_ADDRESS,
                abi: BadgeManagerABI,
            },
            marketCore: {
                address: (_68 = (_67 = process.env.LOCALHOST_MARKET_CORE_ADDRESS) !== null && _67 !== void 0 ? _67 : process.env.NEXT_PUBLIC_LOCALHOST_MARKET_CORE_ADDRESS) !== null && _68 !== void 0 ? _68 : import.meta.env.VITE_LOCALHOST_MARKET_CORE_ADDRESS,
                abi: MarketCoreABI,
            },
            disputeManager: {
                address: (_70 = (_69 = process.env.LOCALHOST_DISPUTE_MGR_ADDRESS) !== null && _69 !== void 0 ? _69 : process.env.NEXT_PUBLIC_LOCALHOST_DISPUTE_MGR_ADDRESS) !== null && _70 !== void 0 ? _70 : import.meta.env.VITE_LOCALHOST_DISPUTE_MGR_ADDRESS,
                abi: DisputeManagerABI,
            },
            mediatorManager: {
                address: (_72 = (_71 = process.env.LOCALHOST_MEDIATOR_MGR_ADDRESS) !== null && _71 !== void 0 ? _71 : process.env.NEXT_PUBLIC_LOCALHOST_MEDIATOR_MGR_ADDRESS) !== null && _72 !== void 0 ? _72 : import.meta.env.VITE_LOCALHOST_MEDIATOR_MGR_ADDRESS,
                abi: MediatorManagerABI,
            },
            energon: {
                address: (_74 = (_73 = process.env.LOCALHOST_ENERGON_ADDRESS) !== null && _73 !== void 0 ? _73 : process.env.NEXT_PUBLIC_LOCALHOST_ENERGON_ADDRESS) !== null && _74 !== void 0 ? _74 : import.meta.env.VITE_LOCALHOST_ENERGON_ADDRESS,
                abi: EnergonABI,
            },
            nft: {
                address: (_76 = (_75 = process.env.LOCALHOST_NFT_ADDRESS) !== null && _75 !== void 0 ? _75 : process.env.NEXT_PUBLIC_LOCALHOST_NFT_ADDRESS) !== null && _76 !== void 0 ? _76 : import.meta.env.VITE_LOCALHOST_NFT_ADDRESS,
                abi: NftABI,
            },
            assetRegistry: {
                address: (_78 = (_77 = process.env.LOCALHOST_ASSET_REG_ADDRESS) !== null && _77 !== void 0 ? _77 : process.env.NEXT_PUBLIC_LOCALHOST_ASSET_REG_ADDRESS) !== null && _78 !== void 0 ? _78 : import.meta.env.VITE_LOCALHOST_ASSET_REG_ADDRESS,
                abi: AssetRegistryABI,
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
export function getChainsID(testnetOnly, ignoreTestnet, ignore) {
    if (testnetOnly === void 0) { testnetOnly = false; }
    if (ignoreTestnet === void 0) { ignoreTestnet = false; }
    if (ignore === void 0) { ignore = []; }
    var supported = Chains;
    if (testnetOnly) {
        supported = supported.filter(function (s) { return s.testnet; });
    }
    return supported
        .filter(function (s) { return !s.disabled && !ignore.includes(s.chainId) && (!ignoreTestnet || !s.testnet); })
        .map(function (s) { return s.chainId; });
}
/**
 * Get viem chain object of all supported chains
 * @param testnetOnly Indicate whether to only return testnet chains
 * @param ignoreTestnet Indicate whether to ignore testnet chains
 * @param ignore - Optionally specify an ID to omit in the result
 */
export function getChains(testnetOnly, ignoreTestnet, ignore) {
    if (testnetOnly === void 0) { testnetOnly = false; }
    if (ignoreTestnet === void 0) { ignoreTestnet = false; }
    if (ignore === void 0) { ignore = []; }
    var supported = Chains;
    if (testnetOnly) {
        supported = supported.filter(function (s) { return s.testnet; });
    }
    return supported
        .filter(function (s) { return !s.disabled && !ignore.includes(s.chainId) && (!ignoreTestnet || !s.testnet); })
        .map(function (s) { return s.chain; });
}
/**
 * Get a chain by its chain ID
 * @param id - The chain ID
 */
export function getChain(id) {
    if (!id)
        return;
    if (typeof id === 'string')
        return getChainByName(id);
    return Chains.find(function (s) { return s.chainId === id; });
}
/**
 * Get a chain by its query name
 * @param name - The query name
 */
export function getChainByName(name) {
    return Chains.find(function (s) { return s.queryName === name; });
}
/**
 * Get the name of all supported chains
 * @returns
 */
export function getChainNames() {
    return Chains.map(function (chain) {
        return chain.queryName;
    });
}
/**
 * Get chain ID by its name
 * @param name
 */
export function getChainID(name) {
    var chain = getChainByName(name);
    if (!chain)
        throw new Error("Chain ".concat(name, " is not supported"));
    return chain.chainId;
}
/**
 * Check if a chain is supported
 * @param chain The chain name
 * @returns
 */
export function isValidChain(chain) {
    return getChainByName(chain) !== undefined;
}
export default Chains;
//# sourceMappingURL=chains.js.map