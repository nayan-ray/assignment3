import React from "react";
import ListItem from "../listItem/ListItem";
import "./listContainer.css"
import BlogStore from "../../store/blog";

const ListContainer = () => {
  const {blogPosts} =BlogStore();
  return (
    <div className="section">
      <div className="container">
        <div className="wrapper">

          <div className="bottom">
           {blogPosts.map((post, i)=>{
              return <ListItem  key={i} post={post}/>;
           })}

             
            
          </div>

        </div>
      </div>
    </div>
  );
};

export default ListContainer;
