import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import videos from "../../Data/videos.json"
import Videos from "../Videos/Videos";
import DisplaySearch from "./DisplaySearch";

import "./search.css";

const Search = () => {
  
    const [value, setValue] = useState("")
    const [filteredVideos, setFilteredVideos] = useState()
    const inputChange = e=>{
        setValue(e.target.value)
    }

    const searchVideo = (e)=>{
        e.preventDefault()
        console.log(videos)
       let finalFilter = videos.filter(vd => vd['title'].toLowerCase().includes(value))
        console.log(finalFilter)
        if(value.length > 1){
        setFilteredVideos(finalFilter) 
        }
    }
  return (<>
    <div className="mt-5 d-flex justify-content-center">
        <Form onSubmit= {e => searchVideo(e)}>
      <Form.Control 
      type="text" 
      value = {value}
      placeholder="Search for video..." 
      id="search"
      onChange={e=>inputChange(e)}
      />
      <Button variant="warning" type="submit" className = "mt-2" >
        Search
      </Button>
      </Form>
   
    </div>
    <DisplaySearch search = {filteredVideos}/>
 </> );
};

export default Search;
