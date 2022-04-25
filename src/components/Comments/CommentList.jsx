import React from 'react'
import { ListGroup } from 'react-bootstrap'

const CommentList = ({comment}) => {
  return (
    <ListGroup variant="flush">
        {
            comment.map(comment=>(
                <ListGroup.Item>{comment.text}</ListGroup.Item>
            ))
        }
  </ListGroup>
  )
}

export default CommentList