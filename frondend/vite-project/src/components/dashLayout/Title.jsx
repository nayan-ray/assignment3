import React, { useState } from "react";
import BlogStore from "../../store/blog";
import {useNavigate} from "react-router-dom";


const Title = ({ type }) => {
    const [title, setTitle]  = useState('');
    const [description, setDescription]  = useState('');
    const navigate = useNavigate();
    const {setBlogPost, getBlogPosts} = BlogStore();
    console.log(title)

    const  handler = async() => {
       const data ={
        title:title,
        description:description,
        image :'0f/300',
       }
       const res = await setBlogPost(data);
         res && await getBlogPosts();
    }

  return (
    <>
      {/* Button trigger modal */}
      <h1
        type="button"
        className=" text-end fs-2 my-3 "
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Create {type}
      </h1>
      <>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Create {type}
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Title
                    </label>
                    <input
                      onChange={(e)=> setTitle(e.target.value)}
                      type="text"
                      value={title}
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                    
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Description
                    </label>
                    <input
                      type="text"
                      value={description}
                      onChange={(e)=> setDescription(e.target.value)}
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                    
                  </div>

                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Image
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                    
                  </div>
                 
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  onClick={handler}
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Title;
