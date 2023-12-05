import React, { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import "../style.css";
function Gallery() {
  let galleryID = "my-test-gallery";
  const data = [
    {
      largeURL:
        "https://kampina.tigriweb.site/wp-content/uploads/2023/07/boxed-water-is-better-0boeA7NBluU-unsplash.jpg",
      thumbnailURL:
        "https://kampina.tigriweb.site/wp-content/uploads/2023/07/boxed-water-is-better-0boeA7NBluU-unsplash-230x230.jpg.webp",
      width: 412,
      height: 619,
    },
    {
      largeURL:
        "https://kampina.tigriweb.site/wp-content/uploads/2023/07/woody-kelly-8qLxn28Clko-unsplash.jpg",
      thumbnailURL:
        "https://kampina.tigriweb.site/wp-content/uploads/2023/07/woody-kelly-8qLxn28Clko-unsplash-230x230.jpg.webp",
      width: 928,
      height: 619,
    },
    {
      largeURL:
        "https://kampina.tigriweb.site/wp-content/uploads/2023/07/jorgen-hendriksen-7gYM6kBxbew-unsplash-1.jpg",
      thumbnailURL:
        "https://kampina.tigriweb.site/wp-content/uploads/2023/07/jorgen-hendriksen-7gYM6kBxbew-unsplash-1-230x230.jpg.webp",
      width: 412,
      height: 619,
    },
    {
      largeURL:
        "https://kampina.tigriweb.site/wp-content/uploads/2023/07/alfred-boivin-XoM0eYSXWMs-unsplash.jpg",
      thumbnailURL:
        "https://kampina.tigriweb.site/wp-content/uploads/2023/07/alfred-boivin-XoM0eYSXWMs-unsplash-230x230.jpg.webp",
      width: 1920,
      height: 1080,
    },
    {
      largeURL:
        "https://kampina.tigriweb.site/wp-content/uploads/2023/07/felix-rostig-UmV2wr-Vbq8-unsplash.jpg",
      thumbnailURL:
        "https://kampina.tigriweb.site/wp-content/uploads/2023/07/felix-rostig-UmV2wr-Vbq8-unsplash-230x230.jpg.webp",
      width: 1920,
      height: 1280,
    },
    {
      largeURL:
        "https://kampina.tigriweb.site/wp-content/uploads/2023/07/andrei-belascu-nQVKQAZPJ68-unsplash.jpg",
      thumbnailURL:
        "https://kampina.tigriweb.site/wp-content/uploads/2023/07/andrei-belascu-nQVKQAZPJ68-unsplash-230x230.jpg.webp",
      width: 1440,
      height: 1920,
    },
    {
      largeURL:
        "https://kampina.tigriweb.site/wp-content/uploads/2023/06/julian-bialowas-ilkTnuMunP8-unsplash.jpg",
      thumbnailURL:
        "https://kampina.tigriweb.site/wp-content/uploads/2023/06/julian-bialowas-ilkTnuMunP8-unsplash-230x230.jpg.webp",
      width: 1920,
      height: 1200,
    },
    {
      largeURL:
        "https://kampina.tigriweb.site/wp-content/uploads/2023/06/landscape-tree-nature-grass-wilderness-walking-1268294-pxhere.jpg",
      thumbnailURL:
        "https://kampina.tigriweb.site/wp-content/uploads/2023/06/landscape-tree-nature-grass-wilderness-walking-1268294-pxhere-230x230.jpg.webp",
      width: 1920,
      height: 1200,
    },
    {
      largeURL:
        "https://kampina.tigriweb.site/wp-content/uploads/2023/06/tom-pottiger-hCQGqbZmsAk-unsplash.jpg",
      thumbnailURL:
        "https://kampina.tigriweb.site/wp-content/uploads/2023/06/tom-pottiger-hCQGqbZmsAk-unsplash-230x230.jpg.webp",
      width: 1920,
      height: 1200,
    },
    {
      largeURL:
        "https://kampina.tigriweb.site/wp-content/uploads/2023/06/jessica-delp-dQIiBMcm5xM-unsplash.jpg",
      thumbnailURL:
        "https://kampina.tigriweb.site/wp-content/uploads/2023/06/jessica-delp-dQIiBMcm5xM-unsplash-230x230.jpg.webp",
      width: 1920,
      height: 1200,
    },
  ];
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + galleryID,
      children: "a",
      pswpModule: () => import("photoswipe"),
      maxWidthToAnimate: 800,
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <div className="gallery-container">
      <div className="gallery-intro">
        <h1>Discover our Journey through Gallery</h1>
        <p>
          Join us on an exciting journey as we capture the essence of outdoor
          exploration through our Instagram feed. Follow our adventures as we
          traverse stunning landscapes and immerse ourselves in the wonders of
          nature. Don’t miss out on the excitement – hit that follow button and
          embark on this adventure with us!
        </p>
      </div>
      <div className="pswp-gallery" id={galleryID}>
        {data.map((image, index) => (
          <a
            href={image.largeURL}
            data-pswp-width={image.width}
            data-pswp-height={image.height}
            key={galleryID + "-" + index}
            target="_blank"
            rel="noreferrer"
          >
            <img src={image.thumbnailURL} alt="" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
