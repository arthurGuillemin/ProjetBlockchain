// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface Hetic$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "Hetic",
  "sourceName": "contracts/Hetic.sol",
  "abi": [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "allowance",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "needed",
          "type": "uint256"
        }
      ],
      "name": "ERC20InsufficientAllowance",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "balance",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "needed",
          "type": "uint256"
        }
      ],
      "name": "ERC20InsufficientBalance",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "approver",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidApprover",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidReceiver",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidSender",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidSpender",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b506040518060400160405280600781526020017f426574636f696e000000000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f4254430000000000000000000000000000000000000000000000000000000000815250816003908161008c91906102f4565b50806004908161009c91906102f4565b5050506103c6565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061012557607f821691505b602082108103610138576101376100de565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026101a07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610163565b6101aa8683610163565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b60006101f16101ec6101e7846101c2565b6101cc565b6101c2565b9050919050565b6000819050919050565b61020b836101d6565b61021f610217826101f8565b848454610170565b825550505050565b600090565b610234610227565b61023f818484610202565b505050565b5b818110156102635761025860008261022c565b600181019050610245565b5050565b601f8211156102a8576102798161013e565b61028284610153565b81016020851015610291578190505b6102a561029d85610153565b830182610244565b50505b505050565b600082821c905092915050565b60006102cb600019846008026102ad565b1980831691505092915050565b60006102e483836102ba565b9150826002028217905092915050565b6102fd826100a4565b67ffffffffffffffff811115610316576103156100af565b5b610320825461010d565b61032b828285610267565b600060209050601f83116001811461035e576000841561034c578287015190505b61035685826102d8565b8655506103be565b601f19841661036c8661013e565b60005b828110156103945784890151825560018201915060208501945060208101905061036f565b868310156103b157848901516103ad601f8916826102ba565b8355505b6001600288020188555050505b505050505050565b610f0d806103d56000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c806340c10f191161006657806340c10f191461015d57806370a082311461017957806395d89b41146101a9578063a9059cbb146101c7578063dd62ed3e146101f75761009e565b806306fdde03146100a3578063095ea7b3146100c157806318160ddd146100f157806323b872dd1461010f578063313ce5671461013f575b600080fd5b6100ab610227565b6040516100b89190610b61565b60405180910390f35b6100db60048036038101906100d69190610c1c565b6102b9565b6040516100e89190610c77565b60405180910390f35b6100f96102dc565b6040516101069190610ca1565b60405180910390f35b61012960048036038101906101249190610cbc565b6102e6565b6040516101369190610c77565b60405180910390f35b610147610315565b6040516101549190610d2b565b60405180910390f35b61017760048036038101906101729190610c1c565b61031e565b005b610193600480360381019061018e9190610d46565b61032c565b6040516101a09190610ca1565b60405180910390f35b6101b1610374565b6040516101be9190610b61565b60405180910390f35b6101e160048036038101906101dc9190610c1c565b610406565b6040516101ee9190610c77565b60405180910390f35b610211600480360381019061020c9190610d73565b610429565b60405161021e9190610ca1565b60405180910390f35b60606003805461023690610de2565b80601f016020809104026020016040519081016040528092919081815260200182805461026290610de2565b80156102af5780601f10610284576101008083540402835291602001916102af565b820191906000526020600020905b81548152906001019060200180831161029257829003601f168201915b5050505050905090565b6000806102c46104b0565b90506102d18185856104b8565b600191505092915050565b6000600254905090565b6000806102f16104b0565b90506102fe8582856104ca565b61030985858561055f565b60019150509392505050565b60006012905090565b6103288282610653565b5050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606004805461038390610de2565b80601f01602080910402602001604051908101604052809291908181526020018280546103af90610de2565b80156103fc5780601f106103d1576101008083540402835291602001916103fc565b820191906000526020600020905b8154815290600101906020018083116103df57829003601f168201915b5050505050905090565b6000806104116104b0565b905061041e81858561055f565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b6104c583838360016106d5565b505050565b60006104d68484610429565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8110156105595781811015610549578281836040517ffb8f41b200000000000000000000000000000000000000000000000000000000815260040161054093929190610e22565b60405180910390fd5b610558848484840360006106d5565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036105d15760006040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016105c89190610e59565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036106435760006040517fec442f0500000000000000000000000000000000000000000000000000000000815260040161063a9190610e59565b60405180910390fd5b61064e8383836108ac565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036106c55760006040517fec442f050000000000000000000000000000000000000000000000000000000081526004016106bc9190610e59565b60405180910390fd5b6106d1600083836108ac565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036107475760006040517fe602df0500000000000000000000000000000000000000000000000000000000815260040161073e9190610e59565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036107b95760006040517f94280d620000000000000000000000000000000000000000000000000000000081526004016107b09190610e59565b60405180910390fd5b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555080156108a6578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161089d9190610ca1565b60405180910390a35b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036108fe5780600260008282546108f29190610ea3565b925050819055506109d1565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561098a578381836040517fe450d38c00000000000000000000000000000000000000000000000000000000815260040161098193929190610e22565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610a1a5780600260008282540392505081905550610a67565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610ac49190610ca1565b60405180910390a3505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610b0b578082015181840152602081019050610af0565b60008484015250505050565b6000601f19601f8301169050919050565b6000610b3382610ad1565b610b3d8185610adc565b9350610b4d818560208601610aed565b610b5681610b17565b840191505092915050565b60006020820190508181036000830152610b7b8184610b28565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610bb382610b88565b9050919050565b610bc381610ba8565b8114610bce57600080fd5b50565b600081359050610be081610bba565b92915050565b6000819050919050565b610bf981610be6565b8114610c0457600080fd5b50565b600081359050610c1681610bf0565b92915050565b60008060408385031215610c3357610c32610b83565b5b6000610c4185828601610bd1565b9250506020610c5285828601610c07565b9150509250929050565b60008115159050919050565b610c7181610c5c565b82525050565b6000602082019050610c8c6000830184610c68565b92915050565b610c9b81610be6565b82525050565b6000602082019050610cb66000830184610c92565b92915050565b600080600060608486031215610cd557610cd4610b83565b5b6000610ce386828701610bd1565b9350506020610cf486828701610bd1565b9250506040610d0586828701610c07565b9150509250925092565b600060ff82169050919050565b610d2581610d0f565b82525050565b6000602082019050610d406000830184610d1c565b92915050565b600060208284031215610d5c57610d5b610b83565b5b6000610d6a84828501610bd1565b91505092915050565b60008060408385031215610d8a57610d89610b83565b5b6000610d9885828601610bd1565b9250506020610da985828601610bd1565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610dfa57607f821691505b602082108103610e0d57610e0c610db3565b5b50919050565b610e1c81610ba8565b82525050565b6000606082019050610e376000830186610e13565b610e446020830185610c92565b610e516040830184610c92565b949350505050565b6000602082019050610e6e6000830184610e13565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610eae82610be6565b9150610eb983610be6565b9250828201905080821115610ed157610ed0610e74565b5b9291505056fea2646970667358221220d238b5275b895c0a541e42724b7a7db416495db89df3bf87b578e7fee5f03d6a64736f6c634300081c0033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061009e5760003560e01c806340c10f191161006657806340c10f191461015d57806370a082311461017957806395d89b41146101a9578063a9059cbb146101c7578063dd62ed3e146101f75761009e565b806306fdde03146100a3578063095ea7b3146100c157806318160ddd146100f157806323b872dd1461010f578063313ce5671461013f575b600080fd5b6100ab610227565b6040516100b89190610b61565b60405180910390f35b6100db60048036038101906100d69190610c1c565b6102b9565b6040516100e89190610c77565b60405180910390f35b6100f96102dc565b6040516101069190610ca1565b60405180910390f35b61012960048036038101906101249190610cbc565b6102e6565b6040516101369190610c77565b60405180910390f35b610147610315565b6040516101549190610d2b565b60405180910390f35b61017760048036038101906101729190610c1c565b61031e565b005b610193600480360381019061018e9190610d46565b61032c565b6040516101a09190610ca1565b60405180910390f35b6101b1610374565b6040516101be9190610b61565b60405180910390f35b6101e160048036038101906101dc9190610c1c565b610406565b6040516101ee9190610c77565b60405180910390f35b610211600480360381019061020c9190610d73565b610429565b60405161021e9190610ca1565b60405180910390f35b60606003805461023690610de2565b80601f016020809104026020016040519081016040528092919081815260200182805461026290610de2565b80156102af5780601f10610284576101008083540402835291602001916102af565b820191906000526020600020905b81548152906001019060200180831161029257829003601f168201915b5050505050905090565b6000806102c46104b0565b90506102d18185856104b8565b600191505092915050565b6000600254905090565b6000806102f16104b0565b90506102fe8582856104ca565b61030985858561055f565b60019150509392505050565b60006012905090565b6103288282610653565b5050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606004805461038390610de2565b80601f01602080910402602001604051908101604052809291908181526020018280546103af90610de2565b80156103fc5780601f106103d1576101008083540402835291602001916103fc565b820191906000526020600020905b8154815290600101906020018083116103df57829003601f168201915b5050505050905090565b6000806104116104b0565b905061041e81858561055f565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b6104c583838360016106d5565b505050565b60006104d68484610429565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8110156105595781811015610549578281836040517ffb8f41b200000000000000000000000000000000000000000000000000000000815260040161054093929190610e22565b60405180910390fd5b610558848484840360006106d5565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036105d15760006040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016105c89190610e59565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036106435760006040517fec442f0500000000000000000000000000000000000000000000000000000000815260040161063a9190610e59565b60405180910390fd5b61064e8383836108ac565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036106c55760006040517fec442f050000000000000000000000000000000000000000000000000000000081526004016106bc9190610e59565b60405180910390fd5b6106d1600083836108ac565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036107475760006040517fe602df0500000000000000000000000000000000000000000000000000000000815260040161073e9190610e59565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036107b95760006040517f94280d620000000000000000000000000000000000000000000000000000000081526004016107b09190610e59565b60405180910390fd5b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555080156108a6578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161089d9190610ca1565b60405180910390a35b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036108fe5780600260008282546108f29190610ea3565b925050819055506109d1565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561098a578381836040517fe450d38c00000000000000000000000000000000000000000000000000000000815260040161098193929190610e22565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610a1a5780600260008282540392505081905550610a67565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610ac49190610ca1565b60405180910390a3505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610b0b578082015181840152602081019050610af0565b60008484015250505050565b6000601f19601f8301169050919050565b6000610b3382610ad1565b610b3d8185610adc565b9350610b4d818560208601610aed565b610b5681610b17565b840191505092915050565b60006020820190508181036000830152610b7b8184610b28565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610bb382610b88565b9050919050565b610bc381610ba8565b8114610bce57600080fd5b50565b600081359050610be081610bba565b92915050565b6000819050919050565b610bf981610be6565b8114610c0457600080fd5b50565b600081359050610c1681610bf0565b92915050565b60008060408385031215610c3357610c32610b83565b5b6000610c4185828601610bd1565b9250506020610c5285828601610c07565b9150509250929050565b60008115159050919050565b610c7181610c5c565b82525050565b6000602082019050610c8c6000830184610c68565b92915050565b610c9b81610be6565b82525050565b6000602082019050610cb66000830184610c92565b92915050565b600080600060608486031215610cd557610cd4610b83565b5b6000610ce386828701610bd1565b9350506020610cf486828701610bd1565b9250506040610d0586828701610c07565b9150509250925092565b600060ff82169050919050565b610d2581610d0f565b82525050565b6000602082019050610d406000830184610d1c565b92915050565b600060208284031215610d5c57610d5b610b83565b5b6000610d6a84828501610bd1565b91505092915050565b60008060408385031215610d8a57610d89610b83565b5b6000610d9885828601610bd1565b9250506020610da985828601610bd1565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610dfa57607f821691505b602082108103610e0d57610e0c610db3565b5b50919050565b610e1c81610ba8565b82525050565b6000606082019050610e376000830186610e13565b610e446020830185610c92565b610e516040830184610c92565b949350505050565b6000602082019050610e6e6000830184610e13565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610eae82610be6565b9150610eb983610be6565b9250828201905080821115610ed157610ed0610e74565b5b9291505056fea2646970667358221220d238b5275b895c0a541e42724b7a7db416495db89df3bf87b578e7fee5f03d6a64736f6c634300081c0033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "Hetic",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<Hetic$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/Hetic.sol:Hetic",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<Hetic$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "Hetic",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<Hetic$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/Hetic.sol:Hetic",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<Hetic$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "Hetic",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<Hetic$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/Hetic.sol:Hetic",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<Hetic$Type["abi"]>>;
}
