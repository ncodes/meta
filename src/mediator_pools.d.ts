import { ChainNames } from "./types/chain";
export type MediatorPool = {
    name: string;
    description: string;
    id: number;
    reqBond: string;
    draftReward: string;
    winReward: string;
    noVoteSlashBP: number;
    loseVoteSlashBP: number;
    numDraftees: number;
};
export type KnownMediatorPools = {
    [key in ChainNames]?: MediatorPool[];
};
export declare const MediatorPools: KnownMediatorPools;
