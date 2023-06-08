import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";

const Banner = () => {
    return (
        <section className="banner">
            <div className="container">
                <Swiper
                    loop={true}
                    autoplay={
                        {delay: 3000}
                    }
                    speed={1500}
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="banner__info">
                            <h2 className="banner__info-title">
                                loft
                                <br/>
                                мебель
                            </h2>

                            <p className="banner__info-text">
                                Современная и удобная мебель в Анапе
                            </p>

                            <button className="banner__info-btn">СМОТРЕТЬ КАТАЛОГ</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="banner__info">
                            <h2 className="banner__info-title">
                                loft
                                <br/>
                                мебель
                            </h2>

                            <p className="banner__info-text">
                                Современная и удобная мебель в Анапе
                            </p>

                            <button className="banner__info-btn">СМОТРЕТЬ КАТАЛОГ</button>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Banner;