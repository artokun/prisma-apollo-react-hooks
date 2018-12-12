import React, { useState } from 'react'
import { client } from './'

const defaultContext = {
  query: () => Promise.reject('Query is undefined'),
  mutate: () => Promise.reject('Mutation is undefined')
}

const ApolloContext = React.createContext(defaultContext)

const ApolloComponent = ({ children }) => {
  const [state] = useState({
    query: client.query,
    mutate: client.mutate
  })

  return (
    <ApolloContext.Provider value={state}>{children}</ApolloContext.Provider>
  )
}

const ApolloConsumer = ApolloContext.Consumer
const ApolloProvider = ApolloComponent
export { ApolloProvider, ApolloConsumer }
export default ApolloContext
