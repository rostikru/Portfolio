import { ADD_TODO } from './todoTypes'
import { CHECKING } from './todoTypes'


export const addTodo = () => {
    return {
        type: ADD_TODO
    }
}

export const checking = () => {
    return {
        type: CHECKING
    }
}


