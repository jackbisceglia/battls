import {Voted} from './Voted'

export interface PollData {
    id : string,
    userid : string, 
    optionOne: string,
    optionTwo: string,
    posterName: string,
    optionOneVotes: number,
    optionTwoVotes: number,
    userVoted: Voted
}
