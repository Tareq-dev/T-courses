import React from 'react';
import graphics from '../../images/online-graphics-courses-1.jpg';
import logo_d from '../../images/logo_design.jpeg';
import dm from '../../images/Digital-Marketing-courses-1200x900.jpg';
import website from '../../images/website-design.jpg';
import './Card.css';

const Card = () => {
    return (
    <div class="container">
        <div class="row row-cols-1 row-cols-md-4 g-3">
  <div class="col">
    <div class="card  h-100">
      <img src={graphics} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Grapics Design</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button type="button" class="btn btn-outline-dark">Enroll</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card  h-100">
      <img src={logo_d} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Logo Design</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button type="button" class="btn btn-outline-dark">Enroll</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card  h-100">
      <img src={dm} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Digital Marketing</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content lorem ipsum dolor sit amet lorem20 This content is a little bit longer.</p>
        <button type="button" class="btn btn-outline-dark">Enroll</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card  h-100">
      <img src={website} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">We Design</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button type="button" class="btn btn-outline-dark">Enroll</button>
      </div>
    </div>
  </div>
</div>
<br />
<div class="row row-cols-1 row-cols-md-4 g-3">
  <div class="col">
    <div class="card  h-100">
      <img src={graphics} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Web Development</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button type="button" class="btn btn-outline-dark">Enroll</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card  h-100">
      <img src={logo_d} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Network Marketing</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button type="button" class="btn btn-outline-dark">Enroll</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card  h-100">
      <img src={dm} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Facebook Marketing</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content lorem ipsum dolor sit amet lorem20 This content is a little bit longer.</p>
        <button type="button" class="btn btn-outline-dark">Enroll</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card  h-100">
      <img src={website} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">SEO</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button type="button" class="btn btn-outline-dark">Enroll</button>
      </div>
    </div>
  </div>
</div>
</div>
    );
};

export default Card;