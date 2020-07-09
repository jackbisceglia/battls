import posts from './Slices/Posts'
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  posts: posts
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>