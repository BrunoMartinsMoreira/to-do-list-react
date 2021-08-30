import React, {useState} from 'react';
import Button from '../Button';
import "./add.css";

const AddTask = ({handleTaskAddition}) => {
   const [inputData, setInputData]=  useState("");

   const handleInputChange = (event) => {
      setInputData(event.target.value);
   };

   const handleTaskClick = ()=>{
      handleTaskAddition(inputData)
   }

   return (
      <div className="addContainer">
         <input
         onChange={handleInputChange}
         value={inputData}
         className="addInput" 
         type="text" />


         <div className="addBtnContainer">
            <Button onClick={handleTaskClick}>
               Adicionar
            </Button>
         </div>
       </div>
   );
}

export default AddTask;