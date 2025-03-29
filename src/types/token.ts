import { isAddressEqual } from "viem";

/**
 * TokenInfo describes an ERC20-like token EVM chain
 */
export default class TokenInfo {
  address?: string;
  name?: string;
  symbol?: string;
  decimals?: number;
  logoURI?: string;
  abi?: any;

  constructor(props: Partial<TokenInfo>) {
    return Object.assign(this, props);
  }

  /**
   * Checks whether the object is equal to o
   * @param o - The other object
   */
  isEqual(o: TokenInfo) {
    if (!this.address || !o.address) return false;
    return isAddressEqual(
      this.address as `0x${string}`,
      o.address as `0x${string}`,
    );
  }
}

export namespace TokenList {
  export interface TokenData {
    name: string;
    logoURI: string;
    timestamp: string;
    tokens: Token[];
    version: Version;
  }

  export interface Token {
    asset?: string;
    type: string | "NATIVE" | "ERC20" | "SYNTHETIC" | "ERC721" | "ERC1155";
    address: string;
    name: string;
    symbol: string;
    decimals: number;
    logoURI: string;
    disabled?: boolean;
    native?: boolean;

    // DEV only
    price?: number;
    isSynthetic?: boolean;
  }

  interface Version {
    major: number;
    minor: number;
    patch: number;
  }
}
