import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Slider = ({ images }: any) => {
    
    const img = [images, images, images, images]
    const slider:object[] = []

    img.forEach(v => {
       return slider.push({ original: v, thumbnail: v })
    })

    return (
        <div>
            <ImageGallery
                showFullscreenButton={false}
                showPlayButton={false}
                thumbnailPosition="bottom"
                useBrowserFullscreen={false}
                showNav={false}
                items={slider}
            />
        </div>
    );
};

export default Slider;