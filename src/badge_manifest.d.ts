import { ChainNames } from "./types/chain";
export type BadgeManifest = {
    name: string;
    issuer: string;
    issuerAddress: string;
    logoUrl: string;
    shortDescription: string;
    longDescriptions: string[];
    claimPageUrl: string;
};
export type ChainBadgeManifest = {
    [key in ChainNames]?: {
        [badge: string]: BadgeManifest;
    };
};
export declare const BadgeManifests: ChainBadgeManifest;
/**
 * Parse badge local variables
 * @param badge The badge manifest
 * @param locals The local variables
 * @returns
 */
export declare function parseBadgeLocals(badge: BadgeManifest, locals: {
    [key: string]: string;
}): BadgeManifest;
