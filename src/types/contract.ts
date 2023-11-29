export interface ContractInfo {
  address?: string;
  abi: any;
}

export type Contracts = {
  [key in ContractNames]: ContractInfo;
};

export type ContractNames =
  | "core"
  | "token"
  | "energon"
  | "nft"
  | "badgeManager"
  | "marketCore"
  | "disputeManager"
  | "mediatorManager";
