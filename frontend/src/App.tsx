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

// Redux Hooks
import { useSelector, useDispatch} from 'react-redux'

// Type Imports
import { RootState } from './Reducers'

// Action Imports
import { increment, decrement } from './Actions/Counter'

const App: React.FC = () => {
  const polls = useSelector((state: RootState) => state.posts);
  const dispatch = useDispatch();


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
