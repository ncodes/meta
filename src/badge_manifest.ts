import { ChainNames } from './types/chain';

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
	[key in ChainNames]?: { [badge: string]: BadgeManifest };
};

// BadgeManifest contains information about a badge, the issuer and
// information required by the client to grant, manage and revoke the badge.
// The keys are regular expressions that match a badge being queried.
export const BadgeManifests: ChainBadgeManifest = {
	localhost: {
		'^kyc(/[a-zA-Z]{3})?$': {
			name: 'KYC',
			issuer: 'Joint Labs',
			issuerAddress: '0x0B9Fc80B571e99C4ea796Eb34E75df59470826F3',
			logoUrl: 'https://storage.googleapis.com/joint-images/kyc-badge-icon.svg',
			claimPageUrl:
				process.env.LOCALHOST_KYC_BADGE_MANIFEST_CLAIM_PAGE_URL ??
				process.env.NEXT_PUBLIC_LOCALHOST_KYC_BADGE_MANIFEST_CLAIM_PAGE_URL ??
				import.meta.env.VITE_LOCALHOST_KYC_BADGE_MANIFEST_CLAIM_PAGE_URL ??
				'http://localhost:3002/claim/kyc',
			shortDescription: 'Claim KYC Badge',
			longDescriptions: [
				'Complete the KYC verification process to claim a global or national KYC badge that will grant you access to a market or liquidity that require KYC.',
				'See our [privacy policy](http://joint.exchange/legal/privacy-policy) to learn how we handle your data.',
			],
		},
	},
	sepolia: {
		'^kyc(/[a-zA-Z]{3})?$': {
			name: 'KYC',
			issuer: 'Joint Labs',
			issuerAddress: '0x7D66e2a2Ad08e8708e92B2f01f36181502D2c964',
			logoUrl: 'https://storage.googleapis.com/joint-images/kyc-badge-icon.svg',
			claimPageUrl:
				process.env.SEPOLIA_KYC_BADGE_MANIFEST_CLAIM_PAGE_URL ??
				process.env.NEXT_PUBLIC_SEPOLIA_KYC_BADGE_MANIFEST_CLAIM_PAGE_URL ??
				import.meta.env.VITE_SEPOLIA_KYC_BADGE_MANIFEST_CLAIM_PAGE_URL ??
				'https://kycbadge.joint.exchange/claim/kyc',
			shortDescription: 'Claim KYC Badge',
			longDescriptions: [
				'Complete the KYC verification process to claim a global or national KYC badge that will grant you access to a market or liquidity that require KYC.',
				'See our [privacy policy](http://joint.exchange/legal/privacy-policy) to learn how we handle your data.',
			],
		},
	},
	arbitrum: {
		'^kyc(/[a-zA-Z]{3})?$': {
			name: 'KYC',
			issuer: 'Joint Labs',
			issuerAddress: '0x7D66e2a2Ad08e8708e92B2f01f36181502D2c964',
			logoUrl: 'https://storage.googleapis.com/joint-images/kyc-badge-icon.svg',
			claimPageUrl:
				process.env.ARBITRUM_KYC_BADGE_MANIFEST_CLAIM_PAGE_URL ??
				process.env.NEXT_PUBLIC_ARBITRUM_KYC_BADGE_MANIFEST_CLAIM_PAGE_URL ??
				import.meta.env.VITE_ARBITRUM_KYC_BADGE_MANIFEST_CLAIM_PAGE_URL ??
				'https://kycbadge.joint.exchange/claim/kyc',
			shortDescription: 'Claim KYC Badge',
			longDescriptions: [
				'Complete the KYC verification process to claim a global or national KYC badge that will grant you access to a market or liquidity that require KYC.',
				'See our [privacy policy](http://joint.exchange/legal/privacy-policy) to learn how we handle your data.',
			],
		},
	},
	['arbitrum-sepolia']: {
		'^kyc(/[a-zA-Z]{3})?$': {
			name: 'KYC',
			issuer: 'Joint Labs',
			issuerAddress: '0x7D66e2a2Ad08e8708e92B2f01f36181502D2c964',
			logoUrl: 'https://storage.googleapis.com/joint-images/kyc-badge-icon.svg',
			claimPageUrl:
				process.env.ARBITRUM_SEPOLIA_KYC_BADGE_MANIFEST_CLAIM_PAGE_URL ??
				process.env.NEXT_PUBLIC_ARBITRUM_SEPOLIA_KYC_BADGE_MANIFEST_CLAIM_PAGE_URL ??
				import.meta.env.VITE_ARBITRUM_SEPOLIA_KYC_BADGE_MANIFEST_CLAIM_PAGE_URL ??
				'https://kycbadge.joint.exchange/claim/kyc',
			shortDescription: 'Claim KYC Badge',
			longDescriptions: [
				'Complete the KYC verification process to claim a global or national KYC badge that will grant you access to a market or liquidity that require KYC.',
				'See our [privacy policy](http://joint.exchange/legal/privacy-policy) to learn how we handle your data.',
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
export function parseBadgeLocals(badge: BadgeManifest, locals: { [key: string]: string }): BadgeManifest {
	const badgeAsStr = JSON.stringify(badge);
	let str = badgeAsStr;
	for (const key in locals) {
		str = str.replace(new RegExp(`{${key}}`, 'g'), locals[key]);
	}
	return JSON.parse(str) as BadgeManifest;
}
