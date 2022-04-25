import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import videos from "../../Data/videos.json";
import Video from "../Video/Video";
const Videos = ({search}) => {
  const [selected, setSelected] = useState(null);
  const [check, setCheck] = useState(false)
  
  return (
    <Container>
      <Row className="justify-content-center">
        {videos.map((video) => (
          <Col
            xs={12}
            md={3}
            lg={3}
            className="m-4"
            key={video.id}
            onClick={() => setSelected(video)}
          >
            <Video video={video} selectedVideo = {selected} searchedVideo = {search} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Videos;
