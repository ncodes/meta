var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name8 in all)
    __defProp(target, name8, { get: all[name8], enumerable: true });
};

// src/abi/AssetRegistry.json
var AssetRegistry_default = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "addr",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "curRate",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "feeBp",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "feeFixed",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountPerRewardPoint",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "verified",
        type: "bool"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "stable",
        type: "bool"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "sharable",
        type: "bool"
      }
    ],
    name: "AssetRegistryUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "assets",
    outputs: [
      {
        internalType: "uint256",
        name: "curRate",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "feeBp",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "feeFixed",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "amountPerRewardPoint",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "verified",
        type: "bool"
      },
      {
        internalType: "bool",
        name: "stable",
        type: "bool"
      },
      {
        internalType: "bool",
        name: "sharable",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "get",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "curRate",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "feeBp",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "feeFixed",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "amountPerRewardPoint",
            type: "uint256"
          },
          {
            internalType: "bool",
            name: "verified",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "stable",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "sharable",
            type: "bool"
          }
        ],
        internalType: "struct Info",
        name: "",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "getRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "curRate",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "feeBp",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "feeFixed",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "amountPerRewardPoint",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "verified",
        type: "bool"
      },
      {
        internalType: "bool",
        name: "stable",
        type: "bool"
      },
      {
        internalType: "bool",
        name: "sharable",
        type: "bool"
      }
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "feeBp",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "feeFixed",
        type: "uint256"
      }
    ],
    name: "setFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256"
      }
    ],
    name: "setRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      },
      {
        internalType: "bool",
        name: "sharable",
        type: "bool"
      }
    ],
    name: "setSharable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      },
      {
        internalType: "bool",
        name: "stable",
        type: "bool"
      }
    ],
    name: "setStable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      },
      {
        internalType: "bool",
        name: "verified",
        type: "bool"
      }
    ],
    name: "setVerified",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "toCur",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

// src/abi/BadgeManager.json
var BadgeManager_default = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "issuer",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "coIssuer",
        type: "address"
      },
      {
        indexed: false,
        internalType: "string",
        name: "badge",
        type: "string"
      }
    ],
    name: "AddedCoIssuer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "issuer",
        type: "address"
      },
      {
        indexed: false,
        internalType: "string",
        name: "badge",
        type: "string"
      },
      {
        indexed: false,
        internalType: "string[]",
        name: "metadataKeys",
        type: "string[]"
      },
      {
        indexed: false,
        internalType: "string[]",
        name: "metadataValues",
        type: "string[]"
      }
    ],
    name: "AddedIssuer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "issuer",
        type: "address"
      },
      {
        indexed: false,
        internalType: "string",
        name: "badge",
        type: "string"
      },
      {
        indexed: false,
        internalType: "string",
        name: "path",
        type: "string"
      },
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string"
      },
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string"
      }
    ],
    name: "BadgeMetaUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "badge",
        type: "string"
      },
      {
        indexed: false,
        internalType: "string",
        name: "path",
        type: "string"
      },
      {
        indexed: true,
        internalType: "address",
        name: "oldOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "BadgeOwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "badge",
        type: "string"
      },
      {
        indexed: false,
        internalType: "string",
        name: "path",
        type: "string"
      },
      {
        indexed: false,
        internalType: "address",
        name: "grantee",
        type: "address"
      },
      {
        indexed: false,
        internalType: "string[]",
        name: "metadataKeys",
        type: "string[]"
      },
      {
        indexed: false,
        internalType: "string[]",
        name: "metadataValues",
        type: "string[]"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "expireAt",
        type: "uint256"
      }
    ],
    name: "GrantedBadge",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "issuer",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "grantee",
        type: "address"
      },
      {
        indexed: false,
        internalType: "string",
        name: "badge",
        type: "string"
      },
      {
        indexed: false,
        internalType: "string",
        name: "path",
        type: "string"
      },
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string"
      },
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string"
      }
    ],
    name: "GranteeBadgeMetaUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "issuer",
        type: "address"
      },
      {
        indexed: false,
        internalType: "string",
        name: "badge",
        type: "string"
      },
      {
        indexed: false,
        internalType: "string",
        name: "path",
        type: "string"
      },
      {
        indexed: false,
        internalType: "string[]",
        name: "metadataKeys",
        type: "string[]"
      },
      {
        indexed: false,
        internalType: "string[]",
        name: "metadataValues",
        type: "string[]"
      }
    ],
    name: "PathRegistered",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "issuer",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "coIssuer",
        type: "address"
      },
      {
        indexed: false,
        internalType: "string",
        name: "badge",
        type: "string"
      }
    ],
    name: "RemovedCoIssuer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldIssuer",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newIssuer",
        type: "address"
      },
      {
        indexed: false,
        internalType: "string",
        name: "badge",
        type: "string"
      }
    ],
    name: "ReplacedIssuer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "badge",
        type: "string"
      },
      {
        indexed: false,
        internalType: "string",
        name: "path",
        type: "string"
      },
      {
        indexed: false,
        internalType: "address",
        name: "grantee",
        type: "address"
      }
    ],
    name: "RevokedBadge",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      },
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "badgeCoIssuers",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    name: "badgeIssuer",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      },
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    name: "badgeMetadata",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "badgeMetadataKeys",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      },
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    name: "badgePaths",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "badge",
        type: "string"
      },
      {
        internalType: "string",
        name: "path",
        type: "string"
      },
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "getGrantId",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "badge",
        type: "string"
      },
      {
        internalType: "string",
        name: "path",
        type: "string"
      },
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "getGranteeMetaKeys",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "badge",
        type: "string"
      },
      {
        internalType: "string",
        name: "path",
        type: "string"
      },
      {
        internalType: "address",
        name: "addr",
        type: "address"
      },
      {
        internalType: "string",
        name: "key",
        type: "string"
      }
    ],
    name: "getGranteeMetaValue",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "badge",
        type: "string"
      },
      {
        internalType: "string",
        name: "path",
        type: "string"
      }
    ],
    name: "getMetaKeys",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "badge",
        type: "string"
      },
      {
        internalType: "string",
        name: "path",
        type: "string"
      },
      {
        internalType: "string",
        name: "key",
        type: "string"
      }
    ],
    name: "getMetaValue",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "badge",
        type: "string"
      },
      {
        internalType: "string",
        name: "path",
        type: "string"
      }
    ],
    name: "getPathId",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "badge",
        type: "string"
      },
      {
        internalType: "string",
        name: "path",
        type: "string"
      },
      {
        internalType: "address",
        name: "addr",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "expireAt",
        type: "uint256"
      },
      {
        internalType: "string[]",
        name: "metadataKeys",
        type: "string[]"
      },
      {
        internalType: "string[]",
        name: "metadataValues",
        type: "string[]"
      }
    ],
    name: "grantBadge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "badge",
        type: "string"
      },
      {
        internalType: "string",
        name: "path",
        type: "string"
      },
      {
        internalType: "address",
        name: "addr",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "expireAt",
        type: "uint256"
      },
      {
        internalType: "string[]",
        name: "metadataKeys",
        type: "string[]"
      },
      {
        internalType: "string[]",
        name: "metadataValues",
        type: "string[]"
      },
      {
        internalType: "uint256",
        name: "sigExpireAt",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "sig",
        type: "bytes"
      }
    ],
    name: "grantBadgeBySig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    name: "granted",
    outputs: [
      {
        internalType: "uint256",
        name: "grantedAt",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "expireAt",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      },
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    name: "granteeMetadata",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "granteeMetadataKeys",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      },
      {
        internalType: "string",
        name: "badge",
        type: "string"
      },
      {
        internalType: "string",
        name: "path",
        type: "string"
      }
    ],
    name: "hasBadge",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "issuerBadge",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      },
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    name: "pathMetadata",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "pathMetadataKeys",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "badge",
        type: "string"
      },
      {
        internalType: "address",
        name: "coIssuer",
        type: "address"
      }
    ],
    name: "registerCoIssuer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "issuer",
        type: "address"
      },
      {
        internalType: "string",
        name: "badge",
        type: "string"
      },
      {
        internalType: "string[]",
        name: "metadataKeys",
        type: "string[]"
      },
      {
        internalType: "string[]",
        name: "metadataValues",
        type: "string[]"
      }
    ],
    name: "registerIssuer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "badge",
        type: "string"
      },
      {
        internalType: "string",
        name: "path",
        type: "string"
      },
      {
        internalType: "string[]",
        name: "metadataKeys",
        type: "string[]"
      },
      {
        internalType: "string[]",
        name: "metadataValues",
        type: "string[]"
      }
    ],
    name: "registerPath",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "badge",
        type: "string"
      },
      {
        internalType: "address",
        name: "coIssuer",
        type: "address"
      }
    ],
    name: "removeCoIssuer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "badge",
        type: "string"
      },
      {
        internalType: "address",
        name: "newIssuer",
        type: "address"
      }
    ],
    name: "replaceIssuer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "badge",
        type: "string"
      },
      {
        internalType: "string",
        name: "path",
        type: "string"
      },
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "revokeBadge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "badge",
        type: "string"
      },
      {
        internalType: "string",
        name: "path",
        type: "string"
      },
      {
        internalType: "address",
        name: "addr",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "expireAt",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "sig",
        type: "bytes"
      }
    ],
    name: "revokeBadgeBySig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "badge",
        type: "string"
      },
      {
        internalType: "string",
        name: "path",
        type: "string"
      },
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferBadgeOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "badge",
        type: "string"
      },
      {
        internalType: "string",
        name: "path",
        type: "string"
      },
      {
        internalType: "address",
        name: "addr",
        type: "address"
      },
      {
        internalType: "string",
        name: "key",
        type: "string"
      },
      {
        internalType: "string",
        name: "value",
        type: "string"
      }
    ],
    name: "upsertGranteeMeta",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "badge",
        type: "string"
      },
      {
        internalType: "string",
        name: "path",
        type: "string"
      },
      {
        internalType: "address",
        name: "addr",
        type: "address"
      },
      {
        internalType: "string",
        name: "key",
        type: "string"
      },
      {
        internalType: "string",
        name: "value",
        type: "string"
      },
      {
        internalType: "uint256",
        name: "expireAt",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "sig",
        type: "bytes"
      }
    ],
    name: "upsertGranteeMetaBySig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "badge",
        type: "string"
      },
      {
        internalType: "string",
        name: "path",
        type: "string"
      },
      {
        internalType: "string",
        name: "key",
        type: "string"
      },
      {
        internalType: "string",
        name: "value",
        type: "string"
      }
    ],
    name: "upsertMeta",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "usedSig",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

// src/abi/Core.json
var Core_default = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_marketCore",
        type: "address"
      },
      {
        internalType: "address",
        name: "_token",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_minTimeToPay",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_orderGraceDur",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_maxOpenOrders",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_maxOpenDisputes",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "manager",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "finalizer",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "orderId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "released",
        type: "bool"
      }
    ],
    name: "FinalizedByManagerSig",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "bp",
        type: "uint256"
      }
    ],
    name: "NFTDiscountUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "marketId",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "provider",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lid",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "address",
        name: "offerer",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "offerId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "expireDuration",
        type: "uint256"
      }
    ],
    name: "NewOffer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "offerId",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "address",
        name: "acceptor",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "executeAt",
        type: "uint256"
      }
    ],
    name: "OfferAccepted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "offerId",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "address",
        name: "canceller",
        type: "address"
      }
    ],
    name: "OfferCancelled",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "offerId",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "address",
        name: "executor",
        type: "address"
      }
    ],
    name: "OfferExecuted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "offerId",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "address",
        name: "unacceptor",
        type: "address"
      }
    ],
    name: "OfferUnaccepted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "offerId",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "address",
        name: "offerer",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "execDelayDur",
        type: "uint256"
      }
    ],
    name: "OfferUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "orderID",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "address",
        name: "canceller",
        type: "address"
      },
      {
        indexed: true,
        internalType: "bool",
        name: "byDispute",
        type: "bool"
      }
    ],
    name: "OrderCancelled",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "inventor",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shared",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "operator",
        type: "uint256"
      }
    ],
    name: "ProtocolFeeSplitUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "instantSwapFeeBp",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "synthSwapFeeBp",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "stableSwapFeeBp",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fixedSynthSwapFee",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fixedNFTSwapFee",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "instantNFTSwapFeeBp",
        type: "uint256"
      }
    ],
    name: "ProtocolFeeUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "mid",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "provider",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "swapper",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "releaser",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256[6]",
        name: "numTypeInfo",
        type: "uint256[6]"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "byDispute",
        type: "bool"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "idsFromProvider",
        type: "uint256[]"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "idsFromTaker",
        type: "uint256[]"
      }
    ],
    name: "Swap",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "mid",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "provider",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "swapper",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256[7]",
        name: "numTypeInfo",
        type: "uint256[7]"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "idsFromProvider",
        type: "uint256[]"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "idsFromTaker",
        type: "uint256[]"
      }
    ],
    name: "SwapOrder",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "orderID",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "disputeDelayDur",
        type: "uint256"
      }
    ],
    name: "SwapOrderPaid",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "marketId",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "provider",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lid",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "paused",
        type: "bool"
      }
    ],
    name: "TogglePause",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "asset",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "TransferInventorBalance",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "address",
        name: "convAsset",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "convAmount",
        type: "uint256"
      }
    ],
    name: "TransferredToFeePool",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "swapRouter",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "ethErc20Addr",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "poolFee",
        type: "uint256"
      }
    ],
    name: "UpdatedAMMInfo",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "input",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "output",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "poolFee",
        type: "uint256"
      }
    ],
    name: "UpdatedAMMPoolInfo",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "UpdatedAssetRegistry",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "UpdatedBadge",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "UpdatedDisputeManager",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "UpdatedFeePool",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "interval",
        type: "uint256"
      }
    ],
    name: "UpdatedFeePoolConfig",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "UpdatedFeePurse",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "provider",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "marketId",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "deduct",
        type: "bool"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "paused",
        type: "bool"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "liq",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "wantOrIds",
        type: "uint256[]"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "wantAndIds",
        type: "uint256[]"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "minSwap",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "maxSwap",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timeToPay",
        type: "uint256"
      }
    ],
    name: "UpdatedFungibleLiquidity",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "UpdatedInventor",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "marketId",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "provider",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "manager",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "oldManager",
        type: "address"
      }
    ],
    name: "UpdatedLiquidityManager",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "market",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "provider",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "liq",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "string[2][]",
        name: "badges",
        type: "string[2][]"
      }
    ],
    name: "UpdatedLiquiditySwapBadges",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "UpdatedMarketCore",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "val",
        type: "uint256"
      }
    ],
    name: "UpdatedMaxOpenDisputes",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "val",
        type: "uint256"
      }
    ],
    name: "UpdatedMaxOpenOrders",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "val",
        type: "uint256"
      }
    ],
    name: "UpdatedMinTimeToPay",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "UpdatedNFT",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "provider",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "marketId",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "deduct",
        type: "bool"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "paused",
        type: "bool"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lid",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "wantOrIds",
        type: "uint256[]"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "wantAndIds",
        type: "uint256[]"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timeToPay",
        type: "uint256"
      }
    ],
    name: "UpdatedNonFungibleLiquidity",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "UpdatedOperator",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "val",
        type: "uint256"
      }
    ],
    name: "UpdatedOrderGraceDur",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "marketId",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "provider",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "manager",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lid",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256"
      }
    ],
    name: "UpdatedPrice",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "offerId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "delay",
        type: "uint256"
      }
    ],
    name: "acceptOffer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "canCreateDispute",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "offerId",
        type: "uint256"
      }
    ],
    name: "cancelOffer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256"
      }
    ],
    name: "cancelOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256"
      }
    ],
    name: "cancelOrderByDispute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "expireAt",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes"
      }
    ],
    name: "cancelOrderByManagerSig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "mid",
        type: "address"
      },
      {
        internalType: "address",
        name: "provider",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "lid",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "taker",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "orderAmt",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "orderPrice",
        type: "uint256"
      }
    ],
    name: "computeSwapFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "interval",
        type: "uint256"
      }
    ],
    name: "configureFeePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "marketId",
        type: "address"
      },
      {
        internalType: "address",
        name: "provider",
        type: "address"
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "lid",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256"
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]"
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "operator",
        type: "uint256"
      }
    ],
    name: "createOffer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "offerId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "txDeadline",
        type: "uint256"
      }
    ],
    name: "executeOffer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "asset",
        type: "address"
      }
    ],
    name: "feeBalanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getFeeBPs",
    outputs: [
      {
        internalType: "uint256[3]",
        name: "",
        type: "uint256[3]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "mid",
        type: "address"
      },
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "lid",
        type: "uint256"
      }
    ],
    name: "getLiquidity",
    outputs: [
      {
        components: [
          {
            internalType: "uint256[]",
            name: "ids",
            type: "uint256[]"
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "minSwap",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "maxSwap",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "timeToPay",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "openOrders",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "openDisputes",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "protoFeePurseId",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "mktCreatorFeePurseId",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "protoFeeRate",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "mktCreatorFeeRate",
            type: "uint256"
          },
          {
            internalType: "uint256[]",
            name: "wantOrIds",
            type: "uint256[]"
          },
          {
            internalType: "uint256[]",
            name: "wantAndIds",
            type: "uint256[]"
          },
          {
            internalType: "bool",
            name: "paused",
            type: "bool"
          },
          {
            internalType: "address",
            name: "target",
            type: "address"
          }
        ],
        internalType: "struct Structs.Liquidity",
        name: "",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "marketId",
        type: "address"
      },
      {
        internalType: "address",
        name: "provider",
        type: "address"
      }
    ],
    name: "getLiquidityManager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "id",
        type: "address"
      }
    ],
    name: "getMarket",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "createdAt",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "numOrders",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "numDisputes",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "numLiquidity",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "commission",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "poolId",
            type: "uint256"
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "disputeDelayDur",
                type: "uint256"
              },
              {
                internalType: "uint256",
                name: "evidenceDur",
                type: "uint256"
              },
              {
                internalType: "uint256",
                name: "predictDur",
                type: "uint256"
              }
            ],
            internalType: "struct Structs.MarketDur",
            name: "dur",
            type: "tuple"
          },
          {
            internalType: "address",
            name: "creator",
            type: "address"
          },
          {
            internalType: "address",
            name: "manager",
            type: "address"
          },
          {
            components: [
              {
                internalType: "address",
                name: "addr",
                type: "address"
              },
              {
                internalType: "enum Structs.AssetType",
                name: "assetType",
                type: "uint8"
              }
            ],
            internalType: "struct Structs.Asset",
            name: "base",
            type: "tuple"
          },
          {
            components: [
              {
                internalType: "address",
                name: "addr",
                type: "address"
              },
              {
                internalType: "enum Structs.AssetType",
                name: "assetType",
                type: "uint8"
              }
            ],
            internalType: "struct Structs.Asset",
            name: "quote",
            type: "tuple"
          },
          {
            components: [
              {
                internalType: "bool",
                name: "put",
                type: "bool"
              },
              {
                internalType: "bool",
                name: "swap",
                type: "bool"
              },
              {
                internalType: "bool",
                name: "offerOnly",
                type: "bool"
              },
              {
                internalType: "bool",
                name: "allowZeroOfferPrice",
                type: "bool"
              }
            ],
            internalType: "struct Structs.MarketPerms",
            name: "perms",
            type: "tuple"
          }
        ],
        internalType: "struct Structs.Market",
        name: "",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256"
      }
    ],
    name: "getOffer",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "creator",
            type: "address"
          },
          {
            internalType: "address",
            name: "marketId",
            type: "address"
          },
          {
            internalType: "address",
            name: "provider",
            type: "address"
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "lid",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256"
          },
          {
            internalType: "uint256[]",
            name: "ids",
            type: "uint256[]"
          },
          {
            internalType: "uint256",
            name: "liq",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "execAt",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "operator",
            type: "uint256"
          },
          {
            internalType: "bool",
            name: "accepted",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "cancelled",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "executed",
            type: "bool"
          }
        ],
        internalType: "struct Structs.Offer",
        name: "",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256"
      }
    ],
    name: "getOrder",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "marketId",
            type: "address"
          },
          {
            internalType: "address",
            name: "provider",
            type: "address"
          },
          {
            internalType: "address",
            name: "taker",
            type: "address"
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address"
          },
          {
            internalType: "address",
            name: "finalizer",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "lid",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "createdAt",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "payDeadline",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "cancelAt",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "disputeFrom",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "offerId",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "operator",
            type: "uint256"
          },
          {
            internalType: "uint256[]",
            name: "takerIds",
            type: "uint256[]"
          },
          {
            internalType: "uint256[]",
            name: "providerIds",
            type: "uint256[]"
          },
          {
            internalType: "bool",
            name: "paid",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "released",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "disputed",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "cancelled",
            type: "bool"
          }
        ],
        internalType: "struct Structs.Order",
        name: "",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "marketId",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "lid",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "getReqSwapBadges",
    outputs: [
      {
        internalType: "string[2][]",
        name: "",
        type: "string[2][]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "mid",
        type: "address"
      },
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "lid",
        type: "uint256"
      }
    ],
    name: "hasLiquidity",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256"
      }
    ],
    name: "hasOrder",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address"
      }
    ],
    name: "inventorBalanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "isVerified",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256"
      }
    ],
    name: "markAsDisputed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256"
      }
    ],
    name: "markOrderAsPaid",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        internalType: "address",
        name: "asset",
        type: "address"
      }
    ],
    name: "operatorBalanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256"
      }
    ],
    name: "releaseOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256"
      }
    ],
    name: "releaseOrderByDispute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "expireAt",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes"
      }
    ],
    name: "releaseOrderByManagerSig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "swapRouter",
        type: "address"
      },
      {
        internalType: "address",
        name: "ethErc20Addr",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "poolFee",
        type: "uint256"
      }
    ],
    name: "setAmmInfo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "input",
        type: "address"
      },
      {
        internalType: "address",
        name: "out",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "poolFee",
        type: "uint256"
      }
    ],
    name: "setAmmPoolInfo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "setAssetRegistry",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "val",
        type: "address"
      }
    ],
    name: "setBadgeMgr",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "bp",
        type: "uint256"
      }
    ],
    name: "setDiscountForNFTHolder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "setDisputeManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "setFeePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "val",
        type: "address"
      }
    ],
    name: "setFeePurse",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "setInventor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "marketId",
        type: "address"
      },
      {
        internalType: "address",
        name: "manager",
        type: "address"
      }
    ],
    name: "setLiquidityManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "setMarketCore",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "val",
        type: "uint256"
      }
    ],
    name: "setMaxOpenDisputes",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "val",
        type: "uint256"
      }
    ],
    name: "setMaxOpenOrders",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "val",
        type: "uint256"
      }
    ],
    name: "setMinTimeToPay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "setNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "setOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "val",
        type: "uint256"
      }
    ],
    name: "setOrderGraceDur",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_instantSwapFeeBp",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_synthSwapFeeBp",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_stableSwapFeeBp",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_fixedSynthSwapFee",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_fixedNFTSwapFee",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_instantNFTSwapFeeBp",
        type: "uint256"
      }
    ],
    name: "setProtoFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "inventorBP",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "sharedBP",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "operatorBP",
        type: "uint256"
      }
    ],
    name: "setProtoFeeSplit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "marketId",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "lid",
        type: "uint256"
      },
      {
        internalType: "string[2][]",
        name: "badgeIds",
        type: "string[2][]"
      }
    ],
    name: "setSwapBadgeForLiquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address"
      }
    ],
    name: "shareablesBalanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "state",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "instantSwapFeeBp",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "synthSwapFeeBp",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "stableSwapFeeBp",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "instantNFTSwapFeeBp",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "fixedSynthSwapFee",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "fixedNFTSwapFee",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "maxOpenOrders",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "maxOpenDisputes",
            type: "uint256"
          }
        ],
        internalType: "struct StructsLib.IntSlotState",
        name: "ints",
        type: "tuple"
      },
      {
        internalType: "uint256",
        name: "minTimeToPay",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "orderGraceDur",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "numOrders",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "feePoolTxInterval",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "inventor",
        type: "address"
      },
      {
        internalType: "address",
        name: "ammSwapRouter",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "state2",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "nftDiscountBp",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "ammEthPoolFee",
            type: "uint256"
          }
        ],
        internalType: "struct StructsLib.UintSlotState2",
        name: "ints",
        type: "tuple"
      },
      {
        internalType: "address",
        name: "disputeManager",
        type: "address"
      },
      {
        internalType: "address",
        name: "nft",
        type: "address"
      },
      {
        internalType: "address",
        name: "ammEth",
        type: "address"
      },
      {
        internalType: "contract IAssetRegistry",
        name: "assetReg",
        type: "address"
      },
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address"
      },
      {
        internalType: "contract IMarketCore",
        name: "marketCore",
        type: "address"
      },
      {
        internalType: "contract IFeePool",
        name: "feePool",
        type: "address"
      },
      {
        internalType: "contract IFeePurse",
        name: "feePurse",
        type: "address"
      },
      {
        internalType: "contract IBadge",
        name: "badge",
        type: "address"
      },
      {
        internalType: "contract IOperator",
        name: "operatorMgr",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4"
      }
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "marketId",
        type: "address"
      },
      {
        internalType: "address",
        name: "provider",
        type: "address"
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "lid",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "maxPrice",
        type: "uint256"
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]"
      },
      {
        internalType: "uint256",
        name: "txDeadline",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "operator",
        type: "uint256"
      }
    ],
    name: "swapQuoteForBase",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "marketId",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "lid",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "expireAt",
        type: "uint256"
      }
    ],
    name: "togglePause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address"
      }
    ],
    name: "transferToFeePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "offerId",
        type: "uint256"
      }
    ],
    name: "unacceptOffer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "marketId",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "lid",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "deduct",
        type: "bool"
      },
      {
        internalType: "address",
        name: "target",
        type: "address"
      },
      {
        internalType: "uint256[2]",
        name: "amountAndPrice",
        type: "uint256[2]"
      },
      {
        internalType: "uint256[]",
        name: "wantOrIds",
        type: "uint256[]"
      },
      {
        internalType: "uint256[]",
        name: "wantAndIds",
        type: "uint256[]"
      },
      {
        internalType: "uint256[5]",
        name: "limits",
        type: "uint256[5]"
      }
    ],
    name: "updateFungibleLiquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "marketId",
        type: "address"
      },
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "lid",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "expireAt",
        type: "uint256"
      }
    ],
    name: "updateLiquidityPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "marketId",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "lid",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "deduct",
        type: "bool"
      },
      {
        internalType: "address",
        name: "target",
        type: "address"
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]"
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256"
      },
      {
        internalType: "uint256[]",
        name: "wantOrIds",
        type: "uint256[]"
      },
      {
        internalType: "uint256[]",
        name: "wantAndIds",
        type: "uint256[]"
      },
      {
        internalType: "uint256[3]",
        name: "limits",
        type: "uint256[3]"
      }
    ],
    name: "updateNonFungibleLiquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "offerId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256"
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]"
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
      }
    ],
    name: "updateOffer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "marketId",
        type: "address"
      },
      {
        internalType: "address",
        name: "provider",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "lid",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "incr",
        type: "bool"
      }
    ],
    name: "updateOpenDisputesCount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address"
      }
    ],
    name: "withdrawFeeBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address"
      }
    ],
    name: "withdrawInventorBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address"
      }
    ],
    name: "withdrawOperatorBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

// src/abi/DisputeManager.json
var DisputeManager_default = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address"
      },
      {
        internalType: "address",
        name: "_marketCore",
        type: "address"
      },
      {
        internalType: "address",
        name: "_core",
        type: "address"
      },
      {
        internalType: "address",
        name: "_medMgrAddr",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_predictDur",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_evidenceDur",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "marketId",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "orderId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "disputeId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "address",
        name: "committer",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ticketIdx",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "hash",
        type: "bytes32"
      }
    ],
    name: "Committed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "marketId",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "orderId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "disputeId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "address",
        name: "executor",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "abandoned",
        type: "bool"
      },
      {
        indexed: false,
        internalType: "bytes1",
        name: "winningVote",
        type: "bytes1"
      }
    ],
    name: "DecisionExecuted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "orderId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "address",
        name: "creator",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "wantRelease",
        type: "bool"
      }
    ],
    name: "DisputeCreated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "marketId",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ticketId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "orderID",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "disputeID",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "address",
        name: "drafter",
        type: "address"
      }
    ],
    name: "Drafted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "marketId",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "poolId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "orderId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ticketId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "address",
        name: "mediator",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "drafter",
        type: "address"
      }
    ],
    name: "DraftedMediator",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "marketId",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "orderId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "disputeId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "address",
        name: "revealer",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ticketIdx",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "bytes1",
        name: "vote",
        type: "bytes1"
      }
    ],
    name: "Revealed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ticketId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "slashed",
        type: "bool"
      },
      {
        indexed: false,
        internalType: "address",
        name: "undrafter",
        type: "address"
      }
    ],
    name: "Undrafted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "UpdatedCore",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "val",
        type: "uint256"
      }
    ],
    name: "UpdatedEvidenceDur",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "UpdatedMarketCore",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "UpdatedMediatorManager",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "val",
        type: "uint256"
      }
    ],
    name: "UpdatedPredictDur",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "val",
        type: "uint256"
      }
    ],
    name: "UpdatedSharedSlashPortion",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "claimer",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "WithdrawnMediatorReward",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "claimer",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "WithdrawnReward",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "orderId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "ticketIdx",
        type: "uint256"
      },
      {
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32"
      }
    ],
    name: "commitVote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "core",
    outputs: [
      {
        internalType: "contract ICore",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "orderId",
        type: "uint256"
      }
    ],
    name: "countDisputes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "orderId",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "wantRelease",
        type: "bool"
      }
    ],
    name: "createDispute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "disputes",
    outputs: [
      {
        internalType: "uint256",
        name: "commitEndAt",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "predictEndAt",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "evidenceEndAt",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "nRelease",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "nCancel",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "undrafted",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "marketId",
        type: "address"
      },
      {
        internalType: "address",
        name: "creator",
        type: "address"
      },
      {
        internalType: "address",
        name: "defendant",
        type: "address"
      },
      {
        internalType: "bool",
        name: "executed",
        type: "bool"
      },
      {
        internalType: "bool",
        name: "wantRelease",
        type: "bool"
      },
      {
        internalType: "bool",
        name: "abandoned",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "orderId",
        type: "uint256"
      }
    ],
    name: "draftMediator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "evidenceDur",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "orderId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "dispIdx",
        type: "uint256"
      }
    ],
    name: "executeDecision",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "orderId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "dispIdx",
        type: "uint256"
      }
    ],
    name: "getDispute",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "commitEndAt",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "predictEndAt",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "evidenceEndAt",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "nRelease",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "nCancel",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "undrafted",
            type: "uint256"
          },
          {
            internalType: "uint256[]",
            name: "ticketIndexes",
            type: "uint256[]"
          },
          {
            internalType: "address",
            name: "marketId",
            type: "address"
          },
          {
            internalType: "address",
            name: "creator",
            type: "address"
          },
          {
            internalType: "address",
            name: "defendant",
            type: "address"
          },
          {
            internalType: "address[]",
            name: "ticketOwners",
            type: "address[]"
          },
          {
            internalType: "bool",
            name: "executed",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "wantRelease",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "abandoned",
            type: "bool"
          }
        ],
        internalType: "struct Dispute",
        name: "",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "marketCore",
    outputs: [
      {
        internalType: "contract IMarketCore",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "mediatorMgr",
    outputs: [
      {
        internalType: "contract IMediatorManager",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "predictDur",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "predictions",
    outputs: [
      {
        internalType: "bool",
        name: "revealed",
        type: "bool"
      },
      {
        internalType: "bytes32",
        name: "committed",
        type: "bytes32"
      },
      {
        internalType: "bytes1",
        name: "vote",
        type: "bytes1"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "orderId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "ticketIdx",
        type: "uint256"
      },
      {
        internalType: "string",
        name: "vote",
        type: "string"
      },
      {
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32"
      }
    ],
    name: "revealVote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "rewardBalanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "rewards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    name: "seenCommits",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "setCore",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "val",
        type: "uint256"
      }
    ],
    name: "setEvidenceDur",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "setMarketCore",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "setMediatorManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "val",
        type: "uint256"
      }
    ],
    name: "setPredictDur",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "val",
        type: "uint256"
      }
    ],
    name: "setSharedSlashPortion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "sharedSlashPortionBP",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "orderId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "dispIdx",
        type: "uint256"
      }
    ],
    name: "undraftMediator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "withdrawReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

