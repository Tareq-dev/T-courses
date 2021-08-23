import React from 'react';
import "../Courses/Course.css";
import { Button } from 'react-bootstrap';

const Course = (props) => {
  const {name, description, instructor,price,image} = props.course;
    return (
        <div className="course">
        <div>
        <img src={image} alt="" />
        </div>
        <div> 
        <h4> {name}</h4>
        <p> Description : {description}</p>
        <h6> Instructor : {instructor}</h6>
        <h6> $ : {price}</h6>
        <Button variant="warning" onClick={()=>(props.handleButton(props.course))}>Enroll Now</Button>
        </div>
        </div>
    );
};

export default Course;