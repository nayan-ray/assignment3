import React from 'react'
import Layout from '../components/Layout/Layout'
import Footer from '../components/Layout/Footer'
import Hero from '../components/hero/Hero'
import ListContainer from '../components/listContainer/ListContainer'

const Home = () => {
  return (
    <div>
        <Hero />
        <div>
            <h1 className=' text-center'>My Blog</h1>
          <ListContainer />
        </div>
       <Footer />
    </div>
  )
}

export default Home
