# Chains Info

This repository includes information about the chains and payment methods supported by Joint Interface, Indexer and other components of the Joint ecosystem. It is meant to be the source of truth for chain metadata.

# Files

### `src/chains.ts`

This file contains the relevant information about the supported chains. This includes basic metadata (name, symbol, etc), It also includes fields such as contract address, rpc and indexer url that are set through environment variables.

### `src/token_list.ts`

This file includes the token list for each chain. It is used by the indexer to determine which tokens to index. It is also used by the Joint Interface to display the tokens supported by each chain.

### `src/payment_methods.ts`

This file contains all the payment methods supported. It is includes the full badge name, region and logo.

### `src/mediator_pools.ts`

This file contains the mediator pools supported by the Joint Interface. It is used to display the pools available for each chain, allowing ticket purchasers to select the pool they want to join after purchasing a ticket.

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
