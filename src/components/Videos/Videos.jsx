import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import vid from "../../Data/videos.json";
import Video from "../Video/Video";
const Videos = ({search}) => {
  const [selected, setSelected] = useState(null);
  const [videos, setVideos] = useState({vid});
  


  return (<>
    <Container>
      <Row className="justify-content-center">
        {search && search.map((s) => (
          <Col
            xs={12}
            md={3}
            lg={3}
            className="m-4"
            key={s.id}
            onClick={() => setSelected(s)}
          >
            <Video searchedVideo={s} initialVideos = {videos}  />
          </Col>
        ))}
      </Row>
    </Container>

</> );
};

export default Videos;
