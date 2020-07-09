// React Imports
import React from 'react'

// Component Imports
import PollOption from './PollOption'
import { PollData } from '../Interfaces/PollData'

// Semantic Imports
import { Card, Button, Image, Progress} from 'semantic-ui-react'

// Style Imports
import '../Styles/polls.css'

// Redux Imports
import { useSelector, useDispatch} from 'react-redux'
import { RootState } from '../Reducers'
import { addVote } from '../Reducers/Slices/Posts'
  
interface Props {
    PollData: PollData
}

const getPercent = (votes: number, totalVotes: number) => {
    return (votes / totalVotes) * 100

}

const Poll: React.FC<Props> = ({
    PollData
}) => {
    const polls = useSelector((state: RootState) => state.posts);
    const dispatch = useDispatch();

    // Deconstruct pollOptions
    let optionOne: string = PollData.optionOne;
    let optionTwo: string = PollData.optionTwo;
    let poster: string = PollData.posterName;

    const totalVotes: number = PollData.optionOneVotes + PollData.optionTwoVotes;

    const sendVote = (optionOne: boolean) => {
        dispatch(addVote({
            isOptionOne: optionOne,
            id: PollData.id
        }))
    }

    return (
        <Card centered fluid>
            <Card.Content >
                <Card.Header>{optionOne} vs. {optionTwo}</Card.Header>
                <Card.Meta>{poster}</Card.Meta>
            </Card.Content>
            <Card.Content textAlign="center">
                <div className="pollCntr">
                    <PollOption optionName={optionOne} percent={getPercent(PollData.optionOneVotes, totalVotes)} isWinning={getPercent(PollData.optionOneVotes, totalVotes) >= 50 ? true : false} />
                    <PollOption optionName={optionTwo} percent={getPercent(PollData.optionTwoVotes, totalVotes)} isWinning={getPercent(PollData.optionTwoVotes, totalVotes) >= 50 ? true : false}/>
                </div>
            </Card.Content>
            <Card.Content textAlign="center" extra>
                <Button.Group style={{width: '80%', margin: '.25rem'}} size="small">
                    <Button size="mini" className="vote-btn" color='blue' style={{fontSize: '.9rem'}} onClick={() => sendVote(true)}>
                        {optionOne}
                    </Button>
                    <Button.Or />
                    <Button size="mini" className="vote-btn" color='blue' style={{fontSize: '.9rem'}} onClick={() => sendVote(false)}>
                        {optionTwo}
                    </Button>
                </Button.Group>
            </Card.Content>
        </Card>

    );
}
  
  export default Poll;
