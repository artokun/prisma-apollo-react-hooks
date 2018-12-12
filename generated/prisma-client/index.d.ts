// Code generated by Prisma (prisma@1.22.2). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode, GraphQLSchema } from "graphql";
import { makePrismaClientClass, BaseClientOptions } from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  element: (where?: ElementWhereInput) => Promise<boolean>;
  pokemon: (where?: PokemonWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  element: (where: ElementWhereUniqueInput) => ElementPromise;
  elements: (
    args?: {
      where?: ElementWhereInput;
      orderBy?: ElementOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Element>;
  elementsConnection: (
    args?: {
      where?: ElementWhereInput;
      orderBy?: ElementOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => ElementConnectionPromise;
  pokemon: (where: PokemonWhereUniqueInput) => PokemonPromise;
  pokemons: (
    args?: {
      where?: PokemonWhereInput;
      orderBy?: PokemonOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Pokemon>;
  pokemonsConnection: (
    args?: {
      where?: PokemonWhereInput;
      orderBy?: PokemonOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => PokemonConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createElement: (data: ElementCreateInput) => ElementPromise;
  updateElement: (
    args: { data: ElementUpdateInput; where: ElementWhereUniqueInput }
  ) => ElementPromise;
  updateManyElements: (
    args: { data: ElementUpdateManyMutationInput; where?: ElementWhereInput }
  ) => BatchPayloadPromise;
  upsertElement: (
    args: {
      where: ElementWhereUniqueInput;
      create: ElementCreateInput;
      update: ElementUpdateInput;
    }
  ) => ElementPromise;
  deleteElement: (where: ElementWhereUniqueInput) => ElementPromise;
  deleteManyElements: (where?: ElementWhereInput) => BatchPayloadPromise;
  createPokemon: (data: PokemonCreateInput) => PokemonPromise;
  updatePokemon: (
    args: { data: PokemonUpdateInput; where: PokemonWhereUniqueInput }
  ) => PokemonPromise;
  updateManyPokemons: (
    args: { data: PokemonUpdateManyMutationInput; where?: PokemonWhereInput }
  ) => BatchPayloadPromise;
  upsertPokemon: (
    args: {
      where: PokemonWhereUniqueInput;
      create: PokemonCreateInput;
      update: PokemonUpdateInput;
    }
  ) => PokemonPromise;
  deletePokemon: (where: PokemonWhereUniqueInput) => PokemonPromise;
  deleteManyPokemons: (where?: PokemonWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  element: (
    where?: ElementSubscriptionWhereInput
  ) => ElementSubscriptionPayloadSubscription;
  pokemon: (
    where?: PokemonSubscriptionWhereInput
  ) => PokemonSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type ElementOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type PokemonOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface ElementUpdateInput {
  name?: String;
}

export type ElementWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface ElementUpsertWithWhereUniqueNestedInput {
  where: ElementWhereUniqueInput;
  update: ElementUpdateDataInput;
  create: ElementCreateInput;
}

export interface PokemonCreateInput {
  name: String;
  types?: ElementCreateManyInput;
}

export interface ElementUpdateDataInput {
  name?: String;
}

export interface ElementWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  AND?: ElementWhereInput[] | ElementWhereInput;
  OR?: ElementWhereInput[] | ElementWhereInput;
  NOT?: ElementWhereInput[] | ElementWhereInput;
}

export interface ElementUpdateWithWhereUniqueNestedInput {
  where: ElementWhereUniqueInput;
  data: ElementUpdateDataInput;
}

export interface ElementSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: ElementWhereInput;
  AND?: ElementSubscriptionWhereInput[] | ElementSubscriptionWhereInput;
  OR?: ElementSubscriptionWhereInput[] | ElementSubscriptionWhereInput;
  NOT?: ElementSubscriptionWhereInput[] | ElementSubscriptionWhereInput;
}

export interface ElementUpdateManyInput {
  create?: ElementCreateInput[] | ElementCreateInput;
  update?:
    | ElementUpdateWithWhereUniqueNestedInput[]
    | ElementUpdateWithWhereUniqueNestedInput;
  upsert?:
    | ElementUpsertWithWhereUniqueNestedInput[]
    | ElementUpsertWithWhereUniqueNestedInput;
  delete?: ElementWhereUniqueInput[] | ElementWhereUniqueInput;
  connect?: ElementWhereUniqueInput[] | ElementWhereUniqueInput;
  disconnect?: ElementWhereUniqueInput[] | ElementWhereUniqueInput;
  deleteMany?: ElementScalarWhereInput[] | ElementScalarWhereInput;
  updateMany?:
    | ElementUpdateManyWithWhereNestedInput[]
    | ElementUpdateManyWithWhereNestedInput;
}

export interface ElementUpdateManyDataInput {
  name?: String;
}

export type PokemonWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  name?: String;
}>;

export interface PokemonWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  types_every?: ElementWhereInput;
  types_some?: ElementWhereInput;
  types_none?: ElementWhereInput;
  AND?: PokemonWhereInput[] | PokemonWhereInput;
  OR?: PokemonWhereInput[] | PokemonWhereInput;
  NOT?: PokemonWhereInput[] | PokemonWhereInput;
}

export interface ElementCreateManyInput {
  create?: ElementCreateInput[] | ElementCreateInput;
  connect?: ElementWhereUniqueInput[] | ElementWhereUniqueInput;
}

export interface ElementUpdateManyMutationInput {
  name?: String;
}

export interface PokemonUpdateInput {
  name?: String;
  types?: ElementUpdateManyInput;
}

export interface ElementCreateInput {
  name: String;
}

export interface PokemonSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: PokemonWhereInput;
  AND?: PokemonSubscriptionWhereInput[] | PokemonSubscriptionWhereInput;
  OR?: PokemonSubscriptionWhereInput[] | PokemonSubscriptionWhereInput;
  NOT?: PokemonSubscriptionWhereInput[] | PokemonSubscriptionWhereInput;
}

export interface ElementScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  AND?: ElementScalarWhereInput[] | ElementScalarWhereInput;
  OR?: ElementScalarWhereInput[] | ElementScalarWhereInput;
  NOT?: ElementScalarWhereInput[] | ElementScalarWhereInput;
}

export interface ElementUpdateManyWithWhereNestedInput {
  where: ElementScalarWhereInput;
  data: ElementUpdateManyDataInput;
}

export interface PokemonUpdateManyMutationInput {
  name?: String;
}

export interface NodeNode {
  id: ID_Output;
}

export interface PokemonPreviousValues {
  id: ID_Output;
  name: String;
}

export interface PokemonPreviousValuesPromise
  extends Promise<PokemonPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface PokemonPreviousValuesSubscription
  extends Promise<AsyncIterator<PokemonPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface Pokemon {
  id: ID_Output;
  name: String;
}

export interface PokemonPromise extends Promise<Pokemon>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  types: <T = FragmentableArray<Element>>(
    args?: {
      where?: ElementWhereInput;
      orderBy?: ElementOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface PokemonSubscription
  extends Promise<AsyncIterator<Pokemon>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  types: <T = Promise<AsyncIterator<ElementSubscription>>>(
    args?: {
      where?: ElementWhereInput;
      orderBy?: ElementOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface ElementSubscriptionPayload {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface ElementSubscriptionPayloadPromise
  extends Promise<ElementSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ElementPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ElementPreviousValuesPromise>() => T;
}

export interface ElementSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ElementSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ElementSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ElementPreviousValuesSubscription>() => T;
}

export interface AggregateElement {
  count: Int;
}

export interface AggregateElementPromise
  extends Promise<AggregateElement>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateElementSubscription
  extends Promise<AsyncIterator<AggregateElement>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface ElementEdge {
  cursor: String;
}

export interface ElementEdgePromise extends Promise<ElementEdge>, Fragmentable {
  node: <T = ElementPromise>() => T;
  cursor: () => Promise<String>;
}

export interface ElementEdgeSubscription
  extends Promise<AsyncIterator<ElementEdge>>,
    Fragmentable {
  node: <T = ElementSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregatePokemon {
  count: Int;
}

export interface AggregatePokemonPromise
  extends Promise<AggregatePokemon>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatePokemonSubscription
  extends Promise<AsyncIterator<AggregatePokemon>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface Element {
  id: ID_Output;
  name: String;
}

export interface ElementPromise extends Promise<Element>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface ElementSubscription
  extends Promise<AsyncIterator<Element>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface ElementPreviousValues {
  id: ID_Output;
  name: String;
}

export interface ElementPreviousValuesPromise
  extends Promise<ElementPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface ElementPreviousValuesSubscription
  extends Promise<AsyncIterator<ElementPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface PokemonEdge {
  cursor: String;
}

export interface PokemonEdgePromise extends Promise<PokemonEdge>, Fragmentable {
  node: <T = PokemonPromise>() => T;
  cursor: () => Promise<String>;
}

export interface PokemonEdgeSubscription
  extends Promise<AsyncIterator<PokemonEdge>>,
    Fragmentable {
  node: <T = PokemonSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface PokemonSubscriptionPayload {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface PokemonSubscriptionPayloadPromise
  extends Promise<PokemonSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = PokemonPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = PokemonPreviousValuesPromise>() => T;
}

export interface PokemonSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PokemonSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = PokemonSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = PokemonPreviousValuesSubscription>() => T;
}

export interface ElementConnection {}

export interface ElementConnectionPromise
  extends Promise<ElementConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ElementEdge>>() => T;
  aggregate: <T = AggregateElementPromise>() => T;
}

export interface ElementConnectionSubscription
  extends Promise<AsyncIterator<ElementConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ElementEdgeSubscription>>>() => T;
  aggregate: <T = AggregateElementSubscription>() => T;
}

export interface PokemonConnection {}

export interface PokemonConnectionPromise
  extends Promise<PokemonConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<PokemonEdge>>() => T;
  aggregate: <T = AggregatePokemonPromise>() => T;
}

export interface PokemonConnectionSubscription
  extends Promise<AsyncIterator<PokemonConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<PokemonEdgeSubscription>>>() => T;
  aggregate: <T = AggregatePokemonSubscription>() => T;
}

export type Long = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/**
 * Model Metadata
 */

export const models = [
  {
    name: "Element",
    embedded: false
  },
  {
    name: "Pokemon",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
