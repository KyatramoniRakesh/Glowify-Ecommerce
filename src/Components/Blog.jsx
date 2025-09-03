// src/components/Blog.jsx
import React from "react";
import "../CSS/Blog.css";

const Blog = () => {
    const BlogData = [
        {
            id: 1,
            img: "Images/blog-2.jpg",
            meta: "by ThemeVale on 1st Feb 2023",
            title: "Naminos Elementum Disumos Ann...",
            desc: "Nullam aliquet vestibulum augue non varius. Duis risus leo, elementum in malesuada an darius ut augue. Cras sit amet lectus et justo euismod sed n…",
        },
        {
            id: 2,
            img: "Images/blog-1.jpg",
            meta: "by ThemeVale on 15th Feb 2014",
            title: "Loremous Cosmopolis",
            desc: "Nullam aliquet vestibulum augue non varius. Duis risus leo, elementum in malesuada an darius ut augue. Cras sit amet lectus et justo euismod sed n…",
        },
    ];



    return (
        <div className="blog">
            <div className="blog-header">
                <h1>From Our Blog</h1>
            </div>

            <div className="blog-container">
                {BlogData.map((blog) => (
                    <div className="blog-card" key={blog.id}>
                        <div className="blog-img">
                            <img src={blog.img} alt={blog.title} />
                            <div className="blog-overlay"></div>
                        </div>
                        <div className="blog-txt">
                            <p className="blog-meta">{blog.meta}</p>
                            <h3 className="blog-title">{blog.title}</h3>
                            <p className="blog-desc">{blog.desc}</p>
                            <button className="view-details">VIEW DETAILS</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
