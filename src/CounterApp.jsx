import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';


export const CounterApp = ({value}) => {
    
    const [count, setCount] = useState(value);

    const handleAdd = () => {
        //console.log(event)
        //setCount(count + 1);
        setCount((prevCount) => prevCount + 1);
    };
    

    return (
        <>
            <h1>Counter App</h1>
            <h2> {count} </h2>
            <button onClick={handleAdd}>
                +1
            </button>
        </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}