const { prisma } = require('./generated/prisma-client')
const { GraphQLServer } = require('graphql-yoga')

const resolvers = {
  Query: {
    search: async (root, args, context, info) => {
      const result = await context.prisma.pokemons(
        {
          where: {
            OR: [
              {
                AND: [
                  { name_contains: args.query },
                  { types_some: { name_contains: args.query } }
                ]
              },
              { name_contains: args.query },
              { types_some: { name_contains: args.query } }
            ]
          }
        },
        info
      )
      return result
    }
  },
  Mutation: {
    createPokemonWithTypes: async (root, args, context, info) => {
      const typeIds = await context.prisma.elements({
        where: { name_in: args.types }
      })
      const newTypes = args.types.filter(
        queryType =>
          !typeIds.some(({ name: existingType }) => existingType === queryType)
      )
      return context.prisma.upsertPokemon(
        {
          where: {
            name: args.name
          },
          create: {
            name: args.name,
            types: {
              connect: typeIds.map(({ id }) => ({ id })),
              create: newTypes.map(name => ({ name }))
            }
          },
          update: {
            name: args.name,
            types: {
              connect: typeIds.map(({ id }) => ({ id })),
              create: newTypes.map(name => ({ name }))
            }
          }
        },
        info
      )
    }
  },
  Pokemon: {
    types(root, args, context) {
      return context.prisma
        .pokemon({
          id: root.id
        })
        .types()
    }
  }
}

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
  context: {
    prisma
  }
})
server.start(() => console.log('Server is running on http://localhost:4000'))
