import React, { useEffect } from 'react'
import Footer from '../components/Layout/Footer'
import ListContainer from '../components/listContainer/ListContainer'
import BlogStore from '../store/blog'

const Blog = () => {
  const {getBlogPosts}= BlogStore();

  useEffect(()=>{
          (
            async()=>{
               await getBlogPosts();
            }
          )();
  }, [])
  return (
    <div>
        <div>
            <h1 className=" text-center py-4 my-2"> Blog</h1>
            <ListContainer />
        </div>
       <Footer/>
    </div>
  )
}

export default Blog
