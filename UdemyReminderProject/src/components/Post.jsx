import React from 'react'

// const names = ['jacob','manuel']

const Post = ({body,author}) => {
  // const chosen = Math.random() > 0.5 ? names[0] : names[1]

  return (
    <div>
      <p>{author}</p>
      <p>{body}</p>
    </div>
  )
}

export default Post