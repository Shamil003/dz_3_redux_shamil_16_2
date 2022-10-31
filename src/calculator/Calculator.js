import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {plusAction} from '../redux/actions';

function Calculator(props) {
    const dispatch = useDispatch();
    const result = useSelector(state => state.resultReducer.result)


    const [numbers, setNumbers] = useState({
        firstNumber: 0,
        secondNumber: 0
    })

    const changeInput = (e) => {
        setNumbers({
            ...numbers,
            [e.target.name]: e.target.value
        })
    }
    const plus = () => {

        const result = +numbers.firstNumber + +numbers.secondNumber
        dispatch(plusAction(result))

    }
    const minus = () => {

        const result = +numbers.firstNumber - +numbers.secondNumber
        dispatch(plusAction(result))

    }
    const umn = () => {

        const result = +numbers.firstNumber * +numbers.secondNumber
        dispatch(plusAction(result))

    }
    const del = () => {

        const result = +numbers.firstNumber / +numbers.secondNumber
        dispatch(plusAction(result))

    }

    return (
        <>
            <h1>{result}</h1>
            <input
                type="text"
                placeholder="0"
                name="firstNumber"
                onChange={changeInput}
            />
            <input
                type="text"
                placeholder="0"
                name="secondNumber"
                onChange={changeInput}
            />
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
            <button onClick={umn}>*</button>
            <button onClick={del}>/</button>

        </>
    );
}

export  default Calculator;