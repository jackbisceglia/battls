import { PollData } from '../Interfaces/PollData'

export const addPost = (postObj: PollData) => ({
    type: 'ADD_POST',
    payLoad: postObj
} )

export const removePost = (postObj: PollData) => ({
    type: 'DELETE_POST',
    payLoad: postObj
})