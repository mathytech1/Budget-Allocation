import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import {FaPlus, FaMinus} from 'react-icons/fa';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    };

    const reduceAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    };

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><FaPlus size="1em" onClick={event=> increaseAllocation(props.name)} style={{ cursor: 'pointer', color: 'white', backgroundColor: 'green', borderRadius: '16px' }} /></td>
        <td><FaMinus size="1em" onClick={event=> reduceAllocation(props.name)} style={{ cursor: 'pointer', color: 'white', backgroundColor: 'red', borderRadius: '16px' }} /></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense} style={{ cursor: 'pointer', color:'#dc3545'}}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;