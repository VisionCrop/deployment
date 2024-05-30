import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './Pages/About'

import SignIn from './Pages/SignIn'
import SignUp  from './Pages/SignUp'
import Dashboard from './Pages/Dashboard'
import Home from './Pages/Home'
import PrivateRoute from './Components/PrivateRoute';
import Header from './Components/Header'
import Footer from './Components/Footer';
import OnlyAdminPrivateRoute from './Components/OnlyAdminPrivateRoute';
import CreatePost from './Pages/CreatePost';
import UpdatePost from './Pages/UpdatePost';
import PostPage from './Pages/PostPage';
import Search from './Pages/Search';
const App = () => {
  return (
    <BrowserRouter>
    <Header />
    
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/sign-in" element = {<SignIn />} />
        <Route path = "/sign-up" element = {<SignUp />} />
         
        <Route path='/search' element={<Search />} />
        <Route element = {<PrivateRoute />}>
          <Route path = "/dashboard" element = {<Dashboard />} /> 
        </Route>
        <Route path = "/about" element = {<About />} /> 
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/update-post/:postId' element={<UpdatePost />} />
        </Route>
        <Route path='/post/:postSlug' element={<PostPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
