// React Imports
import React, { useState, useEffect } from 'react';

// Semantic-UI Imports
import { Grid, Button } from 'semantic-ui-react'

// Component Imports
import Navbar from './Components/Navbar'
import Feed from './Components/Feed'
import MakePoll from './Components/MakePoll'

// Interface Imports
import { PollData } from './Interfaces/PollData'

// Style Imports

// Redux Import
import { useSelector, useDispatch} from 'react-redux'
import { RootState } from './Reducers'
// import { addPost } from './Reducers/Slices/Posts'
import { getFeed } from './Reducers/Slices/Posts';

const App: React.FC = () => {
  const polls = useSelector((state: RootState) => state.posts.feed);
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const currLastItem = useSelector((state: RootState) => state.posts.lastIndex); 
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(getFeed(0))
    setIsLoading(false)
  }, [])

  return (
    <>
    <Navbar />
      <div className="app">
        <Grid fluid centered stackable>
          <Grid.Column float="left" computer={1} mobile={1}>
            <MakePoll placeholder={10}/>
            <button onClick={() => console.log(auth.id, auth.authorized)}>See State</button>
          </Grid.Column>
          <Grid.Column textAlign="center" computer={5} mobile={12} >
            <Feed pollList={polls}/>
          </Grid.Column>
        </Grid>
      </div>
    </>
  );
}

export default App;

// Main App
