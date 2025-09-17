import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/home/home.jsx'
import Blog from './pages/blog/Blog.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route to="/" element={<Home />} />
            <Route to="/blogs/:id" element={<Blog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
