import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/home/home.jsx'
import Blog from './pages/blog/Blog.jsx'
import BlogPosts from './components/BlogPosts.jsx'
import AddBlog from './pages/addBlog/AddBlog.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route index element={<BlogPosts />} />
            <Route path="/blogs/:id" element={<Blog />} />
            <Route path="/add-post" element={<AddBlog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
