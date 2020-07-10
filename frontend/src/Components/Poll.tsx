// React Imports
import React from 'react'

// Component Imports
import PollOption from './PollOption'
import { PollData } from '../Interfaces/PollData'
import {Voted} from '../Interfaces/Voted'


// Semantic Imports
import { Card, Button, Icon} from 'semantic-ui-react'

// Style Imports
import '../Styles/polls.css'

// Redux Imports
import { useSelector, useDispatch} from 'react-redux'
import { RootState } from '../Reducers'
import { addVote, userVoted } from '../Reducers/Slices/Posts'
  
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
        const toSend = {
            isOptionOne: optionOne,
            id: PollData.id
        }
        dispatch(addVote(toSend));
        dispatch(userVoted(toSend))
    }

    const getColor = (isOptionOne: boolean) => {
        if (!PollData.userVoted.voted){
            return 'blue';
        }
        else {
            if (isOptionOne === PollData.userVoted.isOptionOne){
                return 'green';
            }
            else{
                return 'grey';
            }
        }
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
                    <Button animated="fade" size="mini" className="vote-btn" color={getColor(true)} disabled={PollData.userVoted.voted ? true : false} style={{fontSize: '.9rem'}} onClick={() => sendVote(true)}>
                        <Button.Content className="button-text" visible>{optionOne}</Button.Content>
                        <Button.Content hidden >
                            <Icon name='angle double up' />
                        </Button.Content>
                    </Button>
                    <Button.Or />
                    <Button animated="fade" size="mini" className="vote-btn" color={getColor(false)} disabled={PollData.userVoted.voted} style={{fontSize: '.9rem'}} onClick={() => sendVote(false)}>
                        <Button.Content className="button-text" visible >{optionTwo}</Button.Content>
                        <Button.Content hidden >
                            <Icon name='angle double up' />
                        </Button.Content>
                    </Button>
                </Button.Group>
            </Card.Content>
        </Card>

    );
}
  
  export default Poll;
