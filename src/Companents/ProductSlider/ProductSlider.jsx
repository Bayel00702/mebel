import React, {useState} from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";

const ProductSlider = ({product}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className="product__slider">
            <Swiper
                spaceBetween={10}
                navigation={false}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Thumbs]}
                className="mySwiper2"
            >
                <SwiperSlide>
                    <img src={`${product.images[0]}`} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`${product.images[1]}`} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`${product.images[2]}`}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`${product.images[3]}`} />
                </SwiperSlide>

            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={30}
                navigation={true}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={`${product.images[0]}`} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`${product.images[1]}`} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`${product.images[2]}`} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`${product.images[3]}`} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default ProductSlider;