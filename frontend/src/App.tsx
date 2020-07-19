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
  useEffect(() => {
    dispatch(getFeed(0));
    setIsLoading(false)
  }, [])

  const polls = useSelector((state: RootState) => state.posts.feed);
  const currLastItem = useSelector((state: RootState) => state.posts.lastIndex); 
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const addToPage = (num : number) => {
    dispatch(getFeed(num))
  }

  return (
  <>
  <Navbar />
  {
    !isLoading
      ?
      <div className="app">
      <Grid fluid centered stackable>
      <Grid.Column float="left" computer={1} mobile={1}>
          <MakePoll placeholder={10}/>
        </Grid.Column>
        <Grid.Column textAlign="center" computer={5} mobile={12} >
          <Feed pollList={polls}/>
          <Button disabled={currLastItem == - 1}secondary size="mini" onClick={(event) => addToPage(currLastItem)}>
              <Button.Content>Load More</Button.Content>  
          </Button>
        </Grid.Column>
      </Grid>
    </div>
    :
    <h1>LOADING</h1>
  }

  </>
  );
}

export default App;
