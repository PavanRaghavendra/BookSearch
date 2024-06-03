
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Suspense, lazy } from 'react'
const BookSearch=lazy(()=>import("./components/BookSearch"))

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Suspense fallback={<div>Loading...</div>}>
          <BookSearch/>
        </Suspense>}>

        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
