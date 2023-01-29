import React from 'react'
import logo from "./logo1.png"
import "./home.css" 

console.log(logo);

function Home() {
    return (
        <div className='home'>
            <div class='container'>
                <div class="row my-5">
                    <div class="col-lg-5">
                        <img src={logo} alt="Logo" id='logo'/>
                    </div>
                    <div class="col-lg-5 p-3 mb-2 bg-dark" id='card'>
                        <h1 class="font-weight-light">Home page</h1>
                        <br />
                        <p class=""> 
                        This is a multi page react app that includes:
                        <ul>
                            <li>About section</li>
                            <li>Projects section</li>
                            <li>Blog section</li>
                            <li>Navbar & footer</li>
                        </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;