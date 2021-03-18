import React, { useState } from "react";

const FormField = () => {
  const [inputList, setInputList] = useState('');
  const [inputList2,setInputList2] = useState('');
  const [inputList3, setInputList3] = useState('');

  const handleSubmit = (e)=>{
      e.preventDefault();
      const newValue = {inputList,inputList2,inputList3}
      handleInputs(newValue); 
      setInputList([]);setInputList2([]);setInputList3([])
  }

  const [printData,setPrintdata] = useState([]);

  const handleInputs = (item)=>{
   const formList=[...printData,item];
    setPrintdata(formList);
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
                value={inputList}
                onChange={e=>setInputList(e.target.value)}/>
            </div>
            <div className='dateamount'>
                <div>Date:</div>
                    <input className='inputDate'
                    type='date'
                    value={inputList2}
                    onChange={e=>setInputList2(e.target.value)}/>
                <div>Amount:</div>
                    <input className='inputnumber'
                    placeholder='Enter amount'
                    type='number'
                    value={inputList3}
                    onChange={e=>setInputList3(e.target.value)}/>
            </div>
        </div>
        <button
         type='submit'>Add Expense</button>
        </div>
      </form>
      <div>
       {console.log(printData)}
       {
          printData.map((item,key)=><div className='tabel' key={`${key}`}>
            <div className='design'>{item.inputList}</div>
            <div className='design'>{item.inputList2}</div>
            <div className='design'>{item.inputList3}</div>
            <button className='delete'>Delete</button>
          </div>)
        }
      </div>
    </div>
  );
};

export default FormField;
