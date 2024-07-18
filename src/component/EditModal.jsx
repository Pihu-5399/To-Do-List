import React, { useState } from 'react'
import { IoCloseCircle } from "react-icons/io5";

function EditModal ({closeModal, editTask, dispatch}){
    //console.log(editTask);
const [updateTask, setUpdateTask] = useState(editTask.task)
const updateHandeler =()=>{
    dispatch({
        type:"edit",
        payload:{task : updateTask, index:editTask.index}
    })
    closeModal()
}

    return (
        <>
        {/* {console.log(updateTask)} */}
        <div className="modal-container">
        <div className="modal">
                <h2>Edit Your Task</h2>
                <textarea name="" id="" cols="30" rows="4"
                value={updateTask} onChange={(task) => setUpdateTask(task.target.value)}>
                </textarea>
                <div className='modal-buttons'>
                    <button onClick={updateHandeler}>Update Task</button>
                    <button onClick={closeModal}>Close</button>
                </div>
                <h2 className="cross" onClick={closeModal}><IoCloseCircle /></h2>
            </div>
        </div>
            
        </>
    )
}

export default EditModal;