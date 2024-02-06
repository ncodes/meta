import _ from "lodash";
import { isAddressEqual } from "viem";
import * as binance from "./tokenlist/binance.json";
import * as ethereum from "./tokenlist/ethereum.json";
import * as localhost from "./tokenlist/localhost.json";
import * as optimism from "./tokenlist/optimism.json";
import * as polygon from "./tokenlist/polygon.json";
import * as sepolia from "./tokenlist/sepolia.json";
import * as synthetic from "./tokenlist/synthetic.json";
export var TokenLists = {
    ethereum: ethereum,
    polygon: polygon,
    binance: binance,
    optimism: optimism,
    synthetic: synthetic,
    localhost: localhost,
    sepolia: sepolia,
};
/**
 * Get token info
 * @param network The network name
 * @param address The token address
 */
export function getTokenInfo(network, address) {
    var netList = TokenLists[network];
    if (!netList)
        return;
    return _.find(netList.tokens, function (x) {
        return isAddressEqual(x.address, address);
    });
}
/**
 * Find a given asset in the local token list
 * @param address The target address
 */
export function findTokenInLocalhost(address) {
    return TokenLists.localhost.tokens.find(function (token) {
        var match = isAddressEqual(token.address, address);
        if (!match)
            return;
        token.isSynthetic = token.isSynthetic || token.type == "SYNTHETIC";
        return token;
    });
}
/**
 * Find a given asset in the synthetic token list
 * @param address The target address
 */
export function findTokenInSynthetic(address) {
    return TokenLists.synthetic.tokens.find(function (token) {
        var match = isAddressEqual(token.address, address);
        if (!match)
            return;
        token.isSynthetic = token.isSynthetic || token.type == "SYNTHETIC";
        return token;
    });
}
//# sourceMappingURL=tokens_list.js.map