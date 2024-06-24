import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);
    

    const handleCurrencyChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });

    }

    return (
        <div className='form-group'>
            <select className='form-select' onChange={handleCurrencyChange}  style={{backgroundColor: 'lightgreen'}}>
                <option disabled selected hidden>Currency ({currency} Pound)</option>
                <option value="$" name="Dollar" >$ Dollar</option>
                <option defaultValue value="£" name="Pound">£ Pound</option>
                <option value="€" name="Euro">€ Euro</option>
                <option value="₹" name="Ruppee">₹ Ruppee</option>
            </select>
        </div>
    )
};

export default Currency;