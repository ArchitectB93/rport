import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Post() {
    let { postSlug } = useParams();

    useEffect(() => {
        // Fetch post using the postSlug
    }, [postSlug]);
    return (
        <div className='home'>
            <div class="container">
                <h1 className='mt-5'>My code journey + 2023 focus</h1>
                <br/>
                <p>
                    I have been coding for about a year now, and have learned so much in this time period. 
                    Front-end development is becoming easier by the day. 
                    <br/>
                    <br/>
                    Other than refining my react skills and such, 
                    I will be focusing on back-end development to become a full stack developer, 
                    it just makes more sense to me to understand the full app rather than just half.
                    <br/>
                    <br/>
                    Along with focusing on back-end I will create a full stack e-commerce store, 
                    which I will try and add social media and more to it to slowly become a everything app.
                    <br/>
                    Learning Typescript for JS and React is also on my list considering how beneficial it is. 
                    <br/>
                    <br/>
                    To wrap things up I will also be focusing on Python coding for Ai / Machine learning & Pinescript.
                    <br/>
                    Thank you for coming to this corner of my portfolio and taking the time to read this.
                    <br/>
                    I look forward to working with you. 
                </p>
            </div>
        </div>
    );
}

export default Post;