// src/abi/ERC20.json
var ERC20_default = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string"
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256"
      }
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256"
      }
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];

// src/abi/ERC721.json
var ERC721_default = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string"
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool"
      }
    ],
    name: "ApprovalForAll",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "operator",
        type: "address"
      }
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool"
      }
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4"
      }
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

// src/abi/Energon.json
var Energon_default = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string"
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string"
      },
      {
        internalType: "uint256",
        name: "_initialSupply",
        type: "uint256"
      },
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "AddRecipient",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "minter",
        type: "address"
      }
    ],
    name: "AddedMinter",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [],
    name: "AllocationDisabled",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "addr",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nonce",
        type: "uint256"
      }
    ],
    name: "Claimed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "Minted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "minter",
        type: "address"
      }
    ],
    name: "RemovedMinter",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "UpdatedAllocator",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "addrs",
        type: "address[]"
      }
    ],
    name: "addMinters",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "addRecipient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "allocDisabled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "allocator",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes"
      },
      {
        internalType: "uint8",
        name: "_sigNonce",
        type: "uint8"
      }
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256"
      }
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "disableAllocation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "disableRecipientBlock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256"
      }
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "minters",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "numMinters",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "recipientsAllowlist",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "recipientsBlocked",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "removeMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "setAllocator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    name: "usedNonce",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

// src/abi/FeePool.json
var FeePool_default = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenPool",
        type: "address"
      },
      {
        internalType: "address",
        name: "_notifier",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "Recovered",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256"
      }
    ],
    name: "RewardAdded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256"
      }
    ],
    name: "RewardNFTWithdrawn",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256"
      }
    ],
    name: "RewardWithdrawn",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "address",
        name: "nftAddress",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "StakedNFT",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "UpdatedBadgeManager",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "UpdatedNFT",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "UpdatedNotifier",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string[2][]",
        name: "badges",
        type: "string[2][]"
      }
    ],
    name: "UpdatedReqBadges",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "dur",
        type: "uint256"
      }
    ],
    name: "UpdatedRewardDuration",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "UpdatedTokenPool",
    type: "event"
  },
  {
    inputs: [],
    name: "badge",
    outputs: [
      {
        internalType: "contract IBadge",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "canStake",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        internalType: "address",
        name: "feeToken",
        type: "address"
      }
    ],
    name: "earned",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "getAddressOfNFT",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "feeToken",
        type: "address"
      }
    ],
    name: "getRewardForDuration",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "feeToken",
        type: "address"
      }
    ],
    name: "lastTimeRewardApplicable",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "lastUpdateTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "nft",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "nftBalanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "feeToken",
        type: "address"
      }
    ],
    name: "nftEarned",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "notifier",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "feeToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "notifyFeeDeposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "notifyStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "notifyWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "periodFinish",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256"
      }
    ],
    name: "recoverERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "requiredBadges",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "feeToken",
        type: "address"
      }
    ],
    name: "rewardPerToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "rewardPerTokenStored",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "rewardRates",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "rewards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "rewardsDuration",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "setBadgeManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "setNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "setNotifier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string[2][]",
        name: "badges",
        type: "string[2][]"
      }
    ],
    name: "setRequiredBadges",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "dur",
        type: "uint256"
      }
    ],
    name: "setRewardDuration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "setTokenPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "stakeNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address"
      }
    ],
    name: "tokenBalanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "tokenPool",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "tokens",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "userRewardPerTokenPaid",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "feeToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "withdrawNFTReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "feeToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "withdrawReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

// src/abi/LPPool.json
var LPPool_default = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_poolToken",
        type: "address"
      },
      {
        internalType: "address",
        name: "_rewardsToken",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "Locked",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "Paused",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "Recovered",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256"
      }
    ],
    name: "RewardAdded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256"
      }
    ],
    name: "RewardWithdrawn",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "Unlocked",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "Unpaused",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "earned",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getRewardForDuration",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "lastTimeRewardApplicable",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "lastUpdateTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "lock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_rewardAmount",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_rewardsDuration",
        type: "uint256"
      }
    ],
    name: "notifyRewardDeposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "periodFinish",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "poolToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256"
      }
    ],
    name: "recoverERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "rewardPerToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "rewardPerTokenStored",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "rewardRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "rewards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "rewardsDuration",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "rewardsToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "setPoolToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "unlock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "userRewardPerTokenPaid",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "withdrawReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

// src/abi/MarketCore.json
var MarketCore_default = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_defaultDisputeDelayDur",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "id",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "AllowedPut",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "id",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "AllowedSwap",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "id",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "base",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "quote",
        type: "address"
      },
      {
        indexed: false,
        internalType: "enum Structs.AssetType",
        name: "baseType",
        type: "uint8"
      },
      {
        indexed: false,
        internalType: "enum Structs.AssetType",
        name: "quoteType",
        type: "uint8"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "permPut",
        type: "bool"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "permSwap",
        type: "bool"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "commission",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "mediatePoolId",
        type: "uint256"
      }
    ],
    name: "NewMarket",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "id",
        type: "address"
      }
    ],
    name: "OfferOnlyEnabled",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "id",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "RenouncedMarket",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "id",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "RevokedPut",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "id",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "RevokedSwap",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "id",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "oldOwner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "TransferredOwnership",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "UpdatedBadgeAddr",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "id",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "val",
        type: "uint256"
      }
    ],
    name: "UpdatedCommission",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "val",
        type: "uint256"
      }
    ],
    name: "UpdatedDefaultDisputeDelayDur",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "id",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "disputeDelayDur",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "evidenceDur",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "predictDur",
        type: "uint256"
      }
    ],
    name: "UpdatedDisputeDurations",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "id",
        type: "address"
      },
      {
        indexed: false,
        internalType: "string[2][]",
        name: "",
        type: "string[2][]"
      },
      {
        indexed: false,
        internalType: "string[2][]",
        name: "",
        type: "string[2][]"
      }
    ],
    name: "UpdatedMarketBadges",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "id",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "mgr",
        type: "address"
      }
    ],
    name: "UpdatedMarketManager",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "addr",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "added",
        type: "bool"
      }
    ],
    name: "WriterUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "id",
        type: "address"
      }
    ],
    name: "ZeroPriceEnabled",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "id",
        type: "address"
      }
    ],
    name: "allowZeroOfferPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "badge",
    outputs: [
      {
        internalType: "contract IBadge",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "base",
        type: "address"
      },
      {
        internalType: "address",
        name: "quote",
        type: "address"
      },
      {
        internalType: "enum Structs.AssetType",
        name: "baseType",
        type: "uint8"
      },
      {
        internalType: "enum Structs.AssetType",
        name: "quoteType",
        type: "uint8"
      },
      {
        internalType: "bool",
        name: "permPut",
        type: "bool"
      },
      {
        internalType: "bool",
        name: "permSwap",
        type: "bool"
      },
      {
        internalType: "uint256",
        name: "commission",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "mediatePoolId",
        type: "uint256"
      }
    ],
    name: "createMarket",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "defaultDisputeDelayDur",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "id",
        type: "address"
      }
    ],
    name: "getMarket",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "createdAt",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "numOrders",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "numDisputes",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "numLiquidity",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "commission",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "poolId",
            type: "uint256"
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "disputeDelayDur",
                type: "uint256"
              },
              {
                internalType: "uint256",
                name: "evidenceDur",
                type: "uint256"
              },
              {
                internalType: "uint256",
                name: "predictDur",
                type: "uint256"
              }
            ],
            internalType: "struct Structs.MarketDur",
            name: "dur",
            type: "tuple"
          },
          {
            internalType: "address",
            name: "creator",
            type: "address"
          },
          {
            internalType: "address",
            name: "manager",
            type: "address"
          },
          {
            components: [
              {
                internalType: "address",
                name: "addr",
                type: "address"
              },
              {
                internalType: "enum Structs.AssetType",
                name: "assetType",
                type: "uint8"
              }
            ],
            internalType: "struct Structs.Asset",
            name: "base",
            type: "tuple"
          },
          {
            components: [
              {
                internalType: "address",
                name: "addr",
                type: "address"
              },
              {
                internalType: "enum Structs.AssetType",
                name: "assetType",
                type: "uint8"
              }
            ],
            internalType: "struct Structs.Asset",
            name: "quote",
            type: "tuple"
          },
          {
            components: [
              {
                internalType: "bool",
                name: "put",
                type: "bool"
              },
              {
                internalType: "bool",
                name: "swap",
                type: "bool"
              },
              {
                internalType: "bool",
                name: "offerOnly",
                type: "bool"
              },
              {
                internalType: "bool",
                name: "allowZeroOfferPrice",
                type: "bool"
              }
            ],
            internalType: "struct Structs.MarketPerms",
            name: "perms",
            type: "tuple"
          }
        ],
        internalType: "struct Structs.Market",
        name: "",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "id",
        type: "address"
      }
    ],
    name: "getReqBadges",
    outputs: [
      {
        internalType: "string[2][]",
        name: "",
        type: "string[2][]"
      },
      {
        internalType: "string[2][]",
        name: "",
        type: "string[2][]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "id",
        type: "address"
      }
    ],
    name: "hasMarket",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "id",
        type: "address"
      },
      {
        internalType: "address",
        name: "sender",
        type: "address"
      }
    ],
    name: "isPutPermitted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "id",
        type: "address"
      },
      {
        internalType: "address",
        name: "sender",
        type: "address"
      }
    ],
    name: "isSwapPermitted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "id",
        type: "address"
      }
    ],
    name: "markAsOfferOnly",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "markets",
    outputs: [
      {
        internalType: "uint256",
        name: "createdAt",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "numOrders",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "numDisputes",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "numLiquidity",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "commission",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "poolId",
        type: "uint256"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "disputeDelayDur",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "evidenceDur",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "predictDur",
            type: "uint256"
          }
        ],
        internalType: "struct Structs.MarketDur",
        name: "dur",
        type: "tuple"
      },
      {
        internalType: "address",
        name: "creator",
        type: "address"
      },
      {
        internalType: "address",
        name: "manager",
        type: "address"
      },
      {
        components: [
          {
            internalType: "address",
            name: "addr",
            type: "address"
          },
          {
            internalType: "enum Structs.AssetType",
            name: "assetType",
            type: "uint8"
          }
        ],
        internalType: "struct Structs.Asset",
        name: "base",
        type: "tuple"
      },
      {
        components: [
          {
            internalType: "address",
            name: "addr",
            type: "address"
          },
          {
            internalType: "enum Structs.AssetType",
            name: "assetType",
            type: "uint8"
          }
        ],
        internalType: "struct Structs.Asset",
        name: "quote",
        type: "tuple"
      },
      {
        components: [
          {
            internalType: "bool",
            name: "put",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "swap",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "offerOnly",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "allowZeroOfferPrice",
            type: "bool"
          }
        ],
        internalType: "struct Structs.MarketPerms",
        name: "perms",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "id",
        type: "address"
      },
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "permitPut",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "id",
        type: "address"
      },
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "permitSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "putAllowList",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "id",
        type: "address"
      }
    ],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "renouncedMarkets",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "reqPutBadges",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "reqSwapBadges",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "id",
        type: "address"
      },
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "revokePut",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "id",
        type: "address"
      },
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "revokeSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "setBadgeMgr",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "id",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "val",
        type: "uint256"
      }
    ],
    name: "setCommission",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "id",
        type: "address"
      },
      {
        internalType: "bool",
        name: "numOrders",
        type: "bool"
      },
      {
        internalType: "bool",
        name: "numDisputes",
        type: "bool"
      },
      {
        internalType: "bool",
        name: "numLiquidity",
        type: "bool"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "setCounters",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "val",
        type: "uint256"
      }
    ],
    name: "setDefaultDisputeDelayDuration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "id",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "disputeDelayDur",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "evidenceDur",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "predictDur",
        type: "uint256"
      }
    ],
    name: "setDisputeDurations",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "id",
        type: "address"
      },
      {
        internalType: "address",
        name: "mgr",
        type: "address"
      }
    ],
    name: "setManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "id",
        type: "address"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "createdAt",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "numOrders",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "numDisputes",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "numLiquidity",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "commission",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "poolId",
            type: "uint256"
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "disputeDelayDur",
                type: "uint256"
              },
              {
                internalType: "uint256",
                name: "evidenceDur",
                type: "uint256"
              },
              {
                internalType: "uint256",
                name: "predictDur",
                type: "uint256"
              }
            ],
            internalType: "struct Structs.MarketDur",
            name: "dur",
            type: "tuple"
          },
          {
            internalType: "address",
            name: "creator",
            type: "address"
          },
          {
            internalType: "address",
            name: "manager",
            type: "address"
          },
          {
            components: [
              {
                internalType: "address",
                name: "addr",
                type: "address"
              },
              {
                internalType: "enum Structs.AssetType",
                name: "assetType",
                type: "uint8"
              }
            ],
            internalType: "struct Structs.Asset",
            name: "base",
            type: "tuple"
          },
          {
            components: [
              {
                internalType: "address",
                name: "addr",
                type: "address"
              },
              {
                internalType: "enum Structs.AssetType",
                name: "assetType",
                type: "uint8"
              }
            ],
            internalType: "struct Structs.Asset",
            name: "quote",
            type: "tuple"
          },
          {
            components: [
              {
                internalType: "bool",
                name: "put",
                type: "bool"
              },
              {
                internalType: "bool",
                name: "swap",
                type: "bool"
              },
              {
                internalType: "bool",
                name: "offerOnly",
                type: "bool"
              },
              {
                internalType: "bool",
                name: "allowZeroOfferPrice",
                type: "bool"
              }
            ],
            internalType: "struct Structs.MarketPerms",
            name: "perms",
            type: "tuple"
          }
        ],
        internalType: "struct Structs.Market",
        name: "upd",
        type: "tuple"
      }
    ],
    name: "setMarket",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "id",
        type: "address"
      },
      {
        internalType: "string[2][]",
        name: "put",
        type: "string[2][]"
      },
      {
        internalType: "string[2][]",
        name: "swap",
        type: "string[2][]"
      }
    ],
    name: "setRequiredBadges",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "swapAllowList",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "id",
        type: "address"
      },
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      },
      {
        internalType: "bool",
        name: "add",
        type: "bool"
      }
    ],
    name: "updateWriter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "writers",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

// src/abi/MediatorManager.json
var MediatorManager_default = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address"
      },
      {
        internalType: "address",
        name: "_marketCore",
        type: "address"
      },
      {
        internalType: "address",
        name: "_randAddr",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_ticketCancelDur",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_ticketMatureDur",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_ticketExpireDur",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "marketId",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ticketId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "orderID",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "disputeID",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "address",
        name: "drafter",
        type: "address"
      }
    ],
    name: "Drafted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "poolId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ticketId",
        type: "uint256"
      }
    ],
    name: "JoinedPool",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256"
      }
    ],
    name: "TicketCancelled",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "TicketDrained",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "poolId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "matureAt",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "joinBy",
        type: "uint256"
      }
    ],
    name: "TicketPurchased",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ticketId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "voted",
        type: "bool"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "winSide",
        type: "bool"
      }
    ],
    name: "TicketSlashed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ticketId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "slashed",
        type: "bool"
      },
      {
        indexed: false,
        internalType: "address",
        name: "undrafter",
        type: "address"
      }
    ],
    name: "Undrafted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "val",
        type: "address"
      }
    ],
    name: "UpdatedDisputeManager",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "val",
        type: "address"
      }
    ],
    name: "UpdatedMarketCore",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "val",
        type: "address"
      }
    ],
    name: "UpdatedRandomnessProvider",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "val",
        type: "uint256"
      }
    ],
    name: "UpdatedTicketCancelDuration",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "val",
        type: "uint256"
      }
    ],
    name: "UpdatedTicketExpireDuration",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "val",
        type: "uint256"
      }
    ],
    name: "UpdatedTicketMatureDuration",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "baseTicketPrice",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "windowDur",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ticketsPerWindow",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "baseTicketSupply",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "priceSupplyDeltaBP",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "minInactiveWindowBeforeReset",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "soldOutBP",
        type: "uint256"
      }
    ],
    name: "UpdatedTicketParams",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "poolId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reqBond",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "draftReward",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "winReward",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "noVoteSlashBP",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "loseVoteSlashBP",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "numDraftees",
        type: "uint256"
      }
    ],
    name: "UpdatedTicketPool",
    type: "event"
  },
  {
    inputs: [],
    name: "baseTicketPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256"
      }
    ],
    name: "cancelTicket",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "disputeManager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "marketId",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "orderID",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "disputeID",
        type: "uint256"
      }
    ],
    name: "draft",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "idx",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "poolId",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "bond",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "matureAt",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "poolIdx",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "cancelAt",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "joinBy",
            type: "uint256"
          },
          {
            internalType: "bool",
            name: "drafted",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "joined",
            type: "bool"
          }
        ],
        internalType: "struct Structs.Ticket",
        name: "",
        type: "tuple"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256"
      }
    ],
    name: "drainTicket",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256"
      }
    ],
    name: "getTicket",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "idx",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "poolId",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "bond",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "matureAt",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "poolIdx",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "cancelAt",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "joinBy",
            type: "uint256"
          },
          {
            internalType: "bool",
            name: "drafted",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "joined",
            type: "bool"
          }
        ],
        internalType: "struct Structs.Ticket",
        name: "",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "poolId",
        type: "uint256"
      }
    ],
    name: "getTicketPool",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "reqBond",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "draftReward",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "winReward",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "noVoteSlashBP",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "loseVoteSlashBP",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "numDraftees",
            type: "uint256"
          }
        ],
        internalType: "struct Structs.TicketPool",
        name: "",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getTicketPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "ticketId",
        type: "uint256"
      }
    ],
    name: "join",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "marketCore",
    outputs: [
      {
        internalType: "contract IMarketCore",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "minInactiveWindowBeforeReset",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "numWindows",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "poolId",
        type: "uint256"
      }
    ],
    name: "poolExists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "poolTickets",
    outputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "idx",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "pools",
    outputs: [
      {
        internalType: "uint256",
        name: "reqBond",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "draftReward",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "winReward",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "noVoteSlashBP",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "loseVoteSlashBP",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "numDraftees",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "priceSupplyDeltaBP",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "poolId",
        type: "uint256"
      }
    ],
    name: "purchaseTicket",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "randomness",
    outputs: [
      {
        internalType: "contract IRandomness",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_disputeManager",
        type: "address"
      }
    ],
    name: "setDisputeManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_marketCore",
        type: "address"
      }
    ],
    name: "setMarketCore",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "provider",
        type: "address"
      }
    ],
    name: "setRandomnessProvider",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "dur",
        type: "uint256"
      }
    ],
    name: "setTicketCancelDuration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "dur",
        type: "uint256"
      }
    ],
    name: "setTicketExpireDuration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_baseTicketPrice",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_windowDur",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_ticketsPerWindow",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_baseTicketSupply",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_priceSupplyDeltaBP",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_minInactiveWindowBeforeReset",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_soldOutBP",
        type: "uint256"
      }
    ],
    name: "setTicketMarketParams",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "dur",
        type: "uint256"
      }
    ],
    name: "setTicketMatureDuration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "soldOutBP",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "ticketCancelDur",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "ticketExpireDur",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "ticketMatureDur",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "ticketSold",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "ticketSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "tickets",
    outputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "idx",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "poolId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "bond",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "matureAt",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "poolIdx",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "cancelAt",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "joinBy",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "drafted",
        type: "bool"
      },
      {
        internalType: "bool",
        name: "joined",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "ticketsPerWindow",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "ticketOwner",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "ticketId",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "voted",
        type: "bool"
      },
      {
        internalType: "bool",
        name: "winSide",
        type: "bool"
      }
    ],
    name: "undraft",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "poolId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "reqBond",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "draftReward",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "winReward",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "noVoteSlashBP",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "loseVoteSlashBP",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "numDraftees",
        type: "uint256"
      }
    ],
    name: "updateTicketPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "windowDur",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "windows",
    outputs: [
      {
        internalType: "uint256",
        name: "endTime",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "numPurchases",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "supply",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

// src/abi/NFT.json
var NFT_default = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string"
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string"
      },
      {
        internalType: "string",
        name: "_initBaseURI",
        type: "string"
      },
      {
        internalType: "uint256",
        name: "_maxSupply",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_treasuryEditionSupply",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_feePool",
        type: "address"
      },
      {
        internalType: "address",
        name: "_allocator",
        type: "address"
      },
      {
        internalType: "address",
        name: "_energon",
        type: "address"
      },
      {
        internalType: "address",
        name: "_token",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address"
      }
    ],
    name: "OperatorNotAllowed",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "Allocated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "AllocatorUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "addr",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "slot",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "add",
        type: "bool"
      }
    ],
    name: "AllowAddr",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "allow",
        type: "bool"
      }
    ],
    name: "AllowAlloc",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "allow",
        type: "bool"
      }
    ],
    name: "AllowBurn",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "allow",
        type: "bool"
      }
    ],
    name: "AllowMint",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool"
      }
    ],
    name: "ApprovalForAll",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_burner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "BurnAllowance",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_purpose",
        type: "bytes"
      }
    ],
    name: "BurnedEnergon",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "depositor",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "DepositedEnergon",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "EnergonUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "TokenUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "_new",
        type: "string"
      }
    ],
    name: "UpdatedBaseExtension",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "_new",
        type: "string"
      }
    ],
    name: "UpdatedBaseURI",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "_new",
        type: "string"
      }
    ],
    name: "UpdatedContractURI",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_new",
        type: "uint256"
      }
    ],
    name: "UpdatedCost",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_new",
        type: "uint256"
      }
    ],
    name: "UpdatedMaxMintAmount",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_new",
        type: "uint256"
      }
    ],
    name: "UpdatedMintCost",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amt",
        type: "uint256"
      }
    ],
    name: "Withdrawal",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "withdrawer",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "WithdrawnEnergon",
    type: "event"
  },
  {
    inputs: [],
    name: "OPERATOR_FILTER_REGISTRY",
    outputs: [
      {
        internalType: "contract IOperatorFilterRegistry",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "_contractURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_alloc",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes"
      }
    ],
    name: "allocate",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    name: "allocator",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "slot",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "add",
        type: "bool"
      }
    ],
    name: "allowAddr",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "allowAlloc",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "allowEnergonOps",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "allowMint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "allowlist",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "baseExtension",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "baseURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_burner",
        type: "address"
      }
    ],
    name: "burnAllowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "burnAllowances",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_burner",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "burnApprove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_purpose",
        type: "bytes"
      }
    ],
    name: "burnEnergon",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "contractURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "cost",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "depositEnergon",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "energon",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256"
      }
    ],
    name: "engBalanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "engBalances",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "feePool",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "operator",
        type: "address"
      }
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "maxSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_mintAmount",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "_noEnergon",
        type: "bool"
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes"
      },
      {
        internalType: "uint256",
        name: "expireAt",
        type: "uint256"
      }
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "mintCost",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_fromId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_mintAmount",
        type: "uint256"
      }
    ],
    name: "mintTE",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "mintedByAllowlist",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "mintedByOwner",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "mintedBySig",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "mintedByTreasury",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256"
      }
    ],
    name: "p2pBalanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "p2pBalances",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_salePrice",
        type: "uint256"
      }
    ],
    name: "royaltyInfo",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_allocator",
        type: "address"
      }
    ],
    name: "setAllocator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool"
      }
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_newBaseExtension",
        type: "string"
      }
    ],
    name: "setBaseExtension",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_newBaseURI",
        type: "string"
      }
    ],
    name: "setBaseURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "uri",
        type: "string"
      }
    ],
    name: "setContractURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "setCost",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      },
      {
        internalType: "uint96",
        name: "feeNumerator",
        type: "uint96"
      }
    ],
    name: "setDefaultRoyalty",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_energon",
        type: "address"
      }
    ],
    name: "setEnergon",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "setFeePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "setMintCost",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address"
      }
    ],
    name: "setToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4"
      }
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "toggleAllowAlloc",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "toggleAllowEnergonOps",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "toggleAllowMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256"
      }
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256"
      }
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address"
      }
    ],
    name: "tokensOfOwner",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalAllocated",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "treasuryEditionSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "usedNonce",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "withdrawEnergon",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

// src/abi/Token.json
var Token_default = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string"
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string"
      },
      {
        internalType: "uint256",
        name: "_initialSupply",
        type: "uint256"
      },
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "minter",
        type: "address"
      }
    ],
    name: "AddedMinter",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "Minted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "minter",
        type: "address"
      }
    ],
    name: "RemovedMinter",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "addrs",
        type: "address[]"
      }
    ],
    name: "addMinters",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256"
      }
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256"
      }
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "minters",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "numMinters",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "removeMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

// src/abi/TokenPool.json
var TokenPool_default = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_stakingToken",
        type: "address"
      },
      {
        internalType: "address",
        name: "_rewardsToken",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "Paused",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "Recovered",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256"
      }
    ],
    name: "RewardAdded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256"
      }
    ],
    name: "RewardWithdrawn",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "StakeWithdrawn",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "Staked",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "Unpaused",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "UpdatedBadgeManager",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "UpdatedFeePool",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string[2][]",
        name: "badges",
        type: "string[2][]"
      }
    ],
    name: "UpdatedReqBadges",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "VestStaked",
    type: "event"
  },
  {
    inputs: [],
    name: "badge",
    outputs: [
      {
        internalType: "contract IBadge",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "canStake",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "earned",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "exit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "feePool",
    outputs: [
      {
        internalType: "contract IFeePool",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getRewardForDuration",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "lastTimeRewardApplicable",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "lastUpdateTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_reward",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_rewardsDuration",
        type: "uint256"
      }
    ],
    name: "notifyRewardAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "periodFinish",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256"
      }
    ],
    name: "recoverERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "requiredBadges",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "rewardPerToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "rewardPerTokenStored",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "rewardRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "rewards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "rewardsDuration",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "rewardsToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "setBadgeManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "setFeePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string[2][]",
        name: "badges",
        type: "string[2][]"
      }
    ],
    name: "setRequiredBadges",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_cliffEndAt",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_vestedAt",
        type: "uint256"
      }
    ],
    name: "stakeVested",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "stakingToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "userRewardPerTokenPaid",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "vesting",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "cliffEndAt",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "vestedAt",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "withdrawn",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "withdrawReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

// src/abi/WETH.json
var WETH_default = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "guy",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "dst",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256"
      }
    ],
    name: "Deposit",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "dst",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256"
      }
    ],
    name: "Withdrawal",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "guy",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "dst",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "src",
        type: "address"
      },
      {
        internalType: "address",
        name: "dst",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256"
      }
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    stateMutability: "payable",
    type: "receive"
  }
];

// src/abi/index.ts
var Abi = {
  BadgeManager: BadgeManager_default,
  Core: Core_default,
  DisputeManager: DisputeManager_default,
  Energon: Energon_default,
  MarketCore: MarketCore_default,
  MediatorManager: MediatorManager_default,
  NFT: NFT_default,
  NativeToken: Token_default,
  WETHAbi: WETH_default,
  AssetRegistry: AssetRegistry_default,
  ERC20: ERC20_default,
  ERC721: ERC721_default,
  FeePool: FeePool_default,
  LPPool: LPPool_default,
  TokenPool: TokenPool_default
};

// src/badge_manifest.ts
var BadgeManifests = {
  localhost: {
    "^kyc(/[a-zA-Z]{3})?$": {
      name: "KYC",
      issuer: "Joint Labs",
      issuerAddress: "0x0B9Fc80B571e99C4ea796Eb34E75df59470826F3",
      logoUrl: "https://storage.googleapis.com/joint-images/kyc-badge-icon.svg",
      claimPageUrl: import.meta.env.LOCALHOST_KYC_BADGE_MANIFEST_CLAIM_PAGE_URL ?? import.meta.env.NEXT_PUBLIC_LOCALHOST_KYC_BADGE_MANIFEST_CLAIM_PAGE_URL ?? import.meta.env.VITE_LOCALHOST_KYC_BADGE_MANIFEST_CLAIM_PAGE_URL ?? "http://localhost:3002/claim/kyc",
      shortDescription: "Claim KYC Badge",
      longDescriptions: [
        "Complete the KYC verification process to claim a global or national KYC badge that will grant you access to a market or liquidity that require KYC.",
        "See our [privacy policy](http://joint.exchange/legal/privacy-policy) to learn how we handle your data."
      ]
    }
  },
  sepolia: {
    "^kyc(/[a-zA-Z]{3})?$": {
      name: "KYC",
      issuer: "Joint Labs",
      issuerAddress: "0x7D66e2a2Ad08e8708e92B2f01f36181502D2c964",
      logoUrl: "https://storage.googleapis.com/joint-images/kyc-badge-icon.svg",
      claimPageUrl: import.meta.env.SEPOLIA_KYC_BADGE_MANIFEST_CLAIM_PAGE_URL ?? import.meta.env.NEXT_PUBLIC_SEPOLIA_KYC_BADGE_MANIFEST_CLAIM_PAGE_URL ?? import.meta.env.VITE_SEPOLIA_KYC_BADGE_MANIFEST_CLAIM_PAGE_URL ?? "https://kycbadge.joint.exchange/claim/kyc",
      shortDescription: "Claim KYC Badge",
      longDescriptions: [
        "Complete the KYC verification process to claim a global or national KYC badge that will grant you access to a market or liquidity that require KYC.",
        "See our [privacy policy](http://joint.exchange/legal/privacy-policy) to learn how we handle your data."
      ]
    }
  }
};
function parseBadgeLocals(badge, locals) {
  const badgeAsStr = JSON.stringify(badge);
  let str = badgeAsStr;
  for (const key in locals) {
    str = str.replace(new RegExp(`{${key}}`, "g"), locals[key]);
  }
  return JSON.parse(str);
}

// src/chains.ts
import {
  arbitrum,
  bsc,
  hardhat,
  mainnet,
  optimism,
  polygon,
  sepolia
} from "viem/chains";

