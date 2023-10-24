import React from 'react';
import ImageGallery from "react-image-gallery";
import "./css-reset.css";

function Gallery () {
    const handleClick = (event, customLink) => {
        console.debug(event)
        // const link = event.target.getAttribute('data-link')
        console.debug(customLink)
        window.open(customLink, '_blank')
        // if (Link) {
        //     console.debug(Link)
        // }
      }
    const images = [
        {
        original: 'https://picsum.photos/id/1024/1000/600/',
        thumbnail: 'https://picsum.photos/id/1024/250/150/',
        customLink: "https://c.xkcd.com/random/comic/",
        },
        {
        original: 'https://picsum.photos/id/1025/1000/600/',
        thumbnail: 'https://picsum.photos/id/1025/250/150/',
        customLink: "https://c.xkcd.com/random/comic/",
        },
        {
        original: 'https://picsum.photos/id/1026/1000/600/',
        thumbnail: 'https://picsum.photos/id/1026/250/150/',
        customLink: "https://c.xkcd.com/random/comic/",
        },
        {
        original: 'https://picsum.photos/id/1027/1000/600/',
        thumbnail: 'https://picsum.photos/id/1027/250/150/',
        customLink: "https://c.xkcd.com/random/comic/",
        },
        {
        original: 'https://picsum.photos/id/1029/1000/600/',
        thumbnail: 'https://picsum.photos/id/1029/250/150/',
        customLink: "https://c.xkcd.com/random/comic/",
        },
    ]
    console.log("Gallery loaded")
        return(
        <div>
        <ImageGallery
            items={images.map((image) => ({
                ...image,
                renderItem: (item) => (
                    <img
                    src={item.original}
                    onClick={(event) => handleClick(event, item.customLink)}
                    />
                ),
            }))}
        />
        </div>
        );
}
export default Gallery