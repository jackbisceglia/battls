import {Voted} from './Voted'

export interface PollData {
    id : string,
    optionOne: string,
    optionOneVotes: number,
    optionTwo: string,
    optionTwoVotes: number,
    posterName: string,
    userVoted: Voted,
    userid : string
}
