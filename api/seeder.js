const fs = require('fs')
const uniq = require('lodash.uniq')
const flatten = require('lodash.flatten')
const { promisify } = require('util')
const { prisma } = require('./generated/prisma-client')

const readFileAsync = promisify(fs.readFile)

async function main() {
  await prisma.deleteManyPokemons()
  await prisma.deleteManyElements()
  const data = await readFileAsync('./data.json', 'utf8')
  const pokemonList = JSON.parse(data)
  const types = uniq(flatten(pokemonList.map(p => p.types)))

  types.forEach(async type => await prisma.createElement({ name: type }))
  const savedTypes = await prisma.elements()

  const createPokemon = async ({ name, types }) => {
    const typeIds = savedTypes
      .filter(({ name }) => types.some(q => q === name))
      .map(({ id }) => ({ id }))
    const formattedName = name.charAt(0).toUpperCase() + name.slice(1)
    return prisma.createPokemon({
      name: formattedName,
      types: { connect: typeIds }
    })
  }

  pokemonList.forEach(fields => {
    createPokemon(fields)
  })
}

main().catch(e => console.error(e))
