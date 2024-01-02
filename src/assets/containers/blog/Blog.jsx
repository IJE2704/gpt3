import React from "react";
import Article from "../../Components/article/Article";
import './blog.css'
const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl="https://i.ibb.co/7vsXBTg/blog01.png"
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          ></Article>
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl="https://i.ibb.co/Qj7TJPp/blog02.png"
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          ></Article>
          <Article
            imgUrl="https://i.ibb.co/BB9sFXp/blog03.png"
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          ></Article>
          <Article
            imgUrl="https://i.ibb.co/Nt7vQrG/blog04.png"
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          ></Article>
          <Article
            imgUrl="https://i.ibb.co/znLF2Q8/blog05.png"
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          ></Article>
        </div>
      </div>
    </div>
  );
};

export default Blog;