// src/icons/BSC.tsx
import React from "react";
function IconBSC(props) {
  return /* @__PURE__ */ React.createElement(
    "svg",
    {
      version: "1.1",
      viewBox: "0 0 58.0 58.0",
      xmlns: "http://www.w3.org/2000/svg",
      ...props
    },
    /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "i0" }, /* @__PURE__ */ React.createElement("path", { d: "M28.8662791,0 C44.8086848,0 57.7325581,12.9244128 57.7325581,28.8674839 C57.7325581,44.8105551 44.8086848,57.7349679 28.8662791,57.7349679 C12.9238734,57.7349679 0,44.8105551 0,28.8674839 C0,12.9244128 12.9238734,0 28.8662791,0 Z" })), /* @__PURE__ */ React.createElement("clipPath", { id: "i1" }, /* @__PURE__ */ React.createElement("path", { d: "M20.21419,0 L24.7710768,4.55108087 L12.3855384,16.9371363 L0.0059959037,4.55707702 L4.55888545,0.00399743598 L12.3855384,7.82897837 L20.21419,0 Z" })), /* @__PURE__ */ React.createElement("clipPath", { id: "i2" }, /* @__PURE__ */ React.createElement("path", { d: "M12.3795425,0 L24.7610837,12.3840567 L20.2081941,16.9371363 L12.3795425,9.10815789 L4.55288955,16.9331388 L0,12.3800592 L12.3795425,0 Z" })), /* @__PURE__ */ React.createElement("clipPath", { id: "i3" }, /* @__PURE__ */ React.createElement("path", { d: "M6.43980761,0 L6.43967322,6.43967322 L0,6.43980761 L0.000134392956,0.000134392956 L6.43980761,0 Z" })), /* @__PURE__ */ React.createElement("clipPath", { id: "i4" }, /* @__PURE__ */ React.createElement("path", { d: "M6.43980761,0 L6.43967322,6.43962589 L0,6.43976028 L0.000134391969,0.000134392956 L6.43980761,0 Z" })), /* @__PURE__ */ React.createElement("clipPath", { id: "i5" }, /* @__PURE__ */ React.createElement("path", { d: "M4.62084312,0 L9.24168624,4.621036 L4.62284176,9.24407071 L0.0059959037,4.62703215 L0.0059959037,4.61503984 L4.62084312,0 Z" }))),
    /* @__PURE__ */ React.createElement("g", { transform: "translate(0.10465116279101494 0.07413893753709999)" }, /* @__PURE__ */ React.createElement("g", { clipPath: "url(#i0)" }, /* @__PURE__ */ React.createElement(
      "polygon",
      {
        points: "0,0 57.7325581,0 57.7325581,57.7349679 0,57.7349679 0,0",
        stroke: "none",
        fill: "#050911"
      }
    )), /* @__PURE__ */ React.createElement("g", { transform: "translate(8.71758710950905 8.718407877430764)" }, /* @__PURE__ */ React.createElement("g", { transform: "translate(7.763153540584426 0.0)" }, /* @__PURE__ */ React.createElement("g", { transform: "translate(0.0 23.36101588065313)" }, /* @__PURE__ */ React.createElement("g", { clipPath: "url(#i1)" }, /* @__PURE__ */ React.createElement(
      "polygon",
      {
        points: "0,0 24.7710768,0 24.7710768,16.9371363 0,16.9371363 0,0",
        stroke: "none",
        fill: "#ECA300"
      }
    ))), /* @__PURE__ */ React.createElement("g", { transform: "translate(0.005995903704853589 0.0)" }, /* @__PURE__ */ React.createElement("g", { clipPath: "url(#i2)" }, /* @__PURE__ */ React.createElement(
      "polygon",
      {
        points: "0,0 24.7610837,0 24.7610837,16.9371363 0,16.9371363 0,0",
        stroke: "none",
        fill: "#ECA300"
      }
    )))), /* @__PURE__ */ React.createElement("g", { transform: "translate(0.0 15.526041355314188)" }, /* @__PURE__ */ React.createElement("g", { transform: "translate(31.189697151016702 4.625826522838987) rotate(-44.99999999999999)" }, /* @__PURE__ */ React.createElement("g", { clipPath: "url(#i3)" }, /* @__PURE__ */ React.createElement(
      "polygon",
      {
        points: "-1.13686838e-13,0 6.43980761,0 6.43980761,6.43980761 -1.13686838e-13,6.43980761 -1.13686838e-13,0",
        stroke: "none",
        fill: "#ECA300"
      }
    ))), /* @__PURE__ */ React.createElement("g", { transform: "translate(-2.717825964282383e-13 4.623387086831677) rotate(-44.99999999999999)" }, /* @__PURE__ */ React.createElement("g", { clipPath: "url(#i4)" }, /* @__PURE__ */ React.createElement(
      "polygon",
      {
        points: "-3.41060513e-13,0 6.43980761,0 6.43980761,6.43976028 -3.41060513e-13,6.43976028 -3.41060513e-13,0",
        stroke: "none",
        fill: "#ECA300"
      }
    ))), /* @__PURE__ */ React.createElement("g", { transform: "translate(15.52784883837921 0.0)" }, /* @__PURE__ */ React.createElement("g", { clipPath: "url(#i5)" }, /* @__PURE__ */ React.createElement(
      "polygon",
      {
        points: "0,0 9.24568351,0 9.24568351,9.24407071 0,9.24407071 0,0",
        stroke: "none",
        fill: "#ECA300"
      }
    ))))))
  );
}

// src/icons/IconArbitrum.tsx
import React2 from "react";
function IconArbitrum(props) {
  return /* @__PURE__ */ React2.createElement(
    "svg",
    {
      id: "b",
      "data-name": "Layer 2",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1226.88 1226.88",
      ...props
    },
    /* @__PURE__ */ React2.createElement("defs", null, /* @__PURE__ */ React2.createElement("style", null, `
          .d {fill: #fff;}

          .e {
          fill: #9dcced;
        }

          .f {
          fill: #213147;
        }

          .g {
          fill: #12aaff;
        }`)),
    /* @__PURE__ */ React2.createElement("g", { id: "c", "data-name": "Layer 3" }, /* @__PURE__ */ React2.createElement("g", null, /* @__PURE__ */ React2.createElement("circle", { className: "f", cx: "613.44", cy: "613.44", r: "613.44" }), /* @__PURE__ */ React2.createElement("g", null, /* @__PURE__ */ React2.createElement(
      "path",
      {
        className: "f",
        d: "m162.91,397.79v431.21c0,27.53,14.71,52.99,38.54,66.71l373.44,215.65c23.83,13.72,53.17,13.72,77,0l373.44-215.65c23.83-13.72,38.54-39.18,38.54-66.71v-431.21c0-27.53-14.71-52.99-38.54-66.71l-373.44-215.65c-23.83-13.72-53.17-13.72-77,0l-373.53,215.65c-23.83,13.72-38.45,39.18-38.45,66.71Z"
      }
    ), /* @__PURE__ */ React2.createElement("g", null, /* @__PURE__ */ React2.createElement(
      "path",
      {
        className: "g",
        d: "m694.86,697.03l-53.26,146.05c-1.44,4.06-1.44,8.49,0,12.55l91.62,251.3,105.97-61.2-127.19-348.7c-2.89-8.03-14.26-8.03-17.15,0Z"
      }
    ), /* @__PURE__ */ React2.createElement(
      "path",
      {
        className: "g",
        d: "m801.65,451.41c-2.89-8.03-14.26-8.03-17.15,0l-53.26,146.05c-1.44,4.06-1.44,8.49,0,12.55l150.11,411.44,105.97-61.2-185.68-508.84Z"
      }
    )), /* @__PURE__ */ React2.createElement(
      "path",
      {
        className: "e",
        d: "m613.35,131.59c2.62,0,5.24.72,7.58,1.99l404.13,233.34c4.69,2.71,7.58,7.76,7.58,13.09v466.59c0,5.42-2.89,10.38-7.58,13.09l-404.13,233.34c-2.26,1.35-4.96,1.99-7.58,1.99s-5.24-.72-7.58-1.99l-404.13-233.16c-4.69-2.71-7.58-7.76-7.58-13.09v-466.68c0-5.42,2.89-10.38,7.58-13.09l404.13-233.34c2.35-1.35,4.96-2.08,7.58-2.08m0-68.15c-14.35,0-28.8,3.7-41.7,11.19l-404.04,233.25c-25.82,14.89-41.7,42.43-41.7,72.21v466.59c0,29.79,15.89,57.32,41.7,72.21l404.13,233.34c12.91,7.4,27.26,11.19,41.7,11.19s28.8-3.7,41.7-11.19l404.13-233.34c25.82-14.89,41.7-42.43,41.7-72.21v-466.59c0-29.79-15.89-57.32-41.7-72.21l-404.22-233.25c-12.91-7.49-27.35-11.19-41.7-11.19h0Z"
      }
    ), /* @__PURE__ */ React2.createElement(
      "polygon",
      {
        className: "f",
        points: "346.07 1021.99 383.26 920.17 458.09 982.36 388.13 1046.27 346.07 1021.99"
      }
    ), /* @__PURE__ */ React2.createElement("g", null, /* @__PURE__ */ React2.createElement(
      "path",
      {
        className: "d",
        d: "m579.32,346.7h-102.45c-7.67,0-14.53,4.78-17.15,12.01l-219.62,602.08,105.97,61.2,241.83-663.01c2.26-5.96-2.17-12.28-8.58-12.28Z"
      }
    ), /* @__PURE__ */ React2.createElement(
      "path",
      {
        className: "d",
        d: "m758.59,346.7h-102.45c-7.67,0-14.53,4.78-17.15,12.01l-250.76,687.48,105.97,61.2,272.97-748.41c2.17-5.96-2.26-12.28-8.58-12.28Z"
      }
    )))))
  );
}

// src/icons/IconEthereum.tsx
import React3 from "react";
function IconEthereum(props) {
  return /* @__PURE__ */ React3.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", ...props }, /* @__PURE__ */ React3.createElement("g", { fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ React3.createElement("circle", { cx: "16", cy: "16", r: "16", fill: "#627EEA" }), /* @__PURE__ */ React3.createElement("g", { fill: "#FFF", fillRule: "nonzero" }, /* @__PURE__ */ React3.createElement("path", { fillOpacity: ".602", d: "M16.498 4v8.87l7.497 3.35z" }), /* @__PURE__ */ React3.createElement("path", { d: "M16.498 4L9 16.22l7.498-3.35z" }), /* @__PURE__ */ React3.createElement("path", { fillOpacity: ".602", d: "M16.498 21.968v6.027L24 17.616z" }), /* @__PURE__ */ React3.createElement("path", { d: "M16.498 27.995v-6.028L9 17.616z" }), /* @__PURE__ */ React3.createElement("path", { fillOpacity: ".2", d: "M16.498 20.573l7.497-4.353-7.497-3.348z" }), /* @__PURE__ */ React3.createElement("path", { fillOpacity: ".602", d: "M9 16.22l7.498 4.353v-7.701z" }))));
}

