import React from 'react'
import logo from "./logo.jpeg"
import "./about.css"

console.log(logo);

function About() {
    return (
        <div className='about'>
            <div class="container">
                <div class="row align-items-center my-5">
                    <div class="col-lg-5">
                        <img src={logo} alt="face" id="face" />
                    </div>
                    <div class="col-lg-5">
                        <h1 class="font-weight-light" id='about'>About</h1>
                        <p>
                            Hello my name is Brian. I am a 29 year old Web developer currently living in California.
                            Other than coding I like to hangout with friends & family, play golf, indulge in delicious foods, explore the metaverse and play computer/videogames.
                        </p>
                        <br />
                        <p>
                            I started learning code around February 2022 because I
                            noticed the world becoming more digital so I figured learning how to code and develope would be a good idea.
                        </p>
                        <br />
                        <p>
                            Being able to solve problems, and create websites / games / apps / etc. is really fun and intriguing to me with what is becoming possible.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;