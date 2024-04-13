import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import PostCreate from "./pages/PostCreate";


import Layout from "./layout/Layout"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route>
            <Route index element={<Home/>}/>
            <Route path="create" element={<PostCreate/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
