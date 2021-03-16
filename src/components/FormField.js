import React, { useState } from "react";
import TabelData from "./TabelData";

const FormField = () => {
  const [value, setInputField] = useState('');
  const [value2, setInputField2] = useState('');
  const [value3, setInputField3] = useState('');
 

  const [printData,setPrintdata] = useState('');

  const handleInputs = ()=>{
    const printData = [value,value2,value3];
    setPrintdata(printData);
   
}

  const handleSubmit = (e)=>{
      e.preventDefault();
      handleInputs(printData);
      setInputField('');setInputField2('');setInputField3('');
  }

  return (
    <div >
      <form className='form'
       onSubmit={handleSubmit}>
        <div>
        <div className='text'>
            <div className='inputtext'>Name:
            <input className='nameinput'
                type='text' 
                placeholder='Where was the expense made?'
                value={value}
                onChange={e=>{setInputField(e.target.value)}}/>
            </div>
            <div className='dateamount'>
                <div>Date:</div>
                    <input className='inputDate' type='date'
                    value={value2}
                    onChange={e=>{setInputField2(e.target.value)}}/>
                <div>Amount:</div>
                    <input className='inputnumber'
                    placeholder='Enter amount'
                    type='number'
                    value={value3}
                    onChange={e=>{setInputField3(e.target.value)}}/>
            </div>
        </div>
        <button
         onClick={handleInputs}
         type='submit'>Add Expense</button>
        </div>
      </form>
      <div>
         <TabelData print={printData}/>
      </div>
    </div>
  );
};

export default FormField;
