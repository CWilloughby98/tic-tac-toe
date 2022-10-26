import React from 'react'


export default function Square({ value, chooseSquare }) {

    return(

        <div className='square' onClick={chooseSquare}>
            {value}
        </div>
    )
}