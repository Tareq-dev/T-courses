import React from 'react';
import './Footer.css';
import new1 from '../../images/new1.png';


const footer = () => {
    return (
        <div>
        <footer class="footer-distributed">
        
                    <div class="footer-left">
                      <h4>Sponsored By:</h4>
                        <img src={new1} alt="" />
        
                        <p class="footer-links">
                            <a href="/Home">Home</a>
                            <br />
                            <a href="/About">About</a>
                            <br />
                            <a href="/Contact">Contact</a>
                        </p>     
                        <p class="footer-company-name">Webvalley © 2021</p>
  
        
                    </div>
        
                    <div class="footer-right">
        
                        <p>Contact Us</p>
        
                        <form action="#" method="post">
        
                            <input type="text" name="email" placeholder="Email"/>
                            <textarea name="message" placeholder="Message"></textarea>
                            <button>Send</button>
        
                        </form>
        
                    </div>
        
                </footer>
        </div>
    );
};

export default footer;