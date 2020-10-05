import React, {useState} from 'react';

const Form = () => {
    return ( 
        <form>
            <h2>Add your spendings here</h2>
            <div className='campo'>
                <label>Spending Name</label>
                <input 
                    type='text'
                    className='u-full-width'
                    placeholder='Ex. Transport'
                />
            </div>
            <div className='campo'>
                <label>Spending Amount</label>
                <input 
                    type='number'
                    className='u-full-width'
                    placeholder='Ex. 300'
                />
            </div>
            <input 
                type='submit'
                className='button-primary u-full-width'
                value='Add Spending'
            />
        </form>
     );
}
 
export default Form;