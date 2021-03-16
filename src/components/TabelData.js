import React from 'react'


const TabelData =(props)=> {

    

    return (
        <div className='tabelData'>
            <div>{props.print[0]}</div>
            <div>{props.print[1]}</div>
            <div>{props.print[2]}</div>
            <button>Delete</button>
        </div>
        
    )
}

export default TabelData;
