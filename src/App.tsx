import React from 'react';
import './App.css';

import { gql, useQuery } from '@apollo/client'

const organizationId = '300562393'

const ORGANIZATION_QUERY = gql`
  query Organization($organizationId: ID!) {
    organization(id: $organizationId) {
      pipes {
        color
        cards_count
        name
        id
        icon 
      }
    }
}
`

function App() {

  const { data, loading } = useQuery(ORGANIZATION_QUERY, {
    variables: {
      organizationId
    }
  })

  if(loading) {
    return <p>Loading ...</p>
  }

  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://files.readme.io/9e810f9-small-developers3x.png"
          className="App-logo"
          alt="logo"
        />
      </header>

      {data.organization.pipes.map(pipe => (
        <div key={pipe.id}>
          <h2>{pipe.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
