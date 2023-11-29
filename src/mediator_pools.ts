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

export type KnownMediatorPools = { [key in ChainNames]?: MediatorPool[] };

export const MediatorPools: KnownMediatorPools = {
  localhost: [
    {
      name: "General",
      description: "For mediators specializing in global crypto to cash swaps.",
      id: 0,
      reqBond: "10000000000000000000",
      draftReward: "10000000000000000000",
      winReward: "10000000000000000000",
      noVoteSlashBP: 1000,
      loseVoteSlashBP: 1000,
      numDraftees: 3,
    },
  ],
  ethereum: [
    {
      name: "General",
      description: "For mediators specializing in global crypto to cash swaps.",
      id: 0,
      reqBond: "10000000000000000000",
      draftReward: "10000000000000000000",
      winReward: "10000000000000000000",
      noVoteSlashBP: 1000,
      loseVoteSlashBP: 1000,
      numDraftees: 3,
    },
  ],
};
