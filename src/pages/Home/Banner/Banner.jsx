import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import {Link} from 'react-router-dom'


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
                                <Link to='/catalog' className="banner__info-btn">СМОТРЕТЬ КАТАЛОГ</Link>
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
                            <Link to={'/catalog'}>
                                <button className="banner__info-btn">СМОТРЕТЬ КАТАЛОГ</button>
                            </Link>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Banner;