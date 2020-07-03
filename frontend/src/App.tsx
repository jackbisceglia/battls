import React, { useState } from 'react';

// Semantic-UI Imports
import { Grid } from 'semantic-ui-react'

// Component Imports
import Navbar from './Components/Navbar'
import Poll from './Components/Poll'

// Style Imports

function App() {
  const [polls, setPolls] = useState([
    {
      optionOne: "Bulls",
      optionTwo: "Celtics",
    },
    {
      optionOne: "String Cheese",
      optionTwo: "Melted Cheese",
    },
    {
      optionOne: "Sausage",
      optionTwo: "Hot Dog",
    },
    {
      optionOne: "Golden Retriever",
      optionTwo: "Black Lab",
    },
  ])

  return (
  <>
  <Navbar />
  <div className="app">
    <Grid fluid textAlign="center" >
      {                
        polls.map(curr => (
          <Grid.Row textAlign="center" >
            <Poll pollOptions={curr} />
          </Grid.Row>
        ))
      }
    </Grid>
  </div>
  </>
  );
}

export default App;
