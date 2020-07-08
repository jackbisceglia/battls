import { combineReducers } from 'redux'
import counter from './counter';
import posts from './posts';


export const rootReducer = combineReducers({
    posts: posts
})

export type RootState = ReturnType<typeof rootReducer>