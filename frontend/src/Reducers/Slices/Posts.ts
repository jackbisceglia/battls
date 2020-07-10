import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PollData } from '../../Interfaces/PollData'
import { RootState } from '..'; 

const defaultPosts = [
    {
        id : '0000',
        optionOne: "Bulls",
        optionTwo: "Celtics",
        posterName: "Jack Bisceglia",
        optionOneVotes: 27,
        optionTwoVotes: 90,
        userVoted: {
          voted: false,
          isOptionOne: false
        }
      },
      {
        id : '0001',
        optionOne: "String Cheese",
        optionTwo: "Melted Cheese",
        posterName: "Gillian Bisceglia",
        optionOneVotes: 9,
        optionTwoVotes: 2,
        userVoted: {
          voted: false,
          isOptionOne: false
        }
      },
      {
        id : '0002',
        optionOne: "Sausage",
        optionTwo: "Hot Dog",
        posterName: "Tom Brady",
        optionOneVotes: 47,
        optionTwoVotes: 42,
        userVoted: {
          voted: false,
          isOptionOne: false
        }
      },
      {
        id : '0003',
        optionOne: "Golden Retriever",
        optionTwo: "Black Lab",
        posterName: "Harry Potter",
        optionOneVotes: 71,
        optionTwoVotes: 43,
        userVoted: {
          voted: false,
          isOptionOne: false
        }
      }
]

interface vote {
  isOptionOne: boolean,
  id: string
}


const initialState: PollData[] = defaultPosts;

const postsSlice = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {
    addPost(state, action: PayloadAction<PollData>) {
        return[action.payload, ...state];
    },
    deletePost(state, action: PayloadAction<string>) {
        return state.filter(curr => curr.id !== action.payload);
    },
    addVote(state, action: PayloadAction<vote>){
      state.forEach(curr => {
        if (curr.id == action.payload.id){
          action.payload.isOptionOne ? curr.optionOneVotes += 1 : curr.optionTwoVotes += 1
        }
      })
    },
    userVoted(state, action: PayloadAction<vote>){
      state.forEach(curr => {
        if (curr.id == action.payload.id){
          curr.userVoted.voted = true;
          curr.userVoted.isOptionOne = action.payload.isOptionOne
        }
      })
    }
    
  }
})

export const { addPost, addVote, userVoted } = postsSlice.actions

export default postsSlice.reducer


