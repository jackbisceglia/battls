import { postsInterface } from '../Interfaces/actionInterfaces/postsInterface';

import { PollData } from '../Interfaces/PollData'

const posts = (state: Array<PollData> = defaultPosts, action: postsInterface) => {
    switch(action.type){
        case 'ADD_POST':
            return [action.payLoad, ...state];
        case('DECREMENT'):
            return state.filter(curr => curr.id != action.payLoad.id)

        default:
            return state;
    }
}

export default posts;

const defaultPosts = [
    {
        id : 1,
        optionOne: "Bulls",
        optionTwo: "Celtics",
        posterName: "Jack Bisceglia",
        optionOneVotes: 27,
        optionTwoVotes: 90
      },
      {
        id : 2,
        optionOne: "String Cheese",
        optionTwo: "Melted Cheese",
        posterName: "Gillian Bisceglia",
        optionOneVotes: 9,
        optionTwoVotes: 2
      },
      {
        id : 3,
        optionOne: "Sausage",
        optionTwo: "Hot Dog",
        posterName: "Tom Brady",
        optionOneVotes: 47,
        optionTwoVotes: 42
      },
      {
        id : 4,
        optionOne: "Golden Retriever",
        optionTwo: "Black Lab",
        posterName: "Harry Potter",
        optionOneVotes: 71,
        optionTwoVotes: 43
      }
]