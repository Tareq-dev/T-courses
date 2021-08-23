import React from 'react';
import {useState} from 'react';
import Cart from '../Cart/Cart';
import Course from '../Courses/Course';
import courseData from '../fakeData/courseData';

const Shop = () => {
     const [course ,setCourse] = useState(courseData);
     const [cart , setCart] = useState ([])


const handleButton = (course) => {
const newCart = [...cart, course];
setCart(newCart);
}
     return (
          <div>
             <div className="course-container">
             {
                  course.map((course)=>( 
                       <Course course={course} handleButton ={handleButton}></Course>
                  ))
             }
             </div>  
             <br></br>
             <hr></hr>
            <div className="cart-container">
            <Cart cart={cart}></Cart>
            </div>
          </div>
     );
};

export default Shop;