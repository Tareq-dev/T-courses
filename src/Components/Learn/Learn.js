import React from 'react';
import './Learn.css';
import book from '../../images/book.png';
import brain from '../../images/brain.png';
import light from '../../images/light.png';

const Learn = () => {
    return (
        <div class="learn">
            <h3>Learn. Grow. Thrive.</h3>
            <div class="container">
            <div class="row">
            <div class="col">
            <img class="img-learn" src={book} alt="" />
               <h4>LEARN FROM LEADERS</h4>
               <p><small>Grab a front row seat to research and teaching at Stanford through engaging learning experiences taught by experts in the field.</small></p>
            </div>
            <div class="col">
            <img class="img-learn" src={brain} alt="" />
            <h4>LEARN FROM LEADERS</h4>
            <p><small>Grab a front row seat to research and teaching at Stanford through engaging learning experiences taught by experts in the field.</small></p>
            </div>
            <div class="col">
            <img class="img-learn" src={light} alt="" />
            <h4>LEARN FROM LEADERS</h4>
            <p><small>Grab a front row seat to research and teaching at Stanford through engaging learning experiences taught by experts in the field.</small></p>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Learn;