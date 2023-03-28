import React from 'react'
import Open_Bucket from './components/Open_bucket'
import History from './components/History_page'
import { Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Error_Page from './components/Error_page'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index path="/" element={<Open_Bucket/>} />
            <Route path="/history" element={<History />} />
            <Route path="*" element={<Error_Page />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
