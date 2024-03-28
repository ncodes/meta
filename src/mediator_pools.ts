import { ChainNames } from './types/chain';

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
			name: 'General',
			description: 'For mediators specializing in global crypto to fiat swaps and vice versa.',
			id: 0,
			reqBond: '1000000000000000000000',
			draftReward: '10000000000000000000',
			winReward: '20000000000000000000',
			noVoteSlashBP: 1000,
			loseVoteSlashBP: 2000,
			numDraftees: 1,
		},
	],
	ethereum: [
		{
			name: 'General',
			description: 'For mediators specializing in global crypto to fiat swaps and vice versa.',
			id: 0,
			reqBond: '10000000000000000000',
			draftReward: '10000000000000000000',
			winReward: '10000000000000000000',
			noVoteSlashBP: 1000,
			loseVoteSlashBP: 1000,
			numDraftees: 3,
		},
	],
	sepolia: [
		{
			name: 'General',
			description: 'For mediators specializing in global crypto to fiat swaps and vice versa.',
			id: 0,
			reqBond: '1000000000000000000000',
			draftReward: '100000000000000000000',
			winReward: '200000000000000000000',
			noVoteSlashBP: 1000,
			loseVoteSlashBP: 2000,
			numDraftees: 1,
		},
	],
	'arbitrum-sepolia': [
		{
			name: 'General',
			description: 'For mediators specializing in global crypto to fiat swaps and vice versa.',
			id: 0,
			reqBond: '1000000000000000000000',
			draftReward: '100000000000000000000',
			winReward: '200000000000000000000',
			noVoteSlashBP: 1000,
			loseVoteSlashBP: 2000,
			numDraftees: 1,
		},
	],
	arbitrum: [
		{
			name: 'General',
			description: 'For mediators specializing in global crypto to fiat swaps and vice versa.',
			id: 0,
			reqBond: '1000000000000000000000',
			draftReward: '100000000000000000000',
			winReward: '200000000000000000000',
			noVoteSlashBP: 1000,
			loseVoteSlashBP: 2000,
			numDraftees: 1,
		},
	],
};
