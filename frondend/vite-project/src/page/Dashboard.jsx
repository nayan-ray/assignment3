import React, { useEffect } from 'react'

import DashLay from '../components/dashLayout/DashLay'
import BlogStore from '../store/blog';

const Dashboard = () => {
   const {  getBlogPosts } = BlogStore();

  useEffect(()=>{
       (
          async()=>{
             await getBlogPosts();
             console.log("dashboard page");
             
             
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
