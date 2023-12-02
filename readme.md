# Chains Info

This repository includes information about the chains and payment methods supported by the Joint Interface, Indexer and other components of the Joint ecosystem. It is meant to be the source of truth for chain metadata.

# Usage

```
import chains,{getChainByName} from '@jointlabs/chains-info'
```

# Usage with NextJS

```
import chains,{getChainByName} from '@jointlabs/chains-info/next'
```

Add `/next` to the import path to use the NextJS version of the library. This version will use `process.env` to set the chain information but still outputs an ESM module.

### Chains Information

`src/chains.ts` contains the relevant information about the supported chains. This includes basic metadata (name, symbol, etc), It also includes fields such as contract address, rpc and indexer url that are set through environment variables.

### Tokens Lists

`src/token_list.ts` includes the token list for each chain. It is used by the indexer to determine which tokens to index. It is also used by the Joint Interface to display the tokens supported by each chain.

### Payment Methods

`src/payment_methods.ts` contains all the payment methods supported. It includes the full badge name, region and logo.

### Mediator Pools

`src/mediator_pools.ts` contains the mediator pools supported by the Joint Interface. It is used to display the pools available for each chain, allowing ticket purchasers to select the pool they want to join after purchasing a ticket.

### Badge Manifest

`src/badge_manifest.ts` contains the information about badges that can be claimed on a Joint Interface.

### ABI

`src/abi/index.ts` contains the ABI for the contracts used by the Joint Interface and services. It is paired with web3 packages viem or ethers.js to facilitate interactions with Joint contracts.

## Environment variables

Below are environment variables that can be used to set the chain information. The {PREFIX} should be replaced with the prefix used by the host framework (e.g. NextJS = `NEXT_PUBLIC_`, Vite = `VITE_`) is the chain name in uppercase.

### Ethereum

- {PREFIX}ETHEREUM_API_URI
- {PREFIX}ETHEREUM_RPC_URL
- {PREFIX}ETHEREUM_CORE_ADDRESS
- {PREFIX}ETHEREUM_TOKEN_ADDRESS
- {PREFIX}ETHEREUM_BADGE_MGR_ADDRESS
- {PREFIX}ETHEREUM_MARKET_CORE_ADDRESS
- {PREFIX}ETHEREUM_DISPUTE_MGR_ADDRESS
- {PREFIX}ETHEREUM_MEDIATOR_MGR_ADDRESS
- {PREFIX}ETHEREUM_ENERGON_ADDRESS
- {PREFIX}ETHEREUM_NFT_ADDRESS

### Polygon

- {PREFIX}POLYGON_API_URI
- {PREFIX}POLYGON_RPC_URL
- {PREFIX}POLYGON_WRAPPED_TOKEN_ADDRESS

### Optimism

- {PREFIX}OPTIMISM_API_URI
- {PREFIX}OPTIMISM_RPC_URL
- {PREFIX}OPTIMISM_WRAPPED_TOKEN_ADDRESS

### Binance Chain

- {PREFIX}BINANCE_API_URI
- {PREFIX}BINANCE_RPC_URL
- {PREFIX}BINANCE_WRAPPED_TOKEN_ADDRESS

### Arbitrum

- {PREFIX}ARBITRUM_API_URI
- {PREFIX}ARBITRUM_RPC_URL
- {PREFIX}ARBITRUM_WRAPPED_TOKEN_ADDRESS

### Sepolia

- {PREFIX}SEPOLIA_API_URI
- {PREFIX}SEPOLIA_RPC_URL
- {PREFIX}SEPOLIA_WRAPPED_TOKEN_ADDRESS
- {PREFIX}SEPOLIA_CORE_ADDRESS
- {PREFIX}SEPOLIA_TOKEN_ADDRESS
- {PREFIX}SEPOLIA_BADGE_MGR_ADDRESS
- {PREFIX}SEPOLIA_MARKET_CORE_ADDRESS
- {PREFIX}SEPOLIA_DISPUTE_MGR_ADDRESS
- {PREFIX}SEPOLIA_MEDIATOR_MGR_ADDRESS
- {PREFIX}SEPOLIA_ENERGON_ADDRESS
- {PREFIX}SEPOLIA_NFT_ADDRESS

### Localhost / Hardhat

- {PREFIX}LOCALHOST_API_URI
- {PREFIX}LOCALHOST_RPC_URL
- {PREFIX}LOCALHOST_WRAPPED_TOKEN_ADDRESS
- {PREFIX}LOCALHOST_CORE_ADDRESS
- {PREFIX}LOCALHOST_TOKEN_ADDRESS
- {PREFIX}LOCALHOST_BADGE_MGR_ADDRESS
- {PREFIX}LOCALHOST_MARKET_CORE_ADDRESS
- {PREFIX}LOCALHOST_DISPUTE_MGR_ADDRESS
- {PREFIX}LOCALHOST_MEDIATOR_MGR_ADDRESS
- {PREFIX}LOCALHOST_ENERGON_ADDRESS
- {PREFIX}LOCALHOST_NFT_ADDRESS

# License

MIT
