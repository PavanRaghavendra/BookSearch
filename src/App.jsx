
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Suspense, lazy } from 'react'
const BookSearch=lazy(()=>import("./components/BookSearch"))
const BookShelf=lazy(()=>import("./components/BookShelf"))
const Home=lazy(()=>import('./components/Home'))
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search' element={<Suspense fallback={<div>Loading...</div>}>
          <BookSearch/>
        </Suspense>}/>
        <Route path='/shelf' element={<Suspense fallback={<div>Loading...</div>}>
          <BookShelf/>
        </Suspense>}>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
