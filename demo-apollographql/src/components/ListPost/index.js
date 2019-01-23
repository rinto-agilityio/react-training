import React from 'react'

const ListPost = ({ posts }) => (
  <>
    {posts.map(post => (
      <section key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
      </section>
    ))}
  </>
)

export default ListPost
