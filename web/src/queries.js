import gql from 'graphql-tag'

export const SearchPokemon = gql`
  query searchPokemon($query: String!) {
    search(query: $query) {
      name
      types {
        name
      }
    }
  }
`
