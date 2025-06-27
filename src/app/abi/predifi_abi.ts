import { Abi } from "starknet";

export const PREDIFI_ABI: Abi = [
  {
    name: "predifi",
    type: "impl",
    interface_name: "contract::interfaces::ipredifi::IPredifi",
  },
  {
    name: "contract::base::types::Pool",
    type: "enum",
    variants: [
      {
        name: "WinBet",
        type: "()",
      },
      {
        name: "VoteBet",
        type: "()",
      },
      {
        name: "OverUnderBet",
        type: "()",
      },
      {
        name: "ParlayPool",
        type: "()",
      },
    ],
  },
  {
    name: "core::byte_array::ByteArray",
    type: "struct",
    members: [
      {
        name: "data",
        type: "core::array::Array::<core::bytes_31::bytes31>",
      },
      {
        name: "pending_word",
        type: "core::felt252",
      },
      {
        name: "pending_word_len",
        type: "core::integer::u32",
      },
    ],
  },
  {
    name: "core::integer::u256",
    type: "struct",
    members: [
      {
        name: "low",
        type: "core::integer::u128",
      },
      {
        name: "high",
        type: "core::integer::u128",
      },
    ],
  },
  {
    name: "core::bool",
    type: "enum",
    variants: [
      {
        name: "False",
        type: "()",
      },
      {
        name: "True",
        type: "()",
      },
    ],
  },
  {
    name: "contract::base::types::Category",
    type: "enum",
    variants: [
      {
        name: "Sports",
        type: "()",
      },
      {
        name: "Politics",
        type: "()",
      },
      {
        name: "Entertainment",
        type: "()",
      },
      {
        name: "Crypto",
        type: "()",
      },
      {
        name: "Other",
        type: "()",
      },
    ],
  },
  {
    name: "contract::base::types::PoolOdds",
    type: "struct",
    members: [
      {
        name: "option1_odds",
        type: "core::integer::u256",
      },
      {
        name: "option2_odds",
        type: "core::integer::u256",
      },
      {
        name: "option1_probability",
        type: "core::integer::u256",
      },
      {
        name: "option2_probability",
        type: "core::integer::u256",
      },
      {
        name: "implied_probability1",
        type: "core::integer::u256",
      },
      {
        name: "implied_probability2",
        type: "core::integer::u256",
      },
    ],
  },
  {
    name: "contract::base::types::Status",
    type: "enum",
    variants: [
      {
        name: "Active",
        type: "()",
      },
      {
        name: "Locked",
        type: "()",
      },
      {
        name: "Settled",
        type: "()",
      },
      {
        name: "Closed",
        type: "()",
      },
      {
        name: "Suspended",
        type: "()",
      },
    ],
  },
  {
    name: "contract::base::types::PoolDetails",
    type: "struct",
    members: [
      {
        name: "pool_id",
        type: "core::integer::u256",
      },
      {
        name: "address",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "poolName",
        type: "core::felt252",
      },
      {
        name: "poolType",
        type: "contract::base::types::Pool",
      },
      {
        name: "poolDescription",
        type: "core::byte_array::ByteArray",
      },
      {
        name: "poolImage",
        type: "core::byte_array::ByteArray",
      },
      {
        name: "poolEventSourceUrl",
        type: "core::byte_array::ByteArray",
      },
      {
        name: "createdTimeStamp",
        type: "core::integer::u64",
      },
      {
        name: "poolStartTime",
        type: "core::integer::u64",
      },
      {
        name: "poolLockTime",
        type: "core::integer::u64",
      },
      {
        name: "poolEndTime",
        type: "core::integer::u64",
      },
      {
        name: "option1",
        type: "core::felt252",
      },
      {
        name: "option2",
        type: "core::felt252",
      },
      {
        name: "minBetAmount",
        type: "core::integer::u256",
      },
      {
        name: "maxBetAmount",
        type: "core::integer::u256",
      },
      {
        name: "creatorFee",
        type: "core::integer::u8",
      },
      {
        name: "status",
        type: "contract::base::types::Status",
      },
      {
        name: "isPrivate",
        type: "core::bool",
      },
      {
        name: "category",
        type: "contract::base::types::Category",
      },
      {
        name: "totalBetAmountStrk",
        type: "core::integer::u256",
      },
      {
        name: "totalBetCount",
        type: "core::integer::u8",
      },
      {
        name: "totalStakeOption1",
        type: "core::integer::u256",
      },
      {
        name: "totalStakeOption2",
        type: "core::integer::u256",
      },
      {
        name: "totalSharesOption1",
        type: "core::integer::u256",
      },
      {
        name: "totalSharesOption2",
        type: "core::integer::u256",
      },
      {
        name: "initial_share_price",
        type: "core::integer::u16",
      },
      {
        name: "exists",
        type: "core::bool",
      },
    ],
  },
  {
    name: "contract::base::types::UserStake",
    type: "struct",
    members: [
      {
        name: "amount",
        type: "core::integer::u256",
      },
      {
        name: "shares",
        type: "core::integer::u256",
      },
      {
        name: "option",
        type: "core::bool",
      },
      {
        name: "timestamp",
        type: "core::integer::u64",
      },
    ],
  },
  {
    name: "core::option::Option::<contract::base::types::Status>",
    type: "enum",
    variants: [
      {
        name: "Some",
        type: "contract::base::types::Status",
      },
      {
        name: "None",
        type: "()",
      },
    ],
  },
  {
    name: "contract::interfaces::ipredifi::IPredifi",
    type: "interface",
    items: [
      {
        name: "create_pool",
        type: "function",
        inputs: [
          {
            name: "poolName",
            type: "core::felt252",
          },
          {
            name: "poolType",
            type: "contract::base::types::Pool",
          },
          {
            name: "poolDescription",
            type: "core::byte_array::ByteArray",
          },
          {
            name: "poolImage",
            type: "core::byte_array::ByteArray",
          },
          {
            name: "poolEventSourceUrl",
            type: "core::byte_array::ByteArray",
          },
          {
            name: "poolStartTime",
            type: "core::integer::u64",
          },
          {
            name: "poolLockTime",
            type: "core::integer::u64",
          },
          {
            name: "poolEndTime",
            type: "core::integer::u64",
          },
          {
            name: "option1",
            type: "core::felt252",
          },
          {
            name: "option2",
            type: "core::felt252",
          },
          {
            name: "minBetAmount",
            type: "core::integer::u256",
          },
          {
            name: "maxBetAmount",
            type: "core::integer::u256",
          },
          {
            name: "creatorFee",
            type: "core::integer::u8",
          },
          {
            name: "isPrivate",
            type: "core::bool",
          },
          {
            name: "category",
            type: "contract::base::types::Category",
          },
        ],
        outputs: [
          {
            type: "core::integer::u256",
          },
        ],
        state_mutability: "external",
      },
      {
        name: "cancel_pool",
        type: "function",
        inputs: [
          {
            name: "pool_id",
            type: "core::integer::u256",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "pool_count",
        type: "function",
        inputs: [],
        outputs: [
          {
            type: "core::integer::u256",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "pool_odds",
        type: "function",
        inputs: [
          {
            name: "pool_id",
            type: "core::integer::u256",
          },
        ],
        outputs: [
          {
            type: "contract::base::types::PoolOdds",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "get_pool",
        type: "function",
        inputs: [
          {
            name: "pool_id",
            type: "core::integer::u256",
          },
        ],
        outputs: [
          {
            type: "contract::base::types::PoolDetails",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "vote",
        type: "function",
        inputs: [
          {
            name: "pool_id",
            type: "core::integer::u256",
          },
          {
            name: "option",
            type: "core::felt252",
          },
          {
            name: "amount",
            type: "core::integer::u256",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "stake",
        type: "function",
        inputs: [
          {
            name: "pool_id",
            type: "core::integer::u256",
          },
          {
            name: "amount",
            type: "core::integer::u256",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "refund_stake",
        type: "function",
        inputs: [
          {
            name: "pool_id",
            type: "core::integer::u256",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "get_user_stake",
        type: "function",
        inputs: [
          {
            name: "pool_id",
            type: "core::integer::u256",
          },
          {
            name: "address",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "contract::base::types::UserStake",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "get_pool_stakes",
        type: "function",
        inputs: [
          {
            name: "pool_id",
            type: "core::integer::u256",
          },
        ],
        outputs: [
          {
            type: "contract::base::types::UserStake",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "get_pool_vote",
        type: "function",
        inputs: [
          {
            name: "pool_id",
            type: "core::integer::u256",
          },
        ],
        outputs: [
          {
            type: "core::bool",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "get_pool_count",
        type: "function",
        inputs: [],
        outputs: [
          {
            type: "core::integer::u256",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "retrieve_pool",
        type: "function",
        inputs: [
          {
            name: "pool_id",
            type: "core::integer::u256",
          },
        ],
        outputs: [
          {
            type: "core::bool",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "get_pool_creator",
        type: "function",
        inputs: [
          {
            name: "pool_id",
            type: "core::integer::u256",
          },
        ],
        outputs: [
          {
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "get_creator_fee_percentage",
        type: "function",
        inputs: [
          {
            name: "pool_id",
            type: "core::integer::u256",
          },
        ],
        outputs: [
          {
            type: "core::integer::u8",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "get_validator_fee_percentage",
        type: "function",
        inputs: [
          {
            name: "pool_id",
            type: "core::integer::u256",
          },
        ],
        outputs: [
          {
            type: "core::integer::u8",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "collect_pool_creation_fee",
        type: "function",
        inputs: [
          {
            name: "creator",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "calculate_validator_fee",
        type: "function",
        inputs: [
          {
            name: "pool_id",
            type: "core::integer::u256",
          },
          {
            name: "total_amount",
            type: "core::integer::u256",
          },
        ],
        outputs: [
          {
            type: "core::integer::u256",
          },
        ],
        state_mutability: "external",
      },
      {
        name: "distribute_validator_fees",
        type: "function",
        inputs: [
          {
            name: "pool_id",
            type: "core::integer::u256",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "retrieve_validator_fee",
        type: "function",
        inputs: [
          {
            name: "pool_id",
            type: "core::integer::u256",
          },
        ],
        outputs: [
          {
            type: "core::integer::u256",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "update_pool_state",
        type: "function",
        inputs: [
          {
            name: "pool_id",
            type: "core::integer::u256",
          },
        ],
        outputs: [
          {
            type: "contract::base::types::Status",
          },
        ],
        state_mutability: "external",
      },
      {
        name: "manually_update_pool_state",
        type: "function",
        inputs: [
          {
            name: "pool_id",
            type: "core::integer::u256",
          },
          {
            name: "new_status",
            type: "contract::base::types::Status",
          },
        ],
        outputs: [
          {
            type: "contract::base::types::Status",
          },
        ],
        state_mutability: "external",
      },
      {
        name: "get_user_pool_count",
        type: "function",
        inputs: [
          {
            name: "user",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "core::integer::u256",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "check_user_participated",
        type: "function",
        inputs: [
          {
            name: "user",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "pool_id",
            type: "core::integer::u256",
          },
        ],
        outputs: [
          {
            type: "core::bool",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "get_user_pools",
        type: "function",
        inputs: [
          {
            name: "user",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "status_filter",
            type: "core::option::Option::<contract::base::types::Status>",
          },
        ],
        outputs: [
          {
            type: "core::array::Array::<core::integer::u256>",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "has_user_participated_in_pool",
        type: "function",
        inputs: [
          {
            name: "user",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "pool_id",
            type: "core::integer::u256",
          },
        ],
        outputs: [
          {
            type: "core::bool",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "get_user_active_pools",
        type: "function",
        inputs: [
          {
            name: "user",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "core::array::Array::<core::integer::u256>",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "get_user_locked_pools",
        type: "function",
        inputs: [
          {
            name: "user",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "core::array::Array::<core::integer::u256>",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "get_user_settled_pools",
        type: "function",
        inputs: [
          {
            name: "user",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "core::array::Array::<core::integer::u256>",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "get_pool_validators",
        type: "function",
        inputs: [
          {
            name: "pool_id",
            type: "core::integer::u256",
          },
        ],
        outputs: [
          {
            type: "(core::starknet::contract_address::ContractAddress, core::starknet::contract_address::ContractAddress)",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "assign_random_validators",
        type: "function",
        inputs: [
          {
            name: "pool_id",
            type: "core::integer::u256",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "assign_validators",
        type: "function",
        inputs: [
          {
            name: "pool_id",
            type: "core::integer::u256",
          },
          {
            name: "validator1",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "validator2",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "add_validator",
        type: "function",
        inputs: [
          {
            name: "address",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "remove_validator",
        type: "function",
        inputs: [
          {
            name: "address",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "is_validator",
        type: "function",
        inputs: [
          {
            name: "address",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "core::bool",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "get_all_validators",
        type: "function",
        inputs: [],
        outputs: [
          {
            type: "core::array::Array::<core::starknet::contract_address::ContractAddress>",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "get_active_pools",
        type: "function",
        inputs: [],
        outputs: [
          {
            type: "core::array::Array::<contract::base::types::PoolDetails>",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "get_locked_pools",
        type: "function",
        inputs: [],
        outputs: [
          {
            type: "core::array::Array::<contract::base::types::PoolDetails>",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "get_settled_pools",
        type: "function",
        inputs: [],
        outputs: [
          {
            type: "core::array::Array::<contract::base::types::PoolDetails>",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "get_closed_pools",
        type: "function",
        inputs: [],
        outputs: [
          {
            type: "core::array::Array::<contract::base::types::PoolDetails>",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "raise_dispute",
        type: "function",
        inputs: [
          {
            name: "pool_id",
            type: "core::integer::u256",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "resolve_dispute",
        type: "function",
        inputs: [
          {
            name: "pool_id",
            type: "core::integer::u256",
          },
          {
            name: "winning_option",
            type: "core::bool",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "get_dispute_count",
        type: "function",
        inputs: [
          {
            name: "pool_id",
            type: "core::integer::u256",
          },
        ],
        outputs: [
          {
            type: "core::integer::u256",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "get_dispute_threshold",
        type: "function",
        inputs: [],
        outputs: [
          {
            type: "core::integer::u256",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "has_user_disputed",
        type: "function",
        inputs: [
          {
            name: "pool_id",
            type: "core::integer::u256",
          },
          {
            name: "user",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "core::bool",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "is_pool_suspended",
        type: "function",
        inputs: [
          {
            name: "pool_id",
            type: "core::integer::u256",
          },
        ],
        outputs: [
          {
            type: "core::bool",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "get_suspended_pools",
        type: "function",
        inputs: [],
        outputs: [
          {
            type: "core::array::Array::<contract::base::types::PoolDetails>",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "validate_outcome",
        type: "function",
        inputs: [
          {
            name: "pool_id",
            type: "core::integer::u256",
          },
          {
            name: "outcome",
            type: "core::bool",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "claim_reward",
        type: "function",
        inputs: [
          {
            name: "pool_id",
            type: "core::integer::u256",
          },
        ],
        outputs: [
          {
            type: "core::integer::u256",
          },
        ],
        state_mutability: "external",
      },
      {
        name: "validate_pool_result",
        type: "function",
        inputs: [
          {
            name: "pool_id",
            type: "core::integer::u256",
          },
          {
            name: "selected_option",
            type: "core::bool",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "get_pool_validation_status",
        type: "function",
        inputs: [
          {
            name: "pool_id",
            type: "core::integer::u256",
          },
        ],
        outputs: [
          {
            type: "(core::integer::u256, core::bool, core::bool)",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "get_validator_confirmation",
        type: "function",
        inputs: [
          {
            name: "pool_id",
            type: "core::integer::u256",
          },
          {
            name: "validator",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "(core::bool, core::bool)",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "set_required_validator_confirmations",
        type: "function",
        inputs: [
          {
            name: "count",
            type: "core::integer::u256",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
    ],
  },
  {
    name: "AccessControlImpl",
    type: "impl",
    interface_name:
      "openzeppelin_access::accesscontrol::interface::IAccessControl",
  },
  {
    name: "openzeppelin_access::accesscontrol::interface::IAccessControl",
    type: "interface",
    items: [
      {
        name: "has_role",
        type: "function",
        inputs: [
          {
            name: "role",
            type: "core::felt252",
          },
          {
            name: "account",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "core::bool",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "get_role_admin",
        type: "function",
        inputs: [
          {
            name: "role",
            type: "core::felt252",
          },
        ],
        outputs: [
          {
            type: "core::felt252",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "grant_role",
        type: "function",
        inputs: [
          {
            name: "role",
            type: "core::felt252",
          },
          {
            name: "account",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "revoke_role",
        type: "function",
        inputs: [
          {
            name: "role",
            type: "core::felt252",
          },
          {
            name: "account",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "renounce_role",
        type: "function",
        inputs: [
          {
            name: "role",
            type: "core::felt252",
          },
          {
            name: "account",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
    ],
  },
  {
    name: "SRC5Impl",
    type: "impl",
    interface_name: "openzeppelin_introspection::interface::ISRC5",
  },
  {
    name: "openzeppelin_introspection::interface::ISRC5",
    type: "interface",
    items: [
      {
        name: "supports_interface",
        type: "function",
        inputs: [
          {
            name: "interface_id",
            type: "core::felt252",
          },
        ],
        outputs: [
          {
            type: "core::bool",
          },
        ],
        state_mutability: "view",
      },
    ],
  },
  {
    name: "constructor",
    type: "constructor",
    inputs: [
      {
        name: "token_addr",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "admin",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
  },
  {
    kind: "struct",
    name: "contract::base::events::Events::BetPlaced",
    type: "event",
    members: [
      {
        kind: "data",
        name: "pool_id",
        type: "core::integer::u256",
      },
      {
        kind: "data",
        name: "address",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "option",
        type: "core::felt252",
      },
      {
        kind: "data",
        name: "amount",
        type: "core::integer::u256",
      },
      {
        kind: "data",
        name: "shares",
        type: "core::integer::u256",
      },
    ],
  },
  {
    kind: "struct",
    name: "contract::base::events::Events::UserStaked",
    type: "event",
    members: [
      {
        kind: "data",
        name: "pool_id",
        type: "core::integer::u256",
      },
      {
        kind: "data",
        name: "address",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "amount",
        type: "core::integer::u256",
      },
    ],
  },
  {
    kind: "struct",
    name: "contract::base::events::Events::StakeRefunded",
    type: "event",
    members: [
      {
        kind: "data",
        name: "pool_id",
        type: "core::integer::u256",
      },
      {
        kind: "data",
        name: "address",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "amount",
        type: "core::integer::u256",
      },
    ],
  },
  {
    kind: "struct",
    name: "contract::base::events::Events::FeesCollected",
    type: "event",
    members: [
      {
        kind: "data",
        name: "fee_type",
        type: "core::felt252",
      },
      {
        kind: "data",
        name: "pool_id",
        type: "core::integer::u256",
      },
      {
        kind: "data",
        name: "recipient",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "amount",
        type: "core::integer::u256",
      },
    ],
  },
  {
    kind: "struct",
    name: "contract::base::events::Events::PoolStateTransition",
    type: "event",
    members: [
      {
        kind: "data",
        name: "pool_id",
        type: "core::integer::u256",
      },
      {
        kind: "data",
        name: "previous_status",
        type: "contract::base::types::Status",
      },
      {
        kind: "data",
        name: "new_status",
        type: "contract::base::types::Status",
      },
      {
        kind: "data",
        name: "timestamp",
        type: "core::integer::u64",
      },
    ],
  },
  {
    kind: "struct",
    name: "contract::base::events::Events::PoolResolved",
    type: "event",
    members: [
      {
        kind: "data",
        name: "pool_id",
        type: "core::integer::u256",
      },
      {
        kind: "data",
        name: "winning_option",
        type: "core::bool",
      },
      {
        kind: "data",
        name: "total_payout",
        type: "core::integer::u256",
      },
    ],
  },
  {
    kind: "struct",
    name: "contract::base::events::Events::FeeWithdrawn",
    type: "event",
    members: [
      {
        kind: "data",
        name: "fee_type",
        type: "core::felt252",
      },
      {
        kind: "data",
        name: "recipient",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "amount",
        type: "core::integer::u256",
      },
    ],
  },
  {
    kind: "struct",
    name: "contract::base::events::Events::ValidatorsAssigned",
    type: "event",
    members: [
      {
        kind: "data",
        name: "pool_id",
        type: "core::integer::u256",
      },
      {
        kind: "data",
        name: "validator1",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "validator2",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "timestamp",
        type: "core::integer::u64",
      },
    ],
  },
  {
    kind: "struct",
    name: "contract::base::events::Events::ValidatorAdded",
    type: "event",
    members: [
      {
        kind: "data",
        name: "account",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "caller",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
  },
  {
    kind: "struct",
    name: "contract::base::events::Events::ValidatorRemoved",
    type: "event",
    members: [
      {
        kind: "data",
        name: "account",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "caller",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
  },
  {
    kind: "struct",
    name: "contract::base::events::Events::DisputeRaised",
    type: "event",
    members: [
      {
        kind: "data",
        name: "pool_id",
        type: "core::integer::u256",
      },
      {
        kind: "data",
        name: "user",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "timestamp",
        type: "core::integer::u64",
      },
    ],
  },
  {
    kind: "struct",
    name: "contract::base::events::Events::DisputeResolved",
    type: "event",
    members: [
      {
        kind: "data",
        name: "pool_id",
        type: "core::integer::u256",
      },
      {
        kind: "data",
        name: "winning_option",
        type: "core::bool",
      },
      {
        kind: "data",
        name: "timestamp",
        type: "core::integer::u64",
      },
    ],
  },
  {
    kind: "struct",
    name: "contract::base::events::Events::PoolSuspended",
    type: "event",
    members: [
      {
        kind: "data",
        name: "pool_id",
        type: "core::integer::u256",
      },
      {
        kind: "data",
        name: "timestamp",
        type: "core::integer::u64",
      },
    ],
  },
  {
    kind: "struct",
    name: "contract::base::events::Events::PoolCancelled",
    type: "event",
    members: [
      {
        kind: "data",
        name: "pool_id",
        type: "core::integer::u256",
      },
      {
        kind: "data",
        name: "timestamp",
        type: "core::integer::u64",
      },
    ],
  },
  {
    kind: "struct",
    name: "contract::base::events::Events::ValidatorResultSubmitted",
    type: "event",
    members: [
      {
        kind: "data",
        name: "pool_id",
        type: "core::integer::u256",
      },
      {
        kind: "data",
        name: "validator",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "selected_option",
        type: "core::bool",
      },
      {
        kind: "data",
        name: "timestamp",
        type: "core::integer::u64",
      },
    ],
  },
  {
    kind: "struct",
    name: "contract::base::events::Events::PoolAutomaticallySettled",
    type: "event",
    members: [
      {
        kind: "data",
        name: "pool_id",
        type: "core::integer::u256",
      },
      {
        kind: "data",
        name: "final_outcome",
        type: "core::bool",
      },
      {
        kind: "data",
        name: "total_validations",
        type: "core::integer::u256",
      },
      {
        kind: "data",
        name: "timestamp",
        type: "core::integer::u64",
      },
    ],
  },
  {
    kind: "struct",
    name: "openzeppelin_access::accesscontrol::accesscontrol::AccessControlComponent::RoleGranted",
    type: "event",
    members: [
      {
        kind: "data",
        name: "role",
        type: "core::felt252",
      },
      {
        kind: "data",
        name: "account",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "sender",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
  },
  {
    kind: "struct",
    name: "openzeppelin_access::accesscontrol::accesscontrol::AccessControlComponent::RoleRevoked",
    type: "event",
    members: [
      {
        kind: "data",
        name: "role",
        type: "core::felt252",
      },
      {
        kind: "data",
        name: "account",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "sender",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
  },
  {
    kind: "struct",
    name: "openzeppelin_access::accesscontrol::accesscontrol::AccessControlComponent::RoleAdminChanged",
    type: "event",
    members: [
      {
        kind: "data",
        name: "role",
        type: "core::felt252",
      },
      {
        kind: "data",
        name: "previous_admin_role",
        type: "core::felt252",
      },
      {
        kind: "data",
        name: "new_admin_role",
        type: "core::felt252",
      },
    ],
  },
  {
    kind: "enum",
    name: "openzeppelin_access::accesscontrol::accesscontrol::AccessControlComponent::Event",
    type: "event",
    variants: [
      {
        kind: "nested",
        name: "RoleGranted",
        type: "openzeppelin_access::accesscontrol::accesscontrol::AccessControlComponent::RoleGranted",
      },
      {
        kind: "nested",
        name: "RoleRevoked",
        type: "openzeppelin_access::accesscontrol::accesscontrol::AccessControlComponent::RoleRevoked",
      },
      {
        kind: "nested",
        name: "RoleAdminChanged",
        type: "openzeppelin_access::accesscontrol::accesscontrol::AccessControlComponent::RoleAdminChanged",
      },
    ],
  },
  {
    kind: "enum",
    name: "openzeppelin_introspection::src5::SRC5Component::Event",
    type: "event",
    variants: [],
  },
  {
    kind: "enum",
    name: "contract::predifi::Predifi::Event",
    type: "event",
    variants: [
      {
        kind: "nested",
        name: "BetPlaced",
        type: "contract::base::events::Events::BetPlaced",
      },
      {
        kind: "nested",
        name: "UserStaked",
        type: "contract::base::events::Events::UserStaked",
      },
      {
        kind: "nested",
        name: "StakeRefunded",
        type: "contract::base::events::Events::StakeRefunded",
      },
      {
        kind: "nested",
        name: "FeesCollected",
        type: "contract::base::events::Events::FeesCollected",
      },
      {
        kind: "nested",
        name: "PoolStateTransition",
        type: "contract::base::events::Events::PoolStateTransition",
      },
      {
        kind: "nested",
        name: "PoolResolved",
        type: "contract::base::events::Events::PoolResolved",
      },
      {
        kind: "nested",
        name: "FeeWithdrawn",
        type: "contract::base::events::Events::FeeWithdrawn",
      },
      {
        kind: "nested",
        name: "ValidatorsAssigned",
        type: "contract::base::events::Events::ValidatorsAssigned",
      },
      {
        kind: "nested",
        name: "ValidatorAdded",
        type: "contract::base::events::Events::ValidatorAdded",
      },
      {
        kind: "nested",
        name: "ValidatorRemoved",
        type: "contract::base::events::Events::ValidatorRemoved",
      },
      {
        kind: "nested",
        name: "DisputeRaised",
        type: "contract::base::events::Events::DisputeRaised",
      },
      {
        kind: "nested",
        name: "DisputeResolved",
        type: "contract::base::events::Events::DisputeResolved",
      },
      {
        kind: "nested",
        name: "PoolSuspended",
        type: "contract::base::events::Events::PoolSuspended",
      },
      {
        kind: "nested",
        name: "PoolCancelled",
        type: "contract::base::events::Events::PoolCancelled",
      },
      {
        kind: "nested",
        name: "ValidatorResultSubmitted",
        type: "contract::base::events::Events::ValidatorResultSubmitted",
      },
      {
        kind: "nested",
        name: "PoolAutomaticallySettled",
        type: "contract::base::events::Events::PoolAutomaticallySettled",
      },
      {
        kind: "flat",
        name: "AccessControlEvent",
        type: "openzeppelin_access::accesscontrol::accesscontrol::AccessControlComponent::Event",
      },
      {
        kind: "flat",
        name: "SRC5Event",
        type: "openzeppelin_introspection::src5::SRC5Component::Event",
      },
    ],
  },
];
