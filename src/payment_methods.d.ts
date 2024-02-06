import { ChainNames } from "./types/chain";
export type PaymentMethods = {
    [key in ChainNames]?: {
        badge: string;
        name: string;
        shortName?: string;
        logoUrl: string;
        region: string;
    }[];
};
export declare const paymentMethods: PaymentMethods;
