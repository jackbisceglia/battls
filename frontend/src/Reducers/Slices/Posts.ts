import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PollData } from '../../Interfaces/PollData'
import { RootState } from '..'; 

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

interface vote {
  isOptionOne: boolean,
  id: number
}

const initialState: PollData[] = defaultPosts;

const postsSlice = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {
    addPost(state, action: PayloadAction<PollData>) {
        return[action.payload, ...state];
    },
    deletePost(state, action: PayloadAction<number>) {
        return state.filter(curr => curr.id !== action.payload);
    },
    addVote(state, action: PayloadAction<vote>){
      state.forEach(curr => {
        if (curr.id == action.payload.id){
          action.payload.isOptionOne ? curr.optionOneVotes += 1 : curr.optionTwoVotes += 1
        }
      })
    }
    
  }
})

export const { addPost, addVote } = postsSlice.actions

export default postsSlice.reducer


