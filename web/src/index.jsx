import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import App from './App'
import { ApolloProvider as ApolloContext } from './ApolloContext'
import * as serviceWorker from './serviceWorker'

export const client = new ApolloClient({
  uri: 'http://localhost:4000'
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <ApolloContext>
      <App />
    </ApolloContext>
  </ApolloProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
