import {create} from 'zustand';
import axios  from "axios";

const BlogStore = create((set) => ({
    blogPosts: [],
    getBlogPosts: async () => {
        try {
            const response = await axios.get('http://localhost:3002/api/v1/blog');
            if(response.data.message === "success"){
                set({blogPosts: response.data.payload});
                console.log(blogPosts)
            }
           
            
            } catch (error) {
                console.error(error);
            }
        },

    setBlogPost : async (postBody)=>{
        try {
            const response = await axios.post('http://localhost:3002/api/v1/blog/create', postBody, {headers : {'Content-Type': 'application/json'}});
            if(response.data.message === "success"){
                return true
            }
        } catch (error) {
            console.log(error)
        }
    },

    updatePost : async (id, postBody)=>{
        try {
            const response = await axios.put(`http://localhost:3002/api/v1/blog/${id}`, postBody, {headers : {'Content-Type': 'application/json'}});
            if(response.data.message === "success"){
                return true
            }
        } catch (error) {
            console.log(error)
        }
    },

     deletePost : async (id)=>{
        try {
           const response = await axios.delete(`http://localhost:3002/api/v1/blog/delete/${id}`);
           if(response.data.message === "success"){
            return true
          }
        } catch (error) {
            console.log(error)
        }
     }

}))


export default BlogStore;