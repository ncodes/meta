"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default,
  getChain: () => getChain,
  getChains: () => getChains,
  getChainsID: () => getChainsID
});
module.exports = __toCommonJS(src_exports);

// src/chains.ts
var import_chains = require("viem/chains");

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

// src/icons/BSC.tsx
var import_react = __toESM(require("react"), 1);
function IconBSC(props) {
  return /* @__PURE__ */ import_react.default.createElement(
    "svg",
    {
      version: "1.1",
      viewBox: "0 0 58.0 58.0",
      xmlns: "http://www.w3.org/2000/svg",
      ...props
    },
    /* @__PURE__ */ import_react.default.createElement("defs", null, /* @__PURE__ */ import_react.default.createElement("clipPath", { id: "i0" }, /* @__PURE__ */ import_react.default.createElement("path", { d: "M28.8662791,0 C44.8086848,0 57.7325581,12.9244128 57.7325581,28.8674839 C57.7325581,44.8105551 44.8086848,57.7349679 28.8662791,57.7349679 C12.9238734,57.7349679 0,44.8105551 0,28.8674839 C0,12.9244128 12.9238734,0 28.8662791,0 Z" })), /* @__PURE__ */ import_react.default.createElement("clipPath", { id: "i1" }, /* @__PURE__ */ import_react.default.createElement("path", { d: "M20.21419,0 L24.7710768,4.55108087 L12.3855384,16.9371363 L0.0059959037,4.55707702 L4.55888545,0.00399743598 L12.3855384,7.82897837 L20.21419,0 Z" })), /* @__PURE__ */ import_react.default.createElement("clipPath", { id: "i2" }, /* @__PURE__ */ import_react.default.createElement("path", { d: "M12.3795425,0 L24.7610837,12.3840567 L20.2081941,16.9371363 L12.3795425,9.10815789 L4.55288955,16.9331388 L0,12.3800592 L12.3795425,0 Z" })), /* @__PURE__ */ import_react.default.createElement("clipPath", { id: "i3" }, /* @__PURE__ */ import_react.default.createElement("path", { d: "M6.43980761,0 L6.43967322,6.43967322 L0,6.43980761 L0.000134392956,0.000134392956 L6.43980761,0 Z" })), /* @__PURE__ */ import_react.default.createElement("clipPath", { id: "i4" }, /* @__PURE__ */ import_react.default.createElement("path", { d: "M6.43980761,0 L6.43967322,6.43962589 L0,6.43976028 L0.000134391969,0.000134392956 L6.43980761,0 Z" })), /* @__PURE__ */ import_react.default.createElement("clipPath", { id: "i5" }, /* @__PURE__ */ import_react.default.createElement("path", { d: "M4.62084312,0 L9.24168624,4.621036 L4.62284176,9.24407071 L0.0059959037,4.62703215 L0.0059959037,4.61503984 L4.62084312,0 Z" }))),
    /* @__PURE__ */ import_react.default.createElement("g", { transform: "translate(0.10465116279101494 0.07413893753709999)" }, /* @__PURE__ */ import_react.default.createElement("g", { clipPath: "url(#i0)" }, /* @__PURE__ */ import_react.default.createElement(
      "polygon",
      {
        points: "0,0 57.7325581,0 57.7325581,57.7349679 0,57.7349679 0,0",
        stroke: "none",
        fill: "#050911"
      }
    )), /* @__PURE__ */ import_react.default.createElement("g", { transform: "translate(8.71758710950905 8.718407877430764)" }, /* @__PURE__ */ import_react.default.createElement("g", { transform: "translate(7.763153540584426 0.0)" }, /* @__PURE__ */ import_react.default.createElement("g", { transform: "translate(0.0 23.36101588065313)" }, /* @__PURE__ */ import_react.default.createElement("g", { clipPath: "url(#i1)" }, /* @__PURE__ */ import_react.default.createElement(
      "polygon",
      {
        points: "0,0 24.7710768,0 24.7710768,16.9371363 0,16.9371363 0,0",
        stroke: "none",
        fill: "#ECA300"
      }
    ))), /* @__PURE__ */ import_react.default.createElement("g", { transform: "translate(0.005995903704853589 0.0)" }, /* @__PURE__ */ import_react.default.createElement("g", { clipPath: "url(#i2)" }, /* @__PURE__ */ import_react.default.createElement(
      "polygon",
      {
        points: "0,0 24.7610837,0 24.7610837,16.9371363 0,16.9371363 0,0",
        stroke: "none",
        fill: "#ECA300"
      }
    )))), /* @__PURE__ */ import_react.default.createElement("g", { transform: "translate(0.0 15.526041355314188)" }, /* @__PURE__ */ import_react.default.createElement("g", { transform: "translate(31.189697151016702 4.625826522838987) rotate(-44.99999999999999)" }, /* @__PURE__ */ import_react.default.createElement("g", { clipPath: "url(#i3)" }, /* @__PURE__ */ import_react.default.createElement(
      "polygon",
      {
        points: "-1.13686838e-13,0 6.43980761,0 6.43980761,6.43980761 -1.13686838e-13,6.43980761 -1.13686838e-13,0",
        stroke: "none",
        fill: "#ECA300"
      }
    ))), /* @__PURE__ */ import_react.default.createElement("g", { transform: "translate(-2.717825964282383e-13 4.623387086831677) rotate(-44.99999999999999)" }, /* @__PURE__ */ import_react.default.createElement("g", { clipPath: "url(#i4)" }, /* @__PURE__ */ import_react.default.createElement(
      "polygon",
      {
        points: "-3.41060513e-13,0 6.43980761,0 6.43980761,6.43976028 -3.41060513e-13,6.43976028 -3.41060513e-13,0",
        stroke: "none",
        fill: "#ECA300"
      }
    ))), /* @__PURE__ */ import_react.default.createElement("g", { transform: "translate(15.52784883837921 0.0)" }, /* @__PURE__ */ import_react.default.createElement("g", { clipPath: "url(#i5)" }, /* @__PURE__ */ import_react.default.createElement(
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
var import_react2 = __toESM(require("react"), 1);
function IconArbitrum(props) {
  return /* @__PURE__ */ import_react2.default.createElement(
    "svg",
    {
      id: "b",
      "data-name": "Layer 2",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1226.88 1226.88",
      ...props
    },
    /* @__PURE__ */ import_react2.default.createElement("defs", null, /* @__PURE__ */ import_react2.default.createElement("style", null, `
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
    /* @__PURE__ */ import_react2.default.createElement("g", { id: "c", "data-name": "Layer 3" }, /* @__PURE__ */ import_react2.default.createElement("g", null, /* @__PURE__ */ import_react2.default.createElement("circle", { className: "f", cx: "613.44", cy: "613.44", r: "613.44" }), /* @__PURE__ */ import_react2.default.createElement("g", null, /* @__PURE__ */ import_react2.default.createElement(
      "path",
      {
        className: "f",
        d: "m162.91,397.79v431.21c0,27.53,14.71,52.99,38.54,66.71l373.44,215.65c23.83,13.72,53.17,13.72,77,0l373.44-215.65c23.83-13.72,38.54-39.18,38.54-66.71v-431.21c0-27.53-14.71-52.99-38.54-66.71l-373.44-215.65c-23.83-13.72-53.17-13.72-77,0l-373.53,215.65c-23.83,13.72-38.45,39.18-38.45,66.71Z"
      }
    ), /* @__PURE__ */ import_react2.default.createElement("g", null, /* @__PURE__ */ import_react2.default.createElement(
      "path",
      {
        className: "g",
        d: "m694.86,697.03l-53.26,146.05c-1.44,4.06-1.44,8.49,0,12.55l91.62,251.3,105.97-61.2-127.19-348.7c-2.89-8.03-14.26-8.03-17.15,0Z"
      }
    ), /* @__PURE__ */ import_react2.default.createElement(
      "path",
      {
        className: "g",
        d: "m801.65,451.41c-2.89-8.03-14.26-8.03-17.15,0l-53.26,146.05c-1.44,4.06-1.44,8.49,0,12.55l150.11,411.44,105.97-61.2-185.68-508.84Z"
      }
    )), /* @__PURE__ */ import_react2.default.createElement(
      "path",
      {
        className: "e",
        d: "m613.35,131.59c2.62,0,5.24.72,7.58,1.99l404.13,233.34c4.69,2.71,7.58,7.76,7.58,13.09v466.59c0,5.42-2.89,10.38-7.58,13.09l-404.13,233.34c-2.26,1.35-4.96,1.99-7.58,1.99s-5.24-.72-7.58-1.99l-404.13-233.16c-4.69-2.71-7.58-7.76-7.58-13.09v-466.68c0-5.42,2.89-10.38,7.58-13.09l404.13-233.34c2.35-1.35,4.96-2.08,7.58-2.08m0-68.15c-14.35,0-28.8,3.7-41.7,11.19l-404.04,233.25c-25.82,14.89-41.7,42.43-41.7,72.21v466.59c0,29.79,15.89,57.32,41.7,72.21l404.13,233.34c12.91,7.4,27.26,11.19,41.7,11.19s28.8-3.7,41.7-11.19l404.13-233.34c25.82-14.89,41.7-42.43,41.7-72.21v-466.59c0-29.79-15.89-57.32-41.7-72.21l-404.22-233.25c-12.91-7.49-27.35-11.19-41.7-11.19h0Z"
      }
    ), /* @__PURE__ */ import_react2.default.createElement(
      "polygon",
      {
        className: "f",
        points: "346.07 1021.99 383.26 920.17 458.09 982.36 388.13 1046.27 346.07 1021.99"
      }
    ), /* @__PURE__ */ import_react2.default.createElement("g", null, /* @__PURE__ */ import_react2.default.createElement(
      "path",
      {
        className: "d",
        d: "m579.32,346.7h-102.45c-7.67,0-14.53,4.78-17.15,12.01l-219.62,602.08,105.97,61.2,241.83-663.01c2.26-5.96-2.17-12.28-8.58-12.28Z"
      }
    ), /* @__PURE__ */ import_react2.default.createElement(
      "path",
      {
        className: "d",
        d: "m758.59,346.7h-102.45c-7.67,0-14.53,4.78-17.15,12.01l-250.76,687.48,105.97,61.2,272.97-748.41c2.17-5.96-2.26-12.28-8.58-12.28Z"
      }
    )))))
  );
}

// src/icons/IconEthereum.tsx
var import_react3 = __toESM(require("react"), 1);
function IconEthereum(props) {
  return /* @__PURE__ */ import_react3.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", ...props }, /* @__PURE__ */ import_react3.default.createElement("g", { fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ import_react3.default.createElement("circle", { cx: "16", cy: "16", r: "16", fill: "#627EEA" }), /* @__PURE__ */ import_react3.default.createElement("g", { fill: "#FFF", fillRule: "nonzero" }, /* @__PURE__ */ import_react3.default.createElement("path", { fillOpacity: ".602", d: "M16.498 4v8.87l7.497 3.35z" }), /* @__PURE__ */ import_react3.default.createElement("path", { d: "M16.498 4L9 16.22l7.498-3.35z" }), /* @__PURE__ */ import_react3.default.createElement("path", { fillOpacity: ".602", d: "M16.498 21.968v6.027L24 17.616z" }), /* @__PURE__ */ import_react3.default.createElement("path", { d: "M16.498 27.995v-6.028L9 17.616z" }), /* @__PURE__ */ import_react3.default.createElement("path", { fillOpacity: ".2", d: "M16.498 20.573l7.497-4.353-7.497-3.348z" }), /* @__PURE__ */ import_react3.default.createElement("path", { fillOpacity: ".602", d: "M9 16.22l7.498 4.353v-7.701z" }))));
}

// src/icons/IconOptimism.tsx
var import_react4 = __toESM(require("react"), 1);
function IconOptimism(props) {
  return /* @__PURE__ */ import_react4.default.createElement("svg", { viewBox: "0 0 500 500", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ import_react4.default.createElement("circle", { cx: "250", cy: "250", r: "250", fill: "#FF0420" }), /* @__PURE__ */ import_react4.default.createElement(
    "path",
    {
      d: "M177.133 316.446C162.247 316.446 150.051 312.943 140.544 305.938C131.162 298.808 126.471 288.676 126.471 275.541C126.471 272.789 126.784 269.411 127.409 265.408C129.036 256.402 131.35 245.581 134.352 232.947C142.858 198.547 164.812 181.347 200.213 181.347C209.845 181.347 218.476 182.973 226.107 186.225C233.738 189.352 239.742 194.106 244.12 200.486C248.498 206.74 250.688 214.246 250.688 223.002C250.688 225.629 250.375 228.944 249.749 232.947C247.873 244.08 245.621 254.901 242.994 265.408C238.616 282.546 231.048 295.368 220.29 303.874C209.532 312.255 195.147 316.446 177.133 316.446ZM179.76 289.426C186.766 289.426 192.707 287.362 197.586 283.234C202.59 279.106 206.155 272.789 208.281 264.283C211.158 252.524 213.348 242.266 214.849 233.51C215.349 230.883 215.599 228.194 215.599 225.441C215.599 214.058 209.657 208.366 197.774 208.366C190.768 208.366 184.764 210.43 179.76 214.558C174.882 218.687 171.379 225.004 169.253 233.51C167.001 241.891 164.749 252.149 162.498 264.283C161.997 266.784 161.747 269.411 161.747 272.163C161.747 283.672 167.752 289.426 179.76 289.426Z",
      fill: "white"
    }
  ), /* @__PURE__ */ import_react4.default.createElement(
    "path",
    {
      d: "M259.303 314.57C257.927 314.57 256.863 314.132 256.113 313.256C255.487 312.255 255.3 311.13 255.55 309.879L281.444 187.914C281.694 186.538 282.382 185.412 283.508 184.536C284.634 183.661 285.822 183.223 287.073 183.223H336.985C350.87 183.223 362.003 186.1 370.384 191.854C378.891 197.609 383.144 205.927 383.144 216.81C383.144 219.937 382.769 223.19 382.018 226.567C378.891 240.953 372.574 251.586 363.067 258.466C353.685 265.346 340.8 268.786 324.413 268.786H299.082L290.451 309.879C290.2 311.255 289.512 312.38 288.387 313.256C287.261 314.132 286.072 314.57 284.822 314.57H259.303ZM325.727 242.892C330.98 242.892 335.546 241.453 339.424 238.576C343.427 235.699 346.054 231.571 347.305 226.192C347.68 224.065 347.868 222.189 347.868 220.563C347.868 216.935 346.805 214.183 344.678 212.307C342.551 210.305 338.924 209.305 333.795 209.305H311.278L304.148 242.892H325.727Z",
      fill: "white"
    }
  ));
}

// src/icons/IconPolygon.tsx
var import_react5 = __toESM(require("react"), 1);
function IconPolygon(props) {
  return /* @__PURE__ */ import_react5.default.createElement(
    "svg",
    {
      id: "Layer_1",
      fill: "#8247e5",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 507.91 446.91",
      ...props
    },
    /* @__PURE__ */ import_react5.default.createElement(
      "path",
      {
        className: "cls-1",
        d: "M384.58,136.59c-9.28-5.3-21.22-5.3-31.83,0l-74.26,43.77L228.1,208.2,155.16,252c-9.28,5.3-21.22,5.3-31.83,0l-57-34.48a32.33,32.33,0,0,1-15.92-27.85V123.33c0-10.61,5.31-21.22,15.92-27.85l57-33.15c9.28-5.31,21.22-5.31,31.83,0l57,34.48a32.31,32.31,0,0,1,15.92,27.85v43.76l50.39-29.18V94.16c0-10.61-5.3-21.22-15.91-27.85L156.48,4c-9.28-5.31-21.21-5.31-31.82,0L15.91,67.63C5.3,72.94,0,83.55,0,94.16V218.81C0,229.42,5.3,240,15.91,246.66L123.33,309c9.28,5.31,21.22,5.31,31.83,0l72.94-42.44,50.39-29.17,72.94-42.44c9.28-5.3,21.22-5.3,31.83,0l57,33.16A32.32,32.32,0,0,1,456.19,256v66.3c0,10.61-5.3,21.22-15.91,27.85l-55.7,33.16c-9.28,5.3-21.22,5.3-31.83,0l-57-33.16a32.32,32.32,0,0,1-15.91-27.85V279.82L229.42,309v43.76c0,10.61,5.31,21.22,15.92,27.85l107.41,62.33c9.29,5.31,21.22,5.31,31.83,0L492,380.6a32.32,32.32,0,0,0,15.91-27.85v-126c0-10.61-5.3-21.22-15.91-27.85Z"
      }
    )
  );
}

// src/types/token_info.ts
var import_viem = require("viem");
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
    return (0, import_viem.isAddressEqual)(this.address, o.address);
  }
};

// src/chains.ts
var Chains = [
  {
    disabled: true,
    displayName: "Ethereum",
    queryName: "ethereum",
    chainId: import_chains.mainnet.id,
    chain: import_chains.mainnet,
    symbol: "ETH",
    apiUrl: process.env.ETHEREUM_API_URI ?? process.env.NEXT_PUBLIC_ETHEREUM_API_URI,
    rpcUrl: process.env.ETHEREUM_RPC_URL ?? process.env.NEXT_PUBLIC_ETHEREUM_RPC_URL,
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
        address: process.env.ETHEREUM_CORE_ADDRESS ?? process.env.NEXT_PUBLIC_ETHEREUM_CORE_ADDRESS,
        abi: Core_default
      },
      token: {
        address: process.env.ETHEREUM_TOKEN_ADDRESS ?? process.env.NEXT_PUBLIC_ETHEREUM_TOKEN_ADDRESS,
        abi: Token_default
      },
      badgeManager: {
        address: process.env.ETHEREUM_BADGE_MGR_ADDRESS ?? process.env.NEXT_PUBLIC_ETHEREUM_BADGE_MGR_ADDRESS,
        abi: BadgeManager_default
      },
      marketCore: {
        address: process.env.ETHEREUM_MARKET_CORE_ADDRESS ?? process.env.NEXT_PUBLIC_ETHEREUM_MARKET_CORE_ADDRESS,
        abi: MarketCore_default
      },
      disputeManager: {
        address: process.env.ETHEREUM_DISPUTE_MGR_ADDRESS ?? process.env.NEXT_PUBLIC_ETHEREUM_DISPUTE_MGR_ADDRESS,
        abi: DisputeManager_default
      },
      mediatorManager: {
        address: process.env.ETHEREUM_MEDIATOR_MGR_ADDRESS ?? process.env.NEXT_PUBLIC_ETHEREUM_MEDIATOR_MGR_ADDRESS,
        abi: MediatorManager_default
      },
      energon: {
        address: process.env.ETHEREUM_ENERGON_ADDRESS ?? process.env.NEXT_PUBLIC_ETHEREUM_ENERGON_ADDRESS,
        abi: Energon_default
      },
      nft: {
        address: process.env.ETHEREUM_NFT_ADDRESS ?? process.env.NEXT_PUBLIC_ETHEREUM_NFT_ADDRESS,
        abi: NFT_default
      }
    }
  },
  {
    disabled: true,
    displayName: "Polygon",
    queryName: "polygon",
    chainId: import_chains.polygon.id,
    chain: import_chains.polygon,
    symbol: "MATIC",
    apiUrl: process.env.POLYGON_API_URI ?? process.env.NEXT_PUBLIC_POLYGON_API_URI,
    rpcUrl: process.env.POLYGON_RPC_URL ?? process.env.NEXT_PUBLIC_POLYGON_RPC_URL,
    blockExplorer: "https://polygonscan.com",
    logoPath: IconPolygon,
    wrappedTokenInfo: new TokenInfo({
      address: process.env.POLYGON_WRAPPED_TOKEN_ADDRESS ?? process.env.NEXT_PUBLIC_POLYGON_WRAPPED_TOKEN_ADDRESS,
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
    chainId: import_chains.optimism.id,
    chain: import_chains.optimism,
    symbol: "ETH",
    apiUrl: process.env.OPTIMISM_API_URI ?? process.env.NEXT_PUBLIC_OPTIMISM_API_URI,
    rpcUrl: process.env.OPTIMISM_RPC_URL ?? process.env.NEXT_PUBLIC_OPTIMISM_RPC_URL,
    blockExplorer: "https://optimistic.etherscan.io",
    logoPath: IconOptimism,
    wrappedTokenInfo: new TokenInfo({
      address: process.env.OPTIMISM_WRAPPED_TOKEN_ADDRESS ?? process.env.NEXT_PUBLIC_OPTIMISM_WRAPPED_TOKEN_ADDRESS,
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
    chainId: import_chains.bsc.id,
    chain: import_chains.bsc,
    symbol: "BNB",
    apiUrl: process.env.BINANCE_API_URI ?? process.env.NEXT_PUBLIC_BINANCE_API_URI,
    rpcUrl: process.env.BINANCE_RPC_URL ?? process.env.NEXT_PUBLIC_BINANCE_RPC_URL,
    blockExplorer: "https://bscscan.com",
    logoPath: IconBSC,
    wrappedTokenInfo: new TokenInfo({
      address: process.env.BINANCE_WRAPPED_TOKEN_ADDRESS ?? process.env.NEXT_PUBLIC_BINANCE_WRAPPED_TOKEN_ADDRESS,
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
    chainId: import_chains.arbitrum.id,
    chain: import_chains.arbitrum,
    symbol: "ETH",
    apiUrl: process.env.ARBITRUM_API_URI ?? process.env.NEXT_PUBLIC_ARBITRUM_API_URI,
    rpcUrl: process.env.ARBITRUM_RPC_URL ?? process.env.NEXT_PUBLIC_ARBITRUM_RPC_URL,
    blockExplorer: "https://arbiscan.io",
    logoPath: IconArbitrum,
    wrappedTokenInfo: new TokenInfo({
      address: process.env.ARBITRUM_WRAPPED_TOKEN_ADDRESS ?? process.env.NEXT_PUBLIC_ARBITRUM_WRAPPED_TOKEN_ADDRESS,
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
    chainId: import_chains.sepolia.id,
    chain: import_chains.sepolia,
    symbol: "ETH",
    apiUrl: process.env.SEPOLIA_API_URI ?? process.env.NEXT_PUBLIC_SEPOLIA_API_URI,
    rpcUrl: process.env.VITE_SEPOLIA_RPC_URL ?? process.env.NEXT_PUBLIC_VITE_SEPOLIA_RPC_URL,
    blockExplorer: "https://sepolia.etherscan.io",
    logoPath: IconEthereum,
    wrappedTokenInfo: new TokenInfo({
      address: process.env.VITE_SEPOLIA_WRAPPED_TOKEN_ADDRESS ?? process.env.NEXT_PUBLIC_VITE_SEPOLIA_WRAPPED_TOKEN_ADDRESS,
      name: "WETH",
      symbol: "WETH",
      decimals: 18,
      abi: WETH_default,
      logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png"
    }),
    contracts: {
      core: {
        address: process.env.SEPOLIA_CORE_ADDRESS ?? process.env.NEXT_PUBLIC_SEPOLIA_CORE_ADDRESS,
        abi: Core_default
      },
      token: {
        address: process.env.SEPOLIA_TOKEN_ADDRESS ?? process.env.NEXT_PUBLIC_SEPOLIA_TOKEN_ADDRESS,
        abi: Token_default
      },
      badgeManager: {
        address: process.env.SEPOLIA_BADGE_MGR_ADDRESS ?? process.env.NEXT_PUBLIC_SEPOLIA_BADGE_MGR_ADDRESS,
        abi: BadgeManager_default
      },
      marketCore: {
        address: process.env.SEPOLIA_MARKET_CORE_ADDRESS ?? process.env.NEXT_PUBLIC_SEPOLIA_MARKET_CORE_ADDRESS,
        abi: MarketCore_default
      },
      disputeManager: {
        address: process.env.SEPOLIA_DISPUTE_MGR_ADDRESS ?? process.env.NEXT_PUBLIC_SEPOLIA_DISPUTE_MGR_ADDRESS,
        abi: DisputeManager_default
      },
      mediatorManager: {
        address: process.env.SEPOLIA_MEDIATOR_MGR_ADDRESS ?? process.env.NEXT_PUBLIC_SEPOLIA_MEDIATOR_MGR_ADDRESS,
        abi: MediatorManager_default
      },
      energon: {
        address: process.env.SEPOLIA_ENERGON_ADDRESS ?? process.env.NEXT_PUBLIC_SEPOLIA_ENERGON_ADDRESS,
        abi: Energon_default
      },
      nft: {
        address: process.env.SEPOLIA_NFT_ADDRESS ?? process.env.NEXT_PUBLIC_SEPOLIA_NFT_ADDRESS,
        abi: NFT_default
      }
    }
  },
  {
    displayName: "Hardhat",
    queryName: "localhost",
    testnet: true,
    chainId: import_chains.hardhat.id,
    chain: import_chains.hardhat,
    symbol: "ETH",
    apiUrl: process.env.VITE_LOCALHOST_API_URI ?? process.env.NEXT_PUBLIC_VITE_LOCALHOST_API_URI,
    rpcUrl: process.env.VITE_LOCALHOST_RPC_URL ?? process.env.NEXT_PUBLIC_VITE_LOCALHOST_RPC_URL ?? "",
    blockExplorer: "https://etherscan.io",
    logoPath: IconEthereum,
    wrappedTokenInfo: new TokenInfo({
      address: process.env.VITE_LOCALHOST_WRAPPED_TOKEN_ADDRESS ?? process.env.NEXT_PUBLIC_VITE_LOCALHOST_WRAPPED_TOKEN_ADDRESS,
      name: "WETH",
      symbol: "WETH",
      decimals: 18,
      abi: WETH_default,
      logoURI: "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png"
    }),
    contracts: {
      core: {
        address: process.env.LOCALHOST_CORE_ADDRESS ?? process.env.NEXT_PUBLIC_LOCALHOST_CORE_ADDRESS,
        abi: Core_default
      },
      token: {
        address: process.env.LOCALHOST_TOKEN_ADDRESS ?? process.env.NEXT_PUBLIC_LOCALHOST_TOKEN_ADDRESS,
        abi: Token_default
      },
      badgeManager: {
        address: process.env.LOCALHOST_BADGE_MGR_ADDRESS ?? process.env.NEXT_PUBLIC_LOCALHOST_BADGE_MGR_ADDRESS,
        abi: BadgeManager_default
      },
      marketCore: {
        address: process.env.LOCALHOST_MARKET_CORE_ADDRESS ?? process.env.NEXT_PUBLIC_LOCALHOST_MARKET_CORE_ADDRESS,
        abi: MarketCore_default
      },
      disputeManager: {
        address: process.env.LOCALHOST_DISPUTE_MGR_ADDRESS ?? process.env.NEXT_PUBLIC_LOCALHOST_DISPUTE_MGR_ADDRESS,
        abi: DisputeManager_default
      },
      mediatorManager: {
        address: process.env.LOCALHOST_MEDIATOR_MGR_ADDRESS ?? process.env.NEXT_PUBLIC_LOCALHOST_MEDIATOR_MGR_ADDRESS,
        abi: MediatorManager_default
      },
      energon: {
        address: process.env.LOCALHOST_ENERGON_ADDRESS ?? process.env.NEXT_PUBLIC_LOCALHOST_ENERGON_ADDRESS,
        abi: Energon_default
      },
      nft: {
        address: process.env.LOCALHOST_NFT_ADDRESS ?? process.env.NEXT_PUBLIC_LOCALHOST_NFT_ADDRESS,
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
function getChainByName(name) {
  return Chains.find((s) => s.queryName === name);
}
var chains_default = Chains;

// src/index.ts
var src_default = chains_default;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getChain,
  getChains,
  getChainsID
});
//# sourceMappingURL=index.cjs.map