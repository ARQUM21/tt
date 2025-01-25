import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from '../routes'

const App = () => {
  return (
    <div>
      <Routes>
        {
        routes.map((item, index) =>{
          return(<Route key={index} element={item?.element} path={item?.path} />  )
        })
      }
      </Routes>
    </div>
  )
}

export default App
