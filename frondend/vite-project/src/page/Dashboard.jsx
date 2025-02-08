import React, { useEffect } from 'react'

import DashLay from '../components/dashLayout/DashLay'
import BlogStore from '../store/blog';

const Dashboard = () => {
   const {  getBlogPosts } = BlogStore();

  useEffect(()=>{
       (
          async()=>{
             await getBlogPosts();
             
          }
       )();
  }, []);
  return (
    <div>
       <DashLay >

       </DashLay>
  
    </div>
  )
}

export default Dashboard
