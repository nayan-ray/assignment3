import React from 'react'
import Footer from '../components/Layout/Footer'
import ListContainer from '../components/listContainer/ListContainer'

const Service = () => {
  return (
    <div>
        <div>
          <h1 className=" text-center py-4 my-2">My Services</h1>
          <ListContainer/>
        </div>
        <Footer/>
    </div>
  )
}

export default Service
