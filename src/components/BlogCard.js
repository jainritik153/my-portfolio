import React, { useContext } from "react";
import { BlogContext } from "../Contexts/BlogDataContext";

const BlogCard = (props) => {
  console.log(props.blogDetails.imgUrl);
  return (
    <div className="blog-card">
      <div className="blog-image" href="#">
        <div className="overlay flex items-center justify-center">
          <h2 style={{ color: "white", fontWeight: 100 }}> Read Blog</h2>
        </div>
        <img src={props.blogDetails.imgUrl}></img>
      </div>
      <div className="blog-details">
        <div className="blog-date">
          <p>{props.blogDetails.date}</p>
        </div>
        <div className="blog-title">
          <h2>{props.blogDetails.title}</h2>
        </div>
        <div className="blog-body">
          <p>{props.blogDetails.body}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
