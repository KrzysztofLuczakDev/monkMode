import React from 'react'
import classes from './Post.module.css'

const Post = ({body,author}) => {

  return (
    <div className={classes.post}>
      <p>{author}</p>
      <p>{body}</p>
    </div>
  )
}

export default Post