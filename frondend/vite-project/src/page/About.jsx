import React, { useEffect } from "react";
import Footer from "../components/Layout/Footer";
import "./page.css"
import ListContainer from "../components/listContainer/ListContainer";

const About = () => {

  useEffect(()=>{
    (
      async()=>{
         console.log("about page")
      }
    )();
  }, []);


  return (
    <div>
      <div className="body-section">
        <h1 className=" text-center py-4 my-2">About Me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
          distinctio doloremque dolorem porro ab vero repudiandae quaerat fugit,
          nisi odit perferendis cumque perspiciatis eveniet eligendi non saepe
          autem rerum nemo.Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ea, distinctio doloremque dolorem porro ab vero repudiandae
          quaerat fugit, nisi odit perferendis cumque perspiciatis eveniet
          eligendi non saepe autem rerum nemo.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ea, distinctio doloremque dolorem porro
          ab vero repudiandae quaerat fugit, nisi odit perferendis cumque
          perspiciatis eveniet eligendi non saepe autem rerum nemo.Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Ea, distinctio doloremque
          dolorem porro ab vero repudiandae quaerat fugit, nisi odit perferendis
          cumque perspiciatis eveniet eligendi non saepe autem rerum nemo.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
          distinctio doloremque dolorem porro ab vero repudiandae quaerat fugit,
          nisi odit perferendis cumque perspiciatis eveniet eligendi non saepe
          autem rerum nemo.Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ea, distinctio doloremque dolorem porro ab vero repudiandae
          quaerat fugit, nisi odit perferendis cumque perspiciatis eveniet
          eligendi non saepe autem rerum nemo.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ea, distinctio doloremque dolorem porro
          ab vero repudiandae quaerat fugit, nisi odit perferendis cumque
          perspiciatis eveniet eligendi non saepe autem rerum nemo.Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Ea, distinctio doloremque
          dolorem porro ab vero repudiandae quaerat fugit, nisi odit perferendis
          cumque perspiciatis eveniet eligendi non saepe autem rerum nemo.
        </p>
      </div>
      <div>
          <h1 className="text-center">My Team</h1>
          <ListContainer />
      </div>
      <Footer />
    </div>
  );
};

export default About;
