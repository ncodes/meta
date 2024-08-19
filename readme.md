# Chains Info

This repository includes information about the chains and payment methods supported by the Joint Interface, Indexer and other components of the Joint ecosystem. It is meant to be the source of truth for chain metadata.

# Usage

```
import chains,{getChainByName} from '@jointlabs/meta'
```

# Usage with NextJS

```
import chains,{getChainByName} from '@jointlabs/meta/next'
```

Add `/next` to the import path to use the NextJS version of the library. This version will use `process.env` to set the chain information but still outputs an ESM module.

## Environment Variables

All environment variables allow a prefix (denoted as `{PREFIX}`) to be set to match the prefix used by the host framework (e.g. NextJS = `NEXT_PUBLIC_`, Vite = `VITE_`). If no prefix is set, the environment variable name is used as is.

### Chains Information

`src/chains.ts` contains the relevant information about the supported chains. This includes basic metadata (name, symbol, etc), It also includes fields such as contract address, rpc and indexer url that are set through environment variables. While most fields require a value passed through environment variables, the contract addresses for non-localhost chains have real default values.

#### Environment Variables

##### Ethereum

| Variable                      | Default Value |
| ----------------------------- | ------------- |
| ETHEREUM_API_URL              |               |
| ETHEREUM_RPC_URL              |               |
| ETHEREUM_CORE_ADDRESS         |               |
| ETHEREUM_TOKEN_ADDRESS        |               |
| ETHEREUM_BADGE_MGR_ADDRESS    |               |
| ETHEREUM_MARKET_CORE_ADDRESS  |               |
| ETHEREUM_DISPUTE_MGR_ADDRESS  |               |
| ETHEREUM_MEDIATOR_MGR_ADDRESS |               |
| ETHEREUM_ENERGON_ADDRESS      |               |
| ETHEREUM_NFT_ADDRESS          |               |

##### Polygon

##### Polygon

| Variable                      | Default Value |
| ----------------------------- | ------------- |
| POLYGON_API_URL               |               |
| POLYGON_RPC_URL               |               |
| POLYGON_WRAPPED_TOKEN_ADDRESS |               |

##### Optimism

| Variable                       | Default Value |
| ------------------------------ | ------------- |
| OPTIMISM_API_URL               |               |
| OPTIMISM_RPC_URL               |               |
| OPTIMISM_WRAPPED_TOKEN_ADDRESS |               |

##### Binance Chain

| Variable                      | Default Value |
| ----------------------------- | ------------- |
| BINANCE_API_URL               |               |
| BINANCE_RPC_URL               |               |
| BINANCE_WRAPPED_TOKEN_ADDRESS |               |

##### Arbitrum

| Variable                       | Default Value |
| ------------------------------ | ------------- |
| ARBITRUM_API_URL               |               |
| ARBITRUM_RPC_URL               |               |
| ARBITRUM_WRAPPED_TOKEN_ADDRESS |               |

##### Sepolia

| Variable                      | Default Value                              |
| ----------------------------- | ------------------------------------------ |
| SEPOLIA_API_URL               |                                            |
| SEPOLIA_RPC_URL               |                                            |
| SEPOLIA_WRAPPED_TOKEN_ADDRESS |                                            |
| SEPOLIA_CORE_ADDRESS          | 0x70b34cae2ba32a4b777e491c717d5e837574bd65 |
| SEPOLIA_TOKEN_ADDRESS         | 0xd0dE9c8983C1e7071dC2cB826eb7b9F6D3ac60d2 |
| SEPOLIA_BADGE_MGR_ADDRESS     | 0x6cF0ec545403eC6792eF4F62cfcE2FE494bF1591 |
| SEPOLIA_MARKET_CORE_ADDRESS   | 0x588Dc811aF25Ea75fd5b7FEEeAB368ca63D6EcBE |
| SEPOLIA_DISPUTE_MGR_ADDRESS   | 0xe3DC1f3D53c2b821e713073f02A0b358706B69a2 |
| SEPOLIA_MEDIATOR_MGR_ADDRESS  | 0x0056905103f8F18fe18c04Ec9d256bF759C3Dd5D |
| SEPOLIA_ENERGON_ADDRESS       |                                            |
| SEPOLIA_NFT_ADDRESS           | 0x3b457DE90E5145CF4d6a9F2945d56e00A88D5Ab8 |

### Localhost / Hardhat

| Variable                        | Default Value |
| ------------------------------- | ------------- |
| LOCALHOST_API_URL               |               |
| LOCALHOST_RPC_URL               |               |
| LOCALHOST_WRAPPED_TOKEN_ADDRESS |               |
| LOCALHOST_CORE_ADDRESS          |               |
| LOCALHOST_TOKEN_ADDRESS         |               |
| LOCALHOST_BADGE_MGR_ADDRESS     |               |
| LOCALHOST_MARKET_CORE_ADDRESS   |               |
| LOCALHOST_DISPUTE_MGR_ADDRESS   |               |
| LOCALHOST_MEDIATOR_MGR_ADDRESS  |               |
| LOCALHOST_ENERGON_ADDRESS       |               |
| LOCALHOST_NFT_ADDRESS           |               |

### Tokens Lists

`src/token_list.ts` includes the token list for each chain. It is used by the indexer to determine which tokens to index. It is also used by the Joint Interface to display the tokens supported by each chain.

### ABI

`src/abi/index.ts` contains the ABI for the contracts used by the Joint Interface and services. It is paired with web3 packages viem or ethers.js to facilitate interactions with Joint contracts.

# License

MIT
