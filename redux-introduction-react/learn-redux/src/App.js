import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {decrement, increment, logIN} from "./actions";

function App() {
    const counter = useSelector(state => state.counter);
    const loggedInt = useSelector(state => state.isLogged);
    const dispatch = useDispatch();
    return (
        <div className="App">
            <h1>{counter}</h1>

            <button onClick={()=>dispatch(increment(20))}>+</button>
            <button onClick={()=>dispatch(decrement())} >-</button>
            <br></br>


            {loggedInt ?
                <button onClick={()=>dispatch(logIN())}>login</button>
                :
                <button onClick={()=>dispatch(logIN())}>logout</button>
            }

        </div>
    );
}

export default App;
