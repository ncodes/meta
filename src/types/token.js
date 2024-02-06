import { isAddressEqual } from "viem";
/**
 * TokenInfo describes an ERC20-like token EVM chain
 */
var TokenInfo = /** @class */ (function () {
    function TokenInfo(props) {
        return Object.assign(this, props);
    }
    /**
     * Checks whether the object is equal to o
     * @param o - The other object
     */
    TokenInfo.prototype.isEqual = function (o) {
        if (!this.address || !o.address)
            return false;
        return isAddressEqual(this.address, o.address);
    };
    return TokenInfo;
}());
export default TokenInfo;
//# sourceMappingURL=token.js.map