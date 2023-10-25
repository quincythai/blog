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
        original: 'https://as1.ftcdn.net/v2/jpg/01/41/89/58/1000_F_141895888_9SdMBT0vTlC7bm5u3B06AZqRRMcWSIhR.jpg',
        thumbnail: 'https://as1.ftcdn.net/v2/jpg/01/41/89/58/1000_F_141895888_9SdMBT0vTlC7bm5u3B06AZqRRMcWSIhR.jpg',
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