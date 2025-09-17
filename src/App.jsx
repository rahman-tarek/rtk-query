import { Outlet, Route, Routes } from "react-router"
import BlogPosts from "./components/BlogPosts"
import Home from "./pages/home/home"
import Blog from "./pages/blog/Blog"

function App() {


  return (
    <>
      <Outlet />
    </>
  )
}

export default App
