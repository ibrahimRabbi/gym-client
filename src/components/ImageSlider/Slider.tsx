import ImageGallery from "react-image-gallery";

const Slider = ({ images }: any) => {
    const img = [images, images, images, images]
    const slider:object[] = []

    img.forEach(v => {
        slider.push({ original: v, thumbnail: v })
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