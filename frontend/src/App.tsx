// React Imports
import React, { useState } from 'react';

// Semantic-UI Imports
import { Grid } from 'semantic-ui-react'

// Component Imports
import Navbar from './Components/Navbar'
import Feed from './Components/Feed'
import MakePoll from './Components/MakePoll'

// Interface Imports
import { PollData } from './Interfaces/PollData'

// Style Imports

const App: React.FC = () => {
  const [polls, setPolls]  = useState<Array<PollData>>([
    {
      optionOne: "Bulls",
      optionTwo: "Celtics",
      posterName: "Jack Bisceglia",
      optionOneVotes: 27,
      optionTwoVotes: 90
    },
    {
      optionOne: "String Cheese",
      optionTwo: "Melted Cheese",
      posterName: "Gillian Bisceglia",
      optionOneVotes: 9,
      optionTwoVotes: 2
    },
    {
      optionOne: "Sausage",
      optionTwo: "Hot Dog",
      posterName: "Tom Brady",
      optionOneVotes: 47,
      optionTwoVotes: 42
    },
    {
      optionOne: "Golden Retriever",
      optionTwo: "Black Lab",
      posterName: "Harry Potter",
      optionOneVotes: 71,
      optionTwoVotes: 43
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
