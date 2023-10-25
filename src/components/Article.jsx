import React from 'react';
import '../styles/Article.css';
import the_method from '/the_method.jpg';

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
                    </div>
                </div>
            </div>
        </>
    );
}

export default Article;