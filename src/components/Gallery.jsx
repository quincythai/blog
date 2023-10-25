import React from 'react';
import ImageGallery from "react-image-gallery";
import "../styles/Gallery.css";

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
        original: "gilgamesh_weed_800x800.jpg",
        thumbnail: "gilgamesh_weed_800x800.jpg",
        customLink: './DiegoPage',
        // originalHeight: 1000,
        // originalWidth: 1000,
        // thumbnailHeight: '300',
        // thumbnailWidth: '300',
        },
        {
        original: "pop_art_gilgamesh.png",
        thumbnail: "pop_art_gilgamesh.png",
        customLink: "./JQPage",
        },
        {
        original: 'thanos.jpg',
        thumbnail: 'thanos.jpg',
        customLink: "./QuincyPage",
        },
        {
        original: 'https://media.glamourmagazine.co.uk/photos/61388cc92b5bbea008291859/16:9/w_2240,c_limit/iStock-545338914.jpg',
        thumbnail: 'https://media.glamourmagazine.co.uk/photos/61388cc92b5bbea008291859/16:9/w_2240,c_limit/iStock-545338914.jpg',
        customLink: "./about",
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