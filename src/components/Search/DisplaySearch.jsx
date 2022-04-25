import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import ReactPlayer from 'react-player/lazy'
import AddComment from '../Comments/AddComment'
import Home from '../Home/Home'
const DisplaySearch = ({search}) => {
  return (<>
    <Container>
      <Row className="justify-content-center">
        {search?.map((video) => (
          <Col
            xs={12}
            md={3}
            lg={3}
            className="m-4"
            key={video.id}
          >
         <div className="container">
          <ReactPlayer width={320} height ={250} controls={true} url={video.url}/>
          <AddComment />
      </div>
          </Col>
        ))}
      </Row>
    </Container>
    </> )
}

export default DisplaySearch