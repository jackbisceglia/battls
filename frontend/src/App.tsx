// React Imports
import React, { useState } from 'react';

// Semantic-UI Imports
import { Grid } from 'semantic-ui-react'

// Component Imports
import Navbar from './Components/Navbar'
import Feed from './Components/Feed'
import MakePoll from './Components/MakePoll'

// Interface Imports
import { PollData } from './Components/Feed'

// Style Imports

const App: React.FC = () => {
  const [polls, setPolls]  = useState<Array<PollData>>([
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
    <Grid fluid centered stackable>
    <Grid.Column float="left" computer={1} mobile={1}>
        <MakePoll placeholder={10}/>
      </Grid.Column>
      <Grid.Column computer={5} mobile={12}>
        <Feed pollList={polls}/>
      </Grid.Column>
    </Grid>
  </div>
  </>
  );
}

export default App;
