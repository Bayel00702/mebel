import React from 'react';

const ProductDesc = () => {
    return (
        <div className="product__desc">
            <div className="product__desc-top">
                <h2 className="product__desc-top__title">Характеристики</h2>
                <h2 className="product__desc-top__title">Отзывы</h2>
                <h2 className="product__desc-top__title">Доставка и оплата</h2>
            </div>

            <div className="product__desc-bottom">
                <ul className="product__desc-bottom__list">
                    <li className="product__desc-bottom__item">
                        Размер

                        <span className="product__desc-bottom__text"> 218 × 95 × 90 (Дл. × Шир. × Выс.)</span>
                    </li>
                    <li className="product__desc-bottom__item">
                        Спальное место

                        <span className="product__desc-bottom__text">195 × 144 × 44 (Дл. × Шир. × Выс.)</span>
                    </li>
                    <li className="product__desc-bottom__item">
                        Посадочное место

                        <span className="product__desc-bottom__text">50 × 44 (Глуб. × Выс.)</span>
                    </li>
                    <li className="product__desc-bottom__item">
                        Каркас

                        <span className="product__desc-bottom__text">массив, фанера, ДВП, пружинная змейка</span>
                    </li>
                    <li className="product__desc-bottom__item">
                        Механизм

                        <span className="product__desc-bottom__text">пантограф</span>
                    </li>
                    <li className="product__desc-bottom__item">
                        Материал ножек

                        <span className="product__desc-bottom__text">массив</span>
                    </li>
                    <li className="product__desc-bottom__item">
                        Наполнение подушек

                        <span className="product__desc-bottom__text">крошка ППУ, холлофайбер</span>
                    </li>
                </ul>
                <ul className="product__desc-bottom__list">
                    <li className="product__desc-bottom__item">
                        Бельевой ящик

                        <span className="product__desc-bottom__text">есть</span>
                    </li>
                    <li className="product__desc-bottom__item">
                        Зарядное устройство USB

                        <span className="product__desc-bottom__text">нет</span>
                    </li>
                    <li className="product__desc-bottom__item">
                        Съемный чехол

                        <span className="product__desc-bottom__text">нет</span>
                    </li>
                    <li className="product__desc-bottom__item">
                        Декоративные подушки

                        <span className="product__desc-bottom__text">есть</span>
                    </li>
                    <li className="product__desc-bottom__item">
                        Вариант доставки

                        <span className="product__desc-bottom__text">в разобранном виде</span>
                    </li>
                    <li className="product__desc-bottom__item">
                        Производитель

                        <span className="product__desc-bottom__text">Россия</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ProductDesc;