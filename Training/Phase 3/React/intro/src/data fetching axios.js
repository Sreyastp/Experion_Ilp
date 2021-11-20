import React, { useState, useEffect } from "react";
import axios from "axios";

function Datafetching() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((response) => {
        console.log(response);
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.productName}</li>
        ))}
      </ul>
      <div>
        {/* <h1>fetchin data from node api (postman)</h1> */}
      </div>
      ;
    </div>
  );
}

export default Datafetching;
