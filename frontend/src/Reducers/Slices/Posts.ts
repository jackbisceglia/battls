import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { PollData } from '../../Interfaces/PollData'
import { useSelector, useDispatch} from 'react-redux'
import { RootState } from '..'; 

const defaultPosts = [
    {
        id : '0000',
        userid : '000',
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
        userid : '000',
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
        userid : '000',
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
        userid : '000',
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

interface init {
  feed: PollData[],
  lastIndex: number,
  loading: boolean
}

// GET FEED
const getFeed = createAsyncThunk('posts/getFeed', async (lastIndex: number) => {
  if (lastIndex === -1) {
    return {feed: [], nextNum: -1}
  }
  else {
    const url = `/polls/getfeed/${lastIndex}`;
  
    return await fetch(url)
      .then(res => res.json());
  }
});

// ADD NEW POST
const createPost = createAsyncThunk('posts/createPost', async (post: PollData) => {
  const url = '/polls/makepoll';

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })
    .then(res => res.json())
  return res.newPost as PollData;
})


// ADD VOTE
const addVoteToServer = createAsyncThunk('posts/addVote', async (info: vote) => {
  const url = '/polls/addvote';

  // **Modify
  const send = {
    poll_id: info.id,
    user_id: '000',
    isOptionOne: info.isOptionOne
  };

  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(send)
  })
    .then(res => res.json())
  return info as vote;
})

const initialState: init = {
  feed: [],
  lastIndex: 0,
  loading: true
};

const postsSlice = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {
    deletePost(state, action: PayloadAction<string>) {
      return {...state, feed: state.feed.filter(curr => curr.id !== action.payload)}
    },
    addVote(state, action: PayloadAction<vote>){
      state.feed.forEach(curr => {
        if (curr.id == action.payload.id){
          action.payload.isOptionOne ? curr.optionOneVotes += 1 : curr.optionTwoVotes += 1
        }
      })
    },
    userVoted(state, action: PayloadAction<vote>){
      state.feed.forEach(curr => {
        if (curr.id == action.payload.id){
          curr.userVoted.voted = true;
          curr.userVoted.isOptionOne = action.payload.isOptionOne
        }
      })
    },
  },
  extraReducers: builder => {
    builder
    .addCase(getFeed.fulfilled, (state, action) => { 
      console.log(action.payload.feed);
      return {
        lastIndex: action.payload.nextNum,
        feed: [...state.feed, ...action.payload.feed],
        loading: false
      }
    })
    .addCase(getFeed.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(createPost.fulfilled, (state, action) => {
      return {
        lastIndex: state.lastIndex,
        feed: [action.payload, ...state.feed],
        loading: false
      }
    })
    .addCase(createPost.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(addVoteToServer.fulfilled, (state, action) => {

      state.feed.forEach(curr => {
        if (curr.id == action.payload.id){
          action.payload.isOptionOne ? curr.optionOneVotes += 1 : curr.optionTwoVotes += 1;
          curr.userVoted.voted = true;
          curr.userVoted.isOptionOne = action.payload.isOptionOne;
        }
      })

      state.loading = false
    })
    .addCase(addVoteToServer.pending, (state, action) => {
      state.loading = true
    })
  }
});

export const { addVote, userVoted } = postsSlice.actions

export { getFeed, createPost, addVoteToServer };

export default postsSlice.reducer


