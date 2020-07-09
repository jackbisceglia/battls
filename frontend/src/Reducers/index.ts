import posts from './posts'
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  posts: posts
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>