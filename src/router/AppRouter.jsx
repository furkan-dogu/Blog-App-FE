import { CssBaseline } from '@mui/material'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import About from '../pages/About'
import Dashboard from '../pages/Dashboard'
import MyBlogs from '../pages/MyBlogs'
import NewBlog from '../pages/NewBlog'
import Profile from '../pages/Profile'
import Register from '../pages/Register'
import NotFound from '../pages/NotFound'
import Details from '../pages/Details'
import PrivateRouter from './PrivateRouter'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <CssBaseline />
        <Navbar />
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/details" element={<PrivateRouter />}>
                <Route path=':id' element={<Details />} />
            </Route>
            <Route path="/my-blogs" element={<MyBlogs />} />
            <Route path="/new-blog" element={<PrivateRouter />}>
                <Route path='' element={<NewBlog />} />
            </Route>
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default AppRouter