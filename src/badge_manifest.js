var _a, _b, _c, _d, _e, _f;
// BadgeManifest contains information about a badge, the issuer and
// information required by the client to grant, manage and revoke the badge.
// The keys are regular expressions that match a badge being queried.
export var BadgeManifests = {
    localhost: {
        "^kyc(/[a-zA-Z]{3})?$": {
            name: "KYC",
            issuer: "Joint Labs",
            issuerAddress: "0x0B9Fc80B571e99C4ea796Eb34E75df59470826F3",
            logoUrl: "https://storage.googleapis.com/joint-images/kyc-badge-icon.svg",
            claimPageUrl: (_c = (_b = (_a = process.env.LOCALHOST_KYC_BADGE_MANIFEST_CLAIM_PAGE_URL) !== null && _a !== void 0 ? _a : process.env.NEXT_PUBLIC_LOCALHOST_KYC_BADGE_MANIFEST_CLAIM_PAGE_URL) !== null && _b !== void 0 ? _b : import.meta.env.VITE_LOCALHOST_KYC_BADGE_MANIFEST_CLAIM_PAGE_URL) !== null && _c !== void 0 ? _c : "http://localhost:3002/claim/kyc",
            shortDescription: "Claim KYC Badge",
            longDescriptions: [
                "Complete the KYC verification process to claim a global or national KYC badge that will grant you access to a market or liquidity that require KYC.",
                "See our [privacy policy](http://joint.exchange/legal/privacy-policy) to learn how we handle your data.",
            ],
        },
    },
    sepolia: {
        "^kyc(/[a-zA-Z]{3})?$": {
            name: "KYC",
            issuer: "Joint Labs",
            issuerAddress: "0x7D66e2a2Ad08e8708e92B2f01f36181502D2c964",
            logoUrl: "https://storage.googleapis.com/joint-images/kyc-badge-icon.svg",
            claimPageUrl: (_f = (_e = (_d = process.env.SEPOLIA_KYC_BADGE_MANIFEST_CLAIM_PAGE_URL) !== null && _d !== void 0 ? _d : process.env.NEXT_PUBLIC_SEPOLIA_KYC_BADGE_MANIFEST_CLAIM_PAGE_URL) !== null && _e !== void 0 ? _e : import.meta.env.VITE_SEPOLIA_KYC_BADGE_MANIFEST_CLAIM_PAGE_URL) !== null && _f !== void 0 ? _f : "https://kycbadge.joint.exchange/claim/kyc",
            shortDescription: "Claim KYC Badge",
            longDescriptions: [
                "Complete the KYC verification process to claim a global or national KYC badge that will grant you access to a market or liquidity that require KYC.",
                "See our [privacy policy](http://joint.exchange/legal/privacy-policy) to learn how we handle your data.",
            ],
        },
    },
};
/**
 * Parse badge local variables
 * @param badge The badge manifest
 * @param locals The local variables
 * @returns
 */
export function parseBadgeLocals(badge, locals) {
    var badgeAsStr = JSON.stringify(badge);
    var str = badgeAsStr;
    for (var key in locals) {
        str = str.replace(new RegExp("{".concat(key, "}"), "g"), locals[key]);
    }
    return JSON.parse(str);
}
//# sourceMappingURL=badge_manifest.js.map