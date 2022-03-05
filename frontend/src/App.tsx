import axios from 'axios';
import React, { lazy, Suspense } from 'react';
import {BrowserRouter as Router, Route, Routes,} from "react-router-dom"
import Loading from './components/Loading';
import Blog from './pages/blogs/item';
const SigninPage = lazy(()=>import('./pages/signin'))
const SignUpPage = lazy(()=>import('./pages/signup'))
const IndexPage = lazy(()=>import('./pages/index'))
const MyBlogs = lazy(()=>import('./pages/my-blogs/index'))
const MyBlogItem = lazy(()=>import('./pages/my-blogs/item'))
const BlogCreate  = lazy(()=>import('./pages/my-blogs/create'))

function App() {
  axios.defaults.baseURL = 'http://localhost:5000/api/v1'
  // axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem('access_token')}`
  // axios.defaults.headers.common["refresh"] = `${localStorage.getItem('refresh_token')}`
  return (
    <Router>
      <Suspense fallback={<Loading/>} >
        <Routes>
          <Route path='/' element={<IndexPage />} />
          <Route path='/signin' element={<SigninPage />} />
          <Route path='/register' element={<SignUpPage />} />
          <Route path='/blogs/:id' element={<Blog />} />
          <Route path='/profile/blogs' element={<MyBlogs />} />
          <Route path='/profile/blogs/create' element={<BlogCreate />} />
          <Route path='/profile/blogs/:id' element={<MyBlogItem />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
