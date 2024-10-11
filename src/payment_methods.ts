import { ChainNames } from './types/chain';

export type PaymentMethods = {
	[key in ChainNames]?: {
		badge: string;
		name: string;
		shortName?: string;
		logoUrl: string;
		region: string;
	}[];
};

export enum PaymentMethodType {
	Bank = 1,
	Wallet = 2,
	GiftCard = 3,
}

export const PaymentMethods: {
	id: number;
	name: string;
	type: number;
	logoUrl?: string;
	regions: string[];
	shortName: string;
	currency: string;
}[] = [
	{
		id: 1,
		name: 'Chase Bank',
		type: 1,
		regions: ['US'],
		shortName: 'Chase',
		logoUrl: 'https://files.joint.exchange/images/banks/chase.svg',
		currency: 'USD',
	},
	{ id: 2, name: 'Bank of America', type: 1, regions: ['US'], shortName: 'BofA', currency: 'USD' },
	{ id: 3, name: 'Wells Fargo', type: 1, regions: ['US'], shortName: 'Wells', currency: 'USD' },
	{ id: 4, name: 'CitiBank (US)', type: 1, regions: ['US'], shortName: 'Citi', currency: 'USD' },
	{ id: 5, name: 'CitiBank (GB)', type: 1, regions: ['GB'], shortName: 'Citi', currency: 'GBP' },
	{ id: 6, name: 'CitiBank (AU)', type: 1, regions: ['AU'], shortName: 'Citi', currency: 'AUD' },
	{ id: 7, name: 'CitiBank (IN)', type: 1, regions: ['IN'], shortName: 'Citi', currency: 'INR' },
	{ id: 8, name: 'CitiBank (SG)', type: 1, regions: ['SG'], shortName: 'Citi', currency: 'SGD' },
	{ id: 9, name: 'Capital One', type: 1, regions: ['US'], shortName: 'CapOne', currency: 'USD' },
	{ id: 10, name: 'HSBC (GB)', type: 1, regions: ['GB'], shortName: 'HSBC', currency: 'GBP' },
	{ id: 11, name: 'HSBC (US)', type: 1, regions: ['US'], shortName: 'HSBC', currency: 'USD' },
	{ id: 12, name: 'HSBC (HK)', type: 1, regions: ['HK'], shortName: 'HSBC', currency: 'HKD' },
	{ id: 13, name: 'HSBC (AU)', type: 1, regions: ['AU'], shortName: 'HSBC', currency: 'AUD' },
	{ id: 14, name: 'HSBC (IN)', type: 1, regions: ['IN'], shortName: 'HSBC', currency: 'INR' },
	{ id: 15, name: 'Barclays (GB)', type: 1, regions: ['GB'], shortName: 'Barclays', currency: 'GBP' },
	{ id: 16, name: 'Barclays (US)', type: 1, regions: ['US'], shortName: 'Barclays', currency: 'USD' },
	{ id: 17, name: 'Barclays (ZA)', type: 1, regions: ['ZA'], shortName: 'Barclays', currency: 'ZAR' },
	{ id: 18, name: 'Lloyds Bank', type: 1, regions: ['GB'], shortName: 'Lloyds', currency: 'GBP' },
	{ id: 19, name: 'Santander (ES)', type: 1, regions: ['ES'], shortName: 'Santander', currency: 'EUR' },
	{ id: 20, name: 'Santander (GB)', type: 1, regions: ['GB'], shortName: 'Santander', currency: 'GBP' },
	{ id: 21, name: 'Santander (US)', type: 1, regions: ['US'], shortName: 'Santander', currency: 'USD' },
	{ id: 22, name: 'Santander (MX)', type: 1, regions: ['MX'], shortName: 'Santander', currency: 'MXN' },
	{ id: 23, name: 'NatWest', type: 1, regions: ['GB'], shortName: 'NatWest', currency: 'GBP' },
	{ id: 24, name: 'Deutsche Bank (DE)', type: 1, regions: ['DE'], shortName: 'Deutsche', currency: 'EUR' },
	{ id: 25, name: 'Deutsche Bank (US)', type: 1, regions: ['US'], shortName: 'Deutsche', currency: 'USD' },
	{ id: 26, name: 'Deutsche Bank (GB)', type: 1, regions: ['GB'], shortName: 'Deutsche', currency: 'GBP' },
	{ id: 27, name: 'Deutsche Bank (IN)', type: 1, regions: ['IN'], shortName: 'Deutsche', currency: 'INR' },
	{ id: 28, name: 'Deutsche Bank (CN)', type: 1, regions: ['CN'], shortName: 'Deutsche', currency: 'CNY' },
	{ id: 29, name: 'BNP Paribas (FR)', type: 1, regions: ['FR'], shortName: 'BNP Paribas', currency: 'EUR' },
	{ id: 30, name: 'BNP Paribas (US)', type: 1, regions: ['US'], shortName: 'BNP Paribas', currency: 'USD' },
	{ id: 31, name: 'BNP Paribas (BE)', type: 1, regions: ['BE'], shortName: 'BNP Paribas', currency: 'EUR' },
	{ id: 32, name: 'BNP Paribas (IT)', type: 1, regions: ['IT'], shortName: 'BNP Paribas', currency: 'EUR' },
	{ id: 33, name: 'BNP Paribas (NG)', type: 1, regions: ['NG'], shortName: 'BNP Paribas', currency: 'NGN' },
	{ id: 34, name: 'Société Générale (FR)', type: 1, regions: ['FR'], shortName: 'SocGen', currency: 'EUR' },
	{ id: 35, name: 'Société Générale (US)', type: 1, regions: ['US'], shortName: 'SocGen', currency: 'USD' },
	{ id: 36, name: 'Société Générale (BE)', type: 1, regions: ['BE'], shortName: 'SocGen', currency: 'EUR' },
	{ id: 37, name: 'Société Générale (DZ)', type: 1, regions: ['DZ'], shortName: 'SocGen', currency: 'DZD' },
	{ id: 38, name: 'Crédit Agricole (FR)', type: 1, regions: ['FR'], shortName: 'CA', currency: 'EUR' },
	{ id: 39, name: 'Crédit Agricole (IT)', type: 1, regions: ['IT'], shortName: 'CA', currency: 'EUR' },
	{ id: 40, name: 'Crédit Agricole (US)', type: 1, regions: ['US'], shortName: 'CA', currency: 'USD' },
	{ id: 41, name: 'Crédit Agricole (DZ)', type: 1, regions: ['DZ'], shortName: 'CA', currency: 'DZD' },
	{ id: 42, name: 'ING Bank (NL)', type: 1, regions: ['NL'], shortName: 'ING', currency: 'EUR' },
	{ id: 43, name: 'ING Bank (BE)', type: 1, regions: ['BE'], shortName: 'ING', currency: 'EUR' },
	{ id: 44, name: 'ING Bank (US)', type: 1, regions: ['US'], shortName: 'ING', currency: 'USD' },
	{ id: 45, name: 'ING Bank (PL)', type: 1, regions: ['PL'], shortName: 'ING', currency: 'PLN' },
	{ id: 46, name: 'ING Bank (HU)', type: 1, regions: ['HU'], shortName: 'ING', currency: 'HUF' },
	{ id: 47, name: 'Rabobank', type: 1, regions: ['NL'], shortName: 'Rabobank', currency: 'EUR' },
	{ id: 48, name: 'ABN AMRO', type: 1, regions: ['NL'], shortName: 'ABN AMRO', currency: 'EUR' },
	{ id: 49, name: 'Standard Chartered (GB)', type: 1, regions: ['GB'], shortName: 'SC', currency: 'GBP' },
	{ id: 50, name: 'Standard Chartered (SG)', type: 1, regions: ['SG'], shortName: 'SC', currency: 'SGD' },
	{ id: 51, name: 'Standard Chartered (HK)', type: 1, regions: ['HK'], shortName: 'SC', currency: 'HKD' },
	{ id: 52, name: 'Standard Chartered (IN)', type: 1, regions: ['IN'], shortName: 'SC', currency: 'INR' },
	{ id: 53, name: 'Standard Chartered (ZA)', type: 1, regions: ['ZA'], shortName: 'SC', currency: 'ZAR' },
	{ id: 54, name: 'UBS (CH)', type: 1, regions: ['CH'], shortName: 'UBS', currency: 'CHF' },
	{ id: 55, name: 'UBS (US)', type: 1, regions: ['US'], shortName: 'UBS', currency: 'USD' },
	{ id: 56, name: 'UBS (GB)', type: 1, regions: ['GB'], shortName: 'UBS', currency: 'GBP' },
	{ id: 57, name: 'UBS (DE)', type: 1, regions: ['DE'], shortName: 'UBS', currency: 'EUR' },
	{ id: 58, name: 'Credit Suisse (CH)', type: 1, regions: ['CH'], shortName: 'CS', currency: 'CHF' },
	{ id: 59, name: 'Credit Suisse (US)', type: 1, regions: ['US'], shortName: 'CS', currency: 'USD' },
	{ id: 60, name: 'Credit Suisse (GB)', type: 1, regions: ['GB'], shortName: 'CS', currency: 'GBP' },
	{ id: 61, name: 'Credit Suisse (DE)', type: 1, regions: ['DE'], shortName: 'CS', currency: 'EUR' },
	{ id: 62, name: 'Royal Bank of Canada', type: 1, regions: ['CA'], shortName: 'RBC', currency: 'CAD' },
	{ id: 63, name: 'TD Bank (CA)', type: 1, regions: ['CA'], shortName: 'TD', currency: 'CAD' },
	{ id: 64, name: 'TD Bank (US)', type: 1, regions: ['US'], shortName: 'TD', currency: 'USD' },
	{ id: 65, name: 'Scotiabank (CA)', type: 1, regions: ['CA'], shortName: 'Scotiabank', currency: 'CAD' },
	{ id: 66, name: 'Scotiabank (US)', type: 1, regions: ['US'], shortName: 'Scotiabank', currency: 'USD' },
	{ id: 67, name: 'Scotiabank (MX)', type: 1, regions: ['MX'], shortName: 'Scotiabank', currency: 'MXN' },
	{ id: 68, name: 'Scotiabank (CL)', type: 1, regions: ['CL'], shortName: 'Scotiabank', currency: 'CLP' },
	{ id: 69, name: 'BMO Bank of Montreal', type: 1, regions: ['CA'], shortName: 'BMO', currency: 'CAD' },
	{ id: 70, name: 'Westpac', type: 1, regions: ['AU'], shortName: 'Westpac', currency: 'AUD' },
	{ id: 71, name: 'Commonwealth Bank', type: 1, regions: ['AU'], shortName: 'CBA', currency: 'AUD' },
	{ id: 72, name: 'ANZ Bank (AU)', type: 1, regions: ['AU'], shortName: 'ANZ', currency: 'AUD' },
	{ id: 73, name: 'ANZ Bank (NZ)', type: 1, regions: ['NZ'], shortName: 'ANZ', currency: 'NZD' },
	{ id: 74, name: 'National Australia Bank', type: 1, regions: ['AU'], shortName: 'NAB', currency: 'AUD' },
	{ id: 75, name: 'ICICI Bank', type: 1, regions: ['IN'], shortName: 'ICICI', currency: 'INR' },
	{ id: 76, name: 'HDFC Bank', type: 1, regions: ['IN'], shortName: 'HDFC', currency: 'INR' },
	{ id: 77, name: 'Axis Bank', type: 1, regions: ['IN'], shortName: 'Axis', currency: 'INR' },
	{ id: 78, name: 'State Bank of India', type: 1, regions: ['IN'], shortName: 'SBI', currency: 'INR' },
	{ id: 79, name: 'Bank of China (CN)', type: 1, regions: ['CN'], shortName: 'BOC', currency: 'CNY' },
	{ id: 80, name: 'Bank of China (HK)', type: 1, regions: ['HK'], shortName: 'BOC', currency: 'HKD' },
	{ id: 81, name: 'Bank of China (US)', type: 1, regions: ['US'], shortName: 'BOC', currency: 'USD' },
	{ id: 82, name: 'China Construction Bank (CN)', type: 1, regions: ['CN'], shortName: 'CCB', currency: 'CNY' },
	{ id: 83, name: 'China Construction Bank (HK)', type: 1, regions: ['HK'], shortName: 'CCB', currency: 'HKD' },
	{
		id: 84,
		name: 'Industrial and Commercial Bank of China (CN)',
		type: 1,
		regions: ['CN'],
		shortName: 'ICBC',
		currency: 'CNY',
	},
	{
		id: 85,
		name: 'Industrial and Commercial Bank of China (HK)',
		type: 1,
		regions: ['HK'],
		shortName: 'ICBC',
		currency: 'HKD',
	},
	{ id: 86, name: 'Agricultural Bank of China (CN)', type: 1, regions: ['CN'], shortName: 'ABC', currency: 'CNY' },
	{ id: 87, name: 'Agricultural Bank of China (HK)', type: 1, regions: ['HK'], shortName: 'ABC', currency: 'HKD' },
	{ id: 88, name: 'Sumitomo Mitsui Banking Corporation', type: 1, regions: ['JP'], shortName: 'SMBC', currency: 'JPY' },
	{ id: 89, name: 'Mizuho Bank', type: 1, regions: ['JP'], shortName: 'Mizuho', currency: 'JPY' },
	{ id: 90, name: 'Mitsubishi UFJ Financial Group', type: 1, regions: ['JP'], shortName: 'MUFG', currency: 'JPY' },
	{ id: 91, name: 'Shinsei Bank', type: 1, regions: ['JP'], shortName: 'Shinsei', currency: 'JPY' },
	{ id: 92, name: 'Korea Development Bank', type: 1, regions: ['KR'], shortName: 'KDB', currency: 'KRW' },
	{ id: 93, name: 'Kookmin Bank', type: 1, regions: ['KR'], shortName: 'Kookmin', currency: 'KRW' },
	{ id: 94, name: 'Hana Bank', type: 1, regions: ['KR'], shortName: 'Hana', currency: 'KRW' },
	{ id: 95, name: 'Shinhan Bank', type: 1, regions: ['KR'], shortName: 'Shinhan', currency: 'KRW' },
	{ id: 96, name: 'Maybank', type: 1, regions: ['MY'], shortName: 'Maybank', currency: 'MYR' },
	{ id: 97, name: 'CIMB Bank', type: 1, regions: ['MY'], shortName: 'CIMB', currency: 'MYR' },
	{ id: 98, name: 'DBS Bank', type: 1, regions: ['SG'], shortName: 'DBS', currency: 'SGD' },
	{ id: 99, name: 'OCBC Bank', type: 1, regions: ['SG'], shortName: 'OCBC', currency: 'SGD' },
	{ id: 100, name: 'United Overseas Bank', type: 1, regions: ['SG'], shortName: 'UOB', currency: 'SGD' },
	{ id: 101, name: 'Bangkok Bank', type: 1, regions: ['TH'], shortName: 'Bangkok', currency: 'THB' },
	{ id: 102, name: 'Siam Commercial Bank', type: 1, regions: ['TH'], shortName: 'SCB', currency: 'THB' },
	{ id: 103, name: 'Bank of the Philippine Islands', type: 1, regions: ['PH'], shortName: 'BPI', currency: 'PHP' },
	{ id: 104, name: 'Philippine National Bank', type: 1, regions: ['PH'], shortName: 'PNB', currency: 'PHP' },
	{ id: 105, name: 'Standard Bank', type: 1, regions: ['ZA'], shortName: 'Standard', currency: 'ZAR' },
	{ id: 106, name: 'Absa Bank', type: 1, regions: ['ZA'], shortName: 'Absa', currency: 'ZAR' },
	{ id: 107, name: 'First National Bank', type: 1, regions: ['ZA'], shortName: 'FNB', currency: 'ZAR' },
	{ id: 108, name: 'Nedbank', type: 1, regions: ['ZA'], shortName: 'Nedbank', currency: 'ZAR' },
	{
		id: 109,
		name: 'Ecobank (NG)',
		type: 1,
		regions: ['NG'],
		shortName: 'Ecobank',
		logoUrl: 'https://files.joint.exchange/images/banks/ecobank.svg',
		currency: 'NGN',
	},
	{
		id: 110,
		name: 'Ecobank (GH)',
		type: 1,
		regions: ['GH'],
		shortName: 'Ecobank',
		logoUrl: 'https://files.joint.exchange/images/banks/ecobank.svg',
		currency: 'GHS',
	},
	{
		id: 111,
		name: 'Ecobank (CI)',
		type: 1,
		regions: ['CI'],
		shortName: 'Ecobank',
		logoUrl: 'https://files.joint.exchange/images/banks/ecobank.svg',
		currency: 'XOF',
	},
	{
		id: 112,
		name: 'Ecobank (TZ)',
		type: 1,
		regions: ['TZ'],
		shortName: 'Ecobank',
		logoUrl: 'https://files.joint.exchange/images/banks/ecobank.svg',
		currency: 'TZS',
	},
	{
		id: 113,
		name: 'Ecobank (UG)',
		type: 1,
		regions: ['UG'],
		shortName: 'Ecobank',
		logoUrl: 'https://files.joint.exchange/images/banks/ecobank.svg',
		currency: 'UGX',
	},
	{ id: 114, name: 'United Bank for Africa (NG)', type: 1, regions: ['NG'], shortName: 'UBA', currency: 'NGN' },
	{ id: 115, name: 'United Bank for Africa (GH)', type: 1, regions: ['GH'], shortName: 'UBA', currency: 'GHS' },
	{ id: 116, name: 'United Bank for Africa (UG)', type: 1, regions: ['UG'], shortName: 'UBA', currency: 'UGX' },
	{ id: 117, name: 'United Bank for Africa (KE)', type: 1, regions: ['KE'], shortName: 'UBA', currency: 'KES' },
	{ id: 118, name: 'United Bank for Africa (ZA)', type: 1, regions: ['ZA'], shortName: 'UBA', currency: 'ZAR' },
	{ id: 119, name: 'Zenith Bank', type: 1, regions: ['NG'], shortName: 'Zenith', currency: 'NGN' },
	{
		id: 120,
		name: 'Guaranty Trust Bank',
		type: 1,
		regions: ['NG'],
		shortName: 'GTB',
		logoUrl: 'https://files.joint.exchange/images/banks/gtb.svg',
		currency: 'NGN',
	},
	{
		id: 121,
		name: 'Access Bank',
		type: 1,
		regions: ['NG'],
		shortName: 'Access',
		logoUrl: 'https://files.joint.exchange/images/banks/access.svg',
		currency: 'NGN',
	},
	{ id: 122, name: 'Equity Bank', type: 1, regions: ['KE'], shortName: 'Equity', currency: 'KES' },
	{ id: 123, name: 'KCB Bank', type: 1, regions: ['KE'], shortName: 'KCB', currency: 'KES' },
	{ id: 124, name: 'National Bank of Egypt', type: 1, regions: ['EG'], shortName: 'NBE', currency: 'EGP' },
	{ id: 125, name: 'Commercial International Bank', type: 1, regions: ['EG'], shortName: 'CIB', currency: 'EGP' },
	{ id: 126, name: 'Attijariwafa Bank', type: 1, regions: ['MA'], shortName: 'Attijariwafa', currency: 'MAD' },
	{ id: 127, name: 'Banque Populaire', type: 1, regions: ['MA'], shortName: 'BP', currency: 'MAD' },
	{ id: 128, name: 'BMCE Bank', type: 1, regions: ['MA'], shortName: 'BMCE', currency: 'MAD' },
	{ id: 129, name: 'Banque Misr', type: 1, regions: ['EG'], shortName: 'Banque Misr', currency: 'EGP' },
	{ id: 130, name: 'PayPal (US)', type: 2, regions: ['US'], shortName: 'PayPal', currency: 'USD' },
	{ id: 131, name: 'PayPal (GB)', type: 2, regions: ['GB'], shortName: 'PayPal', currency: 'GBP' },
	{ id: 132, name: 'PayPal (AU)', type: 2, regions: ['AU'], shortName: 'PayPal', currency: 'AUD' },
	{ id: 133, name: 'PayPal (IN)', type: 2, regions: ['IN'], shortName: 'PayPal', currency: 'INR' },
	{ id: 134, name: 'PayPal (ZA)', type: 2, regions: ['ZA'], shortName: 'PayPal', currency: 'ZAR' },
	{ id: 135, name: 'PayPal (NG)', type: 2, regions: ['NG'], shortName: 'PayPal', currency: 'NGN' },
	{ id: 136, name: 'PayPal (KE)', type: 2, regions: ['KE'], shortName: 'PayPal', currency: 'KES' },
	{ id: 137, name: 'PayPal (EG)', type: 2, regions: ['EG'], shortName: 'PayPal', currency: 'EGP' },
	{ id: 138, name: 'Venmo', type: 2, regions: ['US'], shortName: 'Venmo', currency: 'USD' },
	{ id: 139, name: 'Zelle', type: 2, regions: ['US'], shortName: 'Zelle', currency: 'USD' },
	{ id: 140, name: 'Cash App', type: 2, regions: ['US'], shortName: 'Cash App', currency: 'USD' },
	{ id: 141, name: 'Apple Pay (US)', type: 2, regions: ['US'], shortName: 'Apple Pay', currency: 'USD' },
	{ id: 142, name: 'Apple Pay (GB)', type: 2, regions: ['GB'], shortName: 'Apple Pay', currency: 'GBP' },
	{ id: 143, name: 'Apple Pay (AU)', type: 2, regions: ['AU'], shortName: 'Apple Pay', currency: 'AUD' },
	{ id: 144, name: 'Apple Pay (IN)', type: 2, regions: ['IN'], shortName: 'Apple Pay', currency: 'INR' },
	{ id: 145, name: 'Apple Pay (JP)', type: 2, regions: ['JP'], shortName: 'Apple Pay', currency: 'JPY' },
	{ id: 146, name: 'Apple Pay (SG)', type: 2, regions: ['SG'], shortName: 'Apple Pay', currency: 'SGD' },
	{ id: 147, name: 'Google Pay (US)', type: 2, regions: ['US'], shortName: 'Google Pay', currency: 'USD' },
	{ id: 148, name: 'Google Pay (GB)', type: 2, regions: ['GB'], shortName: 'Google Pay', currency: 'GBP' },
	{ id: 149, name: 'Google Pay (AU)', type: 2, regions: ['AU'], shortName: 'Google Pay', currency: 'AUD' },
	{ id: 150, name: 'Google Pay (IN)', type: 2, regions: ['IN'], shortName: 'Google Pay', currency: 'INR' },
	{ id: 151, name: 'Google Pay (JP)', type: 2, regions: ['JP'], shortName: 'Google Pay', currency: 'JPY' },
	{ id: 152, name: 'Google Pay (SG)', type: 2, regions: ['SG'], shortName: 'Google Pay', currency: 'SGD' },
	{ id: 153, name: 'Google Pay (ZA)', type: 2, regions: ['ZA'], shortName: 'Google Pay', currency: 'ZAR' },
	{ id: 154, name: 'Google Pay (NG)', type: 2, regions: ['NG'], shortName: 'Google Pay', currency: 'NGN' },
	{ id: 155, name: 'Samsung Pay (US)', type: 2, regions: ['US'], shortName: 'Samsung Pay', currency: 'USD' },
	{ id: 156, name: 'Samsung Pay (GB)', type: 2, regions: ['GB'], shortName: 'Samsung Pay', currency: 'GBP' },
	{ id: 157, name: 'Samsung Pay (AU)', type: 2, regions: ['AU'], shortName: 'Samsung Pay', currency: 'AUD' },
	{ id: 158, name: 'Samsung Pay (KR)', type: 2, regions: ['KR'], shortName: 'Samsung Pay', currency: 'KRW' },
	{ id: 159, name: 'Samsung Pay (IN)', type: 2, regions: ['IN'], shortName: 'Samsung Pay', currency: 'INR' },
	{ id: 160, name: 'Samsung Pay (SG)', type: 2, regions: ['SG'], shortName: 'Samsung Pay', currency: 'SGD' },
	{ id: 161, name: 'WeChat Pay (CN)', type: 2, regions: ['CN'], shortName: 'WeChat Pay', currency: 'CNY' },
	{ id: 162, name: 'WeChat Pay (HK)', type: 2, regions: ['HK'], shortName: 'WeChat Pay', currency: 'HKD' },
	{ id: 163, name: 'WeChat Pay (SG)', type: 2, regions: ['SG'], shortName: 'WeChat Pay', currency: 'SGD' },
	{ id: 164, name: 'WeChat Pay (MY)', type: 2, regions: ['MY'], shortName: 'WeChat Pay', currency: 'MYR' },
	{
		id: 165,
		name: 'Alipay (CN)',
		type: 2,
		regions: ['CN'],
		shortName: 'Alipay',
		logoUrl: 'https://files.joint.exchange/images/banks/alipay.svg',
		currency: 'CNY',
	},
	{
		id: 166,
		name: 'Alipay (HK)',
		type: 2,
		regions: ['HK'],
		shortName: 'Alipay',
		logoUrl: 'https://files.joint.exchange/images/banks/alipay.svg',
		currency: 'HKD',
	},
	{
		id: 167,
		name: 'Alipay (SG)',
		type: 2,
		regions: ['SG'],
		shortName: 'Alipay',
		logoUrl: 'https://files.joint.exchange/images/banks/alipay.svg',
		currency: 'SGD',
	},
	{
		id: 168,
		name: 'Alipay (MY)',
		type: 2,
		regions: ['MY'],
		shortName: 'Alipay',
		logoUrl: 'https://files.joint.exchange/images/banks/alipay.svg',
		currency: 'MYR',
	},
	{ id: 169, name: 'M-Pesa (KE)', type: 2, regions: ['KE'], shortName: 'M-Pesa', currency: 'KES' },
	{ id: 170, name: 'M-Pesa (TZ)', type: 2, regions: ['TZ'], shortName: 'M-Pesa', currency: 'TZS' },
	{ id: 171, name: 'M-Pesa (UG)', type: 2, regions: ['UG'], shortName: 'M-Pesa', currency: 'UGX' },
	{ id: 172, name: 'M-Pesa (ZP)', type: 2, regions: ['ZP'], shortName: 'M-Pesa', currency: 'ZMW' },
	{ id: 173, name: 'M-Pesa (RO)', type: 2, regions: ['RO'], shortName: 'M-Pesa', currency: 'RON' },
	{ id: 174, name: 'Paytm', type: 2, regions: ['IN'], shortName: 'Paytm', currency: 'INR' },
	{ id: 175, name: 'PhonePe', type: 2, regions: ['IN'], shortName: 'PhonePe', currency: 'INR' },
	{ id: 176, name: 'BharatPe', type: 2, regions: ['IN'], shortName: 'BharatPe', currency: 'INR' },
	{ id: 177, name: 'GCash', type: 2, regions: ['PH'], shortName: 'GCash', currency: 'PHP' },
	{ id: 178, name: 'Paymaya', type: 2, regions: ['PH'], shortName: 'Paymaya', currency: 'PHP' },
	{ id: 179, name: 'Tigo Money (TZ)', type: 2, regions: ['TZ'], shortName: 'Tigo Money', currency: 'TZS' },
	{ id: 180, name: 'Tigo Money (GH)', type: 2, regions: ['GH'], shortName: 'Tigo Money', currency: 'GHS' },
	{ id: 181, name: 'Paga', type: 2, regions: ['NG'], shortName: 'Paga', currency: 'NGN' },
	{ id: 182, name: 'Chipper Cash (NG)', type: 2, regions: ['NG'], shortName: 'Chipper Cash', currency: 'NGN' },
	{ id: 183, name: 'Chipper Cash (GH)', type: 2, regions: ['GH'], shortName: 'Chipper Cash', currency: 'GHS' },
	{ id: 184, name: 'Chipper Cash (KE)', type: 2, regions: ['KE'], shortName: 'Chipper Cash', currency: 'KES' },
	{ id: 185, name: 'Chipper Cash (UG)', type: 2, regions: ['UG'], shortName: 'Chipper Cash', currency: 'UGX' },
	{ id: 186, name: 'Chipper Cash (TZ)', type: 2, regions: ['TZ'], shortName: 'Chipper Cash', currency: 'TZS' },
	{ id: 187, name: 'Orange Money (FR)', type: 2, regions: ['FR'], shortName: 'Orange Money', currency: 'EUR' },
	{ id: 188, name: 'Orange Money (SN)', type: 2, regions: ['SN'], shortName: 'Orange Money', currency: 'XOF' },
	{ id: 189, name: 'Orange Money (CI)', type: 2, regions: ['CI'], shortName: 'Orange Money', currency: 'XOF' },
	{ id: 190, name: 'Orange Money (MA)', type: 2, regions: ['MA'], shortName: 'Orange Money', currency: 'MAD' },
	{ id: 191, name: 'Orange Money (CM)', type: 2, regions: ['CM'], shortName: 'Orange Money', currency: 'XAF' },
	{ id: 192, name: 'Airtel Money', type: 2, regions: ['KE'], shortName: 'Airtel Money', currency: 'KES' },
	{ id: 193, name: 'Wave Mobile Money (SN)', type: 2, regions: ['SN'], shortName: 'Wave', currency: 'XOF' },
	{ id: 194, name: 'Wave Mobile Money (CI)', type: 2, regions: ['CI'], shortName: 'Wave', currency: 'XOF' },
	{ id: 195, name: 'Wave Mobile Money (MA)', type: 2, regions: ['MA'], shortName: 'Wave', currency: 'MAD' },
	{ id: 196, name: 'MTN Mobile Money (GH)', type: 2, regions: ['GH'], shortName: 'MTN', currency: 'GHS' },
	{ id: 197, name: 'MTN Mobile Money (UG)', type: 2, regions: ['UG'], shortName: 'MTN', currency: 'UGX' },
	{ id: 198, name: 'MTN Mobile Money (CM)', type: 2, regions: ['CM'], shortName: 'MTN', currency: 'XAF' },
	{ id: 199, name: 'MTN Mobile Money (CI)', type: 2, regions: ['CI'], shortName: 'MTN', currency: 'XOF' },
];

/**
 * Get a payment method by name
 * @param name - The name of the payment method
 * @returns The payment method object
 */
export function getPaymentMethod(name: string) {
	return PaymentMethods.find((method) => method.name === name);
}

/**
 * Get the short name of a payment method
 * @param name - The name of the payment method
 * @returns The short name of the payment method
 */
export function getShortName(name: string) {
	return PaymentMethods.find((method) => method.name === name)?.shortName;
}

/**
 * Get the logo URL of a payment method
 * @param name - The name of the payment method
 * @returns The logo URL of the payment method
 */
export function getLogoUrl(name: string) {
	return PaymentMethods.find((method) => method.name === name)?.logoUrl;
}

/**
 * Get the currency of a payment method
 * @param name - The name of the payment method
 * @returns The currency of the payment method
 */
export function getCurrency(name: string) {
	return PaymentMethods.find((method) => method.name === name)?.currency;
}

/**
 * Get the regions of a payment method
 * @param name - The name of the payment method
 * @returns The regions of the payment method
 */
export function getRegions(name: string) {
	return PaymentMethods.find((method) => method.name === name)?.regions;
}
