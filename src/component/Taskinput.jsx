import React, { useState } from 'react'

function Taskinput({ dispatch }) {
  let [inputData, setInputData] = useState("")
  const addTask = () => {
    if (!inputData.trim()) {
      alert("Write task before adding")
    }
    else {
      dispatch({ type: "add", payload: inputData.trim() })
      setInputData("")
    }
  }
  return (
    <>
      <div className="input">
        <input type="text" name='task' placeholder='Enter Your Task...' id="task"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)} />
        <button onClick={addTask}>ADD TASK</button>
      </div>
    </>
  )
}
export default Taskinput