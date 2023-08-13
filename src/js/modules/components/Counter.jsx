import React, {useState} from 'react';

function Counter() {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        setCount(count - 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button className='increment bg-red-300' onClick={increment}>Increment</button>
            <button className='decrement' onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter;
