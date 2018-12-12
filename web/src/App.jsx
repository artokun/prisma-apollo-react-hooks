import React, { useContext, useEffect, useState } from 'react'
import ApolloContext from './ApolloContext'
import { SearchPokemon } from './queries'

const App = () => {
  const { query } = useContext(ApolloContext)
  const [pokemon, setPokemon] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  const handleQueryInput = ({ target: { value } }) => setSearchQuery(value)

  useEffect(() => void handleSearch(), [searchQuery])

  const handleSearch = async e => {
    e && e.preventDefault()

    let result = []

    try {
      result = await query({
        query: SearchPokemon,
        variables: {
          query: searchQuery
        }
      })
    } catch (e) {
      console.error(e)
    }

    setPokemon(result.data.search)
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="search"
          id="search"
          onChange={handleQueryInput}
        />
      </form>
      <div>
        {searchQuery ? (
          pokemon.map(({ name, types }) => (
            <div key={name}>
              <h3>{name}</h3>
              <small>{types.map(t => t.name).join(', ')}</small>
            </div>
          ))
        ) : (
          <p>No Results</p>
        )}
      </div>
    </div>
  )
}

export default App
