import React from 'react';
import { Link } from "react-router-dom";



function Posts() {
    return (
        <div className='home'>
            <div class="container">
                <Link to="/blog/this-is-a-post-title">
                    <div class="row my-5">
                        <div>
                            <h1>My code journey so far</h1>
                            <br />
                            <p class="font-weight-light">
                                A small explanation of my code journey and what i'm focusing on this year.
                                <br/>
                                Click on this to view!
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Posts