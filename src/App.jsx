import React from 'react'
import Navbar from './component/Navbar'
import Todomain from './component/Todomain'
import { Todocontext } from './context/TodoContext'

function App() {
  return (
    <>
        <Todocontext>
          <Navbar />
          <Todomain />
        </Todocontext>

    </>
  )
}

export default App