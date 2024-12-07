import { useReducer } from "react";

const UseReducerComp = () => {

    const reducer = (state,action) => {

        switch(action.type)
        {
            case 'increment':
                return {count: state.count + 1};
            case 'decrement':
                return {count: state.count - 1};
            case 'double':
                return {count: state.count * 2};
            case 'half':
                return {count: state.count / 2};
            default:
                return state;
        }

    }

    const [reducerState, dispatch] = useReducer(reducer, {count: 0});

    return (
        <div>
            <p>{reducerState.count}</p>
            <button onClick={() => dispatch({type: 'increment'})}>increment</button>
            <button onClick={() => dispatch({type: 'decrement'})}>decrement</button>
            <button onClick={() => dispatch({type: 'double'})}>double</button>
            <button onClick={() => dispatch({type: 'half'})}>half</button>
            <button onClick={() => dispatch({type: 'standard'})}>standard</button>
        </div> 
    )
}

export default UseReducerComp;