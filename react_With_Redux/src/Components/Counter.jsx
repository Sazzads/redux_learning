import React, { } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from '../Services/Actions/CounterAction';

const Counter = () => {
    // const [count, setCount] = useState(0)
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()

    const handleIncrement = () => {
        //    setCount(count => count + 1)
        dispatch(incrementCounter())
    }

    const handleDectement = () => {
        dispatch(decrementCounter())
    }

    const handleReset = () => {
        dispatch(resetCounter())
    }
    return (
        <div>
            <h2>Counter APP</h2>
            <h3>Count:{count}</h3>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDectement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Counter;

//1. state-> count:0
//2. action-> increment,decrement,reset
//3. reducers-> increment-> count=count+1
//            decrement-> count= count-1
//               reset-> count=count=0
//4. store
//5. providing store in react
//6. use store