// src/icons/IconOptimism.tsx
import React4 from "react";
function IconOptimism(props) {
  return /* @__PURE__ */ React4.createElement("svg", { viewBox: "0 0 500 500", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React4.createElement("circle", { cx: "250", cy: "250", r: "250", fill: "#FF0420" }), /* @__PURE__ */ React4.createElement(
    "path",
    {
      d: "M177.133 316.446C162.247 316.446 150.051 312.943 140.544 305.938C131.162 298.808 126.471 288.676 126.471 275.541C126.471 272.789 126.784 269.411 127.409 265.408C129.036 256.402 131.35 245.581 134.352 232.947C142.858 198.547 164.812 181.347 200.213 181.347C209.845 181.347 218.476 182.973 226.107 186.225C233.738 189.352 239.742 194.106 244.12 200.486C248.498 206.74 250.688 214.246 250.688 223.002C250.688 225.629 250.375 228.944 249.749 232.947C247.873 244.08 245.621 254.901 242.994 265.408C238.616 282.546 231.048 295.368 220.29 303.874C209.532 312.255 195.147 316.446 177.133 316.446ZM179.76 289.426C186.766 289.426 192.707 287.362 197.586 283.234C202.59 279.106 206.155 272.789 208.281 264.283C211.158 252.524 213.348 242.266 214.849 233.51C215.349 230.883 215.599 228.194 215.599 225.441C215.599 214.058 209.657 208.366 197.774 208.366C190.768 208.366 184.764 210.43 179.76 214.558C174.882 218.687 171.379 225.004 169.253 233.51C167.001 241.891 164.749 252.149 162.498 264.283C161.997 266.784 161.747 269.411 161.747 272.163C161.747 283.672 167.752 289.426 179.76 289.426Z",
      fill: "white"
    }
  ), /* @__PURE__ */ React4.createElement(
    "path",
    {
      d: "M259.303 314.57C257.927 314.57 256.863 314.132 256.113 313.256C255.487 312.255 255.3 311.13 255.55 309.879L281.444 187.914C281.694 186.538 282.382 185.412 283.508 184.536C284.634 183.661 285.822 183.223 287.073 183.223H336.985C350.87 183.223 362.003 186.1 370.384 191.854C378.891 197.609 383.144 205.927 383.144 216.81C383.144 219.937 382.769 223.19 382.018 226.567C378.891 240.953 372.574 251.586 363.067 258.466C353.685 265.346 340.8 268.786 324.413 268.786H299.082L290.451 309.879C290.2 311.255 289.512 312.38 288.387 313.256C287.261 314.132 286.072 314.57 284.822 314.57H259.303ZM325.727 242.892C330.98 242.892 335.546 241.453 339.424 238.576C343.427 235.699 346.054 231.571 347.305 226.192C347.68 224.065 347.868 222.189 347.868 220.563C347.868 216.935 346.805 214.183 344.678 212.307C342.551 210.305 338.924 209.305 333.795 209.305H311.278L304.148 242.892H325.727Z",
      fill: "white"
    }
  ));
}

// src/icons/IconPolygon.tsx
import React5 from "react";
function IconPolygon(props) {
  return /* @__PURE__ */ React5.createElement(
    "svg",
    {
      id: "Layer_1",
      fill: "#8247e5",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 507.91 446.91",
      ...props
    },
    /* @__PURE__ */ React5.createElement(
      "path",
      {
        className: "cls-1",
        d: "M384.58,136.59c-9.28-5.3-21.22-5.3-31.83,0l-74.26,43.77L228.1,208.2,155.16,252c-9.28,5.3-21.22,5.3-31.83,0l-57-34.48a32.33,32.33,0,0,1-15.92-27.85V123.33c0-10.61,5.31-21.22,15.92-27.85l57-33.15c9.28-5.31,21.22-5.31,31.83,0l57,34.48a32.31,32.31,0,0,1,15.92,27.85v43.76l50.39-29.18V94.16c0-10.61-5.3-21.22-15.91-27.85L156.48,4c-9.28-5.31-21.21-5.31-31.82,0L15.91,67.63C5.3,72.94,0,83.55,0,94.16V218.81C0,229.42,5.3,240,15.91,246.66L123.33,309c9.28,5.31,21.22,5.31,31.83,0l72.94-42.44,50.39-29.17,72.94-42.44c9.28-5.3,21.22-5.3,31.83,0l57,33.16A32.32,32.32,0,0,1,456.19,256v66.3c0,10.61-5.3,21.22-15.91,27.85l-55.7,33.16c-9.28,5.3-21.22,5.3-31.83,0l-57-33.16a32.32,32.32,0,0,1-15.91-27.85V279.82L229.42,309v43.76c0,10.61,5.31,21.22,15.92,27.85l107.41,62.33c9.29,5.31,21.22,5.31,31.83,0L492,380.6a32.32,32.32,0,0,0,15.91-27.85v-126c0-10.61-5.3-21.22-15.91-27.85Z"
      }
    )
  );
}

// src/types/token.ts
import { isAddressEqual } from "viem";
var TokenInfo = class {
  address;
  name;
  symbol;
  decimals;
  logoURI;
  abi;
  constructor(props) {
    return Object.assign(this, props);
  }
  /**
   * Checks whether the object is equal to o
   * @param o - The other object
   */
  isEqual(o) {
    if (!this.address || !o.address)
      return false;
    return isAddressEqual(
      this.address,
      o.address
    );
  }
};

// src/chains.ts
var Chains = [
  {
    disabled: true,
    displayName: "Ethereum",
    queryName: "ethereum",
    chainId: mainnet.id,
    chain: mainnet,
    symbol: "ETH",
    apiUrl: import.meta.env.ETHEREUM_API_URL ?? import.meta.env.NEXT_PUBLIC_ETHEREUM_API_URL ?? import.meta.env.VITE_ETHEREUM_API_URL,
    rpcUrl: import.meta.env.ETHEREUM_RPC_URL ?? import.meta.env.NEXT_PUBLIC_ETHEREUM_RPC_URL ?? import.meta.env.VITE_ETHEREUM_RPC_URL,
    blockExplorer: "https://etherscan.io",
    logoPath: IconEthereum,
    wrappedTokenInfo: new TokenInfo({
      address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      name: "WETH",
      symbol: "WETH",
      abi: WETH_default,
      decimals: 18,
      logoURI: "https://assets-cdn.trustwallet.com/blockchains/optimism/assets/0x4200000000000000000000000000000000000006/logo.png"
    }),
    contracts: {
      core: {
        address: import.meta.env.ETHEREUM_CORE_ADDRESS ?? import.meta.env.NEXT_PUBLIC_ETHEREUM_CORE_ADDRESS ?? import.meta.env.VITE_ETHEREUM_CORE_ADDRESS,
        abi: Core_default
      },
      token: {
        address: import.meta.env.ETHEREUM_TOKEN_ADDRESS ?? import.meta.env.NEXT_PUBLIC_ETHEREUM_TOKEN_ADDRESS ?? import.meta.env.VITE_ETHEREUM_TOKEN_ADDRESS,
        abi: Token_default
      },
      badgeManager: {
        address: import.meta.env.ETHEREUM_BADGE_MGR_ADDRESS ?? import.meta.env.NEXT_PUBLIC_ETHEREUM_BADGE_MGR_ADDRESS ?? import.meta.env.VITE_ETHEREUM_BADGE_MGR_ADDRESS,
        abi: BadgeManager_default
      },
      marketCore: {
        address: import.meta.env.ETHEREUM_MARKET_CORE_ADDRESS ?? import.meta.env.NEXT_PUBLIC_ETHEREUM_MARKET_CORE_ADDRESS ?? import.meta.env.VITE_ETHEREUM_MARKET_CORE_ADDRESS,
        abi: MarketCore_default
      },
      disputeManager: {
        address: import.meta.env.ETHEREUM_DISPUTE_MGR_ADDRESS ?? import.meta.env.NEXT_PUBLIC_ETHEREUM_DISPUTE_MGR_ADDRESS ?? import.meta.env.VITE_ETHEREUM_DISPUTE_MGR_ADDRESS,
        abi: DisputeManager_default
      },
      mediatorManager: {
        address: import.meta.env.ETHEREUM_MEDIATOR_MGR_ADDRESS ?? import.meta.env.NEXT_PUBLIC_ETHEREUM_MEDIATOR_MGR_ADDRESS ?? import.meta.env.VITE_ETHEREUM_MEDIATOR_MGR_ADDRESS,
        abi: MediatorManager_default
      },
      energon: {
        address: import.meta.env.ETHEREUM_ENERGON_ADDRESS ?? import.meta.env.NEXT_PUBLIC_ETHEREUM_ENERGON_ADDRESS ?? import.meta.env.VITE_ETHEREUM_ENERGON_ADDRESS,
        abi: Energon_default
      },
      nft: {
        address: import.meta.env.ETHEREUM_NFT_ADDRESS ?? import.meta.env.NEXT_PUBLIC_ETHEREUM_NFT_ADDRESS ?? import.meta.env.VITE_ETHEREUM_NFT_ADDRESS,
        abi: NFT_default
      }
    }
  },
  {
    disabled: true,
    displayName: "Polygon",
    queryName: "polygon",
    chainId: polygon.id,
    chain: polygon,
    symbol: "MATIC",
    apiUrl: import.meta.env.POLYGON_API_URL ?? import.meta.env.NEXT_PUBLIC_POLYGON_API_URL ?? import.meta.env.VITE_POLYGON_API_URL,
    rpcUrl: import.meta.env.POLYGON_RPC_URL ?? import.meta.env.NEXT_PUBLIC_POLYGON_RPC_URL ?? import.meta.env.VITE_POLYGON_RPC_URL,
    blockExplorer: "https://polygonscan.com",
    logoPath: IconPolygon,
    wrappedTokenInfo: new TokenInfo({
      address: import.meta.env.POLYGON_WRAPPED_TOKEN_ADDRESS ?? import.meta.env.NEXT_PUBLIC_POLYGON_WRAPPED_TOKEN_ADDRESS ?? import.meta.env.VITE_POLYGON_WRAPPED_TOKEN_ADDRESS,
      name: "WMATIC",
      symbol: "WMATIC",
      abi: WETH_default,
      decimals: 18,
      logoURI: "https://assets-cdn.trustwallet.com/blockchains/polygon/assets/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270/logo.png"
    })
  },
  {
    disabled: true,
    displayName: "Optimism",
    queryName: "optimism",
    chainId: optimism.id,
    chain: optimism,
    symbol: "ETH",
    apiUrl: import.meta.env.OPTIMISM_API_URL ?? import.meta.env.NEXT_PUBLIC_OPTIMISM_API_URL ?? import.meta.env.VITE_OPTIMISM_API_URL,
    rpcUrl: import.meta.env.OPTIMISM_RPC_URL ?? import.meta.env.NEXT_PUBLIC_OPTIMISM_RPC_URL ?? import.meta.env.VITE_OPTIMISM_RPC_URL,
    blockExplorer: "https://optimistic.etherscan.io",
    logoPath: IconOptimism,
    wrappedTokenInfo: new TokenInfo({
      address: import.meta.env.OPTIMISM_WRAPPED_TOKEN_ADDRESS ?? import.meta.env.NEXT_PUBLIC_OPTIMISM_WRAPPED_TOKEN_ADDRESS ?? import.meta.env.VITE_OPTIMISM_WRAPPED_TOKEN_ADDRESS,
      name: "WETH",
      symbol: "WETH",
      decimals: 18,
      abi: WETH_default,
      logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png"
    })
  },
  {
    disabled: true,
    displayName: "Binance Chain",
    altDisplayName: "BSC",
    queryName: "binance-chain",
    chainId: bsc.id,
    chain: bsc,
    symbol: "BNB",
    apiUrl: import.meta.env.BINANCE_API_URL ?? import.meta.env.NEXT_PUBLIC_BINANCE_API_URL ?? import.meta.env.VITE_BINANCE_API_URL,
    rpcUrl: import.meta.env.BINANCE_RPC_URL ?? import.meta.env.NEXT_PUBLIC_BINANCE_RPC_URL ?? import.meta.env.VITE_BINANCE_RPC_URL,
    blockExplorer: "https://bscscan.com",
    logoPath: IconBSC,
    wrappedTokenInfo: new TokenInfo({
      address: import.meta.env.BINANCE_WRAPPED_TOKEN_ADDRESS ?? import.meta.env.NEXT_PUBLIC_BINANCE_WRAPPED_TOKEN_ADDRESS ?? import.meta.env.VITE_BINANCE_WRAPPED_TOKEN_ADDRESS,
      name: "WBNB",
      symbol: "WBNB",
      decimals: 18,
      abi: WETH_default,
      logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png"
    })
  },
  {
    disabled: true,
    displayName: "Arbitrum",
    queryName: "arbitrum",
    chainId: arbitrum.id,
    chain: arbitrum,
    symbol: "ETH",
    apiUrl: import.meta.env.ARBITRUM_API_URL ?? import.meta.env.NEXT_PUBLIC_ARBITRUM_API_URL ?? import.meta.env.VITE_ARBITRUM_API_URL,
    rpcUrl: import.meta.env.ARBITRUM_RPC_URL ?? import.meta.env.NEXT_PUBLIC_ARBITRUM_RPC_URL ?? import.meta.env.VITE_ARBITRUM_RPC_URL,
    blockExplorer: "https://arbiscan.io",
    logoPath: IconArbitrum,
    wrappedTokenInfo: new TokenInfo({
      address: import.meta.env.ARBITRUM_WRAPPED_TOKEN_ADDRESS ?? import.meta.env.NEXT_PUBLIC_ARBITRUM_WRAPPED_TOKEN_ADDRESS ?? import.meta.env.VITE_ARBITRUM_WRAPPED_TOKEN_ADDRESS,
      name: "WETH",
      symbol: "WETH",
      decimals: 18,
      abi: WETH_default,
      logoURI: "https://assets-cdn.trustwallet.com/blockchains/optimism/assets/0x4200000000000000000000000000000000000006/logo.png"
    })
  },
  {
    displayName: "Sepolia",
    queryName: "sepolia",
    testnet: true,
    chainId: sepolia.id,
    chain: sepolia,
    symbol: "ETH",
    apiUrl: import.meta.env.SEPOLIA_API_URL ?? import.meta.env.NEXT_PUBLIC_SEPOLIA_API_URL ?? import.meta.env.VITE_SEPOLIA_API_URL,
    rpcUrl: import.meta.env.SEPOLIA_RPC_URL ?? import.meta.env.NEXT_PUBLIC_SEPOLIA_RPC_URL ?? import.meta.env.VITE_SEPOLIA_RPC_URL,
    blockExplorer: "https://sepolia.etherscan.io",
    logoPath: IconEthereum,
    wrappedTokenInfo: new TokenInfo({
      address: import.meta.env.SEPOLIA_WRAPPED_TOKEN_ADDRESS ?? import.meta.env.NEXT_PUBLIC_SEPOLIA_WRAPPED_TOKEN_ADDRESS ?? import.meta.env.VITE_SEPOLIA_WRAPPED_TOKEN_ADDRESS,
      name: "WETH",
      symbol: "WETH",
      decimals: 18,
      abi: WETH_default,
      logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png"
    }),
    contracts: {
      core: {
        address: import.meta.env.SEPOLIA_CORE_ADDRESS ?? import.meta.env.NEXT_PUBLIC_SEPOLIA_CORE_ADDRESS ?? import.meta.env.VITE_SEPOLIA_CORE_ADDRESS ?? "0x70b34cae2ba32a4b777e491c717d5e837574bd65",
        abi: Core_default
      },
      token: {
        address: import.meta.env.SEPOLIA_TOKEN_ADDRESS ?? import.meta.env.NEXT_PUBLIC_SEPOLIA_TOKEN_ADDRESS ?? import.meta.env.VITE_SEPOLIA_TOKEN_ADDRESS ?? "0xd0dE9c8983C1e7071dC2cB826eb7b9F6D3ac60d2",
        abi: Token_default
      },
      badgeManager: {
        address: import.meta.env.SEPOLIA_BADGE_MGR_ADDRESS ?? import.meta.env.NEXT_PUBLIC_SEPOLIA_BADGE_MGR_ADDRESS ?? import.meta.env.VITE_SEPOLIA_BADGE_MGR_ADDRESS ?? "0x6cF0ec545403eC6792eF4F62cfcE2FE494bF1591",
        abi: BadgeManager_default
      },
      marketCore: {
        address: import.meta.env.SEPOLIA_MARKET_CORE_ADDRESS ?? import.meta.env.NEXT_PUBLIC_SEPOLIA_MARKET_CORE_ADDRESS ?? import.meta.env.VITE_SEPOLIA_MARKET_CORE_ADDRESS ?? "0x588Dc811aF25Ea75fd5b7FEEeAB368ca63D6EcBE",
        abi: MarketCore_default
      },
      disputeManager: {
        address: import.meta.env.SEPOLIA_DISPUTE_MGR_ADDRESS ?? import.meta.env.NEXT_PUBLIC_SEPOLIA_DISPUTE_MGR_ADDRESS ?? import.meta.env.VITE_SEPOLIA_DISPUTE_MGR_ADDRESS ?? "0xe3DC1f3D53c2b821e713073f02A0b358706B69a2",
        abi: DisputeManager_default
      },
      mediatorManager: {
        address: import.meta.env.SEPOLIA_MEDIATOR_MGR_ADDRESS ?? import.meta.env.NEXT_PUBLIC_SEPOLIA_MEDIATOR_MGR_ADDRESS ?? import.meta.env.VITE_SEPOLIA_MEDIATOR_MGR_ADDRESS ?? "0x0056905103f8F18fe18c04Ec9d256bF759C3Dd5D",
        abi: MediatorManager_default
      },
      energon: {
        address: import.meta.env.SEPOLIA_ENERGON_ADDRESS ?? import.meta.env.NEXT_PUBLIC_SEPOLIA_ENERGON_ADDRESS ?? import.meta.env.VITE_SEPOLIA_ENERGON_ADDRESS,
        abi: Energon_default
      },
      nft: {
        address: import.meta.env.SEPOLIA_NFT_ADDRESS ?? import.meta.env.NEXT_PUBLIC_SEPOLIA_NFT_ADDRESS ?? import.meta.env.VITE_SEPOLIA_NFT_ADDRESS ?? "0x3b457DE90E5145CF4d6a9F2945d56e00A88D5Ab8",
        abi: NFT_default
      }
    }
  },
  {
    displayName: "Hardhat",
    queryName: "localhost",
    testnet: true,
    chainId: hardhat.id,
    chain: hardhat,
    symbol: "ETH",
    apiUrl: import.meta.env.LOCALHOST_API_URL ?? import.meta.env.NEXT_PUBLIC_LOCALHOST_API_URL ?? import.meta.env.VITE_LOCALHOST_API_URL,
    rpcUrl: import.meta.env.LOCALHOST_RPC_URL ?? import.meta.env.NEXT_PUBLIC_LOCALHOST_RPC_URL ?? import.meta.env.VITE_LOCALHOST_RPC_URL,
    blockExplorer: "https://etherscan.io",
    logoPath: IconEthereum,
    wrappedTokenInfo: new TokenInfo({
      address: import.meta.env.LOCALHOST_WRAPPED_TOKEN_ADDRESS ?? import.meta.env.NEXT_PUBLIC_LOCALHOST_WRAPPED_TOKEN_ADDRESS ?? import.meta.env.VITE_LOCALHOST_WRAPPED_TOKEN_ADDRESS,
      name: "WETH",
      symbol: "WETH",
      decimals: 18,
      abi: WETH_default,
      logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png"
    }),
    contracts: {
      core: {
        address: import.meta.env.LOCALHOST_CORE_ADDRESS ?? import.meta.env.NEXT_PUBLIC_LOCALHOST_CORE_ADDRESS ?? import.meta.env.VITE_LOCALHOST_CORE_ADDRESS,
        abi: Core_default
      },
      token: {
        address: import.meta.env.LOCALHOST_TOKEN_ADDRESS ?? import.meta.env.NEXT_PUBLIC_LOCALHOST_TOKEN_ADDRESS ?? import.meta.env.VITE_LOCALHOST_TOKEN_ADDRESS,
        abi: Token_default
      },
      badgeManager: {
        address: import.meta.env.LOCALHOST_BADGE_MGR_ADDRESS ?? import.meta.env.NEXT_PUBLIC_LOCALHOST_BADGE_MGR_ADDRESS ?? import.meta.env.VITE_LOCALHOST_BADGE_MGR_ADDRESS,
        abi: BadgeManager_default
      },
      marketCore: {
        address: import.meta.env.LOCALHOST_MARKET_CORE_ADDRESS ?? import.meta.env.NEXT_PUBLIC_LOCALHOST_MARKET_CORE_ADDRESS ?? import.meta.env.VITE_LOCALHOST_MARKET_CORE_ADDRESS,
        abi: MarketCore_default
      },
      disputeManager: {
        address: import.meta.env.LOCALHOST_DISPUTE_MGR_ADDRESS ?? import.meta.env.NEXT_PUBLIC_LOCALHOST_DISPUTE_MGR_ADDRESS ?? import.meta.env.VITE_LOCALHOST_DISPUTE_MGR_ADDRESS,
        abi: DisputeManager_default
      },
      mediatorManager: {
        address: import.meta.env.LOCALHOST_MEDIATOR_MGR_ADDRESS ?? import.meta.env.NEXT_PUBLIC_LOCALHOST_MEDIATOR_MGR_ADDRESS ?? import.meta.env.VITE_LOCALHOST_MEDIATOR_MGR_ADDRESS,
        abi: MediatorManager_default
      },
      energon: {
        address: import.meta.env.LOCALHOST_ENERGON_ADDRESS ?? import.meta.env.NEXT_PUBLIC_LOCALHOST_ENERGON_ADDRESS ?? import.meta.env.VITE_LOCALHOST_ENERGON_ADDRESS,
        abi: Energon_default
      },
      nft: {
        address: import.meta.env.LOCALHOST_NFT_ADDRESS ?? import.meta.env.NEXT_PUBLIC_LOCALHOST_NFT_ADDRESS ?? import.meta.env.VITE_LOCALHOST_NFT_ADDRESS,
        abi: NFT_default
      }
    }
  }
];
function getChainsID(testnetOnly = false, ignoreTestnet = false, ignore = []) {
  let supported = Chains;
  if (testnetOnly) {
    supported = supported.filter((s) => s.testnet);
  }
  return supported.filter(
    (s) => !s.disabled && !ignore.includes(s.chainId) && (!ignoreTestnet || !s.testnet)
  ).map((s) => s.chainId);
}
function getChains(testnetOnly = false, ignoreTestnet = false, ignore = []) {
  let supported = Chains;
  if (testnetOnly) {
    supported = supported.filter((s) => s.testnet);
  }
  return supported.filter(
    (s) => !s.disabled && !ignore.includes(s.chainId) && (!ignoreTestnet || !s.testnet)
  ).map((s) => s.chain);
}
function getChain(id) {
  if (!id)
    return;
  if (typeof id === "string")
    return getChainByName(id);
  return Chains.find((s) => s.chainId === id);
}
function getChainByName(name8) {
  return Chains.find((s) => s.queryName === name8);
}
function getChainNames() {
  return Chains.map((chain) => {
    return chain.queryName;
  });
}
function getChainID(name8) {
  const chain = getChainByName(name8);
  if (!chain)
    throw new Error(`Chain ${name8} is not supported`);
  return chain.chainId;
}
function isValidChain(chain) {
  return getChainByName(chain) !== void 0;
}
var chains_default = Chains;

// src/mediator_pools.ts
var MediatorPools = {
  localhost: [
    {
      name: "General",
      description: "For mediators specializing in global crypto to cash swaps.",
      id: 0,
      reqBond: "10000000000000000000",
      draftReward: "10000000000000000000",
      winReward: "10000000000000000000",
      noVoteSlashBP: 1e3,
      loseVoteSlashBP: 1e3,
      numDraftees: 3
    }
  ],
  ethereum: [
    {
      name: "General",
      description: "For mediators specializing in global crypto to cash swaps.",
      id: 0,
      reqBond: "10000000000000000000",
      draftReward: "10000000000000000000",
      winReward: "10000000000000000000",
      noVoteSlashBP: 1e3,
      loseVoteSlashBP: 1e3,
      numDraftees: 3
    }
  ],
  sepolia: [
    {
      name: "General",
      description: "For mediators specializing in global crypto to cash swaps.",
      id: 0,
      reqBond: "1000000000000000000000",
      draftReward: "100000000000000000000",
      winReward: "200000000000000000000",
      noVoteSlashBP: 1e3,
      loseVoteSlashBP: 2e3,
      numDraftees: 1
    }
  ]
};

// src/payment_methods.ts
var paymentMethods = {
  ethereum: [
    {
      badge: "pm/bank_transfer",
      name: "Bank Transfer",
      region: "ALL",
      logoUrl: "https://storage.googleapis.com/joint-images/payment-methods/BankTransfer.svg"
    },
    {
      badge: "pm/gtb",
      name: "Guaranty Trust Bank",
      shortName: "GTB",
      region: "NG",
      logoUrl: "https://storage.googleapis.com/joint-images/payment-methods/GTBank.svg"
    },
    {
      badge: "pm/first_bank",
      name: "First Bank",
      shortName: "FBN",
      region: "NG",
      logoUrl: "https://storage.googleapis.com/joint-images/payment-methods/GTBank.svg"
    },
    {
      badge: "pm/zenith",
      name: "Zenith Bank",
      region: "NG",
      logoUrl: "https://storage.googleapis.com/joint-images/payment-methods/GTBank.svg"
    },
    {
      badge: "pm/sterling_bank",
      name: "Sterling Bank",
      region: "NG",
      logoUrl: "https://storage.googleapis.com/joint-images/payment-methods/GTBank.svg"
    },
    {
      badge: "pm/union_bank",
      name: "Union Bank of Nigeria",
      shortName: "UBN",
      region: "NG",
      logoUrl: "https://storage.googleapis.com/joint-images/payment-methods/GTBank.svg"
    }
  ],
  sepolia: [
    {
      badge: "pm/bank_transfer",
      name: "Bank Transfer",
      region: "ALL",
      logoUrl: "https://storage.googleapis.com/joint-images/payment-methods/BankTransfer.svg"
    },
    {
      badge: "pm/gtb",
      name: "Guaranty Trust Bank",
      shortName: "GTB",
      region: "NG",
      logoUrl: "https://storage.googleapis.com/joint-images/payment-methods/GTBank.svg"
    },
    {
      badge: "pm/first_bank",
      name: "First Bank",
      shortName: "FBN",
      region: "NG",
      logoUrl: "https://storage.googleapis.com/joint-images/payment-methods/GTBank.svg"
    },
    {
      badge: "pm/zenith",
      name: "Zenith Bank",
      region: "NG",
      logoUrl: "https://storage.googleapis.com/joint-images/payment-methods/GTBank.svg"
    },
    {
      badge: "pm/sterling_bank",
      name: "Sterling Bank",
      region: "NG",
      logoUrl: "https://storage.googleapis.com/joint-images/payment-methods/GTBank.svg"
    },
    {
      badge: "pm/union_bank",
      name: "Union Bank of Nigeria",
      shortName: "UBN",
      region: "NG",
      logoUrl: "https://storage.googleapis.com/joint-images/payment-methods/GTBank.svg"
    }
  ],
  localhost: [
    {
      badge: "pm/bank_transfer",
      name: "Bank Transfer",
      region: "ALL",
      logoUrl: "https://storage.googleapis.com/joint-images/payment-methods/BankTransfer.svg"
    },
    {
      badge: "pm/gtb",
      name: "Guaranty Trust Bank",
      shortName: "GTB",
      region: "NG",
      logoUrl: "https://storage.googleapis.com/joint-images/payment-methods/GTBank.svg"
    }
  ]
};

// src/tokens_list.ts
import _ from "lodash";
import { isAddressEqual as isAddressEqual2 } from "viem";

// src/tokenlist/binance.json
var binance_exports = {};
__export(binance_exports, {
  default: () => binance_default,
  logoURI: () => logoURI,
  name: () => name,
  timestamp: () => timestamp,
  tokens: () => tokens,
  version: () => version
});
var name = "Trust Wallet: Smart Chain";
var logoURI = "https://trustwallet.com/assets/images/favicon.png";
var timestamp = "2021-06-17T12:17:25.447Z";
var tokens = [
  {
    chainId: 56,
    asset: "c20000714_t0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    type: "BEP20",
    address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    name: "Wrapped BNB",
    symbol: "WBNB",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png"
  },
  {
    chainId: 56,
    asset: "c20000714_t0x0231f91e02DebD20345Ae8AB7D71A41f8E140cE7",
    type: "BEP20",
    address: "0x0231f91e02DebD20345Ae8AB7D71A41f8E140cE7",
    name: "Jupiter",
    symbol: "bwJUP",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x0231f91e02DebD20345Ae8AB7D71A41f8E140cE7/logo.png",
    pairs: []
  },
  {
    asset: "c20000714_t0x0D8Ce2A99Bb6e3B7Db580eD848240e4a0F9aE153",
    type: "BEP20",
    address: "0x0D8Ce2A99Bb6e3B7Db580eD848240e4a0F9aE153",
    name: "Binance-Peg Filecoin",
    symbol: "FIL",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x0D8Ce2A99Bb6e3B7Db580eD848240e4a0F9aE153/logo.png",
    pairs: []
  },
  {
    chainId: 56,
    asset: "c20000714_t0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
    type: "BEP20",
    address: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
    name: "PancakeSwap Token",
    symbol: "CAKE",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png",
    pairs: []
  },
  {
    asset: "c20000714_t0x0Eb3a705fc54725037CC9e008bDede697f62F335",
    type: "BEP20",
    address: "0x0Eb3a705fc54725037CC9e008bDede697f62F335",
    name: "Binance-Peg Cosmos Token",
    symbol: "ATOM",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x0Eb3a705fc54725037CC9e008bDede697f62F335/logo.png",
    pairs: []
  },
  {
    asset: "c20000714_t0x16939ef78684453bfDFb47825F8a5F714f12623a",
    type: "BEP20",
    address: "0x16939ef78684453bfDFb47825F8a5F714f12623a",
    name: "Binance-Peg Tezos Token",
    symbol: "XTZ",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x16939ef78684453bfDFb47825F8a5F714f12623a/logo.png",
    pairs: []
  },
  {
    asset: "c20000714_t0x190b589cf9Fb8DDEabBFeae36a813FFb2A702454",
    type: "BEP20",
    address: "0x190b589cf9Fb8DDEabBFeae36a813FFb2A702454",
    name: "bDollar",
    symbol: "BDO",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x190b589cf9Fb8DDEabBFeae36a813FFb2A702454/logo.png",
    pairs: []
  },
  {
    chainId: 56,
    asset: "c20000714_t0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
    type: "BEP20",
    address: "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
    name: "Binance-Peg Dai Token",
    symbol: "DAI",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3/logo.png",
    pairs: []
  },
  {
    asset: "c20000714_t0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE",
    type: "BEP20",
    address: "0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE",
    name: "Binance-Peg XRP Token",
    symbol: "XRP",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE/logo.png",
    pairs: []
  },
  {
    asset: "c20000714_t0x2090c8295769791ab7A3CF1CC6e0AA19F35e441A",
    type: "BEP20",
    address: "0x2090c8295769791ab7A3CF1CC6e0AA19F35e441A",
    name: "Fuel Token",
    symbol: "Fuel",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x2090c8295769791ab7A3CF1CC6e0AA19F35e441A/logo.png",
    pairs: []
  },
  {
    chainId: 56,
    asset: "c20000714_t0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
    type: "BEP20",
    address: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
    name: "Binance-Peg Ethereum",
    symbol: "ETH",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x2170Ed0880ac9A755fd29B2688956BD959F933F8/logo.png",
    pairs: []
  },
  {
    asset: "c20000714_t0x23396cF899Ca06c4472205fC903bDB4de249D6fC",
    type: "BEP20",
    address: "0x23396cF899Ca06c4472205fC903bDB4de249D6fC",
    name: "Wrapped UST Token",
    symbol: "UST",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x23396cF899Ca06c4472205fC903bDB4de249D6fC/logo.png",
    pairs: []
  },
  {
    asset: "c20000714_t0x233d91A0713155003fc4DcE0AFa871b508B3B715",
    type: "BEP20",
    address: "0x233d91A0713155003fc4DcE0AFa871b508B3B715",
    name: "Ditto",
    symbol: "DITTO",
    decimals: 9,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x233d91A0713155003fc4DcE0AFa871b508B3B715/logo.png",
    pairs: []
  },
  {
    asset: "c20000714_t0x37Ac4D6140e54304D77437A5c11924f61a2D976f",
    type: "BEP20",
    address: "0x37Ac4D6140e54304D77437A5c11924f61a2D976f",
    name: "SparkPoint Fuel",
    symbol: "SFUEL",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x37Ac4D6140e54304D77437A5c11924f61a2D976f/logo.png",
    pairs: []
  },
  {
    asset: "c20000714_t0x3aabCf53A1930A42E18D938C019E83Ebee50a849",
    type: "BEP20",
    address: "0x3aabCf53A1930A42E18D938C019E83Ebee50a849",
    name: "SPONGE",
    symbol: "SPG",
    decimals: 9,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x3aabCf53A1930A42E18D938C019E83Ebee50a849/logo.png",
    pairs: []
  },
  {
    asset: "c20000714_t0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47",
    type: "BEP20",
    address: "0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47",
    name: "Binance-Peg Cardano Token",
    symbol: "ADA",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47/logo.png",
    pairs: []
  },
  {
    asset: "c20000714_t0x4197C6EF3879a08cD51e5560da5064B773aa1d29",
    type: "BEP20",
    address: "0x4197C6EF3879a08cD51e5560da5064B773aa1d29",
    name: "ACryptoS",
    symbol: "ACS",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x4197C6EF3879a08cD51e5560da5064B773aa1d29/logo.png",
    pairs: []
  },
  {
    asset: "c20000714_t0x4338665CBB7B2485A8855A139b75D5e34AB0DB94",
    type: "BEP20",
    address: "0x4338665CBB7B2485A8855A139b75D5e34AB0DB94",
    name: "Binance-Peg Litecoin Token",
    symbol: "LTC",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x4338665CBB7B2485A8855A139b75D5e34AB0DB94/logo.png",
    pairs: []
  },
  {
    asset: "c20000714_t0x44754455564474A89358B2C2265883DF993b12F0",
    type: "BEP20",
    address: "0x44754455564474A89358B2C2265883DF993b12F0",
    name: "ZeroSwapToken",
    symbol: "ZEE",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x44754455564474A89358B2C2265883DF993b12F0/logo.png",
    pairs: []
  },
  {
    asset: "c20000714_t0x47BEAd2563dCBf3bF2c9407fEa4dC236fAbA485A",
    type: "BEP20",
    address: "0x47BEAd2563dCBf3bF2c9407fEa4dC236fAbA485A",
    name: "Swipe",
    symbol: "SXP",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x47BEAd2563dCBf3bF2c9407fEa4dC236fAbA485A/logo.png",
    pairs: []
  },
  {
    chainId: 56,
    asset: "c20000714_t0x4B0F1812e5Df2A09796481Ff14017e6005508003",
    type: "BEP20",
    address: "0x4B0F1812e5Df2A09796481Ff14017e6005508003",
    name: "Trust Wallet",
    symbol: "TWT",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x4B0F1812e5Df2A09796481Ff14017e6005508003/logo.png",
    pairs: []
  },
  {
    chainId: 56,
    asset: "c20000714_t0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7",
    type: "BEP20",
    address: "0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7",
    name: "VAI Stablecoin",
    symbol: "VAI",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7/logo.png",
    pairs: []
  },
  {
    chainId: 56,
    asset: "c20000714_t0x55d398326f99059fF775485246999027B3197955",
    type: "BEP20",
    address: "0x55d398326f99059fF775485246999027B3197955",
    name: "Binance-Peg BSC-USD",
    symbol: "USDT",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x55d398326f99059fF775485246999027B3197955/logo.png",
    pairs: []
  },
  {
    asset: "c20000714_t0x56b6fB708fC5732DEC1Afc8D8556423A2EDcCbD6",
    type: "BEP20",
    address: "0x56b6fB708fC5732DEC1Afc8D8556423A2EDcCbD6",
    name: "Binance-Peg EOS Token",
    symbol: "EOS",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x56b6fB708fC5732DEC1Afc8D8556423A2EDcCbD6/logo.png",
    pairs: []
  },
  {
    asset: "c20000714_t0x5Ac52EE5b2a633895292Ff6d8A89bB9190451587",
    type: "BEP20",
    address: "0x5Ac52EE5b2a633895292Ff6d8A89bB9190451587",
    name: "BSCX",
    symbol: "BSCX",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x5Ac52EE5b2a633895292Ff6d8A89bB9190451587/logo.png",
    pairs: []
  },
  {
    chainId: 56,
    asset: "c20000714_t0x63870A18B6e42b01Ef1Ad8A2302ef50B7132054F",
    type: "BEP20",
    address: "0x63870A18B6e42b01Ef1Ad8A2302ef50B7132054F",
    name: "BLinkToken",
    symbol: "BLINK",
    decimals: 6,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x63870A18B6e42b01Ef1Ad8A2302ef50B7132054F/logo.png",
    pairs: []
  },
  {
    asset: "c20000714_t0x67ee3Cb086F8a16f34beE3ca72FAD36F7Db929e2",
    type: "BEP20",
    address: "0x67ee3Cb086F8a16f34beE3ca72FAD36F7Db929e2",
    name: "DODO",
    symbol: "DODO",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x67ee3Cb086F8a16f34beE3ca72FAD36F7Db929e2/logo.png",
    pairs: []
  },
  {
    asset: "c20000714_t0x6c5FE6e99D2484db7E4BF34F365ABA42d0E4dC20",
    type: "BEP20",
    address: "0x6c5FE6e99D2484db7E4BF34F365ABA42d0E4dC20",
    name: "Absorber",
    symbol: "ABS",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x6c5FE6e99D2484db7E4BF34F365ABA42d0E4dC20/logo.png",
    pairs: []
  },
  {
    asset: "c20000714_t0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402",
    type: "BEP20",
    address: "0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402",
    name: "Binance-Peg Polkadot Token",
    symbol: "DOT",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402/logo.png",
    pairs: []
  },
  {
    chainId: 56,
    asset: "c20000714_t0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
    type: "BEP20",
    address: "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
    name: "Binance-Peg BTCB Token",
    symbol: "BTCB",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c/logo.png",
    pairs: []
  },
  {
    asset: "c20000714_t0x728C5baC3C3e370E372Fc4671f9ef6916b814d8B",
    type: "BEP20",
    address: "0x728C5baC3C3e370E372Fc4671f9ef6916b814d8B",
    name: "UNFI",
    symbol: "UNFI",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x728C5baC3C3e370E372Fc4671f9ef6916b814d8B/logo.png",
    pairs: []
  },
  {
    asset: "c20000714_t0x72fAa679E1008Ad8382959FF48E392042A8b06f7",
    type: "BEP20",
    address: "0x72fAa679E1008Ad8382959FF48E392042A8b06f7",
    name: "AllianceBlock Token",
    symbol: "bALBT",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x72fAa679E1008Ad8382959FF48E392042A8b06f7/logo.png",
    pairs: []
  },
  {
    asset: "c20000714_t0x78650B139471520656b9E7aA7A5e9276814a38e9",
    type: "BEP20",
    address: "0x78650B139471520656b9E7aA7A5e9276814a38e9",
    name: "StandardBTCHashrateToken",
    symbol: "BTCST",
    decimals: 17,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x78650B139471520656b9E7aA7A5e9276814a38e9/logo.png",
    pairs: []
  },
  {
    asset: "c20000714_t0x790Be81C3cA0e53974bE2688cDb954732C9862e1",
    type: "BEP20",
    address: "0x790Be81C3cA0e53974bE2688cDb954732C9862e1",
    name: "CafeSwap Token",
    symbol: "BREW",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x790Be81C3cA0e53974bE2688cDb954732C9862e1/logo.png",
    pairs: []
  },
  {
    asset: "c20000714_t0x7979F6C54ebA05E18Ded44C4F986F49a5De551c2",
    type: "BEP20",
    address: "0x7979F6C54ebA05E18Ded44C4F986F49a5De551c2",
    name: "Kebab Token",
    symbol: "KEBAB",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x7979F6C54ebA05E18Ded44C4F986F49a5De551c2/logo.png",
    pairs: []
  },
  {
    asset: "c20000714_t0x7F70642d88cf1C4a3a7abb072B53B929b653edA5",
    type: "BEP20",
    address: "0x7F70642d88cf1C4a3a7abb072B53B929b653edA5",
    name: "Binance-Peg YFII.finance Token",
    symbol: "YFII",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x7F70642d88cf1C4a3a7abb072B53B929b653edA5/logo.png",
    pairs: []
  },
  {
    asset: "c20000714_t0x81859801b01764D4f0Fa5E64729f5a6C3b91435b",
    type: "BEP20",
    address: "0x81859801b01764D4f0Fa5E64729f5a6C3b91435b",
    name: "bearn.fi",
    symbol: "BFI",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x81859801b01764D4f0Fa5E64729f5a6C3b91435b/logo.png",
    pairs: []
  },
  {
    asset: "c20000714_t0x88f1A5ae2A3BF98AEAF342D26B30a79438c9142e",
    type: "BEP20",
    address: "0x88f1A5ae2A3BF98AEAF342D26B30a79438c9142e",
    name: "Binance-Peg yearn.finance",
    symbol: "YFI",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x88f1A5ae2A3BF98AEAF342D26B30a79438c9142e/logo.png",
    pairs: []
  },
  {
    asset: "c20000714_t0x8fF795a6F4D97E7887C79beA79aba5cc76444aDf",
    type: "BEP20",
    address: "0x8fF795a6F4D97E7887C79beA79aba5cc76444aDf",
    name: "Binance-Peg Bitcoin Cash Token",
    symbol: "BCH",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x8fF795a6F4D97E7887C79beA79aba5cc76444aDf/logo.png",
    pairs: []
  },
  {
    asset: "c20000714_t0x928e55daB735aa8260AF3cEDadA18B5f70C72f1b",
    type: "BEP20",
    address: "0x928e55daB735aa8260AF3cEDadA18B5f70C72f1b",
    name: "Frontier Token",
    symbol: "FRONT",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x928e55daB735aa8260AF3cEDadA18B5f70C72f1b/logo.png",
    pairs: []
  },
  {
    asset: "c20000714_t0x948d2a81086A075b3130BAc19e4c6DEe1D2E3fE8",
    type: "BEP20",
    address: "0x948d2a81086A075b3130BAc19e4c6DEe1D2E3fE8",
    name: "Helmet.insure Governance Token",
    symbol: "Helmet",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x948d2a81086A075b3130BAc19e4c6DEe1D2E3fE8/logo.png",
    pairs: []
  },
  {
    asset: "c20000714_t0x97a30C692eCe9C317235d48287d23d358170FC40",
    type: "BEP20",
    address: "0x97a30C692eCe9C317235d48287d23d358170FC40",
    name: "CryptEx Token",
    symbol: "CRX",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x97a30C692eCe9C317235d48287d23d358170FC40/logo.png",
    pairs: []
  },
  {
    asset: "c20000714_t0xa184088a740c695E156F91f5cC086a06bb78b827",
    type: "BEP20",
    address: "0xa184088a740c695E156F91f5cC086a06bb78b827",
    name: "AUTOv2",
    symbol: "AUTO",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xa184088a740c695E156F91f5cC086a06bb78b827/logo.png",
    pairs: []
  },
  {
    chainId: 56,
    asset: "c20000714_t0xa1faa113cbE53436Df28FF0aEe54275c13B40975",
    type: "BEP20",
    address: "0xa1faa113cbE53436Df28FF0aEe54275c13B40975",
    name: "Alpha Finance",
    symbol: "ALPHA",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xa1faa113cbE53436Df28FF0aEe54275c13B40975/logo.png",
    pairs: []
  },
  {
    chainId: 56,
    asset: "c20000714_t0xa2B726B1145A4773F68593CF171187d8EBe4d495",
    type: "BEP20",
    address: "0xa2B726B1145A4773F68593CF171187d8EBe4d495",
    name: "Injective Protocol",
    symbol: "INJ",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xa2B726B1145A4773F68593CF171187d8EBe4d495/logo.png",
    pairs: []
  },
  {
    chainId: 56,
    asset: "c20000714_t0xA8c2B8eec3d368C0253ad3dae65a5F2BBB89c929",
    type: "BEP20",
    address: "0xA8c2B8eec3d368C0253ad3dae65a5F2BBB89c929",
    name: "CertiK Token",
    symbol: "CTK",
    decimals: 6,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xA8c2B8eec3d368C0253ad3dae65a5F2BBB89c929/logo.png",
    pairs: []
  },
  {
    asset: "c20000714_t0xAD6cAEb32CD2c308980a548bD0Bc5AA4306c6c18",
    type: "BEP20",
    address: "0xAD6cAEb32CD2c308980a548bD0Bc5AA4306c6c18",
    name: "Binance-Peg Band Protocol Token",
    symbol: "BAND",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xAD6cAEb32CD2c308980a548bD0Bc5AA4306c6c18/logo.png",
    pairs: []
  },
  {
    asset: "c20000714_t0xb59490aB09A0f526Cc7305822aC65f2Ab12f9723",
    type: "BEP20",
    address: "0xb59490aB09A0f526Cc7305822aC65f2Ab12f9723",
    name: "Litentry",
    symbol: "LIT",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xb59490aB09A0f526Cc7305822aC65f2Ab12f9723/logo.png",
    pairs: []
  },
  {
    chainId: 56,
    asset: "c20000714_t0xBf5140A22578168FD562DCcF235E5D43A02ce9B1",
    type: "BEP20",
    address: "0xBf5140A22578168FD562DCcF235E5D43A02ce9B1",
    name: "Binance-Peg Uniswap",
    symbol: "UNI",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xBf5140A22578168FD562DCcF235E5D43A02ce9B1/logo.png",
    pairs: []
  },
  {
    asset: "c20000714_t0xbF7c81FFF98BbE61B40Ed186e4AfD6DDd01337fe",
    type: "BEP20",
    address: "0xbF7c81FFF98BbE61B40Ed186e4AfD6DDd01337fe",
    name: "Binance-Peg Elrond",
    symbol: "EGLD",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xbF7c81FFF98BbE61B40Ed186e4AfD6DDd01337fe/logo.png",
    pairs: []
  },
  {
    asset: "c20000714_t0xC7d8D35EBA58a0935ff2D5a33Df105DD9f071731",
    type: "BEP20",
    address: "0xC7d8D35EBA58a0935ff2D5a33Df105DD9f071731",
    name: "Hedget",
    symbol: "HGET",
    decimals: 6,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xC7d8D35EBA58a0935ff2D5a33Df105DD9f071731/logo.png",
    pairs: []
  },
  {
    asset: "c20000714_t0xC7FB8c5eFE8564205eE5CbA4dE8eeA8a086a4bd2",
    type: "BEP20",
    address: "0xC7FB8c5eFE8564205eE5CbA4dE8eeA8a086a4bd2",
    name: "PocketRocket",
    symbol: "POCROC",
    decimals: 9,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xC7FB8c5eFE8564205eE5CbA4dE8eeA8a086a4bd2/logo.png",
    pairs: []
  },
  {
    asset: "c20000714_t0xC9849E6fdB743d08fAeE3E34dd2D1bc69EA11a51",
    type: "BEP20",
    address: "0xC9849E6fdB743d08fAeE3E34dd2D1bc69EA11a51",
    name: "Bunny Token",
    symbol: "BUNNY",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xC9849E6fdB743d08fAeE3E34dd2D1bc69EA11a51/logo.png",
    pairs: []
  },
  {
    chainId: 56,
    asset: "c20000714_t0xCa3F508B8e4Dd382eE878A314789373D80A5190A",
    type: "BEP20",
    address: "0xCa3F508B8e4Dd382eE878A314789373D80A5190A",
    name: "beefy.finance",
    symbol: "BIFI",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xCa3F508B8e4Dd382eE878A314789373D80A5190A/logo.png",
    pairs: []
  },
  {
    asset: "c20000714_t0xcc2E12a9b5b75360c6FBf23B584c275D52cDdb0E",
    type: "BEP20",
    address: "0xcc2E12a9b5b75360c6FBf23B584c275D52cDdb0E",
    name: "Crow Token",
    symbol: "CROW",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xcc2E12a9b5b75360c6FBf23B584c275D52cDdb0E/logo.png",
    pairs: []
  },
  {
    chainId: 56,
    asset: "c20000714_t0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63",
    type: "BEP20",
    address: "0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63",
    name: "Venus",
    symbol: "XVS",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63/logo.png",
    pairs: []
  },
  {
    asset: "c20000714_t0xD41FDb03Ba84762dD66a0af1a6C8540FF1ba5dfb",
    type: "BEP20",
    address: "0xD41FDb03Ba84762dD66a0af1a6C8540FF1ba5dfb",
    name: "SafePal Token",
    symbol: "SFP",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xD41FDb03Ba84762dD66a0af1a6C8540FF1ba5dfb/logo.png",
    pairs: []
  },
  {
    asset: "c20000714_t0xE40255C5d7fa7ceEc5120408C78C787CECB4cfdb",
    type: "BEP20",
    address: "0xE40255C5d7fa7ceEc5120408C78C787CECB4cfdb",
    name: "SWGb",
    symbol: "SWGb",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xE40255C5d7fa7ceEc5120408C78C787CECB4cfdb/logo.png",
    pairs: []
  },
  {
    chainId: 56,
    asset: "c20000714_t0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
    type: "BEP20",
    address: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
    name: "Binance-Peg BUSD",
    symbol: "BUSD",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/logo.png",
    pairs: []
  },
  {
    asset: "c20000714_t0x9798dF2f5d213a872c787bD03b2b91F54D0D04A1",
    type: "BEP20",
    address: "0x9798dF2f5d213a872c787bD03b2b91F54D0D04A1",
    name: "TeraBlock Token",
    symbol: "TBC",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x9798dF2f5d213a872c787bD03b2b91F54D0D04A1/logo.png",
    pairs: []
  },
  {
    asset: "c20000714_t0xF21768cCBC73Ea5B6fd3C687208a7c2def2d966e",
    type: "BEP20",
    address: "0xF21768cCBC73Ea5B6fd3C687208a7c2def2d966e",
    name: "Reef.finance",
    symbol: "REEF",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xF21768cCBC73Ea5B6fd3C687208a7c2def2d966e/logo.png",
    pairs: []
  },
  {
    chainId: 56,
    asset: "c20000714_t0xf79037F6f6bE66832DE4E7516be52826BC3cBcc4",
    type: "BEP20",
    address: "0xf79037F6f6bE66832DE4E7516be52826BC3cBcc4",
    name: "Hard Protocol",
    symbol: "HARD",
    decimals: 6,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xf79037F6f6bE66832DE4E7516be52826BC3cBcc4/logo.png",
    pairs: []
  },
  {
    asset: "c20000714_t0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD",
    type: "BEP20",
    address: "0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD",
    name: "Binance-Peg ChainLink",
    symbol: "LINK",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD/logo.png",
    pairs: []
  },
  {
    asset: "c20000714_t0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6",
    type: "BEP20",
    address: "0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6",
    name: "Goose Golden Egg",
    symbol: "EGG",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6/logo.png",
    pairs: []
  },
  {
    asset: "c20000714_t0x016CF83732f1468150D87dCC5BdF67730B3934D3",
    type: "BEP20",
    address: "0x016CF83732f1468150D87dCC5BdF67730B3934D3",
    name: "AirNFT Token",
    symbol: "AIRT",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x016CF83732f1468150D87dCC5BdF67730B3934D3/logo.png",
    pairs: []
  },
  {
    asset: "c20000714_t0x8C851d1a123Ff703BD1f9dabe631b69902Df5f97",
    type: "BEP20",
    address: "0x8C851d1a123Ff703BD1f9dabe631b69902Df5f97",
    name: "BinaryX",
    symbol: "BNX",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x8C851d1a123Ff703BD1f9dabe631b69902Df5f97/logo.png",
    pairs: []
  }
];
var version = {
  major: 11,
  minor: 0,
  patch: 0
};
var binance_default = {
  name,
  logoURI,
  timestamp,
  tokens,
  version
};

// src/tokenlist/ethereum.json
var ethereum_exports = {};
__export(ethereum_exports, {
  default: () => ethereum_default,
  logoURI: () => logoURI2,
  name: () => name2,
  timestamp: () => timestamp2,
  tokens: () => tokens2,
  version: () => version2
});
var name2 = "Trust Wallet: Ethereum";
var logoURI2 = "https://trustwallet.com/assets/images/favicon.png";
var timestamp2 = "2021-11-09T22:30:24.689Z";
var tokens2 = [
  {
    chainId: 1,
    asset: "c60_t0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    type: "ERC20",
    address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    name: "WETH",
    symbol: "WETH",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png",
    pairs: [
      {
        base: "c60_t0x0000000000085d4780B73119b644AE5ecd22b376"
      },
      {
        base: "c60_t0x0000000000095413afC295d19EDeb1Ad7B71c952"
      },
      {
        base: "c60_t0x00c83aeCC790e8a4453e5dD3B0B4b3680501a7A7"
      },
      {
        base: "c60_t0x0202Be363B8a4820f3F4DE7FaF5224fF05943AB1"
      },
      {
        base: "c60_t0x0258F474786DdFd37ABCE6df6BBb1Dd5dfC4434a"
      },
      {
        base: "c60_t0x03ab458634910AaD20eF5f1C8ee96F1D6ac54919"
      },
      {
        base: "c60_t0x09a3EcAFa817268f77BE1283176B946C4ff2E608"
      },
      {
        base: "c60_t0x0Ae055097C6d159879521C384F1D2123D1f195e6"
      },
      {
        base: "c60_t0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e"
      },
      {
        base: "c60_t0x0c7D5ae016f806603CB1782bEa29AC69471CAb9c"
      },
      {
        base: "c60_t0x0CDF9acd87E940837ff21BB40c9fd55F68bba059"
      },
      {
        base: "c60_t0x0cEC1A9154Ff802e7934Fc916Ed7Ca50bDE6844e"
      },
      {
        base: "c60_t0x0D8775F648430679A709E98d2b0Cb6250d2887EF"
      },
      {
        base: "c60_t0x0f51bb10119727a7e5eA3538074fb341F56B09Ad"
      },
      {
        base: "c60_t0x0F5D2fB29fb7d3CFeE444a200298f468908cC942"
      },
      {
        base: "c60_t0x0f7F961648aE6Db43C75663aC7E5414Eb79b5704"
      },
      {
        base: "c60_t0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38"
      },
      {
        base: "c60_t0x0fF6ffcFDa92c53F615a4A75D982f399C989366b"
      },
      {
        base: "c60_t0x10Be9a8dAe441d276a5027936c3aADEd2d82bC15"
      },
      {
        base: "c60_t0x111111111117dC0aa78b770fA6A738034120C302"
      },
      {
        base: "c60_t0x1337DEF16F9B486fAEd0293eb623Dc8395dFE46a"
      },
      {
        base: "c60_t0x1337DEF18C680aF1f9f45cBcab6309562975b1dD"
      },
      {
        base: "c60_t0x1494CA1F11D487c2bBe4543E90080AeBa4BA3C2b"
      },
      {
        base: "c60_t0x15874d65e649880c2614e7a480cb7c9A55787FF6"
      },
      {
        base: "c60_t0x1614F18Fc94f47967A3Fbe5FfcD46d4e7Da3D787"
      },
      {
        base: "c60_t0x16980b3B4a3f9D89E33311B5aa8f80303E5ca4F8"
      },
      {
        base: "c60_t0x18aAA7115705e8be94bfFEBDE57Af9BFc265B998"
      },
      {
        base: "c60_t0x1b40183EFB4Dd766f11bDa7A7c3AD8982e998421"
      },
      {
        base: "c60_t0x1cBb83EbcD552D5EBf8131eF8c9CD9d9BAB342bC"
      },
      {
        base: "c60_t0x1cEB5cB57C4D4E2b2433641b95Dd330A33185A44"
      },
      {
        base: "c60_t0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984"
      },
      {
        base: "c60_t0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"
      },
      {
        base: "c60_t0x226f7b842E0F0120b7E194D05432b3fd14773a9D"
      },
      {
        base: "c60_t0x25e1474170c4c0aA64fa98123bdc8dB49D7802fa"
      },
      {
        base: "c60_t0x26c8AFBBFE1EBaca03C2bB082E69D0476Bffe099"
      },
      {
        base: "c60_t0x27C70Cd1946795B66be9d954418546998b546634"
      },
      {
        base: "c60_t0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39"
      },
      {
        base: "c60_t0x3301Ee63Fb29F863f2333Bd4466acb46CD8323E6"
      },
      {
        base: "c60_t0x3383c5a8969Dc413bfdDc9656Eb80A1408E4bA20"
      },
      {
        base: "c60_t0x33D0568941C0C64ff7e0FB4fbA0B11BD37deEd9f"
      },
      {
        base: "c60_t0x3845badAde8e6dFF049820680d1F14bD3903a5d0"
      },
      {
        base: "c60_t0x38e4adB44ef08F22F5B5b76A8f0c2d0dCbE7DcA1"
      },
      {
        base: "c60_t0x408e41876cCCDC0F92210600ef50372656052a38"
      },
      {
        base: "c60_t0x40FD72257597aA14C7231A7B1aaa29Fce868F677"
      },
      {
        base: "c60_t0x429881672B9AE42b8EbA0E26cD9C73711b891Ca5"
      },
      {
        base: "c60_t0xcf0C122c6b73ff809C693DB761e7BaeBe62b6a2E"
      },
      {
        base: "c60_t0x45804880De22913dAFE09f4980848ECE6EcbAf78"
      },
      {
        base: "c60_t0x4691937a7508860F876c9c0a2a617E7d9E945D4B"
      },
      {
        base: "c60_t0x4e352cF164E64ADCBad318C3a1e222E9EBa4Ce42"
      },
      {
        base: "c60_t0x514910771AF9Ca656af840dff83E8264EcF986CA"
      },
      {
        base: "c60_t0x5218E472cFCFE0b64A064F055B43b4cdC9EfD3A6"
      },
      {
        base: "c60_t0x5228a22e72ccC52d415EcFd199F99D0665E7733b"
      },
      {
        base: "c60_t0x584bC13c7D411c00c01A62e8019472dE68768430"
      },
      {
        base: "c60_t0x5BEfBB272290dD5b8521D4a938f6c4757742c430"
      },
      {
        base: "c60_t0x607F4C5BB672230e8672085532f7e901544a7375"
      },
      {
        base: "c60_t0x62359Ed7505Efc61FF1D56fEF82158CcaffA23D7"
      },
      {
        base: "c60_t0x6243d8CEA23066d098a15582d81a598b4e8391F4"
      },
      {
        base: "c60_t0x63b4f3e3fa4e438698CE330e365E831F7cCD1eF4"
      },
      {
        base: "c60_t0x66a0f676479Cee1d7373f3DC2e2952778BfF5bd6"
      },
      {
        base: "c60_t0x67c597624B17b16fb77959217360B7cD18284253"
      },
      {
        base: "c60_t0x6810e776880C02933D47DB1b9fc05908e5386b96"
      },
      {
        base: "c60_t0x6B175474E89094C44Da98b954EedeAC495271d0F"
      },
      {
        base: "c60_t0x6B3595068778DD592e39A122f4f5a5cF09C90fE2"
      },
      {
        base: "c60_t0x70401dFD142A16dC7031c56E862Fc88Cb9537Ce0"
      },
      {
        base: "c60_t0x71F85B2E46976bD21302B64329868fd15eb0D127"
      },
      {
        base: "c60_t0x725C263e32c72dDC3A19bEa12C5a0479a81eE688"
      },
      {
        base: "c60_t0x72e364F2ABdC788b7E918bc238B21f109Cd634D7"
      },
      {
        base: "c60_t0x761D38e5ddf6ccf6Cf7c55759d5210750B5D60F3"
      },
      {
        base: "c60_t0x7659CE147D0e714454073a5dd7003544234b6Aa0"
      },
      {
        base: "c60_t0x77777FeDdddFfC19Ff86DB637967013e6C6A116C"
      },
      {
        base: "c60_t0x7a2Bc711E19ba6aff6cE8246C546E8c4B4944DFD"
      },
      {
        base: "c60_t0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0"
      },
      {
        base: "c60_t0x7dE91B204C1C737bcEe6F000AAA6569Cf7061cb7"
      },
      {
        base: "c60_t0x7F3EDcdD180Dbe4819Bd98FeE8929b5cEdB3AdEB"
      },
      {
        base: "c60_t0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9"
      },
      {
        base: "c60_t0x7FF4169a6B5122b664c51c95727d87750eC07c84"
      },
      {
        base: "c60_t0x8207c1FfC5B6804F6024322CcF34F29c3541Ae26"
      },
      {
        base: "c60_t0x83e6f1E41cdd28eAcEB20Cb649155049Fac3D5Aa"
      },
      {
        base: "c60_t0x8400D94A5cb0fa0D041a3788e395285d61c9ee5e"
      },
      {
        base: "c60_t0x84cA8bc7997272c7CfB4D0Cd3D55cd942B3c9419"
      },
      {
        base: "c60_t0x853d955aCEf822Db058eb8505911ED77F175b99e"
      },
      {
        base: "c60_t0x85Eee30c52B0b379b046Fb0F85F4f3Dc3009aFEC"
      },
      {
        base: "c60_t0x88ACDd2a6425c3FaAE4Bc9650Fd7E27e0Bebb7aB"
      },
      {
        base: "c60_t0x88EF27e69108B2633F8E1C184CC37940A075cC02"
      },
      {
        base: "c60_t0x8a40c222996f9F3431f63Bf80244C36822060f12"
      },
      {
        base: "c60_t0x8a854288a5976036A725879164Ca3e91d30c6A1B"
      },
      {
        base: "c60_t0xCE3f08e664693ca792caCE4af1364D5e220827B2"
      },
      {
        base: "c60_t0x8CE9137d39326AD0cD6491fb5CC0CbA0e089b6A9"
      },
      {
        base: "c60_t0x8dAEBADE922dF735c38C80C7eBD708Af50815fAa"
      },
      {
        base: "c60_t0x8f8221aFbB33998d8584A2B05749bA73c37a938a"
      },
      {
        base: "c60_t0x9355372396e3F6daF13359B7b607a3374cc638e0"
      },
      {
        base: "c60_t0x93ED3FBe21207Ec2E8f2d3c3de6e058Cb73Bc04d"
      },
      {
        base: "c60_t0x954b890704693af242613edEf1B603825afcD708"
      },
      {
        base: "c60_t0x956F47F50A910163D8BF957Cf5846D573E7f87CA"
      },
      {
        base: "c60_t0x95a4492F028aa1fd432Ea71146b433E7B4446611"
      },
      {
        base: "c60_t0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE"
      },
      {
        base: "c60_t0x967da4048cD07aB37855c090aAF366e4ce1b9F48"
      },
      {
        base: "c60_t0x990f341946A3fdB507aE7e52d17851B87168017c"
      },
      {
        base: "c60_t0x9B02dD390a603Add5c07f9fd9175b7DABE8D63B7"
      },
      {
        base: "c60_t0x9BE89D2a4cd102D8Fecc6BF9dA793be995C22541"
      },
      {
        base: "c60_t0x9EA3b5b4EC044b70375236A281986106457b20EF"
      },
      {
        base: "c60_t0x9Ed8e7C9604790F7Ec589F99b94361d8AAB64E5E"
      },
      {
        base: "c60_t0x9f7229aF0c4b9740e207Ea283b9094983f78ba04"
      },
      {
        base: "c60_t0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2"
      },
      {
        base: "c60_t0x9F9c8ec3534c3cE16F928381372BfbFBFb9F4D24"
      },
      {
        base: "c60_t0xa0246c9032bC3A600820415aE600c6388619A14D"
      },
      {
        base: "c60_t0xa0afAA285Ce85974c3C881256cB7F225e3A1178a"
      },
      {
        base: "c60_t0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
      },
      {
        base: "c60_t0xa117000000f279D81A1D3cc75430fAA017FA5A2e"
      },
      {
        base: "c60_t0xa393473d64d2F9F026B60b6Df7859A689715d092"
      },
      {
        base: "c60_t0xA4EED63db85311E22dF4473f87CcfC3DaDCFA3E3"
      },
      {
        base: "c60_t0xa8c8CfB141A3bB59FEA1E2ea6B79b5ECBCD7b6ca"
      },
      {
        base: "c60_t0xAa6E8127831c9DE45ae56bB1b0d4D4Da6e5665BD"
      },
      {
        base: "c60_t0xaaAEBE6Fe48E54f431b0C390CfaF0b017d09D42d"
      },
      {
        base: "c60_t0xAd4f86a25bbc20FfB751f2FAC312A0B4d8F88c64"
      },
      {
        base: "c60_t0xaDB2437e6F65682B85F814fBc12FeC0508A7B1D0"
      },
      {
        base: "c60_t0xaE697F994Fc5eBC000F8e22EbFfeE04612f98A0d"
      },
      {
        base: "c60_t0x41A3Dba3D677E573636BA691a70ff2D606c29666"
      },
      {
        base: "c60_t0xaf9f549774ecEDbD0966C52f250aCc548D3F36E5"
      },
      {
        base: "c60_t0xB26631c6dda06aD89B93C71400D25692de89c068"
      },
      {
        base: "c60_t0xB62132e35a6c13ee1EE0f84dC5d40bad8d815206"
      },
      {
        base: "c60_t0xB6ff96B8A8d214544Ca0dBc9B33f7AD6503eFD32"
      },
      {
        base: "c60_t0xb753428af26E81097e7fD17f40c88aaA3E04902c"
      },
      {
        base: "c60_t0xB9d99C33eA2d86EC5eC6b8A4dD816EBBA64404AF"
      },
      {
        base: "c60_t0xba100000625a3754423978a60c9317c58a424e3D"
      },
      {
        base: "c60_t0xBa21Ef4c9f433Ede00badEFcC2754B8E74bd538A"
      },
      {
        base: "c60_t0xBBc2AE13b23d715c30720F079fcd9B4a74093505"
      },
      {
        base: "c60_t0xbC396689893D065F41bc2C6EcbeE5e0085233447"
      },
      {
        base: "c60_t0xc00e94Cb662C3520282E6f5717214004A7f26888"
      },
      {
        base: "c60_t0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F"
      },
      {
        base: "c60_t0xC0bA369c8Db6eB3924965e5c4FD0b4C1B91e305F"
      },
      {
        base: "c60_t0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72"
      },
      {
        base: "c60_t0xC4C2614E694cF534D407Ee49F8E44D125E4681c4"
      },
      {
        base: "c60_t0xC52C326331E9Ce41F04484d3B5E5648158028804"
      },
      {
        base: "c60_t0xCb5f72d37685C3D5aD0bB5F982443BC8FcdF570E"
      },
      {
        base: "c60_t0xCbfef8fdd706cde6F208460f2Bf39Aa9c785F05D"
      },
      {
        base: "c60_t0xCC4304A31d09258b0029eA7FE63d032f52e44EFe"
      },
      {
        base: "c60_t0xD23Ac27148aF6A2f339BD82D0e3CFF380b5093de"
      },
      {
        base: "c60_t0xd26114cd6EE289AccF82350c8d8487fedB8A0C07"
      },
      {
        base: "c60_t0xd379700999F4805Ce80aa32DB46A94dF64561108"
      },
      {
        base: "c60_t0xD46bA6D942050d489DBd938a2C909A5d5039A161"
      },
      {
        base: "c60_t0xD533a949740bb3306d119CC777fa900bA034cd52"
      },
      {
        base: "c60_t0xdAC17F958D2ee523a2206206994597C13D831ec7"
      },
      {
        base: "c60_t0xDDB3422497E61e13543BeA06989C0789117555c5"
      },
      {
        base: "c60_t0xE41d2489571d322189246DaFA5ebDe1F4699F498"
      },
      {
        base: "c60_t0xE452E6Ea2dDeB012e20dB73bf5d3863A3Ac8d77a"
      },
      {
        base: "c60_t0xe53EC727dbDEB9E2d5456c3be40cFF031AB40A55"
      },
      {
        base: "c60_t0xE61fDAF474Fac07063f2234Fb9e60C1163Cfa850"
      },
      {
        base: "c60_t0xE95A203B1a91a908F9B9CE46459d101078c2c3cb"
      },
      {
        base: "c60_t0xEa319e87Cf06203DAe107Dd8E5672175e3Ee976c"
      },
      {
        base: "c60_t0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D"
      },
      {
        base: "c60_t0xeEAA40B28A2d1b0B08f6f97bB1DD4B75316c6107"
      },
      {
        base: "c60_t0xEec2bE5c91ae7f8a338e1e5f3b5DE49d07AfdC81"
      },
      {
        base: "c60_t0xEEF9f339514298C6A857EfCfC1A762aF84438dEE"
      },
      {
        base: "c60_t0xf1f955016EcbCd7321c7266BccFB96c68ea5E49b"
      },
      {
        base: "c60_t0xf418588522d5dd018b425E472991E52EBBeEEEEE"
      },
      {
        base: "c60_t0xf4CD3d3Fda8d7Fd6C5a500203e38640A70Bf9577"
      },
      {
        base: "c60_t0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c"
      },
      {
        base: "c60_t0xF938424F7210f31dF2Aee3011291b658f872e91e"
      },
      {
        base: "c60_t0xF94b5C5651c888d928439aB6514B93944eEE6F48"
      },
      {
        base: "c60_t0xfF20817765cB7f73d4bde2e66e067E58D11095C2"
      },
      {
        base: "c60_t0xf4d2888d29D722226FafA5d9B24F9164c092421E"
      },
      {
        base: "c60_t0x70e8dE73cE538DA2bEEd35d14187F6959a8ecA96"
      },
      {
        base: "c60_t0xbAFDabaDcf19d0cFbbe0AB9C69CF050D86ff888C"
      },
      {
        base: "c60_t0xB0c7a3Ba49C7a6EaBa6cD4a96C55a1391070Ac9A"
      },
      {
        base: "c60_t0xCEBA2a8F6Ec221AEB5f3a7bcd15Cbc7e6a387bfb"
      }
    ]
  },
  {
    chainId: 1,
    asset: "c60_t0x0000000000085d4780B73119b644AE5ecd22b376",
    type: "ERC20",
    address: "0x0000000000085d4780B73119b644AE5ecd22b376",
    name: "TrueUSD",
    symbol: "TUSD",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0000000000085d4780B73119b644AE5ecd22b376/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x0000000000095413afC295d19EDeb1Ad7B71c952",
    type: "ERC20",
    address: "0x0000000000095413afC295d19EDeb1Ad7B71c952",
    name: "Tokenlon",
    symbol: "LON",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0000000000095413afC295d19EDeb1Ad7B71c952/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x00c83aeCC790e8a4453e5dD3B0B4b3680501a7A7",
    type: "ERC20",
    address: "0x00c83aeCC790e8a4453e5dD3B0B4b3680501a7A7",
    name: "SKALE Network",
    symbol: "SKL",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x00c83aeCC790e8a4453e5dD3B0B4b3680501a7A7/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x0202Be363B8a4820f3F4DE7FaF5224fF05943AB1",
    type: "ERC20",
    address: "0x0202Be363B8a4820f3F4DE7FaF5224fF05943AB1",
    name: "UniLend",
    symbol: "UFT",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0202Be363B8a4820f3F4DE7FaF5224fF05943AB1/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x0258F474786DdFd37ABCE6df6BBb1Dd5dfC4434a",
    type: "ERC20",
    address: "0x0258F474786DdFd37ABCE6df6BBb1Dd5dfC4434a",
    name: "Orion Protocol",
    symbol: "ORN",
    decimals: 8,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0258F474786DdFd37ABCE6df6BBb1Dd5dfC4434a/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x03ab458634910AaD20eF5f1C8ee96F1D6ac54919",
    type: "ERC20",
    address: "0x03ab458634910AaD20eF5f1C8ee96F1D6ac54919",
    name: "Rai Reflex Index",
    symbol: "RAI",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x03ab458634910AaD20eF5f1C8ee96F1D6ac54919/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x0488401c3F535193Fa8Df029d9fFe615A06E74E6",
    type: "ERC20",
    address: "0x0488401c3F535193Fa8Df029d9fFe615A06E74E6",
    name: "SparkPoint",
    symbol: "SRK",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0488401c3F535193Fa8Df029d9fFe615A06E74E6/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828",
    type: "ERC20",
    address: "0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828",
    name: "UMA",
    symbol: "UMA",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x06A01a4d579479Dd5D884EBf61A31727A3d8D442",
    type: "ERC20",
    address: "0x06A01a4d579479Dd5D884EBf61A31727A3d8D442",
    name: "SmartKey",
    symbol: "Skey",
    decimals: 8,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x06A01a4d579479Dd5D884EBf61A31727A3d8D442/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x07150e919B4De5fD6a63DE1F9384828396f25fDC",
    type: "ERC20",
    address: "0x07150e919B4De5fD6a63DE1F9384828396f25fDC",
    name: "Base Protocol",
    symbol: "BASE",
    decimals: 9,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x07150e919B4De5fD6a63DE1F9384828396f25fDC/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x09a3EcAFa817268f77BE1283176B946C4ff2E608",
    type: "ERC20",
    address: "0x09a3EcAFa817268f77BE1283176B946C4ff2E608",
    name: "Mirror Protocol",
    symbol: "MIR",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x09a3EcAFa817268f77BE1283176B946C4ff2E608/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x09e64c2B61a5f1690Ee6fbeD9baf5D6990F8dFd0",
    type: "ERC20",
    address: "0x09e64c2B61a5f1690Ee6fbeD9baf5D6990F8dFd0",
    name: "Growth DeFi",
    symbol: "GRO",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x09e64c2B61a5f1690Ee6fbeD9baf5D6990F8dFd0/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x0a50C93c762fDD6E56D86215C24AaAD43aB629aa",
    type: "ERC20",
    address: "0x0a50C93c762fDD6E56D86215C24AaAD43aB629aa",
    name: "LGO Token",
    symbol: "LGO",
    decimals: 8,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0a50C93c762fDD6E56D86215C24AaAD43aB629aa/logo.png",
    pairs: []
  },
  {
    chainId: 1,
    asset: "c60_t0x0Ae055097C6d159879521C384F1D2123D1f195e6",
    type: "ERC20",
    address: "0x0Ae055097C6d159879521C384F1D2123D1f195e6",
    name: "xDai",
    symbol: "STAKE",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0Ae055097C6d159879521C384F1D2123D1f195e6/logo.png",
    pairs: []
  },
  {
    chainId: 1,
    asset: "c60_t0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e",
    type: "ERC20",
    address: "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e",
    name: "yearn.finance",
    symbol: "YFI",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x0c7D5ae016f806603CB1782bEa29AC69471CAb9c",
    type: "ERC20",
    address: "0x0c7D5ae016f806603CB1782bEa29AC69471CAb9c",
    name: "Bifrost",
    symbol: "BFC",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0c7D5ae016f806603CB1782bEa29AC69471CAb9c/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x0CDF9acd87E940837ff21BB40c9fd55F68bba059",
    type: "ERC20",
    address: "0x0CDF9acd87E940837ff21BB40c9fd55F68bba059",
    name: "Public Mint",
    symbol: "MINT",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0CDF9acd87E940837ff21BB40c9fd55F68bba059/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x0cEC1A9154Ff802e7934Fc916Ed7Ca50bDE6844e",
    type: "ERC20",
    address: "0x0cEC1A9154Ff802e7934Fc916Ed7Ca50bDE6844e",
    name: "PoolTogether",
    symbol: "POOL",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0cEC1A9154Ff802e7934Fc916Ed7Ca50bDE6844e/logo.png",
    pairs: []
  },
  {
    chainId: 1,
    asset: "c60_t0x0D8775F648430679A709E98d2b0Cb6250d2887EF",
    type: "ERC20",
    address: "0x0D8775F648430679A709E98d2b0Cb6250d2887EF",
    name: "Basic Attention Token",
    symbol: "BAT",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0D8775F648430679A709E98d2b0Cb6250d2887EF/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x0f51bb10119727a7e5eA3538074fb341F56B09Ad",
    type: "ERC20",
    address: "0x0f51bb10119727a7e5eA3538074fb341F56B09Ad",
    name: "DAO Maker",
    symbol: "DAO",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0f51bb10119727a7e5eA3538074fb341F56B09Ad/logo.png",
    pairs: []
  },
  {
    chainId: 1,
    asset: "c60_t0x0F5D2fB29fb7d3CFeE444a200298f468908cC942",
    type: "ERC20",
    address: "0x0F5D2fB29fb7d3CFeE444a200298f468908cC942",
    name: "Decentraland",
    symbol: "MANA",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0F5D2fB29fb7d3CFeE444a200298f468908cC942/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x0f7F961648aE6Db43C75663aC7E5414Eb79b5704",
    type: "ERC20",
    address: "0x0f7F961648aE6Db43C75663aC7E5414Eb79b5704",
    name: "Blockzero Labs",
    symbol: "XIO",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0f7F961648aE6Db43C75663aC7E5414Eb79b5704/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38",
    type: "ERC20",
    address: "0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38",
    name: "Pundi X",
    symbol: "PUNDIX",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x0fF6ffcFDa92c53F615a4A75D982f399C989366b",
    type: "ERC20",
    address: "0x0fF6ffcFDa92c53F615a4A75D982f399C989366b",
    name: "Unilayer",
    symbol: "LAYER",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0fF6ffcFDa92c53F615a4A75D982f399C989366b/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x10Be9a8dAe441d276a5027936c3aADEd2d82bC15",
    type: "ERC20",
    address: "0x10Be9a8dAe441d276a5027936c3aADEd2d82bC15",
    name: "UniMex Network",
    symbol: "UMX",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x10Be9a8dAe441d276a5027936c3aADEd2d82bC15/logo.png",
    pairs: []
  },
  {
    chainId: 1,
    asset: "c60_t0x111111111117dC0aa78b770fA6A738034120C302",
    type: "ERC20",
    address: "0x111111111117dC0aa78b770fA6A738034120C302",
    name: "1INCH Token",
    symbol: "1INCH",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x111111111117dC0aa78b770fA6A738034120C302/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x1337DEF16F9B486fAEd0293eb623Dc8395dFE46a",
    type: "ERC20",
    address: "0x1337DEF16F9B486fAEd0293eb623Dc8395dFE46a",
    name: "ARMOR",
    symbol: "ARMOR",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x1337DEF16F9B486fAEd0293eb623Dc8395dFE46a/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x1337DEF18C680aF1f9f45cBcab6309562975b1dD",
    type: "ERC20",
    address: "0x1337DEF18C680aF1f9f45cBcab6309562975b1dD",
    name: "Armor NXM",
    symbol: "arNXM",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x1337DEF18C680aF1f9f45cBcab6309562975b1dD/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x1494CA1F11D487c2bBe4543E90080AeBa4BA3C2b",
    type: "ERC20",
    address: "0x1494CA1F11D487c2bBe4543E90080AeBa4BA3C2b",
    name: "DeFi Pulse Index",
    symbol: "DPI",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x1494CA1F11D487c2bBe4543E90080AeBa4BA3C2b/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x152687Bc4A7FCC89049cF119F9ac3e5aCF2eE7ef",
    type: "ERC20",
    address: "0x152687Bc4A7FCC89049cF119F9ac3e5aCF2eE7ef",
    name: "DeltaHub Community",
    symbol: "DHC",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x152687Bc4A7FCC89049cF119F9ac3e5aCF2eE7ef/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x15874d65e649880c2614e7a480cb7c9A55787FF6",
    type: "ERC20",
    address: "0x15874d65e649880c2614e7a480cb7c9A55787FF6",
    name: "EthereumMax",
    symbol: "eMax",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x15874d65e649880c2614e7a480cb7c9A55787FF6/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x1614F18Fc94f47967A3Fbe5FfcD46d4e7Da3D787",
    type: "ERC20",
    address: "0x1614F18Fc94f47967A3Fbe5FfcD46d4e7Da3D787",
    name: "PAID Network",
    symbol: "PAID",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x1614F18Fc94f47967A3Fbe5FfcD46d4e7Da3D787/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x16980b3B4a3f9D89E33311B5aa8f80303E5ca4F8",
    type: "ERC20",
    address: "0x16980b3B4a3f9D89E33311B5aa8f80303E5ca4F8",
    name: "KIRA Network",
    symbol: "KEX",
    decimals: 6,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x16980b3B4a3f9D89E33311B5aa8f80303E5ca4F8/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x1796ae0b0fa4862485106a0de9b654eFE301D0b2",
    type: "ERC20",
    address: "0x1796ae0b0fa4862485106a0de9b654eFE301D0b2",
    name: "Polychain Monsters",
    symbol: "PMON",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x1796ae0b0fa4862485106a0de9b654eFE301D0b2/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x17aC188e09A7890a1844E5E65471fE8b0CcFadF3",
    type: "ERC20",
    address: "0x17aC188e09A7890a1844E5E65471fE8b0CcFadF3",
    name: "Cryptocurrency Top 10 Tokens Index",
    symbol: "CC10",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x17aC188e09A7890a1844E5E65471fE8b0CcFadF3/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x18aAA7115705e8be94bfFEBDE57Af9BFc265B998",
    type: "ERC20",
    address: "0x18aAA7115705e8be94bfFEBDE57Af9BFc265B998",
    name: "Audius",
    symbol: "AUDIO",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x18aAA7115705e8be94bfFEBDE57Af9BFc265B998/logo.png",
    pairs: []
  },
  {
    chainId: 1,
    asset: "c60_t0x1985365e9f78359a9B6AD760e32412f4a445E862",
    type: "ERC20",
    address: "0x1985365e9f78359a9B6AD760e32412f4a445E862",
    name: "Augur",
    symbol: "REP",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x1985365e9f78359a9B6AD760e32412f4a445E862/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x1b40183EFB4Dd766f11bDa7A7c3AD8982e998421",
    type: "ERC20",
    address: "0x1b40183EFB4Dd766f11bDa7A7c3AD8982e998421",
    name: "Vesper",
    symbol: "VSP",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x1b40183EFB4Dd766f11bDa7A7c3AD8982e998421/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x1C9491865a1DE77C5b6e19d2E6a5F1D7a6F2b25F",
    type: "ERC20",
    address: "0x1C9491865a1DE77C5b6e19d2E6a5F1D7a6F2b25F",
    name: "Antimatter.Finance Governance Token",
    symbol: "MATTER",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x1C9491865a1DE77C5b6e19d2E6a5F1D7a6F2b25F/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x1C9922314ED1415c95b9FD453c3818fd41867d0B",
    type: "ERC20",
    address: "0x1C9922314ED1415c95b9FD453c3818fd41867d0B",
    name: "TOWER",
    symbol: "TOWER",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x1C9922314ED1415c95b9FD453c3818fd41867d0B/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x1cBb83EbcD552D5EBf8131eF8c9CD9d9BAB342bC",
    type: "ERC20",
    address: "0x1cBb83EbcD552D5EBf8131eF8c9CD9d9BAB342bC",
    name: "Non-Fungible Yearn",
    symbol: "NFY",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x1cBb83EbcD552D5EBf8131eF8c9CD9d9BAB342bC/logo.png",
    pairs: []
  },
  {
    chainId: 1,
    asset: "c60_t0x1cEB5cB57C4D4E2b2433641b95Dd330A33185A44",
    type: "ERC20",
    address: "0x1cEB5cB57C4D4E2b2433641b95Dd330A33185A44",
    name: "Keep3rV1",
    symbol: "KP3R",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x1cEB5cB57C4D4E2b2433641b95Dd330A33185A44/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x1dD80016e3d4ae146Ee2EBB484e8edD92dacC4ce",
    type: "ERC20",
    address: "0x1dD80016e3d4ae146Ee2EBB484e8edD92dacC4ce",
    name: "Lead Wallet",
    symbol: "LEAD",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x1dD80016e3d4ae146Ee2EBB484e8edD92dacC4ce/logo.png",
    pairs: []
  },
  {
    chainId: 1,
    asset: "c60_t0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
    type: "ERC20",
    address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
    name: "Uniswap",
    symbol: "UNI",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x1fE24F25b1Cf609B9c4e7E12D802e3640dFA5e43",
    type: "ERC20",
    address: "0x1fE24F25b1Cf609B9c4e7E12D802e3640dFA5e43",
    name: "ChainGuardians Governance Token",
    symbol: "CGG",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x1fE24F25b1Cf609B9c4e7E12D802e3640dFA5e43/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x21BfBDa47A0B4B5b1248c767Ee49F7caA9B23697",
    type: "ERC20",
    address: "0x21BfBDa47A0B4B5b1248c767Ee49F7caA9B23697",
    name: "OVR",
    symbol: "OVR",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x21BfBDa47A0B4B5b1248c767Ee49F7caA9B23697/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x221657776846890989a759BA2973e427DfF5C9bB",
    type: "ERC20",
    address: "0x221657776846890989a759BA2973e427DfF5C9bB",
    name: "Reputation",
    symbol: "REPv2",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x221657776846890989a759BA2973e427DfF5C9bB/logo.png",
    pairs: []
  },
  {
    chainId: 1,
    asset: "c60_t0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
    type: "ERC20",
    address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
    name: "Wrapped Bitcoin",
    symbol: "WBTC",
    decimals: 8,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x226f7b842E0F0120b7E194D05432b3fd14773a9D",
    type: "ERC20",
    address: "0x226f7b842E0F0120b7E194D05432b3fd14773a9D",
    name: "UNION Protocol Governance Token",
    symbol: "UNN",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x226f7b842E0F0120b7E194D05432b3fd14773a9D/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x23B608675a2B2fB1890d3ABBd85c5775c51691d5",
    type: "ERC20",
    address: "0x23B608675a2B2fB1890d3ABBd85c5775c51691d5",
    name: "Unisocks Edition 0",
    symbol: "SOCKS",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x23B608675a2B2fB1890d3ABBd85c5775c51691d5/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x25e1474170c4c0aA64fa98123bdc8dB49D7802fa",
    type: "ERC20",
    address: "0x25e1474170c4c0aA64fa98123bdc8dB49D7802fa",
    name: "Bidao",
    symbol: "BID",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x25e1474170c4c0aA64fa98123bdc8dB49D7802fa/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x26c8AFBBFE1EBaca03C2bB082E69D0476Bffe099",
    type: "ERC20",
    address: "0x26c8AFBBFE1EBaca03C2bB082E69D0476Bffe099",
    name: "Cellframe",
    symbol: "CELL",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x26c8AFBBFE1EBaca03C2bB082E69D0476Bffe099/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x26E43759551333e57F073bb0772F50329A957b30",
    type: "ERC20",
    address: "0x26E43759551333e57F073bb0772F50329A957b30",
    name: "DegenVC",
    symbol: "DGVC",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x26E43759551333e57F073bb0772F50329A957b30/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x27C70Cd1946795B66be9d954418546998b546634",
    type: "ERC20",
    address: "0x27C70Cd1946795B66be9d954418546998b546634",
    name: "DOGE KILLER",
    symbol: "LEASH",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x27C70Cd1946795B66be9d954418546998b546634/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x29502fE4d233EF0b45C3647101Fa1252cE0634BD",
    type: "ERC20",
    address: "0x29502fE4d233EF0b45C3647101Fa1252cE0634BD",
    name: "Froge Finance",
    symbol: "FROGE",
    decimals: 9,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x29502fE4d233EF0b45C3647101Fa1252cE0634BD/logo.png",
    pairs: []
  },
  {
    chainId: 1,
    asset: "c60_t0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39",
    type: "ERC20",
    address: "0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39",
    name: "HEX",
    symbol: "HEX",
    decimals: 8,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39/logo.png",
    pairs: []
  },
  {
    chainId: 1,
    asset: "c60_t0x2ba592F78dB6436527729929AAf6c908497cB200",
    type: "ERC20",
    address: "0x2ba592F78dB6436527729929AAf6c908497cB200",
    name: "Cream Finance",
    symbol: "CREAM",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x2ba592F78dB6436527729929AAf6c908497cB200/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x2e1E15C44Ffe4Df6a0cb7371CD00d5028e571d14",
    type: "ERC20",
    address: "0x2e1E15C44Ffe4Df6a0cb7371CD00d5028e571d14",
    name: "Mettalex",
    symbol: "MTLX",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x2e1E15C44Ffe4Df6a0cb7371CD00d5028e571d14/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x2e2f3246b6c65CCc4239c9Ee556EC143a7E5DE2c",
    type: "ERC20",
    address: "0x2e2f3246b6c65CCc4239c9Ee556EC143a7E5DE2c",
    name: "Yfi.mobi",
    symbol: "YFIM",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x2e2f3246b6c65CCc4239c9Ee556EC143a7E5DE2c/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x2eDf094dB69d6Dcd487f1B3dB9febE2eeC0dd4c5",
    type: "ERC20",
    address: "0x2eDf094dB69d6Dcd487f1B3dB9febE2eeC0dd4c5",
    name: "ZeroSwap",
    symbol: "ZEE",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x2eDf094dB69d6Dcd487f1B3dB9febE2eeC0dd4c5/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x30f271C9E86D2B7d00a6376Cd96A1cFBD5F0b9b3",
    type: "ERC20",
    address: "0x30f271C9E86D2B7d00a6376Cd96A1cFBD5F0b9b3",
    name: "Decentr",
    symbol: "DEC",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x30f271C9E86D2B7d00a6376Cd96A1cFBD5F0b9b3/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x3155BA85D5F96b2d030a4966AF206230e46849cb",
    type: "ERC20",
    address: "0x3155BA85D5F96b2d030a4966AF206230e46849cb",
    name: "THORChain ETH.RUNE",
    symbol: "RUNE",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x3155BA85D5F96b2d030a4966AF206230e46849cb/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x3301Ee63Fb29F863f2333Bd4466acb46CD8323E6",
    type: "ERC20",
    address: "0x3301Ee63Fb29F863f2333Bd4466acb46CD8323E6",
    name: "Akita Inu",
    symbol: "AKITA",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x3301Ee63Fb29F863f2333Bd4466acb46CD8323E6/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x3383c5a8969Dc413bfdDc9656Eb80A1408E4bA20",
    type: "ERC20",
    address: "0x3383c5a8969Dc413bfdDc9656Eb80A1408E4bA20",
    name: "Anatha",
    symbol: "wANATHA",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x3383c5a8969Dc413bfdDc9656Eb80A1408E4bA20/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x33D0568941C0C64ff7e0FB4fbA0B11BD37deEd9f",
    type: "ERC20",
    address: "0x33D0568941C0C64ff7e0FB4fbA0B11BD37deEd9f",
    name: "RAMP DEFI",
    symbol: "RAMP",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x33D0568941C0C64ff7e0FB4fbA0B11BD37deEd9f/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x3593D125a4f7849a1B059E64F4517A86Dd60c95d",
    type: "ERC20",
    address: "0x3593D125a4f7849a1B059E64F4517A86Dd60c95d",
    name: "MANTRA DAO",
    symbol: "OM",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x3593D125a4f7849a1B059E64F4517A86Dd60c95d/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x362bc847A3a9637d3af6624EeC853618a43ed7D2",
    type: "ERC20",
    address: "0x362bc847A3a9637d3af6624EeC853618a43ed7D2",
    name: "PARSIQ",
    symbol: "PRQ",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x362bc847A3a9637d3af6624EeC853618a43ed7D2/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x3845badAde8e6dFF049820680d1F14bD3903a5d0",
    type: "ERC20",
    address: "0x3845badAde8e6dFF049820680d1F14bD3903a5d0",
    name: "The Sandbox",
    symbol: "SAND",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x3845badAde8e6dFF049820680d1F14bD3903a5d0/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x38e4adB44ef08F22F5B5b76A8f0c2d0dCbE7DcA1",
    type: "ERC20",
    address: "0x38e4adB44ef08F22F5B5b76A8f0c2d0dCbE7DcA1",
    name: "Concentrated Voting Power",
    symbol: "CVP",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x38e4adB44ef08F22F5B5b76A8f0c2d0dCbE7DcA1/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x3aFfCCa64c2A6f4e3B6Bd9c64CD2C969EFd1ECBe",
    type: "ERC20",
    address: "0x3aFfCCa64c2A6f4e3B6Bd9c64CD2C969EFd1ECBe",
    name: "DSLA",
    symbol: "DSLA",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x3aFfCCa64c2A6f4e3B6Bd9c64CD2C969EFd1ECBe/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x3D3D35bb9bEC23b06Ca00fe472b50E7A4c692C30",
    type: "ERC20",
    address: "0x3D3D35bb9bEC23b06Ca00fe472b50E7A4c692C30",
    name: "Vidya",
    symbol: "VIDYA",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x3D3D35bb9bEC23b06Ca00fe472b50E7A4c692C30/logo.png",
    pairs: []
  },
  {
    chainId: 1,
    asset: "c60_t0x408e41876cCCDC0F92210600ef50372656052a38",
    type: "ERC20",
    address: "0x408e41876cCCDC0F92210600ef50372656052a38",
    name: "Ren",
    symbol: "REN",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x408e41876cCCDC0F92210600ef50372656052a38/logo.png",
    pairs: []
  },
  {
    chainId: 1,
    asset: "c60_t0x40FD72257597aA14C7231A7B1aaa29Fce868F677",
    type: "ERC20",
    address: "0x40FD72257597aA14C7231A7B1aaa29Fce868F677",
    name: "SORA",
    symbol: "XOR",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x40FD72257597aA14C7231A7B1aaa29Fce868F677/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b",
    type: "ERC20",
    address: "0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b",
    name: "FunFair",
    symbol: "FUN",
    decimals: 8,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x41A3Dba3D677E573636BA691a70ff2D606c29666",
    type: "ERC20",
    address: "0x41A3Dba3D677E573636BA691a70ff2D606c29666",
    name: "GoBlank",
    symbol: "BLANK",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x41A3Dba3D677E573636BA691a70ff2D606c29666/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x429881672B9AE42b8EbA0E26cD9C73711b891Ca5",
    type: "ERC20",
    address: "0x429881672B9AE42b8EbA0E26cD9C73711b891Ca5",
    name: "Pickle Finance",
    symbol: "PICKLE",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x429881672B9AE42b8EbA0E26cD9C73711b891Ca5/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x431ad2ff6a9C365805eBaD47Ee021148d6f7DBe0",
    type: "ERC20",
    address: "0x431ad2ff6a9C365805eBaD47Ee021148d6f7DBe0",
    name: "dForce",
    symbol: "DF",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x431ad2ff6a9C365805eBaD47Ee021148d6f7DBe0/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xcf0C122c6b73ff809C693DB761e7BaeBe62b6a2E",
    type: "ERC20",
    address: "0xcf0C122c6b73ff809C693DB761e7BaeBe62b6a2E",
    name: "FLOKI",
    symbol: "FLOKI",
    decimals: 9,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xcf0C122c6b73ff809C693DB761e7BaeBe62b6a2E/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x4575f41308EC1483f3d399aa9a2826d74Da13Deb",
    type: "ERC20",
    address: "0x4575f41308EC1483f3d399aa9a2826d74Da13Deb",
    name: "Orchid",
    symbol: "OXT",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x4575f41308EC1483f3d399aa9a2826d74Da13Deb/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x45804880De22913dAFE09f4980848ECE6EcbAf78",
    type: "ERC20",
    address: "0x45804880De22913dAFE09f4980848ECE6EcbAf78",
    name: "PAX Gold",
    symbol: "PAXG",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x45804880De22913dAFE09f4980848ECE6EcbAf78/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x4691937a7508860F876c9c0a2a617E7d9E945D4B",
    type: "ERC20",
    address: "0x4691937a7508860F876c9c0a2a617E7d9E945D4B",
    name: "WOO Network",
    symbol: "WOO",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x4691937a7508860F876c9c0a2a617E7d9E945D4B/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x4a220E6096B25EADb88358cb44068A3248254675",
    type: "ERC20",
    address: "0x4a220E6096B25EADb88358cb44068A3248254675",
    name: "Quant",
    symbol: "QNT",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x4a220E6096B25EADb88358cb44068A3248254675/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x4B1E80cAC91e2216EEb63e29B957eB91Ae9C2Be8",
    type: "ERC20",
    address: "0x4B1E80cAC91e2216EEb63e29B957eB91Ae9C2Be8",
    name: "Jupiter",
    symbol: "JUP",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x4B1E80cAC91e2216EEb63e29B957eB91Ae9C2Be8/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x4c11249814f11b9346808179Cf06e71ac328c1b5",
    type: "ERC20",
    address: "0x4c11249814f11b9346808179Cf06e71ac328c1b5",
    name: "Oraichain Token",
    symbol: "ORAI",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x4c11249814f11b9346808179Cf06e71ac328c1b5/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x4C19596f5aAfF459fA38B0f7eD92F11AE6543784",
    type: "ERC20",
    address: "0x4C19596f5aAfF459fA38B0f7eD92F11AE6543784",
    name: "TrueFi",
    symbol: "TRU",
    decimals: 8,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x4C19596f5aAfF459fA38B0f7eD92F11AE6543784/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x4e352cF164E64ADCBad318C3a1e222E9EBa4Ce42",
    type: "ERC20",
    address: "0x4e352cF164E64ADCBad318C3a1e222E9EBa4Ce42",
    name: "MCDEX Token",
    symbol: "MCB",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x4e352cF164E64ADCBad318C3a1e222E9EBa4Ce42/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x4fE83213D56308330EC302a8BD641f1d0113A4Cc",
    type: "ERC20",
    address: "0x4fE83213D56308330EC302a8BD641f1d0113A4Cc",
    name: "NuCypher",
    symbol: "NU",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x4fE83213D56308330EC302a8BD641f1d0113A4Cc/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x50DE6856358Cc35f3A9a57eAAA34BD4cB707d2cd",
    type: "ERC20",
    address: "0x50DE6856358Cc35f3A9a57eAAA34BD4cB707d2cd",
    name: "Razor Network",
    symbol: "RAZOR",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x50DE6856358Cc35f3A9a57eAAA34BD4cB707d2cd/logo.png",
    pairs: []
  },
  {
    chainId: 1,
    asset: "c60_t0x514910771AF9Ca656af840dff83E8264EcF986CA",
    type: "ERC20",
    address: "0x514910771AF9Ca656af840dff83E8264EcF986CA",
    name: "Chainlink",
    symbol: "LINK",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x514910771AF9Ca656af840dff83E8264EcF986CA/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x5218E472cFCFE0b64A064F055B43b4cdC9EfD3A6",
    type: "ERC20",
    address: "0x5218E472cFCFE0b64A064F055B43b4cdC9EfD3A6",
    name: "unFederalReserve",
    symbol: "eRSDL",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x5218E472cFCFE0b64A064F055B43b4cdC9EfD3A6/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x5228a22e72ccC52d415EcFd199F99D0665E7733b",
    type: "ERC20",
    address: "0x5228a22e72ccC52d415EcFd199F99D0665E7733b",
    name: "pTokens BTC",
    symbol: "pBTC",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x5228a22e72ccC52d415EcFd199F99D0665E7733b/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x54C9EA2E9C9E8eD865Db4A4ce6711C2a0d5063Ba",
    type: "ERC20",
    address: "0x54C9EA2E9C9E8eD865Db4A4ce6711C2a0d5063Ba",
    name: "BarterTrade",
    symbol: "BART",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x54C9EA2E9C9E8eD865Db4A4ce6711C2a0d5063Ba/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x557B933a7C2c45672B610F8954A3deB39a51A8Ca",
    type: "ERC20",
    address: "0x557B933a7C2c45672B610F8954A3deB39a51A8Ca",
    name: "REVV",
    symbol: "REVV",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x557B933a7C2c45672B610F8954A3deB39a51A8Ca/logo.png",
    pairs: []
  },
  {
    chainId: 1,
    asset: "c60_t0x57Ab1ec28D129707052df4dF418D58a2D46d5f51",
    type: "ERC20",
    address: "0x57Ab1ec28D129707052df4dF418D58a2D46d5f51",
    name: "sUSD",
    symbol: "sUSD",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x57Ab1ec28D129707052df4dF418D58a2D46d5f51/logo.png",
    pairs: []
  },
  {
    chainId: 1,
    asset: "c60_t0x584bC13c7D411c00c01A62e8019472dE68768430",
    type: "ERC20",
    address: "0x584bC13c7D411c00c01A62e8019472dE68768430",
    name: "Hegic",
    symbol: "HEGIC",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x584bC13c7D411c00c01A62e8019472dE68768430/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x5a666c7d92E5fA7Edcb6390E4efD6d0CDd69cF37",
    type: "ERC20",
    address: "0x5a666c7d92E5fA7Edcb6390E4efD6d0CDd69cF37",
    name: "UnMarshal",
    symbol: "MARSH",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x5a666c7d92E5fA7Edcb6390E4efD6d0CDd69cF37/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x5BEfBB272290dD5b8521D4a938f6c4757742c430",
    type: "ERC20",
    address: "0x5BEfBB272290dD5b8521D4a938f6c4757742c430",
    name: "Xfinance",
    symbol: "XFI",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x5BEfBB272290dD5b8521D4a938f6c4757742c430/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x5cAf454Ba92e6F2c929DF14667Ee360eD9fD5b26",
    type: "ERC20",
    address: "0x5cAf454Ba92e6F2c929DF14667Ee360eD9fD5b26",
    name: "Dev",
    symbol: "DEV",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x5cAf454Ba92e6F2c929DF14667Ee360eD9fD5b26/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x5Dc02Ea99285E17656b8350722694c35154DB1E8",
    type: "ERC20",
    address: "0x5Dc02Ea99285E17656b8350722694c35154DB1E8",
    name: "BOND",
    symbol: "BOND",
    decimals: 8,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x5Dc02Ea99285E17656b8350722694c35154DB1E8/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x5F64Ab1544D28732F0A24F4713c2C8ec0dA089f0",
    type: "ERC20",
    address: "0x5F64Ab1544D28732F0A24F4713c2C8ec0dA089f0",
    name: "DEXTF Token",
    symbol: "DEXTF",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x5F64Ab1544D28732F0A24F4713c2C8ec0dA089f0/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x5f98805A4E8be255a32880FDeC7F6728C6568bA0",
    type: "ERC20",
    address: "0x5f98805A4E8be255a32880FDeC7F6728C6568bA0",
    name: "Liquity USD",
    symbol: "LUSD",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x5f98805A4E8be255a32880FDeC7F6728C6568bA0/logo.png",
    pairs: []
  },
  {
    chainId: 1,
    asset: "c60_t0x607F4C5BB672230e8672085532f7e901544a7375",
    type: "ERC20",
    address: "0x607F4C5BB672230e8672085532f7e901544a7375",
    name: "iExec RLC",
    symbol: "RLC",
    decimals: 9,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x607F4C5BB672230e8672085532f7e901544a7375/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x6149C26Cd2f7b5CCdb32029aF817123F6E37Df5B",
    type: "ERC20",
    address: "0x6149C26Cd2f7b5CCdb32029aF817123F6E37Df5B",
    name: "Launchpool",
    symbol: "LPOOL",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x6149C26Cd2f7b5CCdb32029aF817123F6E37Df5B/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x62359Ed7505Efc61FF1D56fEF82158CcaffA23D7",
    type: "ERC20",
    address: "0x62359Ed7505Efc61FF1D56fEF82158CcaffA23D7",
    name: "cVault.finance",
    symbol: "CORE",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x62359Ed7505Efc61FF1D56fEF82158CcaffA23D7/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x6243d8CEA23066d098a15582d81a598b4e8391F4",
    type: "ERC20",
    address: "0x6243d8CEA23066d098a15582d81a598b4e8391F4",
    name: "Reflexer Ungovernance Token",
    symbol: "FLX",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x6243d8CEA23066d098a15582d81a598b4e8391F4/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x626E8036dEB333b408Be468F951bdB42433cBF18",
    type: "ERC20",
    address: "0x626E8036dEB333b408Be468F951bdB42433cBF18",
    name: "AIOZ Network",
    symbol: "AIOZ",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x626E8036dEB333b408Be468F951bdB42433cBF18/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x63b4f3e3fa4e438698CE330e365E831F7cCD1eF4",
    type: "ERC20",
    address: "0x63b4f3e3fa4e438698CE330e365E831F7cCD1eF4",
    name: "CyberFi Token",
    symbol: "CFi",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x63b4f3e3fa4e438698CE330e365E831F7cCD1eF4/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x66a0f676479Cee1d7373f3DC2e2952778BfF5bd6",
    type: "ERC20",
    address: "0x66a0f676479Cee1d7373f3DC2e2952778BfF5bd6",
    name: "Wise Token",
    symbol: "WISE",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x66a0f676479Cee1d7373f3DC2e2952778BfF5bd6/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x67B6D479c7bB412C54e03dCA8E1Bc6740ce6b99C",
    type: "ERC20",
    address: "0x67B6D479c7bB412C54e03dCA8E1Bc6740ce6b99C",
    name: "Kylin",
    symbol: "KYL",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x67B6D479c7bB412C54e03dCA8E1Bc6740ce6b99C/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x67c597624B17b16fb77959217360B7cD18284253",
    type: "ERC20",
    address: "0x67c597624B17b16fb77959217360B7cD18284253",
    name: "Benchmark Protocol",
    symbol: "MARK",
    decimals: 9,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x67c597624B17b16fb77959217360B7cD18284253/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x6810e776880C02933D47DB1b9fc05908e5386b96",
    type: "ERC20",
    address: "0x6810e776880C02933D47DB1b9fc05908e5386b96",
    name: "Gnosis",
    symbol: "GNO",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x6810e776880C02933D47DB1b9fc05908e5386b96/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x69692D3345010a207b759a7D1af6fc7F38b35c5E",
    type: "ERC20",
    address: "0x69692D3345010a207b759a7D1af6fc7F38b35c5E",
    name: "chads.vc",
    symbol: "CHADS",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x69692D3345010a207b759a7D1af6fc7F38b35c5E/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x69A95185ee2a045CDC4bCd1b1Df10710395e4e23",
    type: "ERC20",
    address: "0x69A95185ee2a045CDC4bCd1b1Df10710395e4e23",
    name: "Poolz Finance",
    symbol: "POOLZ",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x69A95185ee2a045CDC4bCd1b1Df10710395e4e23/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x69af81e73A73B40adF4f3d4223Cd9b1ECE623074",
    type: "ERC20",
    address: "0x69af81e73A73B40adF4f3d4223Cd9b1ECE623074",
    name: "Mask Network",
    symbol: "MASK",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x69af81e73A73B40adF4f3d4223Cd9b1ECE623074/logo.png",
    pairs: []
  },
  {
    chainId: 1,
    asset: "c60_t0x6B175474E89094C44Da98b954EedeAC495271d0F",
    type: "ERC20",
    address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    name: "Dai",
    symbol: "DAI",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png",
    pairs: []
  },
  {
    chainId: 1,
    asset: "c60_t0x6B3595068778DD592e39A122f4f5a5cF09C90fE2",
    type: "ERC20",
    address: "0x6B3595068778DD592e39A122f4f5a5cF09C90fE2",
    name: "SushiSwap",
    symbol: "SUSHI",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x6B3595068778DD592e39A122f4f5a5cF09C90fE2/logo.png",
    pairs: []
  },
  {
    chainId: 1,
    asset: "c60_t0x6BFf2fE249601ed0Db3a87424a2E923118BB0312",
    type: "ERC20",
    address: "0x6BFf2fE249601ed0Db3a87424a2E923118BB0312",
    name: "Fyooz",
    symbol: "FYZ",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x6BFf2fE249601ed0Db3a87424a2E923118BB0312/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x6c6EE5e31d828De241282B9606C8e98Ea48526E2",
    type: "ERC20",
    address: "0x6c6EE5e31d828De241282B9606C8e98Ea48526E2",
    name: "Holo",
    symbol: "HOT",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x6c6EE5e31d828De241282B9606C8e98Ea48526E2/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x6e0daDE58D2d89eBBe7aFc384e3E4f15b70b14D8",
    type: "ERC20",
    address: "0x6e0daDE58D2d89eBBe7aFc384e3E4f15b70b14D8",
    name: "QuiverX",
    symbol: "QRX",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x6e0daDE58D2d89eBBe7aFc384e3E4f15b70b14D8/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x6F87D756DAf0503d08Eb8993686c7Fc01Dc44fB1",
    type: "ERC20",
    address: "0x6F87D756DAf0503d08Eb8993686c7Fc01Dc44fB1",
    name: "UniTrade",
    symbol: "TRADE",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x6F87D756DAf0503d08Eb8993686c7Fc01Dc44fB1/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x6fC13EACE26590B80cCCAB1ba5d51890577D83B2",
    type: "ERC20",
    address: "0x6fC13EACE26590B80cCCAB1ba5d51890577D83B2",
    name: "Umbrella Network",
    symbol: "UMB",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x6fC13EACE26590B80cCCAB1ba5d51890577D83B2/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x70401dFD142A16dC7031c56E862Fc88Cb9537Ce0",
    type: "ERC20",
    address: "0x70401dFD142A16dC7031c56E862Fc88Cb9537Ce0",
    name: "Bird.Money",
    symbol: "BIRD",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x70401dFD142A16dC7031c56E862Fc88Cb9537Ce0/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x71F85B2E46976bD21302B64329868fd15eb0D127",
    type: "ERC20",
    address: "0x71F85B2E46976bD21302B64329868fd15eb0D127",
    name: "Axion",
    symbol: "AXN",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x71F85B2E46976bD21302B64329868fd15eb0D127/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x725C263e32c72dDC3A19bEa12C5a0479a81eE688",
    type: "ERC20",
    address: "0x725C263e32c72dDC3A19bEa12C5a0479a81eE688",
    name: "Bridge Mutual",
    symbol: "BMI",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x725C263e32c72dDC3A19bEa12C5a0479a81eE688/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x72630B1e3B42874bf335020Ba0249e3E9e47Bafc",
    type: "ERC20",
    address: "0x72630B1e3B42874bf335020Ba0249e3E9e47Bafc",
    name: "Paypolitan Token",
    symbol: "EPAN",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x72630B1e3B42874bf335020Ba0249e3E9e47Bafc/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x72e364F2ABdC788b7E918bc238B21f109Cd634D7",
    type: "ERC20",
    address: "0x72e364F2ABdC788b7E918bc238B21f109Cd634D7",
    name: "Metaverse Index",
    symbol: "MVI",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x72e364F2ABdC788b7E918bc238B21f109Cd634D7/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x72e9D9038cE484EE986FEa183f8d8Df93f9aDA13",
    type: "ERC20",
    address: "0x72e9D9038cE484EE986FEa183f8d8Df93f9aDA13",
    name: "SmartCredit Token",
    symbol: "SMARTCREDIT",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x72e9D9038cE484EE986FEa183f8d8Df93f9aDA13/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x761D38e5ddf6ccf6Cf7c55759d5210750B5D60F3",
    type: "ERC20",
    address: "0x761D38e5ddf6ccf6Cf7c55759d5210750B5D60F3",
    name: "Dogelon",
    symbol: "ELON",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x761D38e5ddf6ccf6Cf7c55759d5210750B5D60F3/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x7659CE147D0e714454073a5dd7003544234b6Aa0",
    type: "ERC20",
    address: "0x7659CE147D0e714454073a5dd7003544234b6Aa0",
    name: "XCAD Network",
    symbol: "XCAD",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x7659CE147D0e714454073a5dd7003544234b6Aa0/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x7671904eed7f10808B664fc30BB8693FD7237abF",
    type: "ERC20",
    address: "0x7671904eed7f10808B664fc30BB8693FD7237abF",
    name: "Boolberry",
    symbol: "BBR",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x7671904eed7f10808B664fc30BB8693FD7237abF/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x77777FeDdddFfC19Ff86DB637967013e6C6A116C",
    type: "ERC20",
    address: "0x77777FeDdddFfC19Ff86DB637967013e6C6A116C",
    name: "Tornado Cash",
    symbol: "TORN",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x77777FeDdddFfC19Ff86DB637967013e6C6A116C/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x7a2Bc711E19ba6aff6cE8246C546E8c4B4944DFD",
    type: "ERC20",
    address: "0x7a2Bc711E19ba6aff6cE8246C546E8c4B4944DFD",
    name: "WAXE",
    symbol: "WAXE",
    decimals: 8,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x7a2Bc711E19ba6aff6cE8246C546E8c4B4944DFD/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x7b123f53421b1bF8533339BFBdc7C98aA94163db",
    type: "ERC20",
    address: "0x7b123f53421b1bF8533339BFBdc7C98aA94163db",
    name: "DFOhub",
    symbol: "buidl",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x7b123f53421b1bF8533339BFBdc7C98aA94163db/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
    type: "ERC20",
    address: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
    name: "Polygon",
    symbol: "MATIC",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x7dE91B204C1C737bcEe6F000AAA6569Cf7061cb7",
    type: "ERC20",
    address: "0x7dE91B204C1C737bcEe6F000AAA6569Cf7061cb7",
    name: "Robonomics",
    symbol: "XRT",
    decimals: 9,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x7dE91B204C1C737bcEe6F000AAA6569Cf7061cb7/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x7F3EDcdD180Dbe4819Bd98FeE8929b5cEdB3AdEB",
    type: "ERC20",
    address: "0x7F3EDcdD180Dbe4819Bd98FeE8929b5cEdB3AdEB",
    name: "xToken",
    symbol: "XTK",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x7F3EDcdD180Dbe4819Bd98FeE8929b5cEdB3AdEB/logo.png",
    pairs: []
  },
  {
    chainId: 1,
    asset: "c60_t0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
    type: "ERC20",
    address: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
    name: "Aave",
    symbol: "AAVE",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x7FF4169a6B5122b664c51c95727d87750eC07c84",
    type: "ERC20",
    address: "0x7FF4169a6B5122b664c51c95727d87750eC07c84",
    name: "Tenset",
    symbol: "10SET",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x7FF4169a6B5122b664c51c95727d87750eC07c84/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x8207c1FfC5B6804F6024322CcF34F29c3541Ae26",
    type: "ERC20",
    address: "0x8207c1FfC5B6804F6024322CcF34F29c3541Ae26",
    name: "Origin Protocol",
    symbol: "OGN",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x8207c1FfC5B6804F6024322CcF34F29c3541Ae26/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x83e6f1E41cdd28eAcEB20Cb649155049Fac3D5Aa",
    type: "ERC20",
    address: "0x83e6f1E41cdd28eAcEB20Cb649155049Fac3D5Aa",
    name: "Polkastarter",
    symbol: "POLS",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x83e6f1E41cdd28eAcEB20Cb649155049Fac3D5Aa/logo.png",
    pairs: []
  },
  {
    chainId: 1,
    asset: "c60_t0x8400D94A5cb0fa0D041a3788e395285d61c9ee5e",
    type: "ERC20",
    address: "0x8400D94A5cb0fa0D041a3788e395285d61c9ee5e",
    name: "Unibright",
    symbol: "UBT",
    decimals: 8,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x8400D94A5cb0fa0D041a3788e395285d61c9ee5e/logo.png",
    pairs: []
  },
  {
    chainId: 1,
    asset: "c60_t0x84cA8bc7997272c7CfB4D0Cd3D55cd942B3c9419",
    type: "ERC20",
    address: "0x84cA8bc7997272c7CfB4D0Cd3D55cd942B3c9419",
    name: "DIA",
    symbol: "DIA",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x84cA8bc7997272c7CfB4D0Cd3D55cd942B3c9419/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x853d955aCEf822Db058eb8505911ED77F175b99e",
    type: "ERC20",
    address: "0x853d955aCEf822Db058eb8505911ED77F175b99e",
    name: "Frax",
    symbol: "FRAX",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x853d955aCEf822Db058eb8505911ED77F175b99e/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x85Eee30c52B0b379b046Fb0F85F4f3Dc3009aFEC",
    type: "ERC20",
    address: "0x85Eee30c52B0b379b046Fb0F85F4f3Dc3009aFEC",
    name: "KEEP Token",
    symbol: "KEEP",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x85Eee30c52B0b379b046Fb0F85F4f3Dc3009aFEC/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x8888801aF4d980682e47f1A9036e589479e835C5",
    type: "ERC20",
    address: "0x8888801aF4d980682e47f1A9036e589479e835C5",
    name: "88mph.app",
    symbol: "MPH",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x8888801aF4d980682e47f1A9036e589479e835C5/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x88ACDd2a6425c3FaAE4Bc9650Fd7E27e0Bebb7aB",
    type: "ERC20",
    address: "0x88ACDd2a6425c3FaAE4Bc9650Fd7E27e0Bebb7aB",
    name: "Alchemist",
    symbol: "\u2697\uFE0F",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x88ACDd2a6425c3FaAE4Bc9650Fd7E27e0Bebb7aB/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x88EF27e69108B2633F8E1C184CC37940A075cC02",
    type: "ERC20",
    address: "0x88EF27e69108B2633F8E1C184CC37940A075cC02",
    name: "Dego Finance",
    symbol: "DEGO",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x88EF27e69108B2633F8E1C184CC37940A075cC02/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x89Ab32156e46F46D02ade3FEcbe5Fc4243B9AAeD",
    type: "ERC20",
    address: "0x89Ab32156e46F46D02ade3FEcbe5Fc4243B9AAeD",
    name: "pNetwork",
    symbol: "PNT",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x89Ab32156e46F46D02ade3FEcbe5Fc4243B9AAeD/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x8a40c222996f9F3431f63Bf80244C36822060f12",
    type: "ERC20",
    address: "0x8a40c222996f9F3431f63Bf80244C36822060f12",
    name: "Finxflo",
    symbol: "FXF",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x8a40c222996f9F3431f63Bf80244C36822060f12/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x8a854288a5976036A725879164Ca3e91d30c6A1B",
    type: "ERC20",
    address: "0x8a854288a5976036A725879164Ca3e91d30c6A1B",
    name: "GET",
    symbol: "GET",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x8a854288a5976036A725879164Ca3e91d30c6A1B/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xCE3f08e664693ca792caCE4af1364D5e220827B2",
    type: "ERC20",
    address: "0xCE3f08e664693ca792caCE4af1364D5e220827B2",
    name: "SAITAMA",
    symbol: "SAITAMA",
    decimals: 9,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xCE3f08e664693ca792caCE4af1364D5e220827B2/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x8B39B70E39Aa811b69365398e0aACe9bee238AEb",
    type: "ERC20",
    address: "0x8B39B70E39Aa811b69365398e0aACe9bee238AEb",
    name: "PolkaFoundry",
    symbol: "PKF",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x8B39B70E39Aa811b69365398e0aACe9bee238AEb/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x8c15Ef5b4B21951d50E53E4fbdA8298FFAD25057",
    type: "ERC20",
    address: "0x8c15Ef5b4B21951d50E53E4fbdA8298FFAD25057",
    name: "Function X",
    symbol: "FX",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x8c15Ef5b4B21951d50E53E4fbdA8298FFAD25057/logo.png",
    pairs: []
  },
  {
    chainId: 1,
    asset: "c60_t0x8CE9137d39326AD0cD6491fb5CC0CbA0e089b6A9",
    type: "ERC20",
    address: "0x8CE9137d39326AD0cD6491fb5CC0CbA0e089b6A9",
    name: "Swipe",
    symbol: "SXP",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x8CE9137d39326AD0cD6491fb5CC0CbA0e089b6A9/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x8dAEBADE922dF735c38C80C7eBD708Af50815fAa",
    type: "ERC20",
    address: "0x8dAEBADE922dF735c38C80C7eBD708Af50815fAa",
    name: "tBTC",
    symbol: "TBTC",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x8dAEBADE922dF735c38C80C7eBD708Af50815fAa/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x5B7533812759B45C2B44C19e320ba2cD2681b542",
    type: "ERC20",
    address: "0x5B7533812759B45C2B44C19e320ba2cD2681b542",
    name: "SingularityNET Token",
    symbol: "AGIX",
    decimals: 8,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x5B7533812759B45C2B44C19e320ba2cD2681b542/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x8f8221aFbB33998d8584A2B05749bA73c37a938a",
    type: "ERC20",
    address: "0x8f8221aFbB33998d8584A2B05749bA73c37a938a",
    name: "Request Token",
    symbol: "REQ",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x8f8221aFbB33998d8584A2B05749bA73c37a938a/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x9355372396e3F6daF13359B7b607a3374cc638e0",
    type: "ERC20",
    address: "0x9355372396e3F6daF13359B7b607a3374cc638e0",
    name: "WHALE",
    symbol: "WHALE",
    decimals: 4,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x9355372396e3F6daF13359B7b607a3374cc638e0/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x93ED3FBe21207Ec2E8f2d3c3de6e058Cb73Bc04d",
    type: "ERC20",
    address: "0x93ED3FBe21207Ec2E8f2d3c3de6e058Cb73Bc04d",
    name: "Pinakion",
    symbol: "PNK",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x93ED3FBe21207Ec2E8f2d3c3de6e058Cb73Bc04d/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x9469D013805bFfB7D3DEBe5E7839237e535ec483",
    type: "ERC20",
    address: "0x9469D013805bFfB7D3DEBe5E7839237e535ec483",
    name: "Evolution Land Global Token",
    symbol: "RING",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x9469D013805bFfB7D3DEBe5E7839237e535ec483/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x954b890704693af242613edEf1B603825afcD708",
    type: "ERC20",
    address: "0x954b890704693af242613edEf1B603825afcD708",
    name: "Cardstack",
    symbol: "CARD",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x954b890704693af242613edEf1B603825afcD708/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x956F47F50A910163D8BF957Cf5846D573E7f87CA",
    type: "ERC20",
    address: "0x956F47F50A910163D8BF957Cf5846D573E7f87CA",
    name: "Fei USD",
    symbol: "FEI",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x956F47F50A910163D8BF957Cf5846D573E7f87CA/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x95a4492F028aa1fd432Ea71146b433E7B4446611",
    type: "ERC20",
    address: "0x95a4492F028aa1fd432Ea71146b433E7B4446611",
    name: "APY.Finance",
    symbol: "APY",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x95a4492F028aa1fd432Ea71146b433E7B4446611/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE",
    type: "ERC20",
    address: "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE",
    name: "SHIBA INU",
    symbol: "SHIB",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x961C8c0B1aaD0c0b10a51FeF6a867E3091BCef17",
    type: "ERC20",
    address: "0x961C8c0B1aaD0c0b10a51FeF6a867E3091BCef17",
    name: "Dypius",
    symbol: "DYP",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x961C8c0B1aaD0c0b10a51FeF6a867E3091BCef17/logo.png",
    pairs: []
  },
  {
    chainId: 1,
    asset: "c60_t0x967da4048cD07aB37855c090aAF366e4ce1b9F48",
    type: "ERC20",
    address: "0x967da4048cD07aB37855c090aAF366e4ce1b9F48",
    name: "Ocean Protocol",
    symbol: "OCEAN",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x967da4048cD07aB37855c090aAF366e4ce1b9F48/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x990f341946A3fdB507aE7e52d17851B87168017c",
    type: "ERC20",
    address: "0x990f341946A3fdB507aE7e52d17851B87168017c",
    name: "Strong",
    symbol: "STRONG",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x990f341946A3fdB507aE7e52d17851B87168017c/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x9B02dD390a603Add5c07f9fd9175b7DABE8D63B7",
    type: "ERC20",
    address: "0x9B02dD390a603Add5c07f9fd9175b7DABE8D63B7",
    name: "Shopping.io",
    symbol: "SPI",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x9B02dD390a603Add5c07f9fd9175b7DABE8D63B7/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x9BE89D2a4cd102D8Fecc6BF9dA793be995C22541",
    type: "ERC20",
    address: "0x9BE89D2a4cd102D8Fecc6BF9dA793be995C22541",
    name: "Binance Wrapped BTC",
    symbol: "BBTC",
    decimals: 8,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x9BE89D2a4cd102D8Fecc6BF9dA793be995C22541/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x9cEB84f92A0561fa3Cc4132aB9c0b76A59787544",
    type: "ERC20",
    address: "0x9cEB84f92A0561fa3Cc4132aB9c0b76A59787544",
    name: "Doki Doki Finance",
    symbol: "DOKI",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x9cEB84f92A0561fa3Cc4132aB9c0b76A59787544/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x9EA3b5b4EC044b70375236A281986106457b20EF",
    type: "ERC20",
    address: "0x9EA3b5b4EC044b70375236A281986106457b20EF",
    name: "Delta Financial",
    symbol: "DELTA",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x9EA3b5b4EC044b70375236A281986106457b20EF/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x9Ed8e7C9604790F7Ec589F99b94361d8AAB64E5E",
    type: "ERC20",
    address: "0x9Ed8e7C9604790F7Ec589F99b94361d8AAB64E5E",
    name: "Unistake",
    symbol: "UNISTAKE",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x9Ed8e7C9604790F7Ec589F99b94361d8AAB64E5E/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x9f7229aF0c4b9740e207Ea283b9094983f78ba04",
    type: "ERC20",
    address: "0x9f7229aF0c4b9740e207Ea283b9094983f78ba04",
    name: "Tadpole",
    symbol: "TAD",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x9f7229aF0c4b9740e207Ea283b9094983f78ba04/logo.png",
    pairs: []
  },
  {
    chainId: 1,
    asset: "c60_t0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
    type: "ERC20",
    address: "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
    name: "Maker",
    symbol: "MKR",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x9F9c8ec3534c3cE16F928381372BfbFBFb9F4D24",
    type: "ERC20",
    address: "0x9F9c8ec3534c3cE16F928381372BfbFBFb9F4D24",
    name: "GraphLinq",
    symbol: "GLQ",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x9F9c8ec3534c3cE16F928381372BfbFBFb9F4D24/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xa0246c9032bC3A600820415aE600c6388619A14D",
    type: "ERC20",
    address: "0xa0246c9032bC3A600820415aE600c6388619A14D",
    name: "Harvest Finance",
    symbol: "FARM",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xa0246c9032bC3A600820415aE600c6388619A14D/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xa0afAA285Ce85974c3C881256cB7F225e3A1178a",
    type: "ERC20",
    address: "0xa0afAA285Ce85974c3C881256cB7F225e3A1178a",
    name: "Wrapped CrescoFin",
    symbol: "wCRES",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xa0afAA285Ce85974c3C881256cB7F225e3A1178a/logo.png",
    pairs: []
  },
  {
    chainId: 1,
    asset: "c60_t0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    type: "ERC20",
    address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    name: "USD Coin",
    symbol: "USDC",
    decimals: 6,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xa117000000f279D81A1D3cc75430fAA017FA5A2e",
    type: "ERC20",
    address: "0xa117000000f279D81A1D3cc75430fAA017FA5A2e",
    name: "Aragon",
    symbol: "ANT",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xa117000000f279D81A1D3cc75430fAA017FA5A2e/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xa1d6Df714F91DeBF4e0802A542E13067f31b8262",
    type: "ERC20",
    address: "0xa1d6Df714F91DeBF4e0802A542E13067f31b8262",
    name: "RFOX",
    symbol: "RFOX",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xa1d6Df714F91DeBF4e0802A542E13067f31b8262/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xa393473d64d2F9F026B60b6Df7859A689715d092",
    type: "ERC20",
    address: "0xa393473d64d2F9F026B60b6Df7859A689715d092",
    name: "Lattice Token",
    symbol: "LTX",
    decimals: 8,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xa393473d64d2F9F026B60b6Df7859A689715d092/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xa3BeD4E1c75D00fa6f4E5E6922DB7261B5E9AcD2",
    type: "ERC20",
    address: "0xa3BeD4E1c75D00fa6f4E5E6922DB7261B5E9AcD2",
    name: "Meta",
    symbol: "MTA",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xa3BeD4E1c75D00fa6f4E5E6922DB7261B5E9AcD2/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xA4EED63db85311E22dF4473f87CcfC3DaDCFA3E3",
    type: "ERC20",
    address: "0xA4EED63db85311E22dF4473f87CcfC3DaDCFA3E3",
    name: "Rubic",
    symbol: "RBC",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xA4EED63db85311E22dF4473f87CcfC3DaDCFA3E3/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xA8b919680258d369114910511cc87595aec0be6D",
    type: "ERC20",
    address: "0xA8b919680258d369114910511cc87595aec0be6D",
    name: "LUKSO",
    symbol: "LYXe",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xA8b919680258d369114910511cc87595aec0be6D/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xa8c8CfB141A3bB59FEA1E2ea6B79b5ECBCD7b6ca",
    type: "ERC20",
    address: "0xa8c8CfB141A3bB59FEA1E2ea6B79b5ECBCD7b6ca",
    name: "Syntropy",
    symbol: "NOIA",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xa8c8CfB141A3bB59FEA1E2ea6B79b5ECBCD7b6ca/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xA91ac63D040dEB1b7A5E4d4134aD23eb0ba07e14",
    type: "ERC20",
    address: "0xA91ac63D040dEB1b7A5E4d4134aD23eb0ba07e14",
    name: "Bella Protocol",
    symbol: "BEL",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xA91ac63D040dEB1b7A5E4d4134aD23eb0ba07e14/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xAa6E8127831c9DE45ae56bB1b0d4D4Da6e5665BD",
    type: "ERC20",
    address: "0xAa6E8127831c9DE45ae56bB1b0d4D4Da6e5665BD",
    name: "ETH 2x Flexible Leverage Index",
    symbol: "ETH2x-FLI",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xAa6E8127831c9DE45ae56bB1b0d4D4Da6e5665BD/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xaA7a9CA87d3694B5755f213B5D04094b8d0F0A6F",
    type: "ERC20",
    address: "0xaA7a9CA87d3694B5755f213B5D04094b8d0F0A6F",
    name: "Trace Token",
    symbol: "TRAC",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xaA7a9CA87d3694B5755f213B5D04094b8d0F0A6F/logo.png",
    pairs: []
  },
  {
    chainId: 1,
    asset: "c60_t0xaaAEBE6Fe48E54f431b0C390CfaF0b017d09D42d",
    type: "ERC20",
    address: "0xaaAEBE6Fe48E54f431b0C390CfaF0b017d09D42d",
    name: "Celsius",
    symbol: "CEL",
    decimals: 4,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xaaAEBE6Fe48E54f431b0C390CfaF0b017d09D42d/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xaAAf91D9b90dF800Df4F55c205fd6989c977E73a",
    type: "ERC20",
    address: "0xaAAf91D9b90dF800Df4F55c205fd6989c977E73a",
    name: "Monolith TKN",
    symbol: "TKN",
    decimals: 8,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xaAAf91D9b90dF800Df4F55c205fd6989c977E73a/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xaC0104Cca91D167873B8601d2e71EB3D4D8c33e0",
    type: "ERC20",
    address: "0xaC0104Cca91D167873B8601d2e71EB3D4D8c33e0",
    name: "Crowns",
    symbol: "CWS",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xaC0104Cca91D167873B8601d2e71EB3D4D8c33e0/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xAd4f86a25bbc20FfB751f2FAC312A0B4d8F88c64",
    type: "ERC20",
    address: "0xAd4f86a25bbc20FfB751f2FAC312A0B4d8F88c64",
    name: "OptionRoom Token",
    symbol: "ROOM",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xAd4f86a25bbc20FfB751f2FAC312A0B4d8F88c64/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xaDB2437e6F65682B85F814fBc12FeC0508A7B1D0",
    type: "ERC20",
    address: "0xaDB2437e6F65682B85F814fBc12FeC0508A7B1D0",
    name: "UniCrypt",
    symbol: "UNCX",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xaDB2437e6F65682B85F814fBc12FeC0508A7B1D0/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xADE00C28244d5CE17D72E40330B1c318cD12B7c3",
    type: "ERC20",
    address: "0xADE00C28244d5CE17D72E40330B1c318cD12B7c3",
    name: "Ambire AdEx",
    symbol: "ADX",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xADE00C28244d5CE17D72E40330B1c318cD12B7c3/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xAE1eaAE3F627AAca434127644371b67B18444051",
    type: "ERC20",
    address: "0xAE1eaAE3F627AAca434127644371b67B18444051",
    name: "YOP",
    symbol: "YOP",
    decimals: 8,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xAE1eaAE3F627AAca434127644371b67B18444051/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xaE697F994Fc5eBC000F8e22EbFfeE04612f98A0d",
    type: "ERC20",
    address: "0xaE697F994Fc5eBC000F8e22EbFfeE04612f98A0d",
    name: "LGCY Network",
    symbol: "LGCY",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xaE697F994Fc5eBC000F8e22EbFfeE04612f98A0d/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xaf9f549774ecEDbD0966C52f250aCc548D3F36E5",
    type: "ERC20",
    address: "0xaf9f549774ecEDbD0966C52f250aCc548D3F36E5",
    name: "Rio Fuel Token",
    symbol: "RFuel",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xaf9f549774ecEDbD0966C52f250aCc548D3F36E5/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xB1e9157c2Fdcc5a856C8DA8b2d89b6C32b3c1229",
    type: "ERC20",
    address: "0xB1e9157c2Fdcc5a856C8DA8b2d89b6C32b3c1229",
    name: "Zenfuse",
    symbol: "ZEFU",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xB1e9157c2Fdcc5a856C8DA8b2d89b6C32b3c1229/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xB26631c6dda06aD89B93C71400D25692de89c068",
    type: "ERC20",
    address: "0xB26631c6dda06aD89B93C71400D25692de89c068",
    name: "Minds",
    symbol: "MINDS",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xB26631c6dda06aD89B93C71400D25692de89c068/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x745407c86DF8DB893011912d3aB28e68B62E49B0",
    type: "ERC20",
    address: "0x745407c86DF8DB893011912d3aB28e68B62E49B0",
    name: "MahaDAO",
    symbol: "MAHA",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x745407c86DF8DB893011912d3aB28e68B62E49B0/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xB62132e35a6c13ee1EE0f84dC5d40bad8d815206",
    type: "ERC20",
    address: "0xB62132e35a6c13ee1EE0f84dC5d40bad8d815206",
    name: "Nexo",
    symbol: "NEXO",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xB62132e35a6c13ee1EE0f84dC5d40bad8d815206/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xB6ff96B8A8d214544Ca0dBc9B33f7AD6503eFD32",
    type: "ERC20",
    address: "0xB6ff96B8A8d214544Ca0dBc9B33f7AD6503eFD32",
    name: "SYNC",
    symbol: "SYNC",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xB6ff96B8A8d214544Ca0dBc9B33f7AD6503eFD32/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xb753428af26E81097e7fD17f40c88aaA3E04902c",
    type: "ERC20",
    address: "0xb753428af26E81097e7fD17f40c88aaA3E04902c",
    name: "saffron.finance",
    symbol: "SFI",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xb753428af26E81097e7fD17f40c88aaA3E04902c/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xB987D48Ed8f2C468D52D6405624EADBa5e76d723",
    type: "ERC20",
    address: "0xB987D48Ed8f2C468D52D6405624EADBa5e76d723",
    name: "Stabilize Token",
    symbol: "STBZ",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xB987D48Ed8f2C468D52D6405624EADBa5e76d723/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xB9d99C33eA2d86EC5eC6b8A4dD816EBBA64404AF",
    type: "ERC20",
    address: "0xB9d99C33eA2d86EC5eC6b8A4dD816EBBA64404AF",
    name: "K21",
    symbol: "K21",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xB9d99C33eA2d86EC5eC6b8A4dD816EBBA64404AF/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xb9EF770B6A5e12E45983C5D80545258aA38F3B78",
    type: "ERC20",
    address: "0xb9EF770B6A5e12E45983C5D80545258aA38F3B78",
    name: "0chain",
    symbol: "ZCN",
    decimals: 10,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xb9EF770B6A5e12E45983C5D80545258aA38F3B78/logo.png",
    pairs: []
  },
  {
    chainId: 1,
    asset: "c60_t0xba100000625a3754423978a60c9317c58a424e3D",
    type: "ERC20",
    address: "0xba100000625a3754423978a60c9317c58a424e3D",
    name: "Balancer",
    symbol: "BAL",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xba100000625a3754423978a60c9317c58a424e3D/logo.png",
    pairs: []
  },
  {
    chainId: 1,
    asset: "c60_t0xBA11D00c5f74255f56a5E366F4F77f5A186d7f55",
    type: "ERC20",
    address: "0xBA11D00c5f74255f56a5E366F4F77f5A186d7f55",
    name: "Band Protocol",
    symbol: "BAND",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xBA11D00c5f74255f56a5E366F4F77f5A186d7f55/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xBa21Ef4c9f433Ede00badEFcC2754B8E74bd538A",
    type: "ERC20",
    address: "0xBa21Ef4c9f433Ede00badEFcC2754B8E74bd538A",
    name: "Swapfolio",
    symbol: "SWFL",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xBa21Ef4c9f433Ede00badEFcC2754B8E74bd538A/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD",
    type: "ERC20",
    address: "0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD",
    name: "Loopring",
    symbol: "LRC",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xBBc2AE13b23d715c30720F079fcd9B4a74093505",
    type: "ERC20",
    address: "0xBBc2AE13b23d715c30720F079fcd9B4a74093505",
    name: "Ethernity Chain",
    symbol: "ERN",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xBBc2AE13b23d715c30720F079fcd9B4a74093505/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xbC396689893D065F41bc2C6EcbeE5e0085233447",
    type: "ERC20",
    address: "0xbC396689893D065F41bc2C6EcbeE5e0085233447",
    name: "Perpetual",
    symbol: "PERP",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xbC396689893D065F41bc2C6EcbeE5e0085233447/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xbEa98c05eEAe2f3bC8c3565Db7551Eb738c8CCAb",
    type: "ERC20",
    address: "0xbEa98c05eEAe2f3bC8c3565Db7551Eb738c8CCAb",
    name: "GYSR",
    symbol: "GYSR",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xbEa98c05eEAe2f3bC8c3565Db7551Eb738c8CCAb/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xBF494F02EE3FdE1F20BEE6242bCe2d1ED0c15e47",
    type: "ERC20",
    address: "0xBF494F02EE3FdE1F20BEE6242bCe2d1ED0c15e47",
    name: "World Token",
    symbol: "WORLD",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xBF494F02EE3FdE1F20BEE6242bCe2d1ED0c15e47/logo.png",
    pairs: []
  },
  {
    chainId: 1,
    asset: "c60_t0xc00e94Cb662C3520282E6f5717214004A7f26888",
    type: "ERC20",
    address: "0xc00e94Cb662C3520282E6f5717214004A7f26888",
    name: "Compound",
    symbol: "COMP",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xc00e94Cb662C3520282E6f5717214004A7f26888/logo.png",
    pairs: []
  },
  {
    chainId: 1,
    asset: "c60_t0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F",
    type: "ERC20",
    address: "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F",
    name: "Synthetix",
    symbol: "SNX",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xC0bA369c8Db6eB3924965e5c4FD0b4C1B91e305F",
    type: "ERC20",
    address: "0xC0bA369c8Db6eB3924965e5c4FD0b4C1B91e305F",
    name: "DLP Duck Token",
    symbol: "DUCK",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xC0bA369c8Db6eB3924965e5c4FD0b4C1B91e305F/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72",
    type: "ERC20",
    address: "0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72",
    name: "Ethereum Name Service",
    symbol: "ENS",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xC4C2614E694cF534D407Ee49F8E44D125E4681c4",
    type: "ERC20",
    address: "0xC4C2614E694cF534D407Ee49F8E44D125E4681c4",
    name: "Chain Games",
    symbol: "CHAIN",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xC4C2614E694cF534D407Ee49F8E44D125E4681c4/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xC52C326331E9Ce41F04484d3B5E5648158028804",
    type: "ERC20",
    address: "0xC52C326331E9Ce41F04484d3B5E5648158028804",
    name: "ZEN Exchange Token",
    symbol: "ZCX",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xC52C326331E9Ce41F04484d3B5E5648158028804/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xC57d533c50bC22247d49a368880fb49a1caA39F7",
    type: "ERC20",
    address: "0xC57d533c50bC22247d49a368880fb49a1caA39F7",
    name: "PowerTrade Fuel",
    symbol: "PTF",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xC57d533c50bC22247d49a368880fb49a1caA39F7/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xc719d010B63E5bbF2C0551872CD5316ED26AcD83",
    type: "ERC20",
    address: "0xc719d010B63E5bbF2C0551872CD5316ED26AcD83",
    name: "Decentralized Insurance Protocol",
    symbol: "DIP",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xc719d010B63E5bbF2C0551872CD5316ED26AcD83/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B",
    type: "ERC20",
    address: "0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B",
    name: "Tribe",
    symbol: "TRIBE",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xc834Fa996fA3BeC7aAD3693af486ae53D8aA8B50",
    type: "ERC20",
    address: "0xc834Fa996fA3BeC7aAD3693af486ae53D8aA8B50",
    name: "Convergence",
    symbol: "CONV",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xc834Fa996fA3BeC7aAD3693af486ae53D8aA8B50/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xc944E90C64B2c07662A292be6244BDf05Cda44a7",
    type: "ERC20",
    address: "0xc944E90C64B2c07662A292be6244BDf05Cda44a7",
    name: "The Graph",
    symbol: "GRT",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xc944E90C64B2c07662A292be6244BDf05Cda44a7/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xCb5f72d37685C3D5aD0bB5F982443BC8FcdF570E",
    type: "ERC20",
    address: "0xCb5f72d37685C3D5aD0bB5F982443BC8FcdF570E",
    name: "Rootkit Finance",
    symbol: "ROOT",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xCb5f72d37685C3D5aD0bB5F982443BC8FcdF570E/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xCbfef8fdd706cde6F208460f2Bf39Aa9c785F05D",
    type: "ERC20",
    address: "0xCbfef8fdd706cde6F208460f2Bf39Aa9c785F05D",
    name: "Kine Governance Token",
    symbol: "KINE",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xCbfef8fdd706cde6F208460f2Bf39Aa9c785F05D/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xCC4304A31d09258b0029eA7FE63d032f52e44EFe",
    type: "ERC20",
    address: "0xCC4304A31d09258b0029eA7FE63d032f52e44EFe",
    name: "TrustSwap Token",
    symbol: "SWAP",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xCC4304A31d09258b0029eA7FE63d032f52e44EFe/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xCF3C8Be2e2C42331Da80EF210e9B1b307C03d36A",
    type: "ERC20",
    address: "0xCF3C8Be2e2C42331Da80EF210e9B1b307C03d36A",
    name: "BEPRO Network",
    symbol: "BEPRO",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xCF3C8Be2e2C42331Da80EF210e9B1b307C03d36A/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xd084B83C305daFD76AE3E1b4E1F1fe2eCcCb3988",
    type: "ERC20",
    address: "0xd084B83C305daFD76AE3E1b4E1F1fe2eCcCb3988",
    name: "Terra Virtua Kolect",
    symbol: "TVK",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xd084B83C305daFD76AE3E1b4E1F1fe2eCcCb3988/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xD23Ac27148aF6A2f339BD82D0e3CFF380b5093de",
    type: "ERC20",
    address: "0xD23Ac27148aF6A2f339BD82D0e3CFF380b5093de",
    name: "SIREN",
    symbol: "SI",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xD23Ac27148aF6A2f339BD82D0e3CFF380b5093de/logo.png",
    pairs: []
  },
  {
    chainId: 1,
    asset: "c60_t0xd26114cd6EE289AccF82350c8d8487fedB8A0C07",
    type: "ERC20",
    address: "0xd26114cd6EE289AccF82350c8d8487fedB8A0C07",
    name: "OMG Network",
    symbol: "OMG",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xd26114cd6EE289AccF82350c8d8487fedB8A0C07/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xd2877702675e6cEb975b4A1dFf9fb7BAF4C91ea9",
    type: "ERC20",
    address: "0xd2877702675e6cEb975b4A1dFf9fb7BAF4C91ea9",
    name: "Terra",
    symbol: "LUNA",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xd2877702675e6cEb975b4A1dFf9fb7BAF4C91ea9/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xd379700999F4805Ce80aa32DB46A94dF64561108",
    type: "ERC20",
    address: "0xd379700999F4805Ce80aa32DB46A94dF64561108",
    name: "Dextrust",
    symbol: "DETS",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xd379700999F4805Ce80aa32DB46A94dF64561108/logo.png",
    pairs: []
  },
  {
    chainId: 1,
    asset: "c60_t0xD46bA6D942050d489DBd938a2C909A5d5039A161",
    type: "ERC20",
    address: "0xD46bA6D942050d489DBd938a2C909A5d5039A161",
    name: "Ampleforth",
    symbol: "AMPL",
    decimals: 9,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xD46bA6D942050d489DBd938a2C909A5d5039A161/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xD478161C952357F05f0292B56012Cd8457F1cfbF",
    type: "ERC20",
    address: "0xD478161C952357F05f0292B56012Cd8457F1cfbF",
    name: "Polkamarkets",
    symbol: "POLK",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xD478161C952357F05f0292B56012Cd8457F1cfbF/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xD533a949740bb3306d119CC777fa900bA034cd52",
    type: "ERC20",
    address: "0xD533a949740bb3306d119CC777fa900bA034cd52",
    name: "Curve DAO Token",
    symbol: "CRV",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xD533a949740bb3306d119CC777fa900bA034cd52/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xD5525D397898e5502075Ea5E830d8914f6F0affe",
    type: "ERC20",
    address: "0xD5525D397898e5502075Ea5E830d8914f6F0affe",
    name: "MEME",
    symbol: "MEME",
    decimals: 8,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xD5525D397898e5502075Ea5E830d8914f6F0affe/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xD6c67B93a7b248dF608a653d82a100556144c5DA",
    type: "ERC20",
    address: "0xD6c67B93a7b248dF608a653d82a100556144c5DA",
    name: "ExNetwork Token",
    symbol: "EXNT",
    decimals: 16,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xD6c67B93a7b248dF608a653d82a100556144c5DA/logo.png",
    pairs: []
  },
  {
    chainId: 1,
    asset: "c60_t0xdAC17F958D2ee523a2206206994597C13D831ec7",
    type: "ERC20",
    address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    name: "Tether",
    symbol: "USDT",
    decimals: 6,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xdacD69347dE42baBfAEcD09dC88958378780FB62",
    type: "ERC20",
    address: "0xdacD69347dE42baBfAEcD09dC88958378780FB62",
    name: "Atari Token",
    symbol: "ATRI",
    decimals: 0,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xdacD69347dE42baBfAEcD09dC88958378780FB62/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xDcB01cc464238396E213a6fDd933E36796eAfF9f",
    type: "ERC20",
    address: "0xDcB01cc464238396E213a6fDd933E36796eAfF9f",
    name: "Yield",
    symbol: "YLD",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xDcB01cc464238396E213a6fDd933E36796eAfF9f/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xDDB3422497E61e13543BeA06989C0789117555c5",
    type: "ERC20",
    address: "0xDDB3422497E61e13543BeA06989C0789117555c5",
    name: "COTI",
    symbol: "COTI",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xDDB3422497E61e13543BeA06989C0789117555c5/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xE1c7E30C42C24582888C758984f6e382096786bd",
    type: "ERC20",
    address: "0xE1c7E30C42C24582888C758984f6e382096786bd",
    name: "Curate",
    symbol: "XCUR",
    decimals: 8,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xE1c7E30C42C24582888C758984f6e382096786bd/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xe28b3B32B6c345A34Ff64674606124Dd5Aceca30",
    type: "ERC20",
    address: "0xe28b3B32B6c345A34Ff64674606124Dd5Aceca30",
    name: "Injective",
    symbol: "INJ",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xe28b3B32B6c345A34Ff64674606124Dd5Aceca30/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xe3818504c1B32bF1557b16C238B2E01Fd3149C17",
    type: "ERC20",
    address: "0xe3818504c1B32bF1557b16C238B2E01Fd3149C17",
    name: "PILLAR",
    symbol: "PLR",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xe3818504c1B32bF1557b16C238B2E01Fd3149C17/logo.png",
    pairs: []
  },
  {
    chainId: 1,
    asset: "c60_t0xE41d2489571d322189246DaFA5ebDe1F4699F498",
    type: "ERC20",
    address: "0xE41d2489571d322189246DaFA5ebDe1F4699F498",
    name: "0x",
    symbol: "ZRX",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xE41d2489571d322189246DaFA5ebDe1F4699F498/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xE452E6Ea2dDeB012e20dB73bf5d3863A3Ac8d77a",
    type: "ERC20",
    address: "0xE452E6Ea2dDeB012e20dB73bf5d3863A3Ac8d77a",
    name: "WCELO",
    symbol: "WCELO",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xE452E6Ea2dDeB012e20dB73bf5d3863A3Ac8d77a/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xe53EC727dbDEB9E2d5456c3be40cFF031AB40A55",
    type: "ERC20",
    address: "0xe53EC727dbDEB9E2d5456c3be40cFF031AB40A55",
    name: "SuperFarm",
    symbol: "SUPER",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xe53EC727dbDEB9E2d5456c3be40cFF031AB40A55/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xE5CAeF4Af8780E59Df925470b050Fb23C43CA68C",
    type: "ERC20",
    address: "0xE5CAeF4Af8780E59Df925470b050Fb23C43CA68C",
    name: "Ferrum Network",
    symbol: "FRM",
    decimals: 6,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xE5CAeF4Af8780E59Df925470b050Fb23C43CA68C/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xE61fDAF474Fac07063f2234Fb9e60C1163Cfa850",
    type: "ERC20",
    address: "0xE61fDAF474Fac07063f2234Fb9e60C1163Cfa850",
    name: "COIN",
    symbol: "COIN",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xE61fDAF474Fac07063f2234Fb9e60C1163Cfa850/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xE95A203B1a91a908F9B9CE46459d101078c2c3cb",
    type: "ERC20",
    address: "0xE95A203B1a91a908F9B9CE46459d101078c2c3cb",
    name: "ankrETH",
    symbol: "aETHc",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xE95A203B1a91a908F9B9CE46459d101078c2c3cb/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xEA1ea0972fa092dd463f2968F9bB51Cc4c981D71",
    type: "ERC20",
    address: "0xEA1ea0972fa092dd463f2968F9bB51Cc4c981D71",
    name: "Modefi",
    symbol: "MOD",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xEA1ea0972fa092dd463f2968F9bB51Cc4c981D71/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xEa319e87Cf06203DAe107Dd8E5672175e3Ee976c",
    type: "ERC20",
    address: "0xEa319e87Cf06203DAe107Dd8E5672175e3Ee976c",
    name: "SURF Finance",
    symbol: "SURF",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xEa319e87Cf06203DAe107Dd8E5672175e3Ee976c/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D",
    type: "ERC20",
    address: "0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D",
    name: "renBTC",
    symbol: "renBTC",
    decimals: 8,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xEBd9D99A3982d547C5Bb4DB7E3b1F9F14b67Eb83",
    type: "ERC20",
    address: "0xEBd9D99A3982d547C5Bb4DB7E3b1F9F14b67Eb83",
    name: "Everest",
    symbol: "ID",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xEBd9D99A3982d547C5Bb4DB7E3b1F9F14b67Eb83/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xEd91879919B71bB6905f23af0A68d231EcF87b14",
    type: "ERC20",
    address: "0xEd91879919B71bB6905f23af0A68d231EcF87b14",
    name: "DMM: Governance",
    symbol: "DMG",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xEd91879919B71bB6905f23af0A68d231EcF87b14/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xee573a945B01B788B9287CE062A0CFC15bE9fd86",
    type: "ERC20",
    address: "0xee573a945B01B788B9287CE062A0CFC15bE9fd86",
    name: "Exeedme",
    symbol: "XED",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xee573a945B01B788B9287CE062A0CFC15bE9fd86/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xeEAA40B28A2d1b0B08f6f97bB1DD4B75316c6107",
    type: "ERC20",
    address: "0xeEAA40B28A2d1b0B08f6f97bB1DD4B75316c6107",
    name: "GOVI",
    symbol: "GOVI",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xeEAA40B28A2d1b0B08f6f97bB1DD4B75316c6107/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xEec2bE5c91ae7f8a338e1e5f3b5DE49d07AfdC81",
    type: "ERC20",
    address: "0xEec2bE5c91ae7f8a338e1e5f3b5DE49d07AfdC81",
    name: "Dopex Governance Token",
    symbol: "DPX",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xEec2bE5c91ae7f8a338e1e5f3b5DE49d07AfdC81/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xEEF9f339514298C6A857EfCfC1A762aF84438dEE",
    type: "ERC20",
    address: "0xEEF9f339514298C6A857EfCfC1A762aF84438dEE",
    name: "Hermez Network Token",
    symbol: "HEZ",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xEEF9f339514298C6A857EfCfC1A762aF84438dEE/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xF063fE1aB7a291c5d06a86e14730b00BF24cB589",
    type: "ERC20",
    address: "0xF063fE1aB7a291c5d06a86e14730b00BF24cB589",
    name: "DxSale Network",
    symbol: "SALE",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xF063fE1aB7a291c5d06a86e14730b00BF24cB589/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xf1f955016EcbCd7321c7266BccFB96c68ea5E49b",
    type: "ERC20",
    address: "0xf1f955016EcbCd7321c7266BccFB96c68ea5E49b",
    name: "Rally",
    symbol: "RLY",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xf1f955016EcbCd7321c7266BccFB96c68ea5E49b/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xf21661D0D1d76d3ECb8e1B9F1c923DBfffAe4097",
    type: "ERC20",
    address: "0xf21661D0D1d76d3ECb8e1B9F1c923DBfffAe4097",
    name: "Realio Network",
    symbol: "RIO",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xf21661D0D1d76d3ECb8e1B9F1c923DBfffAe4097/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xF411903cbC70a74d22900a5DE66A2dda66507255",
    type: "ERC20",
    address: "0xF411903cbC70a74d22900a5DE66A2dda66507255",
    name: "Verasity",
    symbol: "VRA",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xF411903cbC70a74d22900a5DE66A2dda66507255/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xf418588522d5dd018b425E472991E52EBBeEEEEE",
    type: "ERC20",
    address: "0xf418588522d5dd018b425E472991E52EBBeEEEEE",
    name: "PUSH",
    symbol: "PUSH",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xf418588522d5dd018b425E472991E52EBBeEEEEE/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xf4CD3d3Fda8d7Fd6C5a500203e38640A70Bf9577",
    type: "ERC20",
    address: "0xf4CD3d3Fda8d7Fd6C5a500203e38640A70Bf9577",
    name: "YfDAI.finance",
    symbol: "Yf-DAI",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xf4CD3d3Fda8d7Fd6C5a500203e38640A70Bf9577/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xF4d861575ecC9493420A3f5a14F85B13f0b50EB3",
    type: "ERC20",
    address: "0xF4d861575ecC9493420A3f5a14F85B13f0b50EB3",
    name: "Fractal",
    symbol: "FCL",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xF4d861575ecC9493420A3f5a14F85B13f0b50EB3/logo.png",
    pairs: []
  },
  {
    chainId: 1,
    asset: "c60_t0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c",
    type: "ERC20",
    address: "0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c",
    name: "Enjin Coin",
    symbol: "ENJ",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xf6537FE0df7F0Cc0985Cf00792CC98249E73EFa0",
    type: "ERC20",
    address: "0xf6537FE0df7F0Cc0985Cf00792CC98249E73EFa0",
    name: "GIVLY Coin",
    symbol: "GIV",
    decimals: 8,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xf6537FE0df7F0Cc0985Cf00792CC98249E73EFa0/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xF938424F7210f31dF2Aee3011291b658f872e91e",
    type: "ERC20",
    address: "0xF938424F7210f31dF2Aee3011291b658f872e91e",
    name: "Visor.Finance",
    symbol: "VISR",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xF938424F7210f31dF2Aee3011291b658f872e91e/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xF94b5C5651c888d928439aB6514B93944eEE6F48",
    type: "ERC20",
    address: "0xF94b5C5651c888d928439aB6514B93944eEE6F48",
    name: "Yield",
    symbol: "YLD",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xF94b5C5651c888d928439aB6514B93944eEE6F48/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xfAd45E47083e4607302aa43c65fB3106F1cd7607",
    type: "ERC20",
    address: "0xfAd45E47083e4607302aa43c65fB3106F1cd7607",
    name: "Hoge Finance",
    symbol: "HOGE",
    decimals: 9,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xfAd45E47083e4607302aa43c65fB3106F1cd7607/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xFbEEa1C75E4c4465CB2FCCc9c6d6afe984558E20",
    type: "ERC20",
    address: "0xFbEEa1C75E4c4465CB2FCCc9c6d6afe984558E20",
    name: "DuckDaoDime",
    symbol: "DDIM",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xFbEEa1C75E4c4465CB2FCCc9c6d6afe984558E20/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xfC98e825A2264D890F9a1e68ed50E1526abCcacD",
    type: "ERC20",
    address: "0xfC98e825A2264D890F9a1e68ed50E1526abCcacD",
    name: "Moss Carbon Credit",
    symbol: "MCO2",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xfC98e825A2264D890F9a1e68ed50E1526abCcacD/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xFca59Cd816aB1eaD66534D82bc21E7515cE441CF",
    type: "ERC20",
    address: "0xFca59Cd816aB1eaD66534D82bc21E7515cE441CF",
    name: "Rarible",
    symbol: "RARI",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xFca59Cd816aB1eaD66534D82bc21E7515cE441CF/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xFE3E6a25e6b192A42a44ecDDCd13796471735ACf",
    type: "ERC20",
    address: "0xFE3E6a25e6b192A42a44ecDDCd13796471735ACf",
    name: "Reef",
    symbol: "REEF",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xFE3E6a25e6b192A42a44ecDDCd13796471735ACf/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xfF20817765cB7f73d4bde2e66e067E58D11095C2",
    type: "ERC20",
    address: "0xfF20817765cB7f73d4bde2e66e067E58D11095C2",
    name: "Amp",
    symbol: "AMP",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xfF20817765cB7f73d4bde2e66e067E58D11095C2/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xfffffffFf15AbF397dA76f1dcc1A1604F45126DB",
    type: "ERC20",
    address: "0xfffffffFf15AbF397dA76f1dcc1A1604F45126DB",
    name: "FalconSwap Token",
    symbol: "FSW",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xfffffffFf15AbF397dA76f1dcc1A1604F45126DB/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x383518188C0C6d7730D91b2c03a03C837814a899",
    type: "ERC20",
    address: "0x383518188C0C6d7730D91b2c03a03C837814a899",
    name: "OlympusDAO",
    symbol: "OHM",
    decimals: 9,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x383518188C0C6d7730D91b2c03a03C837814a899/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x767FE9EDC9E0dF98E07454847909b5E959D7ca0E",
    type: "ERC20",
    address: "0x767FE9EDC9E0dF98E07454847909b5E959D7ca0E",
    name: "Illuvium",
    symbol: "ILV",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x767FE9EDC9E0dF98E07454847909b5E959D7ca0E/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xd1d2Eb1B1e90B638588728b4130137D262C87cae",
    type: "ERC20",
    address: "0xd1d2Eb1B1e90B638588728b4130137D262C87cae",
    name: "Gala",
    symbol: "GALA",
    decimals: 8,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xd1d2Eb1B1e90B638588728b4130137D262C87cae/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B",
    type: "ERC20",
    address: "0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B",
    name: "Convex Token",
    symbol: "CVX",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x090185f2135308BaD17527004364eBcC2D37e5F6",
    type: "ERC20",
    address: "0x090185f2135308BaD17527004364eBcC2D37e5F6",
    name: "Spell Token",
    symbol: "SPELL",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x090185f2135308BaD17527004364eBcC2D37e5F6/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x3b484b82567a09e2588A13D54D032153f0c0aEe0",
    type: "ERC20",
    address: "0x3b484b82567a09e2588A13D54D032153f0c0aEe0",
    name: "OpenDAO",
    symbol: "SOS",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x3b484b82567a09e2588A13D54D032153f0c0aEe0/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x6Bba316c48b49BD1eAc44573c5c871ff02958469",
    type: "ERC20",
    address: "0x6Bba316c48b49BD1eAc44573c5c871ff02958469",
    name: "Gas DAO",
    symbol: "GAS",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x6Bba316c48b49BD1eAc44573c5c871ff02958469/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x4Fabb145d64652a948d72533023f6E7A623C7C53",
    type: "ERC20",
    address: "0x4Fabb145d64652a948d72533023f6E7A623C7C53",
    name: "Binance USD",
    symbol: "BUSD",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x4Fabb145d64652a948d72533023f6E7A623C7C53/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x9E32b13ce7f2E80A01932B42553652E053D6ed8e",
    type: "ERC20",
    address: "0x9E32b13ce7f2E80A01932B42553652E053D6ed8e",
    name: "MetisDAO",
    symbol: "Metis",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x9E32b13ce7f2E80A01932B42553652E053D6ed8e/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xf4d2888d29D722226FafA5d9B24F9164c092421E",
    type: "ERC20",
    address: "0xf4d2888d29D722226FafA5d9B24F9164c092421E",
    name: "LooksRare",
    symbol: "LOOKS",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xf4d2888d29D722226FafA5d9B24F9164c092421E/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x1E4EDE388cbc9F4b5c79681B7f94d36a11ABEBC9",
    type: "ERC20",
    address: "0x1E4EDE388cbc9F4b5c79681B7f94d36a11ABEBC9",
    name: "X2Y2Token",
    symbol: "X2Y2",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x1E4EDE388cbc9F4b5c79681B7f94d36a11ABEBC9/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x4d224452801ACEd8B2F0aebE155379bb5D594381",
    type: "ERC20",
    address: "0x4d224452801ACEd8B2F0aebE155379bb5D594381",
    name: "ApeCoin (APE)",
    symbol: "APE",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x4d224452801ACEd8B2F0aebE155379bb5D594381/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6",
    type: "ERC20",
    address: "0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6",
    name: "StargateToken",
    symbol: "STG",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0x70e8dE73cE538DA2bEEd35d14187F6959a8ecA96",
    type: "ERC20",
    address: "0x70e8dE73cE538DA2bEEd35d14187F6959a8ecA96",
    name: "XSGD",
    symbol: "XSGD",
    decimals: 6,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x70e8dE73cE538DA2bEEd35d14187F6959a8ecA96/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xbAFDabaDcf19d0cFbbe0AB9C69CF050D86ff888C",
    type: "ERC20",
    address: "0xbAFDabaDcf19d0cFbbe0AB9C69CF050D86ff888C",
    name: "ZEDXION",
    symbol: "ZEDXION",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xbAFDabaDcf19d0cFbbe0AB9C69CF050D86ff888C/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xB0c7a3Ba49C7a6EaBa6cD4a96C55a1391070Ac9A",
    type: "ERC20",
    address: "0xB0c7a3Ba49C7a6EaBa6cD4a96C55a1391070Ac9A",
    name: "MAGIC",
    symbol: "MAGIC",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xB0c7a3Ba49C7a6EaBa6cD4a96C55a1391070Ac9A/logo.png",
    pairs: []
  },
  {
    asset: "c60_t0xCEBA2a8F6Ec221AEB5f3a7bcd15Cbc7e6a387bfb",
    type: "ERC20",
    address: "0xCEBA2a8F6Ec221AEB5f3a7bcd15Cbc7e6a387bfb",
    name: "Peter Pan",
    symbol: "PAN",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xCEBA2a8F6Ec221AEB5f3a7bcd15Cbc7e6a387bfb/logo.png",
    pairs: []
  }
];
var version2 = {
  major: 14,
  minor: 0,
  patch: 0
};
var ethereum_default = {
  name: name2,
  logoURI: logoURI2,
  timestamp: timestamp2,
  tokens: tokens2,
  version: version2
};

// src/tokenlist/localhost.json
var localhost_exports = {};
__export(localhost_exports, {
  default: () => localhost_default,
  logoURI: () => logoURI3,
  name: () => name3,
  timestamp: () => timestamp3,
  tokens: () => tokens3,
  version: () => version3
});
var name3 = "Joint Labs: Localhost";
var logoURI3 = "https://trustwallet.com/assets/images/favicon.png";
var timestamp3 = "2021-10-07T08:50:36.056Z";
var tokens3 = [
  {
    asset: "0001",
    type: "ERC20",
    address: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
    name: "Joint LOCAL",
    symbol: "P2P",
    decimals: 18,
    logoURI: "https://storage.googleapis.com/joint-images/token-logos/p2p.svg",
    price: 0
  },
  {
    asset: "0002",
    type: "ERC20",
    address: "0x99bbA657f2BbC93c02D617f8bA121cB8Fc104Acf",
    name: "WETH LOCAL",
    symbol: "WETH",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png",
    price: 0
  },
  {
    asset: "0003",
    type: "ERC20",
    address: "0x0E801D84Fa97b50751Dbf25036d067dCf18858bF",
    name: "UNI LOCAL",
    symbol: "UNI",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984/logo.png",
    price: 0
  },
  {
    asset: "0004",
    type: "SYNTHETIC",
    address: "0x8f86403A4DE0BB5791fa46B8e795C547942fE4Cf",
    name: "NGN LOCAL",
    symbol: "NGN",
    decimals: 18,
    logoURI: "https://storage.googleapis.com/joint-images/country-flags/nigeria.svg",
    price: 0
  }
];
var version3 = {
  major: 6,
  minor: 0,
  patch: 0
};
var localhost_default = {
  name: name3,
  logoURI: logoURI3,
  timestamp: timestamp3,
  tokens: tokens3,
  version: version3
};

// src/tokenlist/optimism.json
var optimism_exports = {};
__export(optimism_exports, {
  default: () => optimism_default,
  logoURI: () => logoURI4,
  name: () => name4,
  timestamp: () => timestamp4,
  tokens: () => tokens4,
  version: () => version4
});
var name4 = "Trust Wallet: Optimism Ethereum";
var logoURI4 = "https://trustwallet.com/assets/images/favicon.png";
var timestamp4 = "2022-01-30T13:55:46.031276";
var tokens4 = [
  {
    asset: "c10000070_t0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6",
    type: "OPTIMISM",
    address: "0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6",
    name: "ChainLink",
    symbol: "LINK",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/optimism/assets/0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6/logo.png"
  },
  {
    asset: "c10000070_t0x4200000000000000000000000000000000000006",
    type: "OPTIMISM",
    address: "0x4200000000000000000000000000000000000006",
    name: "Wrapped Ether",
    symbol: "WETH",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/optimism/assets/0x4200000000000000000000000000000000000006/logo.png"
  },
  {
    asset: "c10000070_t0x5029C236320b8f15eF0a657054B84d90bfBEDED3",
    type: "OPTIMISM",
    address: "0x5029C236320b8f15eF0a657054B84d90bfBEDED3",
    name: "BitANT",
    symbol: "BitANT",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/optimism/assets/0x5029C236320b8f15eF0a657054B84d90bfBEDED3/logo.png"
  },
  {
    asset: "c10000070_t0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb",
    type: "OPTIMISM",
    address: "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb",
    name: "Lyra Finance",
    symbol: "LYRA",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/optimism/assets/0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb/logo.png"
  },
  {
    asset: "c10000070_t0x61BAADcF22d2565B0F471b291C475db5555e0b76",
    type: "OPTIMISM",
    address: "0x61BAADcF22d2565B0F471b291C475db5555e0b76",
    name: "Aelin Token",
    symbol: "AELIN",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/optimism/assets/0x61BAADcF22d2565B0F471b291C475db5555e0b76/logo.png"
  },
  {
    asset: "c10000070_t0x9Bcef72be871e61ED4fBbc7630889beE758eb81D",
    type: "OPTIMISM",
    address: "0x9Bcef72be871e61ED4fBbc7630889beE758eb81D",
    name: "Rocket Pool ETH",
    symbol: "rETH",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/optimism/assets/0x9Bcef72be871e61ED4fBbc7630889beE758eb81D/logo.png"
  },
  {
    asset: "c10000070_t0x9e1028F5F1D5eDE59748FFceE5532509976840E0",
    type: "OPTIMISM",
    address: "0x9e1028F5F1D5eDE59748FFceE5532509976840E0",
    name: "Perpetual",
    symbol: "PERP",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/optimism/assets/0x9e1028F5F1D5eDE59748FFceE5532509976840E0/logo.png"
  },
  {
    asset: "c10000070_t0xF98dCd95217E15E05d8638da4c91125E59590B07",
    type: "OPTIMISM",
    address: "0xF98dCd95217E15E05d8638da4c91125E59590B07",
    name: "Kromatika",
    symbol: "KROM",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/optimism/assets/0xF98dCd95217E15E05d8638da4c91125E59590B07/logo.png"
  },
  {
    asset: "c10000070_t0xffD27b572246f35c992EfB28DD8cB730b93Ed301",
    type: "OPTIMISM",
    address: "0xffD27b572246f35c992EfB28DD8cB730b93Ed301",
    name: "Rubicon",
    symbol: "Rubicon",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/optimism/assets/0xffD27b572246f35c992EfB28DD8cB730b93Ed301/logo.png"
  }
];
var version4 = {
  major: 10,
  minor: 0,
  patch: 0
};
var optimism_default = {
  name: name4,
  logoURI: logoURI4,
  timestamp: timestamp4,
  tokens: tokens4,
  version: version4
};

// src/tokenlist/polygon.json
var polygon_exports = {};
__export(polygon_exports, {
  default: () => polygon_default,
  logoURI: () => logoURI5,
  name: () => name5,
  timestamp: () => timestamp5,
  tokens: () => tokens5,
  version: () => version5
});
var name5 = "Trust Wallet: Polygon";
var logoURI5 = "https://trustwallet.com/assets/images/favicon.png";
var timestamp5 = "2021-10-07T08:50:36.056Z";
var tokens5 = [
  {
    asset: "c966_t0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
    type: "POLYGON",
    address: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
    name: "Wrapped Ether",
    symbol: "WETH",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/polygon/assets/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619/logo.png"
  },
  {
    asset: "",
    type: "POLYGON",
    address: "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6",
    name: "(PoS) Wrapped BTC",
    symbol: "WBTC",
    decimals: 8,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/bitcoin/info/logo.png"
  },
  {
    asset: "c966_t0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
    type: "POLYGON",
    address: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
    name: "Wrapped MATIC",
    symbol: "WMATIC",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/polygon/assets/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270/logo.png"
  },
  {
    asset: "c966_t0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
    type: "POLYGON",
    address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
    name: "USD Coin (PoS)",
    symbol: "USDC",
    decimals: 6,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/polygon/assets/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174/logo.png"
  },
  {
    asset: "c966_t0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
    type: "POLYGON",
    address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
    name: "(PoS) Tether USD",
    symbol: "USDT",
    decimals: 6,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/polygon/assets/0xc2132D05D31c914a87C6611C10748AEb04B58e8F/logo.png"
  },
  {
    asset: "c966_t0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
    type: "POLYGON",
    address: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
    name: "(PoS) Dai Stablecoin",
    symbol: "DAI",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/polygon/assets/0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063/logo.png"
  },
  {
    asset: "c966_t0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39",
    type: "POLYGON",
    address: "0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39",
    name: "ChainLink Token",
    symbol: "LINK",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/polygon/assets/0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39/logo.png",
    pairs: []
  },
  {
    asset: "c966_t0x831753DD7087CaC61aB5644b308642cc1c33Dc13",
    type: "POLYGON",
    address: "0x831753DD7087CaC61aB5644b308642cc1c33Dc13",
    name: "QuickSwap",
    symbol: "QUICK",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/polygon/assets/0x831753DD7087CaC61aB5644b308642cc1c33Dc13/logo.png",
    pairs: []
  },
  {
    asset: "c966_t0xD6DF932A45C0f255f85145f286eA0b292B21C90B",
    type: "POLYGON",
    address: "0xD6DF932A45C0f255f85145f286eA0b292B21C90B",
    name: "Aave (PoS)",
    symbol: "AAVE",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/polygon/assets/0xD6DF932A45C0f255f85145f286eA0b292B21C90B/logo.png",
    pairs: []
  }
];
var version5 = {
  major: 6,
  minor: 0,
  patch: 0
};
var polygon_default = {
  name: name5,
  logoURI: logoURI5,
  timestamp: timestamp5,
  tokens: tokens5,
  version: version5
};

// src/tokenlist/sepolia.json
var sepolia_exports = {};
__export(sepolia_exports, {
  default: () => sepolia_default,
  logoURI: () => logoURI6,
  name: () => name6,
  timestamp: () => timestamp6,
  tokens: () => tokens6,
  version: () => version6
});
var name6 = "Trust Wallet: Sepolia";
var logoURI6 = "https://trustwallet.com/assets/images/favicon.png";
var timestamp6 = "2021-10-07T08:50:36.056Z";
var tokens6 = [
  {
    asset: "0001",
    type: "ERC20",
    address: "0x4263541D13298963498ff1f83d992812Ef3d2E73",
    name: "WETH",
    symbol: "WETH",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png",
    price: 0
  },
  {
    asset: "0002",
    type: "ERC20",
    address: "0xd0dE9c8983C1e7071dC2cB826eb7b9F6D3ac60d2",
    name: "Joint",
    symbol: "P2P",
    decimals: 18,
    logoURI: "https://storage.googleapis.com/joint-images/token-logos/p2p.svg",
    price: 0
  }
];
var version6 = {
  major: 6,
  minor: 0,
  patch: 0
};
var sepolia_default = {
  name: name6,
  logoURI: logoURI6,
  timestamp: timestamp6,
  tokens: tokens6,
  version: version6
};

// src/tokenlist/synthetic.json
var synthetic_exports = {};
__export(synthetic_exports, {
  default: () => synthetic_default,
  logoURI: () => logoURI7,
  name: () => name7,
  timestamp: () => timestamp7,
  tokens: () => tokens7,
  version: () => version7
});
var name7 = "Joint Protocol: Synthetic";
var logoURI7 = "";
var timestamp7 = "2021-10-07T08:50:36.056Z";
var tokens7 = [
  {
    asset: "",
    type: "SYNTHETIC",
    address: "0xEb0149A3eD6ba901Db396b674dF84c8b75fba568",
    name: "NGN",
    symbol: "NGN",
    decimals: 18,
    logoURI: "https://assets-cdn.trustwallet.com/blockchains/polygon/assets/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619/logo.png"
  }
];
var version7 = {
  major: 1,
  minor: 0,
  patch: 0
};
var synthetic_default = {
  name: name7,
  logoURI: logoURI7,
  timestamp: timestamp7,
  tokens: tokens7,
  version: version7
};

// src/tokens_list.ts
var TokenLists = {
  ethereum: ethereum_exports,
  polygon: polygon_exports,
  binance: binance_exports,
  optimism: optimism_exports,
  synthetic: synthetic_exports,
  localhost: localhost_exports,
  sepolia: sepolia_exports
};
function getTokenInfo(network, address) {
  const netList = TokenLists[network];
  if (!netList)
    return;
  return _.find(
    netList.tokens,
    (x) => isAddressEqual2(x.address, address)
  );
}
function findTokenInLocalhost(address) {
  return TokenLists.localhost.tokens.find((token) => {
    const match = isAddressEqual2(
      token.address,
      address
    );
    if (!match)
      return;
    token.isSynthetic = token.isSynthetic || token.type == "SYNTHETIC";
    return token;
  });
}
function findTokenInSynthetic(address) {
  return TokenLists.synthetic.tokens.find((token) => {
    const match = isAddressEqual2(
      token.address,
      address
    );
    if (!match)
      return;
    token.isSynthetic = token.isSynthetic || token.type == "SYNTHETIC";
    return token;
  });
}

// src/index.ts
var src_default = chains_default;
export {
  Abi,
  BadgeManifests,
  MediatorPools,
  TokenLists,
  src_default as default,
  findTokenInLocalhost,
  findTokenInSynthetic,
  getChain,
  getChainByName,
  getChainID,
  getChainNames,
  getChains,
  getChainsID,
  getTokenInfo,
  isValidChain,
  parseBadgeLocals,
  paymentMethods
};
//# sourceMappingURL=index.js.map