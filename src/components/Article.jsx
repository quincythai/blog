import React from 'react';
import '../styles/Article.css';
import the_method from '/the_method.jpg';
import gif from '/dio-skull-broken.gif';
import peter from '/peter.jpg';

const Article = () => {
    return (
        <>
            <div className="container">
                <header>THE METHOD.</header>
                <div className="author-article-container">
                    <div className="author-info">
                        <img src={the_method} alt="" />
                        <p>Written by: Tincy Qhai Himself.</p>
                    </div>
                    <div className="article">
                        <p>Alright bruh... listen up... YOU. WANT. TO. KNOW. THE. METHOD. Look no further because what I'm about to tell you is the long kept secret of the <em>Epic of Gilgamesh</em>'s method.</p>
                        <p>First of all, you gotta read the Epic of Gilgamesh three times. Once for each word in "Epic of Gilgamesh". Then, you have to contemplate deeply about Gilgamesh's hardships... After having spent 7000 hours meditating under the lemon tree in my decrepit-ahh home, I achieved nirvana and what did I see...? BRUH!!! It was Gilgamesh HIMSELF!</p>
                        <p>I went up to that fool and was like, who tf is you?!? And dam I shouldn't have said all that stuff cause he slapped me clean across the face with Ganondorf's sword and dam near split my skull into two...</p>
                        <p style={{color: 'red', textAlign: 'center'}}>REAL FOOTAGE OF MY SKULL:</p>
                        <img src={gif} alt="GIF" />
                        <p style={{color: 'red', textAlign: 'center'}}>GOODNESS...</p>
                        <p>Anyways, I had to abruptly apologize and clean off his bumberhootens with a scrappy paper towel--and then he proceeded with a spiel called: <span style={{color: 'green', fontStyle: 'italic'}}>THE METHOD</span></p>
                        <p>What he said was that I need to simply...</p>
                        <img src={peter} alt="MOOD." />
                        <p>That was literally it.</p>
                        <p>and my brain literally EXPLODED...</p>

                        <p>I went to Atlanta and now I'm on a mission to change the world with slop and gruel. Remember to like subscribe share and retweet!</p>

                        <p>-Tincy Qhai. (GILGAMESH FAN)</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Article;