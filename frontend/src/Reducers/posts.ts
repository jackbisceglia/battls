import {PollData} from '../Interfaces/PollData'

import {addPostAction} from '../Actions/PostAction'


const posts = (state = [], action: addPostAction) => {
    switch (action.type) {
      case 'ADD_POST':
        return 
      case 'TOGGLE_TODO':

      default:
        return state
    }
}

export default posts;