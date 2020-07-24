// React Imports
import React, {useEffect } from 'react'

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
import { addVoteToServer } from '../Reducers/Slices/Posts'
  
interface Props {
    PollData: PollData
}


const getPercent = (votes: number, totalVotes: number) => {
    return (votes / totalVotes) * 100

}

const Poll: React.FC<Props> = ({
    PollData,
}) => {
    const dispatch = useDispatch();
    

    // Deconstruct pollOptions
    let optionOne: string = PollData.optionOne;
    let optionTwo: string = PollData.optionTwo;
    let poster: string = PollData.posterName;

    const totalVotes: number = PollData.optionOneVotes + PollData.optionTwoVotes;

    // *REMINDER -> FIX WITH NEW STATE AND ADD TO VOTE BUTTONS
    const sendVote = (optionOne: boolean) => {
        const toSend = {
            isOptionOne: optionOne,
            id: PollData.id
        }
        dispatch(addVoteToServer(toSend));
    }

    // *REMINDER -> FIX WITH NEW STATE AND ADD TO VOTE COLORS
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
    
    const oneIsWinning = getPercent(PollData.optionOneVotes, totalVotes) >= 50 ? true : false;

    // *REMINDER -> ADD TO BUTTONS
    // 


    return (
        <Card centered fluid>
            <Card.Content >
                <Card.Header>
                    {/* IF USER HAS VOTED, DISPLAY PERCENTAGES NEXT TO NAMES */}
                    {PollData.userVoted.voted 
                        ?
                            <p className="votes-title">{optionOne}<span className="title-percent" style={oneIsWinning ? {color: 'green'} : {color: 'red'}}>{Math.floor(getPercent(PollData.optionOneVotes, totalVotes))}%</span> vs. {optionTwo}<span className="title-percent" style={oneIsWinning ? {color: 'red'} : {color: 'green'}} >{Math.floor(getPercent(PollData.optionTwoVotes, totalVotes))}%</span> </p>
                        :
                            <p className="votes-title">{optionOne} vs. {optionTwo}</p>
                    }
                    </Card.Header>
                <Card.Meta>{poster}</Card.Meta>
            </Card.Content>
            <Card.Content textAlign="center">
                <div className="pollCntr">
                    <PollOption showPercent={PollData.userVoted.voted} optionName={optionOne} percent={getPercent(PollData.optionOneVotes, totalVotes)} isWinning={oneIsWinning} />
                    <PollOption showPercent={PollData.userVoted.voted} optionName={optionTwo} percent={getPercent(PollData.optionTwoVotes, totalVotes)} isWinning={!oneIsWinning}/>
                </div>
            </Card.Content>
            <Card.Content textAlign="center" extra>
                { !PollData.userVoted.voted
                    ?
                    <Button.Group style={{width: '80%', margin: '.25rem'}} size="small">
                        <Button animated="fade" size="mini" className="vote-btn" disabled={PollData.userVoted.voted} color={getColor(true)} style={{fontSize: '.9rem'}} onClick={() => sendVote(true)}>
                            <Button.Content className="button-text" visible>{optionOne}</Button.Content>
                            <Button.Content hidden >
                                <Icon name='angle double up' />
                            </Button.Content>
                        </Button>
                        <Button.Or />
                        <Button animated="fade" size="mini" className="vote-btn" disabled={PollData.userVoted.voted} color={getColor(false)} style={{fontSize: '.9rem'}} onClick={() => sendVote(false)}>
                            <Button.Content className="button-text" visible >{optionTwo}</Button.Content>
                            <Button.Content hidden >
                                <Icon name='angle double up' />
                            </Button.Content>
                        </Button>
                    </Button.Group>
                    :
                    <Button size="mini" disabled>Vote Submitted</Button>

                }

            </Card.Content>
        </Card>

    );
}
  
  export default Poll;
