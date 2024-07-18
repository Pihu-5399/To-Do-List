import React, { useState } from 'react'
import EditModal from './EditModal'
import { MdDelete } from "react-icons/md";
import { BiEdit } from "react-icons/bi";


function TaskDisplay({ tasks, dispatch }) {
  const [isModal, setIsModal] = useState(false)
  const [editTask, setEditTask] = useState({})

  //edit modal function
  const editHandeler = (task, index) => {
    setIsModal(true)
    setEditTask({ task, index })
  }
  //close modal function
  const closeModal = () => {
    setIsModal(false)
  }

  return (
    <>
      <div className="container">
        {
          tasks.map((task, index) => {
            return (
              <div className="card">
                <h3>{task}</h3>
                <div className="buttons">
                  <button onClick={() => dispatch({ type: "delete", payload: index })}>
                  <MdDelete/> </button>
                  <button onClick={() => editHandeler(task, index)}>
                  <BiEdit /></button>
                </div>
              </div>
            )
          })
        }
      </div>
      <div>
        {isModal && <EditModal closeModal={closeModal}
          editTask={editTask} dispatch={dispatch} />}
      </div>
    </>
  )
}

export default TaskDisplay