import React from 'react';
import Button from '../Button';
import { useHistory, useParams } from 'react-router-dom';
import "./style.css";

const TaskDetails = () => {

   const params = useParams();
   const history = useHistory();

   const handleBackClick = () => {
      history.goBack()
   };

   return (
      <>
         <div onClick={handleBackClick} className="backBtn">
            <Button>Voltar</Button>
         </div>

         <div className="detailsContainer">
            <h2>{params.taskTitle}</h2>
            <p>
               It is a long established fact that a reader will be
               distracted by the readable content of a page when
               looking at its layout.
            </p>
         </div>
      </>
   )
}


export default TaskDetails;