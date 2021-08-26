import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'
import { theme } from './styles/theme'
import { PipesContextProvider } from './contexts/PipesContext'

const client = new ApolloClient({
  uri: process.env.REACT_APP_PIPEFY_API_URL || '',
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_PIPEFY_API_TOKEN || ''}`
  },
  credentials: 'same-origin'
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <PipesContextProvider>
          <App />
        </PipesContextProvider>
      </ChakraProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
