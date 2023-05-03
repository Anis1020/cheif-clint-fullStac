import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="p-10 my-10 bg-teal-700 text-white rounded">
        <h2>
          Q1.Tell us the differences between uncontrolled and controlled
          components.
        </h2>
        <p>
          Answer: Control component are called those components which one we can
          control by state{" "}
        </p>
      </div>
      <div className="p-10 my-10 bg-teal-700 text-white rounded">
        <h2>Q2.How to validate React props using PropTypes.</h2>
        <p>Answer: we can use prop types library by command npm or yarn</p>
      </div>
      <div className="p-10 my-10 bg-teal-700 text-white rounded">
        <h2>Q3.Tell us the difference between nodejs and express js.</h2>
        <p>
          Answer: express js is framework of node.js it simplified to made web
          application
        </p>
      </div>
      <div className="p-10 my-10 bg-teal-700 text-white rounded">
        <h2>
          Q4.What is a custom hook, and why will you create a custom hook?
        </h2>
        <p>
          Answer: Custom hook is one kind of function it help to avoid code
          repetation{" "}
        </p>
      </div>
    </div>
  );
};

export default Blog;
