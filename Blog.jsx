import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://millatsakib.github.io/knowledge_cafe/data.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return <div>fsdafasdf</div>;
};

export default Blogs;
