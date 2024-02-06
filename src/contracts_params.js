export var contractsParams = {
    localhost: {
        others: {
            operatorBond: '120',
            allocatorAddr: '0xA47FFd6c828EFB58c6B42F722ABA286cF87C19a0',
        },
        core: {
            minTimeToPay: 1800,
            orderGraceDur: 1800,
            maxOpenOrders: 3,
            maxOpenDisputes: 3,
            transferToFeePoolInterval: 86400,
            nftDiscountBP: 2500,
        },
        token: {},
        energon: {},
        nft: {},
        badgeManager: {},
        marketCore: {
            defaultDisputeDelayDur: 0,
        },
        disputeManager: {
            evidenceDur: 60,
            predictDur: 120,
        },
        mediatorManager: {
            baseTicketPrice: '100000000000000000000',
            ticketWindowDur: 86400,
            ticketsPerWindow: 256,
            ticketSupply: 60000,
            priceSupplyDeltaBP: 2000,
            minInactiveWindowBeforeReset: 7,
            soldOutBP: 8000,
            ticketMatureDur: 86400,
            ticketCancelDur: 604800,
            ticketExpireDur: 172800,
            reqPoolBond: '1000000000000000000000',
            poolDraftReward: '10000000000000000000',
            poolWinReward: '20000000000000000000',
            poolNumDraftee: 1,
            poolNoVoteSlashBP: 1000,
            poolLoseVoteSlashBP: 2000,
        },
        assetRegistry: {},
    },
    sepolia: {
        others: {
            operatorBond: '0',
            allocatorAddr: '0xA47FFd6c828EFB58c6B42F722ABA286cF87C19a0',
        },
        core: {
            minTimeToPay: 1800,
            orderGraceDur: 1800,
            maxOpenOrders: 3,
            maxOpenDisputes: 3,
            transferToFeePoolInterval: 86400,
            nftDiscountBP: 2500,
        },
        token: {},
        energon: {},
        nft: {},
        badgeManager: {},
        marketCore: {
            defaultDisputeDelayDur: 0,
        },
        disputeManager: {
            evidenceDur: 1800,
            predictDur: 3600,
        },
        mediatorManager: {
            baseTicketPrice: '100000000000000000000',
            ticketWindowDur: 86400,
            ticketsPerWindow: 256,
            ticketSupply: 60000,
            priceSupplyDeltaBP: 2000,
            minInactiveWindowBeforeReset: 7,
            soldOutBP: 8000,
            ticketMatureDur: 86400,
            ticketCancelDur: 604800,
            ticketExpireDur: 172800,
            reqPoolBond: '1000000000000000000000',
            poolDraftReward: '100000000000000000000',
            poolWinReward: '200000000000000000000',
            poolNumDraftee: 1,
            poolNoVoteSlashBP: 1000,
            poolLoseVoteSlashBP: 2000,
        },
        assetRegistry: {},
    },
};
/**
 * Get contracts params for a given network
 */
export function getContractsParams(network) {
    return contractsParams[network];
}
//# sourceMappingURL=contracts_params.js.map