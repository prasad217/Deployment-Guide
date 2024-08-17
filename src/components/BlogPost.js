// src/components/BlogPost.js
import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = ({ posts }) => {
  const { id } = useParams();

  // Find the post by id
  const post = posts.find(post => post.id === parseInt(id));

  // Handle the case where the post isn't found
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;
