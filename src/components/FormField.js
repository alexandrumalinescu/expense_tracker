import React, { useState } from "react";

const FormField = () => {
  const [inputField, setInputField] = useState('');
  const [inputField2, setInputField2] = useState('');
  const [inputField3, setInputField3] = useState('');

  const handleInputs = ()=>{
    setInputField('');setInputField2('');setInputField3('')
  }

  return (
    <div >
      <form className='form'
       onSubmit={e=>{e.preventDefault()}}>
        <div>
        <div className='text'>
            <div className='inputtext'>Name:
            <input className='nameinput'
                type='text' 
                placeholder='Where was the expense made?'
                value={inputField}
                onChange={e=>{setInputField(e.target.value)}}/>
            </div>
                
            <div className='dateamount'>
                <div>Date:</div>
                    <input className='inputDate' type='date'
                    value={inputField2}
                    onChange={e=>{setInputField2(e.target.value)}}/>
                <div>Amount:</div>
                    <input className='inputnumber' type='number'
                    value={inputField3}
                    onChange={e=>{setInputField3(e.target.value)}}/>
            </div>
        </div>
        <button
         onClick={handleInputs}
         type='submit'>Add Expense</button>
        </div>
      </form>
      <div>
         
      </div>
    </div>
  );
};

export default FormField;
