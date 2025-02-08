import React from "react";
import Footer from "../Layout/Footer";
import "./dash.css";
import DashItem from "./DashItem";
import Title from "./Title";
import BlogStore from "../../store/blog";

const DashLay = () => {
    const {blogPosts}= BlogStore();
    console.log(blogPosts)
  
    return (
        <div>
          <div className="container-fluid">
            <div className="row pe-5">
                <Title type={"blog"}/>
            </div>
            <div className="row">
              <div className="col-3 bg-info">
                <ul className="list-group">
                  <li className="list-group-item ">Blog</li>
                  <li className="list-group-item">Team</li>
                  <li className="list-group-item">Service</li>             
                </ul>
              </div>
              <div className="col-9 bg-secondary">
                <div className="dash-container">
                  
                  {blogPosts.map((post, index) => (
                    <DashItem key={index} post={post} />
                    ))}
                    
                  
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      );
  

  
};

export default DashLay;
