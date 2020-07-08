import { increment, decrement} from '../Actions/Counter';
import { counterInterface } from '../Interfaces/actionInterfaces/counterInterface';

const counter = (state = 0, action: counterInterface) => {
    switch(action.type){
        case ('INCREMENT'):
            return state + action.payLoad;
        case('DECREMENT'):
            let a: number = state - action.payLoad;
            return (a > 0 ? a : 0);
        default:
            return state;
    }
}

export default counter;