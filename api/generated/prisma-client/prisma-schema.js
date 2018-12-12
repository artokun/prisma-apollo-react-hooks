module.exports = {
        typeDefs: /* GraphQL */ `type AggregateElement {
  count: Int!
}

type AggregatePokemon {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Element {
  id: ID!
  name: String!
}

type ElementConnection {
  pageInfo: PageInfo!
  edges: [ElementEdge]!
  aggregate: AggregateElement!
}

input ElementCreateInput {
  name: String!
}

input ElementCreateManyInput {
  create: [ElementCreateInput!]
  connect: [ElementWhereUniqueInput!]
}

type ElementEdge {
  node: Element!
  cursor: String!
}

enum ElementOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ElementPreviousValues {
  id: ID!
  name: String!
}

input ElementScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [ElementScalarWhereInput!]
  OR: [ElementScalarWhereInput!]
  NOT: [ElementScalarWhereInput!]
}

type ElementSubscriptionPayload {
  mutation: MutationType!
  node: Element
  updatedFields: [String!]
  previousValues: ElementPreviousValues
}

input ElementSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ElementWhereInput
  AND: [ElementSubscriptionWhereInput!]
  OR: [ElementSubscriptionWhereInput!]
  NOT: [ElementSubscriptionWhereInput!]
}

input ElementUpdateDataInput {
  name: String
}

input ElementUpdateInput {
  name: String
}

input ElementUpdateManyDataInput {
  name: String
}

input ElementUpdateManyInput {
  create: [ElementCreateInput!]
  update: [ElementUpdateWithWhereUniqueNestedInput!]
  upsert: [ElementUpsertWithWhereUniqueNestedInput!]
  delete: [ElementWhereUniqueInput!]
  connect: [ElementWhereUniqueInput!]
  disconnect: [ElementWhereUniqueInput!]
  deleteMany: [ElementScalarWhereInput!]
  updateMany: [ElementUpdateManyWithWhereNestedInput!]
}

input ElementUpdateManyMutationInput {
  name: String
}

input ElementUpdateManyWithWhereNestedInput {
  where: ElementScalarWhereInput!
  data: ElementUpdateManyDataInput!
}

input ElementUpdateWithWhereUniqueNestedInput {
  where: ElementWhereUniqueInput!
  data: ElementUpdateDataInput!
}

input ElementUpsertWithWhereUniqueNestedInput {
  where: ElementWhereUniqueInput!
  update: ElementUpdateDataInput!
  create: ElementCreateInput!
}

input ElementWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [ElementWhereInput!]
  OR: [ElementWhereInput!]
  NOT: [ElementWhereInput!]
}

input ElementWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createElement(data: ElementCreateInput!): Element!
  updateElement(data: ElementUpdateInput!, where: ElementWhereUniqueInput!): Element
  updateManyElements(data: ElementUpdateManyMutationInput!, where: ElementWhereInput): BatchPayload!
  upsertElement(where: ElementWhereUniqueInput!, create: ElementCreateInput!, update: ElementUpdateInput!): Element!
  deleteElement(where: ElementWhereUniqueInput!): Element
  deleteManyElements(where: ElementWhereInput): BatchPayload!
  createPokemon(data: PokemonCreateInput!): Pokemon!
  updatePokemon(data: PokemonUpdateInput!, where: PokemonWhereUniqueInput!): Pokemon
  updateManyPokemons(data: PokemonUpdateManyMutationInput!, where: PokemonWhereInput): BatchPayload!
  upsertPokemon(where: PokemonWhereUniqueInput!, create: PokemonCreateInput!, update: PokemonUpdateInput!): Pokemon!
  deletePokemon(where: PokemonWhereUniqueInput!): Pokemon
  deleteManyPokemons(where: PokemonWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Pokemon {
  id: ID!
  name: String!
  types(where: ElementWhereInput, orderBy: ElementOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Element!]
}

type PokemonConnection {
  pageInfo: PageInfo!
  edges: [PokemonEdge]!
  aggregate: AggregatePokemon!
}

input PokemonCreateInput {
  name: String!
  types: ElementCreateManyInput
}

type PokemonEdge {
  node: Pokemon!
  cursor: String!
}

enum PokemonOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PokemonPreviousValues {
  id: ID!
  name: String!
}

type PokemonSubscriptionPayload {
  mutation: MutationType!
  node: Pokemon
  updatedFields: [String!]
  previousValues: PokemonPreviousValues
}

input PokemonSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PokemonWhereInput
  AND: [PokemonSubscriptionWhereInput!]
  OR: [PokemonSubscriptionWhereInput!]
  NOT: [PokemonSubscriptionWhereInput!]
}

input PokemonUpdateInput {
  name: String
  types: ElementUpdateManyInput
}

input PokemonUpdateManyMutationInput {
  name: String
}

input PokemonWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  types_every: ElementWhereInput
  types_some: ElementWhereInput
  types_none: ElementWhereInput
  AND: [PokemonWhereInput!]
  OR: [PokemonWhereInput!]
  NOT: [PokemonWhereInput!]
}

input PokemonWhereUniqueInput {
  id: ID
  name: String
}

type Query {
  element(where: ElementWhereUniqueInput!): Element
  elements(where: ElementWhereInput, orderBy: ElementOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Element]!
  elementsConnection(where: ElementWhereInput, orderBy: ElementOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ElementConnection!
  pokemon(where: PokemonWhereUniqueInput!): Pokemon
  pokemons(where: PokemonWhereInput, orderBy: PokemonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Pokemon]!
  pokemonsConnection(where: PokemonWhereInput, orderBy: PokemonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PokemonConnection!
  node(id: ID!): Node
}

type Subscription {
  element(where: ElementSubscriptionWhereInput): ElementSubscriptionPayload
  pokemon(where: PokemonSubscriptionWhereInput): PokemonSubscriptionPayload
}
`
      }
    