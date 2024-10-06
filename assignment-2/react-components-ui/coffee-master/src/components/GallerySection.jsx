const GallerySection = () => {
    const images = [
        'img/g1.jpg',
        'img/g2.jpg',
        'img/g3.jpg',
        'img/g4.jpg',
        'img/g5.jpg',
    ];

    return (
        <section className="gallery-area section-gap" id="gallery">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="menu-content pb-60 col-lg-10">
                        <div className="title text-center">
                            <h1 className="mb-10">What kind of Coffee we serve for you</h1>
                            <p>Who are in extremely love with eco friendly system.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        {images.slice(0, 2).map((image, index) => (
                            <a href={image} className="img-pop-home" key={index}>
                                <img className="img-fluid" src={image} alt="" />
                            </a>
                        ))}
                    </div>
                    <div className="col-lg-8">
                        <a href={images[2]} className="img-pop-home">
                            <img className="img-fluid" src={images[2]} alt="" />
                        </a>
                        <div className="row">
                            {images.slice(3).map((image, index) => (
                                <div className="col-lg-6" key={index}>
                                    <a href={image} className="img-pop-home">
                                        <img className="img-fluid" src={image} alt="" />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
