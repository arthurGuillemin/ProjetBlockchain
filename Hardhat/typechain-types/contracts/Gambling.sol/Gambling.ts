/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface GamblingInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "bet"
      | "deposit"
      | "getMultipliers"
      | "multipliers"
      | "owner"
      | "setMultipliers"
      | "token"
      | "withdraw"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "BetPlaced"): EventFragment;

  encodeFunctionData(
    functionFragment: "bet",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getMultipliers",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "multipliers",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setMultipliers",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "bet", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getMultipliers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "multipliers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setMultipliers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}

export namespace BetPlacedEvent {
  export type InputTuple = [
    player: AddressLike,
    betAmount: BigNumberish,
    cardIndex: BigNumberish,
    win: boolean,
    payout: BigNumberish
  ];
  export type OutputTuple = [
    player: string,
    betAmount: bigint,
    cardIndex: bigint,
    win: boolean,
    payout: bigint
  ];
  export interface OutputObject {
    player: string;
    betAmount: bigint;
    cardIndex: bigint;
    win: boolean;
    payout: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Gambling extends BaseContract {
  connect(runner?: ContractRunner | null): Gambling;
  waitForDeployment(): Promise<this>;

  interface: GamblingInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  bet: TypedContractMethod<
    [amount: BigNumberish, cardIndex: BigNumberish],
    [void],
    "nonpayable"
  >;

  deposit: TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;

  getMultipliers: TypedContractMethod<[], [bigint[]], "view">;

  multipliers: TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  setMultipliers: TypedContractMethod<
    [newMultipliers: BigNumberish[]],
    [void],
    "nonpayable"
  >;

  token: TypedContractMethod<[], [string], "view">;

  withdraw: TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "bet"
  ): TypedContractMethod<
    [amount: BigNumberish, cardIndex: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "deposit"
  ): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getMultipliers"
  ): TypedContractMethod<[], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "multipliers"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setMultipliers"
  ): TypedContractMethod<
    [newMultipliers: BigNumberish[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "token"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;

  getEvent(
    key: "BetPlaced"
  ): TypedContractEvent<
    BetPlacedEvent.InputTuple,
    BetPlacedEvent.OutputTuple,
    BetPlacedEvent.OutputObject
  >;

  filters: {
    "BetPlaced(address,uint256,uint8,bool,uint256)": TypedContractEvent<
      BetPlacedEvent.InputTuple,
      BetPlacedEvent.OutputTuple,
      BetPlacedEvent.OutputObject
    >;
    BetPlaced: TypedContractEvent<
      BetPlacedEvent.InputTuple,
      BetPlacedEvent.OutputTuple,
      BetPlacedEvent.OutputObject
    >;
  };
}
