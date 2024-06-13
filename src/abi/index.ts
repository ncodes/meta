import AssetRegAbi from "./AssetRegistry.json";
import BadgeManagerAbi from "./BadgeManager.json";
import CoreAbi from "./Core.json";
import DisputeManagerAbi from "./DisputeManager.json";
import ERC20Abi from "./ERC20.json";
import ERC721Abi from "./ERC721.json";
import EnergonAbi from "./Energon.json";
import FeePoolAbi from "./FeePool.json";
import LPPoolAbi from "./LPPool.json";
import MarketCoreAbi from "./MarketCore.json";
import MediatorManagerAbi from "./MediatorManager.json";
import NftAbi from "./NFT.json";
import NativeTokenAbi from "./Token.json";
import TokenPoolAbi from "./TokenPool.json";
import WETHAbi from "./WETH.json";
import UniswapV2RouterAbi from "./UniswapV2Router.json";
import UniswapV2Router2Abi from "./UniswapV2Router2.json";
import UniswapV3RouterAbi from "./UniswapV3Router.json";
import UniswapV3Router2Abi from "./UniswapV3Router2.json";
import UniswapV3RouterUniversalAbi from "./UniswapV3RouterUniversal.json";

interface Abi {
  BadgeManager: any;
  Core: any;
  DisputeManager: any;
  Energon: any;
  MarketCore: any;
  MediatorManager: any;
  NFT: any;
  NativeToken: any;
  WETHAbi: any;
  AssetRegistry: any;
  ERC20: any;
  ERC721: any;
  FeePool: any;
  LPPool: any;
  TokenPool: any;
  UniswapV2Router: any;
  UniswapV2Router2: any;
  UniswapV3Router: any;
  UniswapV3Router2: any;
  UniswapV3RouterUniversal: any;
}

export const Abi:Abi= {
  BadgeManager: BadgeManagerAbi,
  Core: CoreAbi,
  DisputeManager: DisputeManagerAbi,
  Energon: EnergonAbi,
  MarketCore: MarketCoreAbi,
  MediatorManager: MediatorManagerAbi,
  NFT: NftAbi,
  NativeToken: NativeTokenAbi,
  WETHAbi: WETHAbi,
  AssetRegistry: AssetRegAbi,
  ERC20: ERC20Abi,
  ERC721: ERC721Abi,
  FeePool: FeePoolAbi,
  LPPool: LPPoolAbi,
  TokenPool: TokenPoolAbi,
  UniswapV2Router: UniswapV2RouterAbi,
  UniswapV2Router2: UniswapV2Router2Abi,
  UniswapV3Router: UniswapV3RouterAbi,
  UniswapV3Router2: UniswapV3Router2Abi,
  UniswapV3RouterUniversal: UniswapV3RouterUniversalAbi,
} as const;
