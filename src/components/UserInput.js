import React, { useState, setState } from 'react';
import './GlobalVars'


const UserInput = (props) => {
    let [ commaSeparatedNums, setCommaSeparatedNums ] = useState('wow')

     const grabVals = (e) => {
        setCommaSeparatedNums(commaSeparatedNums = e.target.value)
     }


    return (
        <>
        <form>
            <input onChange={(e) => grabVals(e)} type='textbox'/>
            <input type='submit'/>
        </form>
        </>
    )
}


export default UserInput;
