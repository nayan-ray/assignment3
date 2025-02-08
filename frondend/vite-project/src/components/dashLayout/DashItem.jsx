import React, { useState } from "react";
// import "./dash.css"
import BlogStore from "../../store/blog";
import pic from "../../../public/coffee-thumbnail.jpg"

const DashItem = ({ post }) => {
  const { deletePost, getBlogPosts, updatePost } = BlogStore();
  const [titleUp, setTitleUp] = useState(post.title);
  const [des, setDes] = useState(post.description);
  const deleteHandler = async (id) => {
    const response = await deletePost(id);
    response && getBlogPosts();
  };

  const  upHandler = async(id) => {
    const data ={
     title:titleUp,
     description:des,
     
    }
    const res = await updatePost(id, data);
      res && await getBlogPosts();
 }

  return (
    <div className="item-section hoverEffect">
      <div className="card" style={{ width: "18rem" }}>
        <img src={pic} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.description}</p>

          <div className=" d-flex justify-content-around">
            {/* modal start here */}

            {/* Button trigger modal */}
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Edit
            </button>
            {/* Modal */}
            <div
              className="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex={-1}
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">
                      Edit blog
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <form action="">
                      <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">
                          Title
                        </span>
                        <input
                          type="text"
                          onChange={(e)=>setTitleUp(e.target.value)}
                          className="form-control"
                          value={titleUp}
                          aria-label="Username"
                          aria-describedby="addon-wrapping"
                        />
                      </div>
                      <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">
                          Description
                        </span>
                        <input
                          type="text"
                          onChange={(e)=>setDes(e.target.value)}
                          className="form-control"
                          value={des}
                          aria-label="Description"
                          aria-describedby="addon-wrapping"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      onClick={()=> upHandler(post._id)}
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Save Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* modal end here */}
            <button
              onClick={() => deleteHandler(post._id)}
              type="button"
              class="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashItem;
