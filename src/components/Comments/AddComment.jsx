import React, { useState, useEffect } from "react";
import {
  Col,
  Form,
  Row,
  useAccordionButton,
  Accordion,
  Card,
  Button,
  ListGroup,
} from "react-bootstrap";
import "./comment-style.css";
import CommentList from "./CommentList";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <i className="fa-regular fa-comment" onClick={decoratedOnClick}>
      {children}
    </i>
  );
}

const AddComment = ({ selectedVideo, children }) => {
  const [comment, setComment] = React.useState([{
    text: "",
  }]);

  const [value, setValue] = useState("")
  const [toggleComment, setToggleComment] = useState(false)
  console.log(toggleComment)

  const addComment  = text=>{
    const newComment = [...comment, {text}];
    setComment(newComment)

    console.log("NEW", newComment)
}

const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addComment(value);
    setValue("");
    console.log("MY COMMENT", comment)
  };
 
  const handleClick = () =>{
        setToggleComment(true)
  }

  return (
    <Accordion>
      <Card
        style={{ border: "none", backgroundColor: "white" }}
        className="comment-section"
      >
          <div className="toggle-comment d-flex">
              <div disabled={toggleComment} className = {(toggleComment === true ? 'is-disabled' : 'is-enabled')}
              >
        {children}
        <Card.Header   style={{ border: "none", backgroundColor: "white" }}>
          <CustomToggle  eventKey="0" className="p-5 tog">
            <span className="text">Comment</span>
          </CustomToggle>
        </Card.Header>

              </div>
        <label class="switch mt-2" onClick={handleClick}>
             <input type="checkbox"/>
        <span class="slider"></span>
     </label>
          </div>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <Form
              id="comment-form"
              onSubmit={handleSubmit}
            >
              <Row>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Control
                      as="textarea"
                      rows={2}
                      placeholder="Write your comments here..."
                      value={value}
                      onChange={(e) => setValue(e.currentTarget.value)}
                    />
                  </Form.Group>
                  <CommentList comment = {comment}/>
                  <Button variant="warning" type="submit" disabled={toggleComment} className = {(toggleComment ? 'is-disabled' : 'is-enabled')}>
                    Add comment
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default AddComment;
