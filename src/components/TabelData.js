import React from 'react'
import '../components/TabelCss.js.css'

const TabelData =(props)=> {

    return (
 
        <div className='tabelData'>
            <ul>
                {console.log(props.printData)}
                
                <button className='btn'>Delete</button>
            </ul> 
        </div>  
    )
}

export default TabelData;
//{
   /// printData.map((item,key)=><div key={`${key}`}>{item.inputList}</div>)
  //}