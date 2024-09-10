import * as React from "react";
import "./index.css";

import Carousel from 'react-bootstrap/Carousel';

function BannerSlide() {
    return (
        <Carousel className="custom-carousel">
            <Carousel.Item>
                <img
                    className="img-slide-banner"
                    src="https://png.pngtree.com/background/20230619/original/pngtree-lebanese-e-commerce-visualized-in-3d-for-online-platforms-and-social-picture-image_3761208.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="img-slide-banner"
                    src="https://newsismybusiness.com/wp-content/uploads/2021/07/e-commerce.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="img-slide-banner"
                    src="https://img.pikbest.com/backgrounds/20220119/e-commerce-carnival-shopping-colorful-gradient-e-commerce-event-poster-background_6243918.jpg!bw700"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default BannerSlide;