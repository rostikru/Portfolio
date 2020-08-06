import { ADD_TODO, CHECKING } from './todoTypes'


const todos = [
    {id: 1, todo: 'Meditation', done: false},
    {id: 2, todo: 'MartialArts', done: false},
    {id: 3, todo: 'Have fun', done: true}
]

const todoReducer = (state = todos, action) => {
    switch(action.type) {
        // case ADD_TODO: return {
        //     ...state,
        //     todos: state.todos.push('1')
        // }

        case CHECKING: return {
                // ...state,
                // todos: state.todos.map(id => id === )
            }
        default: return state
    }
}

export default todoReducer