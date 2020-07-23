// React Imports
import React from 'react'

// Semantic UI Imports
import { Button, Grid } from 'semantic-ui-react'

// Component Imports
import Poll from './Poll'

// Interface Imports
import { PollData } from '../Interfaces/PollData'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../Reducers'
import { getFeed } from '../Reducers/Slices/Posts'

// Redux Imports


interface Props {
    pollList: PollData[]
}

const Feed: React.FC<Props> = ({
    pollList
}) => {
    const dispatch = useDispatch()
    const currLastItem = useSelector((state: RootState) => state.posts.lastIndex); 
    const feedLoading = useSelector((state: RootState) => state.posts.loading); 
    const addToPage = (num : number) => {
        const scrollTop = document.documentElement.scrollTop;
        dispatch(getFeed(num));
      }

    return (
        <>
        {
        pollList.map((curr, index) => (
            <Grid.Row key={curr.id} centered stretched style={{marginBottom: '2.5rem'}} >
                <Grid.Column >
                    <Poll  PollData={curr}/>
                </Grid.Column>
            </Grid.Row>
        ))
        }
        <Button disabled={currLastItem == - 1} loading={feedLoading} secondary size="mini" onClick={(event) => addToPage(currLastItem)}>
              <Button.Content>{currLastItem == - 1 ? "All Polls Loaded" : "Load More"}</Button.Content>  
        </Button>
        {/* <div onClick={(event) => addToPage(currLastItem)}>Load More</div> */}
        </>
    );
}

export default Feed;

