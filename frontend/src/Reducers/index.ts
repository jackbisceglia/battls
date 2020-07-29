import posts from './Slices/Posts'
import auth from './Slices/Auth'
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  posts: posts,
  auth: auth
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>